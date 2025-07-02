'use client'

import toast from 'react-hot-toast'
import { createShortSchema } from './AddNewShort'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useAppStore from '@/app/stores/store'
import { useEffect, useRef, useTransition } from 'react'
import Modal from './Modal'
import SubmitButton from './SubmitButton'
import DeleteButton from './DeleteButton'
import LoadingPortal from './LoadingPortal'
import { deleteShort, updateShort } from '@/app/_actions/mutation'

function EditShortModal({ short }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: zodResolver(createShortSchema) })

	const modalRef = useRef(null)
	const openModal = useAppStore(state => state.openModal)
	const closeModal = useAppStore(state => state.closeModal)
	const [pending, startTransition] = useTransition()

	useEffect(() => {
		if (openModal && modalRef.current) {
			modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}, [openModal])

	if (openModal != `edit-${short.id}`) return null

	async function onSubmit(data) {
		const result = await updateShort(data, short.id)
		if (result.error) {
			toast.error(result.error)
		} else {
			toast.success('Skrót został edytowany')
			closeModal()
		}
	}

	const handleDelete = e => {
		e.preventDefault()
		startTransition(async () => {
			const result = await deleteShort(short.id)

			if (result.error) {
				toast.error(result.error)
			} else {
				toast.success('Skrót został usunięty')
				reset()
				closeModal()
			}
		})
	}

	return (
		<>
			{(isSubmitting || pending) && <LoadingPortal information="Trwa aktualizowanie" />}
			<Modal modalRef={modalRef} closeModal={closeModal} buttonId="edit-short-modal">
				<form className="w-full p-8 xl:px-12" onSubmit={handleSubmit(onSubmit)}>
					<div className="w-full  flex flex-wrap   gap-7  pb-4">
						<div className=" w-full  flex flex-wrap md:flex-row md:flex-nowrap gap-5 md:gap-14 ">
							<Input
								label="Nazwa skrótu"
								type="text"
								name="title"
								formRegister={register('title')}
								error={errors?.title || null}
								message={errors?.title?.message || null}
								placeholder="Wpisz nazwę"
								required
								defaultValue={short?.title || ''}
							/>
							<Input
								label="Link skrótu"
								type="text"
								name="href"
								placeholder="Wpisz link skrótu"
								formRegister={register('href')}
								error={errors?.href || null}
								message={errors?.href?.message || null}
								defaultValue={short?.href || ''}
								required
							/>
						</div>
						<div className="w-full flex flex-row gap-4 md:gap-6 items-center">
							<SubmitButton isSubmitting={isSubmitting} text="Edytuj" />
							<DeleteButton onDelete={handleDelete} isSubmitting={pending} text="Usuń" />
						</div>
					</div>
				</form>
			</Modal>
		</>
	)
}

export default EditShortModal
