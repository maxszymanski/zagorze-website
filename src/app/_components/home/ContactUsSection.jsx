import Link from 'next/link'

function ContactUsSection() {
	return (
		<section className="bg-white py-12 lg:py-16">
			<div className="max-w-7xl px-4 mx-auto">
				<p className="text-lg font-bold text-yellow-500 mb-4 lg:text-xl text-center lg:mb-5">
					Ciekawostki i nowości
				</p>
				<h2 className="text-center font-bold text-gray-800 text-3xl mb-3 lg:mb-5 lg:text-5xl leading-[130%] lg:leading-[130%]">
					Informujcie nas o wszystkim, tworzymy tą stronę <br />
					<span className="text-yellow-500"> Razem z Wami!</span>
				</h2>
				<div className="w-full flex justify-center mt-10 lg:mt-14">
					<Link
						href="/kontakt"
						className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-14 py-2 rounded-2xl  inline-block xl:text-xl">
						Kontakt
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ContactUsSection
