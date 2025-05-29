import ContactSection from '../_components/contact/ContactSection'
import Footer from '../_components/home/Footer'
import PagesHeader from '../_components/ui/PagesHeader'

function page() {
	return (
		<>
			<PagesHeader titleOne="Kontakt" />
			<main>
				<ContactSection />
			</main>
			<Footer />
		</>
	)
}

export default page
