import HeaderImage from '@/assets/zag1.webp'
import ButtonLink from '../ui/ButtonLink'
import { LuHistory, LuNewspaper } from 'react-icons/lu'
import ButtonVideo from '../ui/ButtonVideo'
import Navs from '../ui/Navs'

function Header() {
	return (
		<header className=" w-full relative z-10">
			<Navs />
			<div
				className="w-full h-[900px] bg-top bg-cover relative"
				style={{ backgroundImage: `url(${HeaderImage.src})` }}>
				<div className="absolute w-full h-full top-0 left-0 bg-black/35 z-20"></div>
				<div className="px-4 max-w-7xl mx-auto w-full flex flex-col justify-evenly items-center h-full lg:flex-row relative z-30">
					<div className="w-full max-w-[730px] mx-auto">
						<h1 className="leading-[140%] text-center text-white font-bold text-5xl lg:text-[80px]">
							<span>Zagórze</span> <span className="hidden sm:inline-block">-</span> oficjalna strona
							<span className="text-yellow-400 "> sołectwa</span>
						</h1>
						<p className="text-center text-white font-semibold leading-[170%] mt-4 text-lg lg:text-xl">
							Miejscowość Zagórze położona jest na wschód od Krakowa, w powiecie wielickim, gminie
							Niepołomice.
						</p>
						<div className="w-full flex flex-col gap-3 mt-8 sm:flex-row sm:justify-center sm:gap-6">
							<ButtonLink href="/aktualnosci">
								{' '}
								<LuNewspaper /> <span>Aktulaności</span>
							</ButtonLink>
							<ButtonLink href="/historia">
								<LuHistory /> <span>Historia</span>
							</ButtonLink>
						</div>
					</div>
					<ButtonVideo />
				</div>
			</div>
		</header>
	)
}

export default Header
