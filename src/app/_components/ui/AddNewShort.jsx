'use client'

import { useForm } from 'react-hook-form'
import Input from './Input'
import SubmitButton from './SubmitButton'

function AddNewShort() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm()

	function onSubmit(data) {
		console.log(data)
	}

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full  flex flex-wrap md:flex-nowrap  gap-7 xl:gap-14 pb-4">
				<Input
					label="Nazwa skrótu"
					type="text"
					name="title"
					formRegister={register('title')}
					error={errors?.title || null}
					message={errors?.title?.message || null}
					placeholder="Wpisz nazwę "
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
	)
}

export default AddNewShort
