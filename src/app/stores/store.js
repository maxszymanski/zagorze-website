import { create } from 'zustand'

const useAppStore = create()(set => ({
	isNavOpen: false,
	isMoreNavOpen: false,

	toggleNavigation: () => set(state => ({ isNavOpen: !state.isNavOpen })),
	closeNavigation: () => set({ isNavOpen: false }),
	toogleMoreNavOpen: () => set(state => ({ isMoreNavOpen: !state.isMoreNavOpen })),
}))

export default useAppStore
