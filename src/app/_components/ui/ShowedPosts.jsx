'use client'
import { useState } from 'react'
import NewsCard from './NewsCard'
import NavigationLink from './NavigationLink'

function ShowedPosts({ posts }) {
	const [visibleCount, setVisibleCount] = useState(5)

	const handleLoadMore = () => {
		setVisibleCount(prevCount => prevCount + 5)
	}

	return (
		<div className=" w-full flex flex-col gap-12 lg:gap-16 ">
			{posts.slice(0, visibleCount).map(post => (
				<NewsCard large key={post.id} post={post} />
			))}
			{visibleCount < posts.length && <NavigationLink onClick={handleLoadMore}>Pokaż więcej</NavigationLink>}
		</div>
	)
}

export default ShowedPosts
