import Link from 'next/link'
import { HiOutlineInformationCircle } from 'react-icons/hi'

function Actual() {
	return (
		<div className="bg-yellow-500 rounded-xl px-6 py-8 text-white -mt-28 relative z-40 max-w-lg mx-auto lg:max-w-[400px]">
			<p className="text-2xl mb-4 text-semibold">W najbliższym czasie nadchodzące wydarzenia</p>
			<p>Zaproszenie na tradycyjną wigilię dla mieszkańców naszego sołectwa</p>
			<Link
				href="/aktualnosci"
				className="rounded-3xl border border-white/70 p-2 inline-block mt-7 w-fit relative z-50 hover:bg-white/20 duration-300 transition-colors">
				Czytaj wszystko
			</Link>
			<HiOutlineInformationCircle className="absolute text-white/30 bottom-3 right-8  z-40 size-24 rotate-[30deg]" />
		</div>
	)
}

export default Actual
