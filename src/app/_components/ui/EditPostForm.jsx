'use client'
import { useForm } from 'react-hook-form'
import LoadingPortal from './LoadingPortal'
import Input from './Input'
import FileInput, { ACCEPTED_IMAGE_TYPES } from './FileInput'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import EditorText from './EditorText'
import SubmitButton from './SubmitButton'
import { updatePost } from '@/app/_actions/mutation'
import toast from 'react-hot-toast'
import DeleteButton from './DeleteButton'
import useAppStore from '@/app/stores/store'

export const addPostSchema = z.object({
	title: z
		.string()
		.min(5, 'Tytuł kursu musi mieć co najmniej 5 znaków')
		.max(100, 'Tytuł kursu może mieć maksymalnie 100 znaków'),
	description: z
		.string()
		.min(10, 'Krótki opis musi mieć co najmniej 10 znaków')
		.max(255, 'Krótki opis może mieć maksymalnie 255 znaków'),
	slug: z.string().nonempty('Odnośnik do posta jest wymagany'),
	picture: z.any().nullable(),
})
export const template = `<p>Wprowadź treść swojego posta tutaj...</p>`

function EditPostForm({ post }) {
	const {
		register,
		handleSubmit,
		control,
		setError,
		clearErrors,

		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(addPostSchema),
		defaultValues: { long_description: post.long_description || template },
	})

	const [content, setContent] = useState(template || '')

	const [image, setImage] = useState(post.image || null)

	const openModal = useAppStore(state => state.openModal)
	const setOpenModal = useAppStore(state => state.setOpenModal)
	const closeModal = useAppStore(state => state.closeModal)

	const handleOpenDeletePostModal = e => {
		e.preventDefault()
		{
			if (openModal === 'delete-post') {
				closeModal()
			} else {
				setOpenModal('delete-post')
			}
		}
	}

	async function onSubmit(data) {
		if (!image) {
			setError('picture', {
				type: 'manual',
				message: 'Plik jest wymagany',
			})
			toast.error('Plik jest wymagany')
			return
		}

		if (image) {
			const isValidType = typeof image === 'string' || ACCEPTED_IMAGE_TYPES.includes(image.type)

			if (!isValidType) {
				setError('picture', {
					type: 'manual',
					message: 'Nieprawidłowy format pliku',
				})
				toast.error('Nieprawidłowy format pliku')
				return
			}

			if (image && isValidType) {
				clearErrors('picture')
				data.picture = image
			}
		}

		if (content.length < 30) {
			setError('long_description', {
				type: 'manual',
				message: 'Opis musi być dłuższy niż 30 znaków',
			})
			return
		}

		data.long_description = content

		const { picture, ...restData } = data

		const formData = new FormData()

		if (image) {
			formData.append('data', JSON.stringify(restData))
			formData.append('picture', image)
		} else {
			formData.append('data', JSON.stringify(data))
		}

		const result = await updatePost(formData, post.id)

		if (result?.error) {
			toast.error(result.error)
		} else {
			toast.success('Post został zaktualizowany')
		}
	}

	return (
		<>
			{isSubmitting && <LoadingPortal information="Dodawanie postu" />}

			<form
				className="w-full px-3 py-8 border border-slate-200 bg-white rounded-lg flex flex-col items-center  gap-7 shadow-md shadow-stone-200 xl:gap-8 lg:py-14 md:justify-evenly 2xl:px-20"
				onSubmit={handleSubmit(onSubmit)}>
				<FileInput
					name="picture"
					image={image}
					setImage={setImage}
					control={control}
					setError={setError}
					clearErrors={clearErrors}
					error={errors?.picture || null}
					message={errors?.picture?.message || null}
					editImg={post?.image || null}
				/>
				<div className="w-full md:max-w-5xl flex flex-wrap md:flex-nowrap  gap-7 xl:gap-14 py-8">
					<Input
						label="Tytuł"
						type="text"
						name="title"
						formRegister={register('title')}
						error={errors?.title || null}
						message={errors?.title?.message || null}
						placeholder="Wpisz tytuł postu"
						required
						defaultValue={post?.title || ''}
					/>
					<Input
						label="Krótki opis"
						type="text"
						name="description"
						placeholder="Wpisz krótki opis postu"
						formRegister={register('description')}
						error={errors?.description || null}
						message={errors?.description?.message || null}
						required
						defaultValue={post?.description || ''}
					/>
					<Input
						label="Odnośnik do posta"
						type="text"
						name="slug"
						placeholder="Wpisz odnośnik do posta"
						formRegister={register('slug')}
						error={errors?.slug || null}
						message={errors?.slug?.message || null}
						required
						defaultValue={post?.slug || ''}
					/>
				</div>

				<EditorText
					control={control}
					setContent={setContent}
					error={errors?.description}
					message={errors?.description?.message}
				/>
				<div className="flex items-center justify-center gap-4 w-full md:max-w-5xl">
					<SubmitButton isSubmitting={isSubmitting} />
					<DeleteButton isSubmitting={isSubmitting} onDelete={handleOpenDeletePostModal} />
				</div>
			</form>
		</>
	)
}

export default EditPostForm
