'use server'

import { revalidatePath } from 'next/cache'
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
