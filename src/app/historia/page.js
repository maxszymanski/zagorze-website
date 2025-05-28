import PagesHeader from '../_components/ui/PagesHeader'

function page() {
	return (
		<>
			<PagesHeader titleOne="Historia" titleTwo="sołectwa" />
			<main>
				<section className="bg-[#F7F6F6] py-12 lg:py-16 xl:py-20">
					<div className="max-w-7xl px-4 mx-auto">
						<p className="text-xl font-semibold text-gray-800 text-center">
							{' '}
							Miejsce na historię <br /> Przygotuj jakis artykuł o historii sołectwa{' '}
						</p>
					</div>
				</section>
			</main>
		</>
	)
}

export default page
