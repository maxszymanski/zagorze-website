import SettingsBox from '@/app/_components/ui/SettingsBox'
import { getPosts } from '@/app/_lib/data-service'
import { formattedDate } from '@/app/utils/helpers'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'

async function page() {
	const posts = await getPosts()
	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-yellow-500 text-3xl text-center font-semibold mb-12 xl:mb-20">Aklualności</h1>
			<div
				className="flex flex-col justify-center items-center  w-full
			">
				<SettingsBox title="Moje posty" long>
					<div className="w-full border border-slate-200">
						{posts.length > 0 && (
							<div className="w-full flex  items-center justify-start border-b border-slate-200 py-3 text-center font-extrabold text-gray-800 lg:text-lg xl:text-xl lg:py-5 bg-slate-50">
								<div className="w-14">
									<p>ID</p>
								</div>
								<div className="w-28 text-nowrap">
									<p>Data </p>
								</div>
								<div className="flex-1 min-w-48">
									<p>Tytuł</p>
								</div>
								<div className="w-10"></div>
							</div>
						)}
						<div className="w-full flex flex-col overflow-x-auto divide-y divide-slate-200">
							{posts.length > 0 ? (
								posts.map(post => {
									const format = formattedDate(post.created_at)
									return (
										<div
											className="w-full flex  items-center justify-start  py-5 text-center font-semibold text-gray-700 lg:text-lg bg-white md:hover:bg-slate-100 transition-colors duration-300"
											key={post.id}>
											<div className="w-14 px-2">
												<p>{post.id}</p>
											</div>
											<div className="w-28 text-nowrap px-2">
												<p>{format}</p>
											</div>
											<div className="flex-1 px-4 truncate overflow-ellipsis whitespace-nowrap min-w-48 ">
												<p>{post.title}</p>
											</div>
											<div className="w-10 px-2 mr-2">
												<Link
													className="block"
													href={`/panel/edytuj-post/${post.id}`}
													title="Edytuj post"
													aria-label="Edytuj post">
													<FaEdit className="size-6 xl:size-8 hover:text-yellow-600 text-yellow-500 duration-300 transition-colors" />
												</Link>
											</div>
										</div>
									)
								})
							) : (
								<p className="pt-7 text-lg font-bold text-center">Brak Dodanych postów</p>
							)}
						</div>
					</div>
				</SettingsBox>
			</div>
		</section>
	)
}

export default page
