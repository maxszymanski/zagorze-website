'use client'
import Link from 'next/link'
import NavigationLink from './NavigationLink'
import useAppStore from '@/app/stores/store'
import { FaAngleDown } from 'react-icons/fa'

function DesktopNav() {
	const { isMoreNavOpen, toogleMoreNavOpen } = useAppStore()

	return (
		<nav className="w-full bg-white hidden lg:block">
			<div className=" max-w-7xl mx-auto w-full flex items-center justify-between px-4 py-3">
				<Link
					href="/"
					className="text-lg xl:text-xl font-bold text-gray-900 p-3 text-nowrap transition-colors duration-300  hover:text-yellow-500">
					Sołectwo Zagórze
				</Link>
				<div className="flex items-center gap-3 xl:gap-5">
					<NavigationLink href="/" restClass="text-nowrap">
						Strona główna
					</NavigationLink>
					<NavigationLink href="/historia">Historia </NavigationLink>
					<div
						className="w-full flex justify-center flex-col relative"
						onMouseEnter={toogleMoreNavOpen}
						onMouseLeave={toogleMoreNavOpen}>
						<NavigationLink restClass="flex items-center gap-2 justify-center">
							Na skróty{' '}
							<FaAngleDown
								className={`text-gray-600 mt-0.5 ${isMoreNavOpen ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`}
							/>
						</NavigationLink>
						<div
							className={`w-[200%] flex flex-col justify-center divide-y absolute -left-16 top-full rounded-lg divide-stone-200 border border-stone-200 ${isMoreNavOpen ? 'block' : 'hidden'} transition-all duration-1000 ease-in-out  bg-white`}>
							<NavigationLink href="/">Gmina</NavigationLink>
							<NavigationLink href="/">Powiat</NavigationLink>
							<NavigationLink href="/">Parafia</NavigationLink>
							<NavigationLink href="/" r>
								Rozkład jazdy
							</NavigationLink>
						</div>
					</div>
					<NavigationLink href="/galeria">Galeria</NavigationLink>
					<NavigationLink href="/aktualnosci">Aktualności</NavigationLink>
					<NavigationLink href="/kontakt">Kontakt</NavigationLink>
				</div>
			</div>
		</nav>
	)
}

export default DesktopNav
