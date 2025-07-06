import Dropzone from '@/app/_components/ui/Dropzone'

function page() {
	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-yellow-500 text-3xl text-center font-semibold mb-12 xl:mb-20">Galeria</h1>
			<div className="flex flex-wrap justify-evenly gap-7">
				<Dropzone className=" p-12 md:p-16 xl:p-20   border-2 border-yellow-400 rounded-xl max-w-md cursor-pointer w-full  md:min-w-[384px] hover:bg-slate-100 transition-colors duration-300 hover:border-yellow-500 border-dotted" />
			</div>
		</section>
	)
}

export default page
