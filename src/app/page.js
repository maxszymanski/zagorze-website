import Image from 'next/image'
import PeopleSection from './_components/home/PeopleSection'

export default function Home() {
	return (
		<>
			<div className="h-[1200px] bg-blue-300"></div>
			<main>
				<PeopleSection />
			</main>
		</>
	)
}
