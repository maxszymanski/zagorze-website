import { sanitizeHTML } from '@/app/utils/sanitize'

function PostContent({ content }) {
	const safeHTML = sanitizeHTML(content)

	return (
		<div
			className=" text-sm  text-dark2/90 w-full pt-6  xl:text-base blog"
			dangerouslySetInnerHTML={{ __html: safeHTML }}
		/>
	)
}

export default PostContent
