import DeletePostModal from '@/app/_components/ui/DeletePostModal'
import EditPostForm from '@/app/_components/ui/EditPostForm'
import { getPostById } from '@/app/_lib/data-service'

async function page({ params }) {
	const { postId } = await params
	const post = await getPostById(postId)

	return (
		<>
			<DeletePostModal postId={post.id} slug={post.slug} />
			<EditPostForm post={post} />
		</>
	)
}

export default page
