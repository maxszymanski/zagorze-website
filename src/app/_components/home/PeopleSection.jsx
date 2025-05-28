import Image from 'next/image'
import People from '@/assets/people.webp'
import PeopleLarge from '@/assets/people-large.webp'
import Link from 'next/link'

function PeopleSection() {
	return (
		<section>
			<div className="max-w-7xl px-2 mx-auto">
				<div className="w-full pt-16 pb-4 lg:py-20 flex flex-col xl:py-24 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
					<div className="w-full max-w-[400px] mx-auto relative z-10 md:max-w-xl">
						<Image
							src={PeopleLarge}
							height={522}
							width={400}
							alt="widok pagórków z lotu ptaka"
							className="rounded-xl md:hidden"
						/>
						<Image
							src={PeopleLarge}
							height={650}
							width={570}
							alt="widok pagórków z lotu ptaka"
							className="rounded-xl hidden md:block"
						/>
						<div className="-mt-10 bg-white shadow-lg shadow-black/20 text-gray-800 rounded-md text-center relative z-20 mx-4 px-4 py-8 text-medium md:px-12 md:mx-12 md:-mt-20 xl:py-12">
							<p className="text-4xl font-bold mb-4">890</p>
							<p className="text-gray-600 text-lg mb-7">Ilość mieszkańców Sołectwa</p>
							<p className="text-3xl font-bold mb-4">12000 m2</p>
							<p className="text-gray-600 text-lg mb-7">Powierzchnia Sołectwa</p>
							<p className="text-[15px] leading-[170%] text-gray-500 md:text-base md:leading-[170%] xl:text-lg xl:leading-[170%]">
								Zagórze to pierwsza miejscowość na północ od Gryfina, rozciągnięta wzdłuż drogi krajowej
								nr 31 i zbocza pradoliny Odry. <br /> Powstała w 1748 roku jako osada przy młynie.
							</p>
						</div>
					</div>

					<div className="px-2 py-12 text-center max-w-xl mx-auto lg:py-0">
						<p className="text-lg font-bold text-yellow-500 mb-4 lg:text-xl">Więcej nas</p>
						<h2 className="text-xl font-bold text-gray-800 mb-6 leading-[160%]">
							Dołącz do naszej społeczności w <br />
							<span className="text-yellow-500 text-3xl text-bold lg:text-5xl lg:leading-[150%] xl:text-6xl xl:leading-[150%]">
								Social Mediach
							</span>
						</h2>
						<p className="text-gray-700 text-medium xl:text-lg">
							Jeśli chcesz nas poznać w pigułce serdecznie polecamy dołączenie do naszej społeczności na
							portalu Facebook
						</p>
						<div className="w-full flex justify-center mt-8">
							<Link
								href="https://facebook.pl"
								rel="noopener noreferer"
								target="_blank"
								className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-10 py-1.5 rounded-2xl  inline-block xl:text-xl">
								Dołącz
							</Link>
						</div>
						<div className="w-full max-w-[400px] md:max-w-xl mx-auto mt-8 lg:mt-16">
							<Image
								src={PeopleLarge}
								height={522}
								width={400}
								alt="widok pagórków z lotu ptaka"
								className="rounded-xl block md:hidden"
							/>
							<Image
								src={PeopleLarge}
								height={650}
								width={570}
								alt="widok pagórków z lotu ptaka"
								className="rounded-xl hidden md:block"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PeopleSection
