'use client'
import useClickOutside from '@/app/_hooks/UseClickOutside'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function Modal({ children, modalRef, closeModal, buttonId, reset }) {
	useClickOutside(modalRef, closeModal, buttonId)

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				e.preventDefault()
				if (reset) reset()
				closeModal()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal, reset])

	return createPortal(
		<div
			className={`absolute w-full h-full left-0 top-[0] z-50 flex items-center overflow-hidden justify-center bg-slate-50 bg-opacity-80 flex-col gap-4 px-2`}>
			<div
				className="w-fit  animate-visible rounded-xl border border-yellow-400 bg-white text-center shadow-md shadow-yellow-500 "
				ref={modalRef}>
				{children}
			</div>
		</div>,
		document.body
	)
}

export default Modal
