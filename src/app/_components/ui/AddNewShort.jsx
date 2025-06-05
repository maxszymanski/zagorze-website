'use client'

import { useForm } from 'react-hook-form'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { createShort } from '@/app/_actions/mutation'
import toast from 'react-hot-toast'
import LoadingPortal from './LoadingPortal'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const createShortSchema = z.object({
	title: z.string().nonempty('Nazwa skrótu jest wymagana').min(3, 'Nazwa musi mieć minumum trzy znaki'),
	href: z.string().url('Podany link jest nieprawidłowy').nonempty('Link skrótu jest wymagany'),
})

function AddNewShort() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: zodResolver(createShortSchema) })

	async function onSubmit(data) {
		const result = await createShort(data)
		if (result.error) {
			toast.error(result.error)
		} else {
			toast.success('Skrót został dodany')
			reset()
		}
	}

	return (
		<>
			{isSubmitting && <LoadingPortal information="Dodawanie skrótu" />}
			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full  flex flex-wrap md:flex-nowrap  gap-7 xl:gap-14 pb-4">
					<Input
						label="Nazwa skrótu"
						type="text"
						name="title"
						formRegister={register('title')}
						error={errors?.title || null}
						message={errors?.title?.message || null}
						placeholder="Wpisz nazwę"
						required
					/>
					<Input
						label="Link skrótu"
						type="text"
						name="href"
						placeholder="Wpisz link skrótu"
						formRegister={register('href')}
						error={errors?.href || null}
						message={errors?.href?.message || null}
						required
					/>
					<SubmitButton isSubmitting={isSubmitting} text="Dodaj" />
				</div>
			</form>
		</>
	)
}

export default AddNewShort
