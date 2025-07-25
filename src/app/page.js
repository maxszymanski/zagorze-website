import Header from './_components/_home/Header'
import StartSection from './_components/_home/StartSection'
import Council from './_components/home/Council'
import GallerySection from './_components/home/GallerySection'
import NewsSection from './_components/home/NewsSection'
import ContactUsSection from './_components/home/ContactUsSection'
import PeopleSection from './_components/home/PeopleSection'
import Footer from './_components/home/Footer'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<StartSection />
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
