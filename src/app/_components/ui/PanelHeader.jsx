import { logout } from '@/app/_actions/auth'
import { FaArrowLeftLong } from 'react-icons/fa6'

async function PanelHeader() {
	return (
		<header className="flex w-full items-center justify-end py-4 pl-4 pr-6 text-dark lg:px-6 xl:mx-auto xl:max-w-[1440px]">
			<form action={logout}>
				<button
					type="submit"
					className="text-white bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300 px-4 py-2 md:px-6 md:py-2.5 rounded-2xl  xl:text-lg disabled:cursor-wait flex items-center">
					<FaArrowLeftLong className="mr-3 size-4" />
					Wyloguj się
				</button>
			</form>
		</header>
	)
}

export default PanelHeader
