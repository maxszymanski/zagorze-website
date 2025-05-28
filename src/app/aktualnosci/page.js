import DesktopNav from '../_components/ui/DesktopNav'
import MobileNav from '../_components/ui/MobileNav'
import MoreNews from '../_components/ui/MoreNews'
import NewsCard from '../_components/ui/NewsCard'

function page() {
	return (
		<>
			<header className="w-full relative z-10">
				<MobileNav />
				<DesktopNav />
			</header>
			<main>
				<section className="bg-[#F7F6F6] py-12 lg:py-16 xl:py-20">
					<p className="text-lg font-bold text-yellow-500 mb-4 lg:text-xl text-center lg:mb-5">
						Ostatnie nowości
					</p>
					<h1 className="text-center font-bold text-gray-800 text-3xl mb-3 lg:mb-5 lg:text-5xl leading-[130%] lg:leading-[130%]">
						To co się dzieje <span className="hidden lg:inline-block">-</span>{' '}
						<span className="text-yellow-500">Aktualności</span>
					</h1>
					<div className="max-w-7xl px-4 mx-auto md:flex pt-12 lg:pt-20 gap-7 w-full relative">
						<div className=" w-full flex flex-col gap-8 lg:gap-12">
							<NewsCard large />
							<NewsCard large />
							<NewsCard large />
							<NewsCard large />
						</div>

						<MoreNews />
					</div>
				</section>
			</main>
		</>
	)
}

export default page
