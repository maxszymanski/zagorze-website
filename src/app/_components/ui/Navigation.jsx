'use client'

import Link from 'next/link'
import NavigationLink from './NavigationLink'
import { FaAngleDown } from 'react-icons/fa'
import useAppStore from '@/app/stores/store'

function Navigation({ isNavOpen }) {
	const { isMoreNavOpen, toogleMoreNavOpen } = useAppStore()

	return (
		<nav
			className={` bg-white  w-full  absolute top-0 left-0   z-20 ${isNavOpen ? 'translate-y-[49px]' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
			<div className=" max-w-7xl mx-auto w-full">
				<div className="w-full flex flex-col   divide-y divide-stone-200">
					<NavigationLink href="/">Strona główna</NavigationLink>
					<NavigationLink href="/">Historia sołectwa</NavigationLink>
					<div className="w-full flex justify-center flex-col">
						<NavigationLink restClass="flex items-center gap-2 justify-center" onClick={toogleMoreNavOpen}>
							Na skróty{' '}
							<FaAngleDown
								className={`text-gray-600 mt-0.5 ${isMoreNavOpen ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`}
							/>
						</NavigationLink>
						<div
							className={`w-full flex flex-col justify-center divide-y divide-stone-200 ${isMoreNavOpen ? 'h-fit  ' : 'h-0'} transition-all duration-1000 ease-in-out overflow-hidden bg-stone-100`}>
							<NavigationLink href="/" restClass="border-t border-stone-200">
								Gmina
							</NavigationLink>
							<NavigationLink href="/" restClass="">
								Powiat
							</NavigationLink>
							<NavigationLink href="/" restClass="">
								Parafia
							</NavigationLink>
							<NavigationLink href="/" restClass="">
								Rozkład jazdy
							</NavigationLink>
						</div>
					</div>
					<NavigationLink href="/">Galeria</NavigationLink>
					<NavigationLink href="/">Aktualności</NavigationLink>
					<NavigationLink href="/">Kontakt</NavigationLink>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
