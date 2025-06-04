import { create } from 'zustand'

const useAppStore = create()(set => ({
	isNavOpen: false,
	isMoreNavOpen: false,
	openModal: null,

	toggleNavigation: () => set(state => ({ isNavOpen: !state.isNavOpen })),
	closeNavigation: () => set({ isNavOpen: false }),
	toogleMoreNavOpen: () => set(state => ({ isMoreNavOpen: !state.isMoreNavOpen })),
	setOpenModal: modalType => set({ openModal: modalType }),
	closeModal: () => set({ openModal: null }),
}))

export default useAppStore
