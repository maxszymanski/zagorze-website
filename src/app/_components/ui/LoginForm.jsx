'use client'

import { useForm } from 'react-hook-form'
import Input from './Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { login } from '@/app/_actions/auth'
import { useState } from 'react'

const loginSchema = z.object({
	email: z.string().nonempty('Email jest wymagany').email('Nieprawidłowy email'),
	password: z.string().nonempty('Hasło jest wymagane').min(8, 'Hasło musi mieć co najmniej 8 znaków'),
})

function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({ resolver: zodResolver(loginSchema) })

	const [error, setError] = useState(null)

	async function onSubmit(data) {
		const result = await login(data)
		if (result.error) {
			setError(result.error)
		} else {
			setError(null)
			reset()
		}
	}

	return (
		<section className="max-w-7xl px-4 mx-auto">
			<form
				className="flex flex-1 flex-grow flex-col justify-center bg-white rounded-xl py-12 px-6 md:px-12 max-w-[500px] md:w-[500px]"
				onSubmit={handleSubmit(onSubmit)}>
				<div className="text-center font-bold  lg:px-2 lg:text-left">
					<h3 className="mb-3 text-3xl text-yellow-400 md:text-4xl lg:text-5xl xl:mb-6 2xl:text-6xl">
						Zaloguj się
					</h3>
					<p className="text-sm font-normal ">Wprowadź dane swojego konta</p>
				</div>
				<div className="flex flex-col items-start gap-3 py-8">
					<Input
						label="Email"
						type="email"
						name="email"
						placeholder="Email"
						formRegister={register('email')}
						error={errors?.email || error || null}
						message={errors?.email?.message || null}
						required
						disabled={isSubmitting}
					/>
					<Input
						label="Hasło"
						type="password"
						name="password"
						placeholder="Hasło"
						formRegister={register('password')}
						error={errors?.password || error || null}
						message={errors?.password?.message || null}
						required
						disabled={isSubmitting}
					/>
					{error && <span className="text-xs md:text-sm  text-red-500 mt-2 pl-2">{error}</span>}
				</div>
				<button
					className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-14 py-2.5 rounded-2xl  inline-block xl:text-xl disabled:cursor-wait"
					disabled={isSubmitting}>
					{isSubmitting ? 'Logowanie...' : 'Zaloguj się'}
				</button>
			</form>
		</section>
	)
}

export default LoginForm
