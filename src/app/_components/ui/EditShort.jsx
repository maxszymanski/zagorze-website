'use client'
import useAppStore from '@/app/stores/store'
import { FaEdit } from 'react-icons/fa'
import EditShortModal from './EditShortModal'

function EditShort({ short }) {
	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleShowEditModal = () => {
		{
			if (openModal === `edit-${short.id}`) {
				closeModal()
			} else {
				setOpenModal(`edit-${short.id}`)
			}
		}
	}

	return (
		<>
			<EditShortModal short={short} />
			<button className="block" title="Edytuj skrót" aria-label="Edytuj skrót">
				<FaEdit
					className="size-6 xl:size-8 hover:text-yellow-600 text-yellow-500 duration-300 transition-colors"
					onClick={handleShowEditModal}
				/>
			</button>
		</>
	)
}

export default EditShort
