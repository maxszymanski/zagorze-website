import Link from 'next/link'
import { CiMail, CiPhone } from 'react-icons/ci'

function FooterContact() {
	return (
		<div className="flex flex-col items-center gap-6 sm:items-start">
			<h4 className="text-lg font-semibold text-white sm:pl-2 sm:text-left">Kontakt</h4>
			<ul className="flex flex-col items-center sm:items-start">
				<li>
					<Link
						href="mailto:zagorzesolectwo@op.pl"
						className="mb-2 p-2 hover:text-yellow-400 duration-300 transition-colors flex items-center gap-3">
						<CiMail className="size-6" /> zagorzesolectwo@op.pl
					</Link>
				</li>
				<li>
					<Link
						href="tel:+48888777999"
						className="mb-2 p-2 hover:text-yellow-400 duration-300 transition-colors flex items-center gap-3">
						<CiPhone className="size-7" /> +48 888 777 999
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default FooterContact
