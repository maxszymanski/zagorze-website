'use client'
import { useFormStatus } from 'react-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
function LogoutButton() {
	const { pending } = useFormStatus()

	return (
		<button
			type="submit"
			className="text-white bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300 px-4 py-2 md:px-6 md:py-2.5 rounded-2xl  xl:text-lg disabled:cursor-wait flex items-center disabled:bg-yellow-700"
			disabled={pending}>
			<FaArrowLeftLong className="mr-3 size-4" />
			Wyloguj się
		</button>
	)
}

export default LogoutButton
