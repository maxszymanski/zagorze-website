import { supabase } from '../utils/supabase/server-public'

export async function getPosts() {
	const { data, error } = await supabase
		.from('posts')
		.select('id, created_at, title, description, slug, image')
		.order('created_at', { ascending: false })
		.limit(4)

	if (error) {
		return []
	}
	return data
}
