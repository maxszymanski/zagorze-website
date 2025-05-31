'use client'

import { createPortal } from 'react-dom'
import Loader from './Loader'

export default function LoadingPortal({ information = 'Trwa dodawanie postu' }) {
	return createPortal(
		<div className="fixed w-full inset-0 z-50 flex items-center justify-center bg-slate-200 bg-opacity-80 flex-col gap-4">
			<Loader />
			<p className="">{information}</p>
		</div>,
		document.body
	)
}
