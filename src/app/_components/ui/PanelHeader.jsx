import { logout } from '@/app/_actions/auth'

import LogoutButton from './LogoutButton'

async function PanelHeader() {
	return (
		<header className="flex w-full items-center justify-end py-4 pl-4 pr-6 text-dark lg:px-6 xl:mx-auto xl:max-w-[1440px]">
			<form action={logout}>
				<LogoutButton />
			</form>
		</header>
	)
}

export default PanelHeader
