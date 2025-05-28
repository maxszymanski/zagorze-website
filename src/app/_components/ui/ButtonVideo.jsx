import { ImVideoCamera } from 'react-icons/im'
import { CiVideoOn } from 'react-icons/ci'

function ButtonVideo() {
	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<button className="bg-red-500 text-white font-semibold py-1 rounded-full  hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2 w-20 h-20 animate-pulse shadow-xl shadow-yellow-500">
				<CiVideoOn className="size-12" />
			</button>
			<p className="text-yellow-500 font-bold text-xl">Zobacz</p>
		</div>
	)
}

export default ButtonVideo
