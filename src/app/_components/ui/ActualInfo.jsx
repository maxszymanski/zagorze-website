import Image from 'next/image'
import Together from '@/assets/together.svg'

function ActualInfo() {
	return (
		<div className="w-full flex flex-col">
			<div className="flex items-center justify-between gap-5 pr-12">
				<div className="h-[2px] w-full max-w-[60%] rounded-3xl bg-yellow-400"></div>
				<Image alt="icon" src={Together} width={64} height={60} />
			</div>
			<p className="text-xl text-gray-900 font-semibold">Strona stworzona z mieszkańcami</p>
		</div>
	)
}

export default ActualInfo
