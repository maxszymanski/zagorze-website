import Image from 'next/image'
import Footer from '../_components/home/Footer'
import PagesHeader from '../_components/ui/PagesHeader'
import Link from 'next/link'
import { blurImage } from '../utils/blurImage'
import { getImages } from '../_actions/mutation'

export const revalidate = 3600 * 24

async function page() {
	const images = await getImages()

	return (
		<>
			<PagesHeader titleOne="Galeria" titleTwo="sołectwa" />
			<main>
				<section className="bg-[#F7F6F6] py-12 lg:py-16 xl:py-20">
					<div className="max-w-7xl px-4 mx-auto">
						<div className="flex flex-wrap gap-x-4 gap-y-7 items-center justify-evenly mt-10 lg:mt-16  ">
							{images.map((image, idx) => {
								return (
									<Link
										href={image}
										rel="noopener noreferrer"
										target="_blank"
										className="rounded-xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] relative  after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:opacity-0 hover:after:opacity-100 hover:after:bg-slate-200/30 after:duration-300 after:transition-colors "
										key={idx}>
										<Image
											src={image}
											alt="Zdjecię z wydarzenia"
											className=" object-cover aspect-square rounded-xl xl:hidden"
											width={300}
											height={300}
											placeholder="blur"
											blurDataURL={blurImage}
										/>
										<Image
											src={image}
											alt="Zdjecię z wydarzenia"
											className=" object-cover aspect-square rounded-xl hidden xl:block"
											width={400}
											height={400}
											placeholder="blur"
											blurDataURL={blurImage}
										/>
									</Link>
								)
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default page
