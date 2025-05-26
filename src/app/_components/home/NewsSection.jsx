import NewsCard from '../ui/NewsCard'

function NewsSection() {
	return (
		<section className="bg-white py-12 lg:py-16">
			<div className="max-w-7xl px-4 mx-auto">
				<p className="text-lg font-bold text-yellow-500 mb-4 lg:text-xl text-center lg:mb-5">
					Ostatnie nowości
				</p>
				<h2 className="text-center font-bold text-gray-800 text-3xl mb-3 lg:mb-5 lg:text-5xl leading-[130%] lg:leading-[130%]">
					To co się dzieje <span className="hidden lg:inline-block">-</span>{' '}
					<span className="text-yellow-500">Aktualności</span>
				</h2>
				<p className="text-center text-gray-700 ">Wszystkie aktualności z sołectwa w jednym miejscu</p>

				<div className="pt-12 w-full flex flex-col gap-8 lg:pt-20 lg:gap-12">
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>
			</div>
		</section>
	)
}

export default NewsSection
