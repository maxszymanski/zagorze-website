import { Controller } from 'react-hook-form'
import { Editor } from './Editor'

const EditorText = ({ error, message, control, setContent, placeholder = 'Wprowadź opis kursu' }) => {
	return (
		<>
			<div className="w-full flex flex-col">
				<label htmlFor="long_description" className="block text-dark2 mb-3">
					Opis kursu <span className="text-red-400">*</span>
				</label>
				<div className="h-full">
					<Controller
						name="long_description"
						control={control}
						render={({ field: { value } }) => (
							<Editor
								onChange={setContent}
								value={value}
								placeholder={placeholder}
								error={error || null}
							/>
						)}
					/>
				</div>
			</div>
			{message && <p className="text-sm  text-red-500 mt-2 pl-1">{message}</p>}
		</>
	)
}

export default EditorText
