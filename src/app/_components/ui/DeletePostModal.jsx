'use client'
import useAppStore from '@/app/stores/store'
import { useRef, useTransition } from 'react'
import LoadingPortal from './LoadingPortal'
import DeleteButton from './DeleteButton'
import ResetButton from './ResetButton'
import Modal from './Modal'
import { deletePost } from '@/app/_actions/mutation'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function DeletePostModal({ postId, slug }) {
	const router = useRouter()
	const modalRef = useRef(null)
	const closeModal = useAppStore(state => state.closeModal)
	const openModal = useAppStore(state => state.openModal)
	const [isPending, startTransition] = useTransition()

	if (openModal != 'delete-post') return null

	const handleDeletePost = () => {
		startTransition(async () => {
			const res = await deletePost(postId, slug)

			if (res?.error) {
				toast.error(res.error)
			} else {
				toast.success('Post został usunięty')
				router.push('/panel/posty')
				closeModal()
			}
		})
	}

	return (
		<>
			{isPending && <LoadingPortal information="Usuwanie postu" />}
			<Modal modalRef={modalRef} closeModal={closeModal} buttonId="delete-post">
				<div className="p-8">
					<p className="text-dark2 md:text-lg pb-10">Czy jesteś pewny, że chcesz usunąć post?</p>
					<div className="flex items-center flex-wrap justify-center gap-5 sm:gap-8">
						<DeleteButton
							isSubmitting={isPending}
							onDelete={handleDeletePost}
							text={isPending ? 'Usuwanie...' : 'Usuń'}
						/>

						<ResetButton onClick={closeModal} />
					</div>
				</div>
			</Modal>
		</>
	)
}

export default DeletePostModal
