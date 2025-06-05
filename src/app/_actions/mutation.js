'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { createClient } from '../utils/supabase/server'

export async function createPost(data) {
	const parsedData = JSON.parse(data.get('data'))
	const picture = data.get('picture')

	const result = { success: true, data: { ...parsedData, picture } }

	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}
	const fileName = `picture-${Date.now()}`
	let pictureLink = null

	if (result.data && result.data.picture) {
		const { error: storageError } = await supabase.storage.from('images').upload(fileName, result.data.picture, {
			cacheControl: '3600',
			upsert: false,
		})

		if (storageError) throw new Error(storageError.message)

		pictureLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${fileName}`
	}
	const { error } = await supabase.from('posts').insert({
		...parsedData,
		image: pictureLink,
	})

	if (error) {
		return { error: `Niepoprawne dane w formularzu. ${error.message} ` }
	}

	revalidatePath('/')
	revalidatePath('/aktualnosci')
	revalidatePath('/panel/posty')
}

export async function updatePost(data, postId) {
	const parsedData = JSON.parse(data.get('data'))
	const picture = data.get('picture')

	const result = { success: true, data: { ...parsedData, picture } }

	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}
	const fileName = `picture-${Date.now()}`
	let pictureLink = null

	if (typeof result.data.picture === 'string') {
		pictureLink = result.data.picture
	} else {
		const { error: storageError } = await supabase.storage.from('images').upload(fileName, result.data.picture, {
			cacheControl: '3600',
			upsert: false,
		})

		if (storageError) throw new Error(storageError.message)

		pictureLink = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${fileName}`
	}

	if (!pictureLink) {
		return { error: 'Nie można przesłać obrazu' }
	}

	const { error } = await supabase
		.from('posts')
		.update({
			...parsedData,
			image: pictureLink,
		})
		.eq('id', postId)

	if (error) {
		return { error: `Niepoprawne dane w formularzu. ${error.message} ` }
	}

	revalidatePath('/')
	revalidatePath('/aktualnosci')
	revalidatePath(`/aktualnosci/${result.data.slug}`)
	revalidatePath('/panel/posty')
}

export async function deletePost(postId, slug) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return null

	if (!authData.user) {
		return { error: 'Użytkownik nie ma uprawnień do usunięcia tego postu' }
	}

	const { error } = await supabase.from('posts').delete().eq('id', postId)

	if (error) {
		if (error) {
			return { error: 'Wystąpił problem przy usuwaniu postu' }
		}
	}
	revalidatePath('/')
	revalidatePath('/aktualnosci')
	revalidatePath(`/aktualnosci/${slug}`)
	revalidatePath('/panel/posty')
}

export async function createShort(data) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return { error: 'Błąd autoryzacji' }

	if (!authData.user) {
		return { error: 'Nie można znaleźć użytkownika' }
	}

	const { error } = await supabase.from('shorts').insert([
		{
			...data,
		},
	])

	if (error) {
		return { error: `Niepoprawne dane w formularzu. ${error.message} ` }
	}

	revalidateTag('shorts')
	revalidatePath('panel/na-skroty')
	return { success: true }
}

export async function deleteShort(shortId) {
	const supabase = await createClient()

	const { data: authData, error: authError } = await supabase.auth.getUser()
	if (authError) return { error: 'Błąd autoryzacji' }

	if (!authData.user) {
		return { error: 'Użytkownik nie ma uprawnień do usunięcia tego skrótu' }
	}

	const { error } = await supabase.from('shorts').delete().eq('id', shortId)

	if (error) {
		if (error) {
			return { error: 'Wystąpił problem przy usuwaniu skrótu' }
		}
	}
	revalidateTag('shorts')

	revalidatePath('panel/na-skroty')
	return { success: true }
}
