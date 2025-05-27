import Image from 'next/image'
import PeopleSection from './_components/home/PeopleSection'
import GallerySection from './_components/home/GallerySection'
import NewsSection from './_components/home/NewsSection'
import Council from './_components/home/Council'
import ContactUsSection from './_components/home/ContactUsSection'
import Footer from './_components/home/Footer'

export default function Home() {
	return (
		<>
			<div className="h-[1200px] bg-blue-300"></div>
			<main>
				<PeopleSection />
				<GallerySection />
				<NewsSection />
				<Council />
				<ContactUsSection />
			</main>
			<Footer />
		</>
	)
}
