import AddNewShort from '@/app/_components/ui/AddNewShort'
import EditShort from '@/app/_components/ui/EditShort'
import SettingsBox from '@/app/_components/ui/SettingsBox'
import { getShorts } from '@/app/_lib/data-service'
import { FaEdit } from 'react-icons/fa'

async function page() {
	const shorts = await getShorts()

	return (
		<section className="w-full px-4 lg:px-6 pb-8">
			<h1 className="text-yellow-500 text-3xl text-center font-semibold mb-12 xl:mb-20">Na skróty</h1>
			<div
				className="flex flex-col justify-center items-center  w-full gap-8 md:gap-14
			">
				<SettingsBox title="Moje skróty" long>
					<div className="w-full border border-slate-200">
						{shorts.length > 0 && (
							<div className="w-full flex  items-center justify-start border-b border-slate-200 py-3 text-center font-extrabold text-gray-800 lg:text-lg xl:text-xl lg:py-5 bg-slate-50">
								<div className="w-14">
									<p>ID</p>
								</div>
								<div className="w-28 text-nowrap">
									<p>Nazwa </p>
								</div>
								<div className="flex-1 min-w-48">
									<p>Link</p>
								</div>
								<div className="w-10"></div>
							</div>
						)}
						<div className="w-full flex flex-col overflow-x-auto divide-y divide-slate-200">
							{shorts.length > 0 ? (
								shorts.map(short => {
									return (
										<div
											className="w-full flex  items-center justify-start  py-5 text-center font-semibold text-gray-700 lg:text-lg bg-white md:hover:bg-slate-100 transition-colors duration-300"
											key={short.id}>
											<div className="w-14 px-2">
												<p>{short.id}</p>
											</div>
											<div className="w-28 text-nowrap px-2 truncate overflow-ellipsis whitespace-nowrap">
												<p>{short.title}</p>
											</div>
											<div className="flex-1 px-4 truncate overflow-ellipsis whitespace-nowrap min-w-48 ">
												<p>{short.href}</p>
											</div>
											<div className="w-10 px-2 mr-2">
												<EditShort short={short} />
											</div>
										</div>
									)
								})
							) : (
								<p className="pt-7 text-lg font-bold text-center">Brak dodanych linków</p>
							)}
						</div>
					</div>
				</SettingsBox>
				<SettingsBox title="Dodaj nowy skrót" long>
					<AddNewShort />
				</SettingsBox>
			</div>
		</section>
	)
}

export default page
