import Link from 'next/link'

function ButtonLink({ children, href }) {
	return (
		<Link
			href={href}
			className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center gap-2 sm:min-w-48">
			{children}
		</Link>
	)
}

export default ButtonLink
