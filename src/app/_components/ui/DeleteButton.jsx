function DeleteButton({ isSubmitting, onDelete, text = 'Usuń' }) {
	return (
		<div className="px-8 w-full flex items-center justify-center pt-4">
			<button
				disabled={isSubmitting}
				onClick={onDelete}
				className="text-white bg-red-500 hover:bg-red-600  transition-colors duration-300 px-6 py-2 md:px-12 md:py-2.5 rounded-2xl  xl:text-lg disabled:cursor-wait flex items-center disabled:bg-red-700  text-center">
				{text}
			</button>
		</div>
	)
}

export default DeleteButton
