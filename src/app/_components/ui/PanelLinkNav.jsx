'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function PanelLinkNav({ href = '/', children, restClass = '' }) {
	const pathname = usePathname()
	const isActive = pathname.includes(href) && href != '/konto'

	return (
		<li className="list-none">
			<Link
				className={`flex items-center text-nowrap p-3  transition-colors duration-300 md:text-base xl:text-lg 2xl:text-xl outline-primary  w-full text-lg font-semibold rounded-none  hover:bg-white/90 md:rounded-2xl hover:text-gray-800 md:justify-start px-5 py-3 ${isActive ? 'text-yellow-400 bg-white/80' : pathname === href ? 'text-yellow-400 bg-white/80' : 'text-gray-800'}  ${restClass}`}
				href={href}>
				{children}
			</Link>
		</li>
	)
}

export default PanelLinkNav
