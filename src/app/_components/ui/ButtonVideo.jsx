import { ImVideoCamera } from 'react-icons/im'
import { CiVideoOn } from 'react-icons/ci'

function ButtonVideo() {
	return (
		<button className="bg-red-500 text-white font-semibold py-1 rounded-full  hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2 w-20 h-20 animate-pulse shadow-xl shadow-yellow-500">
			<CiVideoOn className="size-12" />
		</button>
	)
}

export default ButtonVideo
