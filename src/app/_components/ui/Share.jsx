import Image from 'next/image'
import Link from 'next/link'
import FbIcon from '@/assets/icon-fb.png'
import TwitterIcon from '@/assets/xIcon48.png'
import CopyButton from './CopyButton'

function Share({ title, slug }) {
	return (
		<div className="pt-5 xl:pt-8 flex items-center gap-3 xl:gap-5 justify-end w-full">
			<p className="text-gray-800/90 text-sm xl:text-base">Udostępnij: </p>
			<div className="flex gap-1 xl:gap-2  items-center">
				<Link
					href={`https://www.facebook.com/sharer/sharer.php?u= ${encodeURIComponent(`https://www.zagorzesolectwo.pl/aktualnosci/${slug}`)}`}
					className="inline-flex px-1 py-1.5  transition-colors duration-300 hover:bg-gray-800/10 rounded-md flex-shrink-0"
					target="_blank"
					rel="noopener noreferrer">
					<Image src={FbIcon} alt="ikona Facebook" width={36} height={36} />
				</Link>
				<Link
					href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://www.zagorzesolectwo.pl/aktualnosci/${slug}`)}`}
					className="inline-flex p-0.5   transition-colors duration-300 hover:bg-gray-800/10 rounded-md flex-shrink-0"
					rel="noopener noreferrer"
					target="_blank">
					<Image src={TwitterIcon} alt="ikona portalu X" width={44} height={44} />
				</Link>
				<CopyButton url={`https://www.zagorzesolectwo.pl/aktualnosci/${slug}`} />
			</div>
		</div>
	)
}

export default Share
