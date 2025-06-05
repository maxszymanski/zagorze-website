function ResetButton({ onClick, text = 'Anuluj' }) {
	return (
		<button
			onClick={onClick}
			className="text-white bg-yellow-500 hover:bg-yellow-600  transition-colors duration-300 px-6 py-2 md:px-12 md:py-2.5 rounded-2xl  xl:text-lg disabled:cursor-wait flex items-center disabled:bg-yellow-700  text-center">
			{text}
		</button>
	)
}

export default ResetButton
