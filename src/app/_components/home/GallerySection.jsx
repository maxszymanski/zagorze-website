import People from '@/assets/people-large.webp'
import Image from 'next/image'
import Link from 'next/link'

function GallerySection() {
	return (
		<section className="bg-[#F7F6F6] py-12 lg:py-16">
			<div className="max-w-7xl px-4 mx-auto">
				<h2 className="text-center font-bold text-gray-800 text-3xl mb-3 lg:mb-5 lg:text-5xl">
					Galeria zdjęć <span className="text-yellow-500">sołectwa</span>
				</h2>
				<p className="text-center text-gray-700 ">Wybrane zdjęcia z wydarzeń i działań w naszym sołectwie</p>

				<div className="flex flex-wrap gap-x-4 gap-y-6 items-center justify-evenly mt-10 lg:mt-16 ">
					{Array.from({ length: 8 }).map((_, idx) => (
						<Link
							href="/"
							rel="noopener noreferrer"
							target="_blank"
							className="rounded-xl w-[300px] h-[300px] relative  after:contents-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:opacity-0 hover:after:opacity-100 hover:after:bg-slate-200/30 after:duration-300 after:transition-colors "
							key={idx}>
							<Image
								src={People}
								alt="Zdjecię z wydarzenia"
								className=" object-cover aspect-square rounded-xl"
								width={300}
								height={300}
							/>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default GallerySection
