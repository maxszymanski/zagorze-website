import Image from 'next/image'
import Link from 'next/link'
import Fb from '@/assets/icon-fb.png'

async function FooterSocial() {
	return (
		<div className="flex flex-col items-center gap-4 md:items-start md:gap-12">
			<div className="w-fit">
				<p className="pl-2">Sołectwo Zagórze</p>
			</div>
			<p className="max-w-[300px] pl-2 text-center text-sm leading-5 md:max-w-[400px] md:text-left md:text-base lg:max-w-[500px]">
				Zagórze to pierwsza miejscowość na północ od Gryfina, miejscowość powstała w 1748 roku jako osada
				kolonizacyjna.
			</p>
			<div className="flex gap-1 pt-2">
				<Link href="https://facebook.pl" className="inline-flex p-2" target="_blank" rel="noopener noreferrer">
					<Image src={Fb} alt="ikona Facebook" width={36} height={36} />
				</Link>
			</div>
		</div>
	)
}

export default FooterSocial
