'use client'
import useAppStore from '@/app/stores/store'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import Navigation from './Navigation'

function MobileNav() {
	const { isNavOpen, toggleNavigation, closeNavigation } = useAppStore()

	const pathname = usePathname()

	useEffect(() => {
		closeNavigation()
	}, [pathname, closeNavigation])

	return (
		<div className="relative w-full z-30">
			<div className="flex relative z-30  w-full items-center justify-between pl-4 pr-6 lg:hidden  bg-white border-b border-stone-200">
				<Link href="/" className="text-lg font-bold text-gray-800 py-2.5 px-4 text-nowrap">
					Sołectwo Zagórze
				</Link>
				<div className="flex flex-col justify-between items-center">
					<button
						className="p-2 block self-center text-gray-800"
						onClick={() => {
							toggleNavigation()
						}}>
						{isNavOpen ? (
							<IoClose className={`size-8 font-semibold  `} />
						) : (
							<IoMenu className={`size-8  font-semibold `} />
						)}
					</button>
				</div>
			</div>
			<Navigation isNavOpen={isNavOpen} />
		</div>
	)
}

export default MobileNav
