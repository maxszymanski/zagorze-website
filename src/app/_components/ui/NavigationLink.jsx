import Link from 'next/link'

function NavigationLink({ href, onClick, children, restClass }) {
	if (!href)
		return (
			<button
				onClick={onClick}
				className={`text-[15px] md:text-base xl:text-lg lg:font-semibold p-3 transition-colors duration-300 text-gray-800 hover:text-yellow-500 text-center ${restClass}`}>
				{children}
			</button>
		)

	return (
		<Link
			href={href}
			className={`text-[15px] md:text-base xl:text-lg lg:font-semibold p-3 transition-colors duration-300 text-gray-800 hover:text-yellow-500 text-center text-nowrap ${restClass}`}>
			{children}
		</Link>
	)
}

export default NavigationLink
