import { supabase } from '../utils/supabase/server-public'

export async function getPosts() {
	const { data, error } = await supabase
		.from('posts')
		.select('id, created_at, title, description, slug, image')
		.order('created_at', { ascending: false })

	if (error) {
		return []
	}
	return data
}
export async function getLatestPosts() {
	const { data, error } = await supabase
		.from('posts')
		.select('id, title, slug')
		.order('created_at', { ascending: false })
		.limit(5)

	if (error) {
		return []
	}
	return data
}
export async function getPostBySlug(slug) {
	const { data, error } = await supabase.from('posts').select('*').eq('slug', slug).single()

	if (error) {
		throw new Error('Post nie został znaleziony')
	}
	return data
}
export async function getPostById(id) {
	const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()

	if (error) {
		throw new Error('Post nie został znaleziony')
	}
	return data
}

export async function getShorts() {
	const { data, error } = await supabase.from('shorts').select('*').order('id', { ascending: true })

	if (error) {
		return []
	}
	return data
}
