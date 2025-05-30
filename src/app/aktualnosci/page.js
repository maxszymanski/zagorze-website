import NewsCard from '../_components/ui/NewsCard'
import { getPosts } from '../_lib/data-service'

export const revalidate = 3600

async function page() {
	const posts = await getPosts()

	return (
		<div className=" w-full flex flex-col gap-8 ">
			{posts.map(post => (
				<NewsCard large key={post.id} post={post} />
			))}
		</div>
	)
}

export default page
