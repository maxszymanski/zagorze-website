'use client'
import { updatePassword } from '@/app/_actions/auth'
import Input from './Input'
import SettingsBox from './SettingsBox'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import SubmitButton from './SubmitButton'

const changePasswordSchema = z
	.object({
		password: z.string().nonempty('Hasło nie może być puste').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
		confirmPassword: z
			.string()
			.nonempty('Potwierdzenie hasła nie może być puste')
			.min(8, 'Hasło musi mieć co najmniej 8 znaków'),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Hasła muszą być takie same',
		path: ['confirmPassword'],
	})

function PasswordForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(changePasswordSchema),
	})

	const onSubmit = async data => {
		const result = await updatePassword(data)
		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Hasło zostało zaktualizowane')
		}
		reset()
	}

	return (
		<>
			<SettingsBox title="Zmień hasło">
				<form className="flex flex-col gap-4  w-full " onSubmit={handleSubmit(onSubmit)}>
					<Input
						label="Nowe hasło"
						type="password"
						name="password"
						placeholder="Wpisz nowe hasło"
						formRegister={register('password')}
						error={errors?.password || null}
						message={errors?.password?.message || null}
						autoComplete="new-password"
						required
					/>
					<Input
						label="Powtórz hasło"
						type="password"
						name="confirmPassword"
						placeholder="Powtórz hasło"
						formRegister={register('confirmPassword')}
						error={errors?.confirmPassword || null}
						message={errors?.confirmPassword?.message || null}
						autoComplete="new-password"
						required
					/>
					<div className="px-8 w-full flex items-center justify-center pt-4">
						<SubmitButton isSubmitting={isSubmitting} />
					</div>
				</form>
			</SettingsBox>
		</>
	)
}

export default PasswordForm
