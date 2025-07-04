import Link from 'next/link'

const navLinks = [
	{ href: '/', name: 'Strona główna' },
	{ href: '/historia', name: 'Historia' },
	{ href: '/galeria', name: 'Galeria' },
	{ href: '/aktualnosci', name: 'Aktualności' },
	{ href: '/kontakt', name: 'Kontakt' },
]

function FooterNav() {
	return (
		<div className="flex flex-col items-center gap-6 sm:items-start">
			<h4 className="text-lg font-semibold text-white sm:pl-2 sm:text-left">Menu</h4>
			<ul className="flex flex-col items-center sm:items-start">
				{navLinks.map(link => (
					<li key={link.name} className="mb-2">
						<Link
							href={link.href}
							className="inline-block p-2 text-nowrap transition-colors duration-300 hover:text-yellow-400">
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterNav
