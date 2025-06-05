import NavigationLink from './NavigationLink'

function MoreNews({ posts, shorts }) {
	return (
		<div className="w-full pt-12 md:pt-0 flex-shrink-1 md:max-w-[300px] xl:max-w-[400px] md:sticky md:top-6">
			<div className="flex items-center justify-center gap-3 pb-6">
				<div className="h-[1px] w-8 bg-gray-300"></div>
				<p className="text-yellow-500 font-semibold text-2xl sm:text-3xl md:text-2xl xl:text-3xl">
					Ostatnio dodane
				</p>
				<div className="h-[1px] w-8 bg-gray-300"></div>
			</div>

			<ul className="w-full divide-y divide-stone-300  flex flex-col justify-start">
				{posts.map(post => (
					<NavigationLink
						key={post.id}
						href={`/aktualnosci/${post.slug}`}
						restClass="!text-left truncate overflow-ellipsis whitespace-nowrap   ">
						{post.title}
					</NavigationLink>
				))}
				<NavigationLink href="/" restClass="!text-left truncate overflow-ellipsis whitespace-nowrap   ">
					Wigilia w Sołectwie
				</NavigationLink>

				<NavigationLink href="/" restClass="!text-left truncate overflow-ellipsis whitespace-nowrap   ">
					Dzień Dziecka
				</NavigationLink>
				<NavigationLink href="/" restClass="!text-left truncate overflow-ellipsis whitespace-nowrap  ">
					Zalecamy objazd
				</NavigationLink>
				<NavigationLink href="/" restClass="!text-left truncate overflow-ellipsis whitespace-nowrap   ">
					Angry Drone Gryfino – nie tylko zdjęcia
				</NavigationLink>
			</ul>

			<div className="flex items-center justify-center gap-3 pb-6 pt-10">
				<div className="h-[1px] w-8 bg-gray-300"></div>
				<p className="text-yellow-500 font-semibold text-2xl sm:text-3xl">Na skróty</p>
				<div className="h-[1px] w-8 bg-gray-300"></div>
			</div>
			<ul className="w-full divide-y divide-stone-300  flex flex-col justify-start">
				{shorts.map(short => (
					<NavigationLink
						key={short.id}
						href={short.href}
						restClass="truncate overflow-ellipsis whitespace-nowrap">
						{short.title}
					</NavigationLink>
				))}
			</ul>
		</div>
	)
}

export default MoreNews
