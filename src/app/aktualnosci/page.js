import NewsCard from '../_components/ui/NewsCard'
import ShowedPosts from '../_components/ui/ShowedPosts'
import { getPosts } from '../_lib/data-service'

export const revalidate = 3600

async function page() {
	const posts = await getPosts()

	return <ShowedPosts posts={posts} />
}

export default page
