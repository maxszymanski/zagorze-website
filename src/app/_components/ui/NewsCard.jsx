import Image from 'next/image'
import Link from 'next/link'

import { blurImage } from '@/app/utils/blurImage'

function NewsCard({ large = false, post }) {
	return (
		<Link
			href={`/aktualnosci/${post.slug}`}
			className={`bg-white shadow-lg shadow-gray-300  pb-4  w-full border border-gray-200 rounded-xl hover:shadow-gray-500  transition-shadow duration-300 ease-in-out flex flex-col    mx-auto  ${large ? 'max-w-[400px] md:min-w-[350px] lg:max-w-[570px]' : 'max-w-[400px] lg:max-w-full lg:flex-row lg:gap-4 lg:pb-0 lg:items-stretch xl:gap-12'}`}>
			<div className={`w-full  mx-auto relative z-10`}>
				<Image
					src={post.image}
					height={522}
					width={400}
					alt="Zdjęcie artykułu"
					className="rounded-t-xl lg:hidden"
					blurDataURL={blurImage}
					placeholder="blur"
				/>
				<Image
					src={post.image}
					height={230}
					width={570}
					alt="zdjęcie artykułu"
					className="rounded-xl hidden lg:block lg:h-full"
					blurDataURL={blurImage}
					placeholder="blur"
				/>
			</div>
			<div className="w-full py-4 px-4 lg:pb-7 flex flex-col justify-between ">
				<h3 className="text-xl leading-[150%] font-bold text-gray-800 lg:text-2xl lg:leading-[150%]">
					{post.title}
				</h3>
				<p className="text-gray-600 text-sm mt-4 leading-[160%] overflow-ellipsis whitespace-normal line-clamp-4 lg:max-w-[85%] lg:text-base flex-1">
					{post.description}
				</p>
				<div className="w-full pl-2 pt-6 mt-auto">
					<p className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-10 py-1.5 rounded-2xl  inline-block ">
						Więcej
					</p>
				</div>
			</div>
		</Link>
	)
}

export default NewsCard
