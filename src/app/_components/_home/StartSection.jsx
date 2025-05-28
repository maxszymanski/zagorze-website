import Actual from '../ui/Actual'
import ActualInfo from '../ui/ActualInfo'
import Together from '@/assets/together.svg'
import People from '@/assets/people.svg'
import Magazine from '@/assets/magazine.svg'

function StartSection() {
	return (
		<section className="bg-[#F7F7F7]">
			<div className="px-4 max-w-7xl mx-auto w-full flex flex-col lg:flex-row lg:gap-4 xl:gap-7">
				<Actual />
				<div className="flex flex-wrap  items-center justify-center gap-y-12 py-10 gap-x-6 lg:flex-nowrap lg:gap-4 lg:justify-between">
					<ActualInfo info="Strona stworzona z mieszkańcami" src={Together} />
					<ActualInfo info="Strona tworzona dla mieszkańców" src={People} />
					<ActualInfo info="Wszystkie informację w jednym miejscu" src={Magazine} />
				</div>
			</div>
		</section>
	)
}

export default StartSection
