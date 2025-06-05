'use client'

import NavigationLink from './NavigationLink'
import { FaAngleDown } from 'react-icons/fa'
import useAppStore from '@/app/stores/store'

function Navigation({ isNavOpen, shorts }) {
	const { isMoreNavOpen, toogleMoreNavOpen } = useAppStore()

	return (
		<nav
			className={` bg-white  w-full  absolute top-0 left-0   z-20 ${isNavOpen ? 'translate-y-[49px]' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
			<div className=" max-w-7xl mx-auto w-full">
				<div className="w-full flex flex-col   divide-y divide-stone-200">
					<NavigationLink href="/historia">Historia sołectwa</NavigationLink>
					<div className="w-full flex justify-center flex-col">
						<NavigationLink restClass="flex items-center gap-2 justify-center" onClick={toogleMoreNavOpen}>
							Na skróty{' '}
							<FaAngleDown
								className={`text-gray-600 mt-0.5 ${isMoreNavOpen ? '-rotate-180' : 'rotate-0'} transition-transform duration-300`}
							/>
						</NavigationLink>
						{shorts.length > 0 && (
							<div
								className={`w-full flex flex-col justify-center divide-y divide-stone-200 ${isMoreNavOpen ? 'h-fit  ' : 'h-0'} transition-all duration-1000 ease-in-out overflow-hidden bg-stone-100`}>
								{shorts.map((short, idx) => (
									<NavigationLink
										key={short.id}
										href={short.href}
										restClass={`${idx === 0 ? 'border-t border-stone-200' : ''}`}>
										{short.title}
									</NavigationLink>
								))}
							</div>
						)}
					</div>
					<NavigationLink href="/galeria">Galeria</NavigationLink>
					<NavigationLink href="/aktualnosci">Aktualności</NavigationLink>
					<NavigationLink href="/kontakt" restClass="border-b border-stone-200">
						Kontakt
					</NavigationLink>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
