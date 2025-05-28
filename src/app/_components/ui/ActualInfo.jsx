import Image from 'next/image'

function ActualInfo({ src, width = 64, height = 60, info }) {
	return (
		<div className="w-full flex flex-col max-w-[400px] mx-auto lg:max-w-[370px]">
			<div className="flex items-center justify-between gap-5 pr-12">
				<div className="h-[2px] w-full max-w-[60%] rounded-3xl bg-yellow-400 -mb-6"></div>
				<Image alt="ikona" src={src} width={width} height={height} />
			</div>
			<p className="text-xl text-gray-900 font-semibold lg:text-base lg:max-w-[200px] lg:font-bold ">{info}</p>
		</div>
	)
}

export default ActualInfo
