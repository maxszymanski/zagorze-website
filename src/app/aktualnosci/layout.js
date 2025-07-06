import Footer from '../_components/home/Footer'
import MoreNews from '../_components/ui/MoreNews'
import Navs from '../_components/ui/Navs'
import { getLatestPosts, getShorts } from '../_lib/data-service'

export const revalidate = 3600

async function layout({ children }) {
	const [latestPosts, shorts] = await Promise.all([getLatestPosts(), getShorts()])

	return (
		<>
			<header className="w-full relative z-10">
				<Navs />
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
					<div className="max-w-7xl px-4 mx-auto md:flex pt-12 lg:pt-20 gap-7 w-full relative lg:gap-10  xl:px-8 ">
						{children}

						<MoreNews posts={latestPosts} shorts={shorts} />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default layout
