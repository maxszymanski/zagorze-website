import Link from 'next/link'
import FooterContact from './FooterContact'
import FooterNav from './FooterNav'
import FooterSocial from './FooterSocial'

function Footer() {
	return (
		<footer className="bg-gray-900 px-6 ">
			<div className="container max-w-7xl mx-auto w-full">
				<div className="flex flex-col justify-center gap-10 pt-8 pb-6 text-white/80 md:flex-row md:justify-between lg:pt-16">
					<FooterSocial />
					<div className="flex w-full flex-wrap justify-center gap-x-20 gap-y-10 md:gap-x-10 lg:justify-evenly">
						<FooterNav />
						<FooterContact />
					</div>
				</div>
				<div className="flex  items-center justify-evenly gap-6 border-t border-white/20 py-4 text-center text-xs text-white ">
					<p className="">
						<span className="text-nowrap uppercase">Sołectwo Zagórze 2025</span>
					</p>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://maxszymanski.pl"
						className="text-white/60 transition-colors duration-300 hover:text-white justify-items-end">
						Wykonanie: Max Szymański
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
