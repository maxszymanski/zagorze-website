import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import HeaderImageLarge from '@/assets/header-large.webp'

function PagesHeader({ titleOne, titleTwo, possition }) {
	return (
		<header className="w-full relative z-10 ">
			<MobileNav />
			<DesktopNav />
			<div
				className={`w-full h-[280px] md:h-[400px] relative z-10 bg-cover ${possition ? possition : 'bg-center'}`}
				style={{ backgroundImage: `url(${HeaderImageLarge.src})` }}>
				<div className="absolute top-0 left-0 w-full h-full bg-black/20 z-20"></div>
				<div className="px-4 max-w-7xl mx-auto w-full flex flex-col justify-evenly items-center h-full relative z-30">
					<div className="w-full max-w-[730px] mx-auto">
						<h1 className="leading-[140%] text-center text-white font-bold text-5xl lg:text-[80px]">
							{titleOne} <span className="text-yellow-400">{titleTwo}</span>
						</h1>
					</div>
				</div>
			</div>
		</header>
	)
}

export default PagesHeader
