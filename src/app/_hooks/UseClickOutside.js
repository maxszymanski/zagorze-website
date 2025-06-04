import { useEffect } from 'react'

export default function useClickOutside(ref, mutation, buttonID) {
	useEffect(() => {
		function handleClickOutside(e) {
			const target = e.target

			if (target.id === buttonID || !ref?.current) return

			if (ref?.current && !ref.current.contains(target)) {
				setTimeout(() => mutation(), 100)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [ref, mutation, buttonID])
}
