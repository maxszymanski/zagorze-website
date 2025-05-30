import PasswordForm from '@/app/_components/ui/PasswordForm'

async function page() {
	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-yellow-500 text-3xl text-center font-semibold mb-12 xl:mb-20">Ustawienia</h1>
			<div className="flex flex-wrap justify-evenly gap-7">
				<PasswordForm />
			</div>
		</section>
	)
}

export default page
