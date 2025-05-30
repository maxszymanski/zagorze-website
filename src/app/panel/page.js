import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'

function page() {
	return (
		<div className="w-full lg:px-6 flex-1 h-full flex flex-col items-center justify-center">
			<div className="py-32 text-center ">
				<h1 className="text-2xl xl:text-5xl font-bold text-yellow-600">Panel administratora</h1>
				<p className="mt-7 text-lg xl:text:xl font-semibold text-gray-700">
					Zarządzaj swoją stroną w jednym miejscu
				</p>
			</div>
			<div className="flex w-full items-center justify-evenly gap-5 overflow-x-auto px-4 pb-4 pt-8 xl:pb-6">
				<Link
					href="/panel/dodaj-post"
					className="flex h-36 w-36 flex-shrink-0 flex-col items-center justify-center gap-5 rounded-3xl border-[3px] border-transparent bg-yellow-500 p-3 shadow-md shadow-stone-200 outline-none transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-600 sm:h-44 sm:w-44 xl:h-48 xl:w-48">
					<FaPlus className="size-16 text-white sm:size-20" />
					<span className="text-sm text-white xl:text-xl">Dodaj post</span>
				</Link>
			</div>
		</div>
	)
}

export default page
