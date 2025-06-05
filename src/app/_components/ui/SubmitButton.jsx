function SubmitButton({ isSubmitting, text = 'Zapisz' }) {
	return (
		<div className="px-8 w-full flex items-center justify-center pt-4">
			<button
				disabled={isSubmitting}
				className="text-white bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300 px-4 py-2 md:px-12 md:py-2.5 rounded-2xl  xl:text-lg disabled:cursor-wait flex items-center disabled:bg-yellow-700">
				{text}
			</button>
		</div>
	)
}

export default SubmitButton
