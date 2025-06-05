import { getShorts } from '@/app/_lib/data-service'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

async function Navs() {
	const shorts = await getShorts()

	return (
		<>
			<MobileNav shorts={shorts} />
			<DesktopNav shorts={shorts} />
		</>
	)
}

export default Navs
