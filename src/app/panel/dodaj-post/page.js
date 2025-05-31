import AddPostForm from '@/app/_components/ui/AddPostForm'

function page() {
	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-yellow-500 text-3xl text-center font-semibold mb-12 xl:mb-20">Dodaj nowy post</h1>
			<AddPostForm />
		</section>
	)
}

export default page
