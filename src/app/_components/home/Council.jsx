import CouncilMember from '../ui/CouncilMember'

function Council() {
	return (
		<section className="py-12 lg:py-16 bg-[#F7F6F6] xl:py-20">
			<div className="max-w-7xl px-4 mx-auto">
				<p className="text-lg font-bold text-yellow-500 mb-4 lg:text-xl text-center lg:mb-5">Rada Sołectwa</p>
				<h2 className="text-center font-bold text-gray-800 text-3xl mb-3 lg:mb-5 lg:text-5xl leading-[130%] lg:leading-[130%]">
					Osoby Rady <span className="hidden lg:inline-block">-</span>{' '}
					<span className="text-yellow-500">sołectwa</span>
				</h2>
				<p className="text-center text-gray-700 ">
					Aktualny skład Rady Sołeckiej Sołectwa Zagórze (kadencja 2024-2029)
				</p>
				<div className="flex gap-7 justify-evenly flex-wrap pt-12 gap-y-12 lg:pt-16 xl:pt-20">
					<CouncilMember name="Ryszard Kielar-Ostrowski" role="Sołtys" />
					<CouncilMember name="Jan Kowalski" role="Radny sołectwa" />
					<CouncilMember name="Anna Nowak" role="Radna sołectwa" gender="woman" />
					<CouncilMember name="Anna Nowak" role="Radna sołectwa" gender="woman" />
					<CouncilMember name="Jan Kowalski" role="Radny sołectwa" />
					<CouncilMember name="Jan Kowalski" role="Radny sołectwa" />
				</div>
			</div>
		</section>
	)
}

export default Council
