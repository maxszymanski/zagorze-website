function Input({ error, message, rest, formRegister, children, name, required, label, type, disabled }) {
	return (
		<div className={` flex flex-col   md:max-w-md' w-full`}>
			{label && (
				<div className={`${children ? 'flex items-center justify-between text-nowrap w-full gap-8' : ''}`}>
					<label htmlFor={name} className={`block text-gray-800 mb-1}`}>
						{label} {required && <span className="text-red-400">*</span>}{' '}
					</label>
					{children}
				</div>
			)}
			<div className="relative">
				<input
					name={name}
					id={name}
					className={`rounded-lg mt-1 text-sm px-5 py-3.5 border  bg-slate-50 outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-colors duration-300 hover:bg-slate-100 placeholder:select-none placeholder:dark2/90 text-gray-800 disabled:cursor-not-allowed disabled:bg-slate-500  w-full  ${error ? 'border-red-500' : 'border-slate-200'}`}
					{...formRegister}
					lang="pl"
					{...rest}
					type={type}
					disabled={disabled}
				/>
				{error && <span className="text-sm  text-red-500 mt-2 pl-1">{message}</span>}
			</div>
		</div>
	)
}

export default Input
