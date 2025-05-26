import Actual from '../ui/Actual'
import ActualInfo from '../ui/ActualInfo'

function StartSection() {
	return (
		<section>
			<div className="px-4 max-w-7xl mx-auto w-full bg-[#F7F7F7]">
				<Actual />
				<div className="flex flex-col items-center justify-center gap-4 py-10 ">
					<ActualInfo />
				</div>
			</div>
		</section>
	)
}

export default StartSection
