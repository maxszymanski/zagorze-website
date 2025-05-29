import Image from 'next/image'
import Link from 'next/link'
import Fb from '@/assets/icon-fb.png'
import { MdEmail, MdPhone } from 'react-icons/md'

function ContactSection() {
	return (
		<section className="bg-white py-12 lg:py-16 xl:py-20">
			<div className="max-w-7xl px-4 mx-auto flex flex-col gap-10 md:flex-row md:justyfy-evenly">
				<div className="w-full max-w-md  mx-auto md:pt-12 xl:max-w-[480px]">
					<h2 className="text-center font-bold text-gray-800 text-3xl mb-3 md:mb-6 md:text-5xl xl:mb-8 xl:text-6xl">
						Kontakt <span className="text-yellow-500">z nami</span>
					</h2>
					<p className="text-center text-gray-700 md:text-lg xl:text-xl">
						Jeśli masz jakiś pomysł lub wiesz coś co może zainteresować innych podziel się tą wiedzą z nami.
					</p>
					<div className="w-full flex flex-col items-center pt-8 md:pt-12">
						<p className="text-lg md:text-xl font-bold text-gray-800">Znajdź nas:</p>
						<div className="flex gap-1 pt-2">
							<Link
								href="https://facebook.pl"
								className="inline-flex p-2"
								target="_blank"
								rel="noopener noreferrer">
								<Image src={Fb} alt="ikona Facebook" width={36} height={36} />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full max-w-md mx-auto  flex flex-col items-center gap-12">
					<div className=" flex flex-col items-center gap-4">
						<p className="border p-3 text-yellow-500 border-yellow-500 rounded-full w-fit">
							<MdEmail className="size-14" />
						</p>
						<div className="text-center ">
							<p className="text-gray-900 font-semibold text-xl mb-2">E-mail</p>
							<Link
								href="mailto:zagorzesolectwo@op.pl"
								className=" p-2 hover:text-yellow-400 duration-300 transition-colors text-gray-700 font-medium xl:text-lg">
								zagorzesolectwo@op.pl
							</Link>
						</div>
					</div>
					<div className=" flex flex-col items-center gap-4">
						<p className="border p-3 text-yellow-500 border-yellow-500 rounded-full w-fit">
							<MdPhone className="size-14" />
						</p>
						<div className="text-center ">
							<p className="text-gray-900 font-semibold text-xl mb-2">Telefon</p>
							<Link
								href="tel:+48888777999"
								className=" p-2 hover:text-yellow-400 duration-300 transition-colors text-gray-700 font-medium xl:text-lg">
								+48 888 777 999
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full max-w-7xl px-4 mx-auto h-[500px] pt-14 pb-8 md:pt-20 xl:h-[650px]">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24556.17500892779!2d20.17265952400716!3d49.98939011822966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471647551c7ff605%3A0x212ddb4b74f76b3e!2s32-005%20Zag%C3%B3rze!5e1!3m2!1spl!2spl!4v1748431210756!5m2!1spl!2spl"
					className="w-full h-full rounded-lg border-0"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</section>
	)
}

export default ContactSection
