'use client'
import Image from 'next/image'
import { useCallback, useState, useTransition } from 'react'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import { FaRegCircleXmark } from 'react-icons/fa6'
import SubmitButton from './SubmitButton'
import { addImages } from '@/app/_actions/mutation'
import LoadingPortal from './LoadingPortal'

export default function Drapzone({ className }) {
	const [files, setFiles] = useState([])
	const [isPending, startTransition] = useTransition()

	const onDrop = useCallback(
		(acceptedFiles, rejectedFiles) => {
			if (acceptedFiles?.length) {
				setFiles(prevFiles => [
					...prevFiles,
					acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })),
				])
			}

			console.log(rejectedFiles)
		},
		[files]
	)

	const handleSubmit = e => {
		e.preventDefault()

		if (files.length === 0) {
			toast.error('Proszę dodać przynajmniej jedno zdjęcie.')
			return
		}

		startTransition(async () => {
			const result = await addImages(files.flat(Infinity))

			if (result.error) {
				toast.error(result.error)
			} else {
				toast.success('Zdjęcia zostały dodane')
				setFiles([]) //
			}
		})
	}

	const removeFile = name => {
		console.log(name)
		setFiles(files => files.flat(Infinity).filter(file => file.name !== name))
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } })

	return (
		<>
			{isPending && <LoadingPortal information="Dodawanie zdjęć" />}
			<form className="w-full flex flex-col items-center justify-center" onSubmit={handleSubmit}>
				<div {...getRootProps({ className: className })}>
					<input {...getInputProps()} />
					{isDragActive ? <p>Upuść pliki tutaj ...</p> : <p>Kliknij lub przeciągnij pliki tutaj</p>}
				</div>

				<h3 className="text-lg font-semibold mt-10 mb-10">Wybrane zdjęcia</h3>
				<ul className="mt-6 flex flex-wrap items-center justify-center gap-6 lg:gap-10 w-full mb-16">
					{files.flat(Infinity).map(file => (
						<li key={file.name} className="relative h-32 w-32 rounded-md shadow-lg">
							<Image
								src={file.preview}
								alt={`zdjęcie ${file.name}`}
								width={100}
								height={100}
								onLoad={() => {
									URL.revokeObjectURL(file.preview)
								}}
								className="h-full w-full object-cover rounded-md"
							/>
							<button
								type="button"
								className="w-7 h-7  bg-white  rounded-full absolute -top-2 -right-3"
								title="Usuń zdjęcie"
								onClick={() => removeFile(file.name)}>
								<FaRegCircleXmark className="w-7 h-7 fill-red-500 hover:fill-red-700 transition-colors duration-300" />
							</button>
							<p className="text-neutral-500 text-xs font-medium ">{file.name}</p>
						</li>
					))}
				</ul>
				<SubmitButton isSubmitting={isPending} text="Dodaj" />
			</form>
		</>
	)
}
