import { getPostBySlug, getPosts } from '@/app/_lib/data-service'
import { blurImage } from '@/app/utils/blurImage'
import { formattedDate } from '@/app/utils/helpers'
import Image from 'next/image'
import { FaRegCalendarAlt } from 'react-icons/fa'

export async function generateStaticParams() {
	const posts = await getPosts()

	const slugs = posts.map(post => ({ slug: post.slug }))

	return slugs
}

async function page({ params }) {
	const { slug } = await params
	const post = await getPostBySlug(slug)

	const format = formattedDate(post.created_at)

	return (
		<div className=" w-full">
			<div className="'max-w-[400px] md:min-w-[350px] xl:max-w-[700px] flex  flex-col items-center mx-auto w-full xl:mx-0">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-10 text-center  lg:leading-[150%] leading-[170%] xl:text-5xl xl:leading-[150%]">
					{post.title}
				</h1>
				<div className="relative h-[250px] w-full max-w-[400px] md:min-w-[350px] lg:max-w-[570px] lg:h-[400px] xl:max-w-[700px] overflow-hidden">
					<Image
						src={post.image}
						alt={`Zdjęcie do wpisu ${post.title}`}
						fill
						className="rounded-lg object-cover"
						quality={70}
						placeholder="blur"
						blurDataURL={blurImage}
					/>
				</div>
				<div className="w-full mt-4">
					<p className="text-sm text-gray-700 items-center inline-flex font-semibold  text-left mb-6">
						<FaRegCalendarAlt className="mr-2 size-4 text-yellow-600 mb-0.5" /> {format}
					</p>
					<p className="text-gray-800 leading-[170%] text-base md:text-lg font-medium  mt-2">
						{post.content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default page
