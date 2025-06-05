import Footer from '../_components/home/Footer'
import LoginForm from '../_components/ui/LoginForm'
import Navs from '../_components/ui/Navs'

function page() {
	return (
		<>
			<header className="w-full relative z-10">
				<Navs />
			</header>
			<main className="flex-1 py-12 lg:py-16 bg-[#F7F6F6] xl:py-20 md:min-h-[700px] flex items-center justify-center xl:min-h-[800px]">
				<LoginForm />
			</main>
			<Footer />
		</>
	)
}

export default page
