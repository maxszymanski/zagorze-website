import { MdArticle, MdDashboard, MdSignpost } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa6'
import { RiImageAddFill } from 'react-icons/ri'
import PanelLinkNav from './PanelLinkNav'

function PanelNavigation() {
	return (
		<nav className="flex items-center overflow-y-auto bg-slate-200 px-1 lg:m-2 lg:flex-col lg:rounded-3xl lg:px-4 lg:py-12 xl:my-4 xl:ml-4 2xl:px-8 scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
			<div className="hidden object-contain lg:block">
				<p className="uppercase font-bold text-5xl text-gray-700 pb-32">admin</p>
			</div>
			<ul className="flex w-full items-center justify-around lg:flex-1 lg:flex-col lg:items-stretch lg:justify-start lg:gap-5 lg:py-8">
				<PanelLinkNav href="/panel">
					<MdDashboard className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Panel</span>
				</PanelLinkNav>
				<PanelLinkNav href="/panel/na-skroty">
					<MdSignpost className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Na Skróty</span>
				</PanelLinkNav>
				<PanelLinkNav href="/panel/posty">
					<MdArticle className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Moje posty</span>
				</PanelLinkNav>
				<PanelLinkNav href="/panel/dodaj-post">
					<FaPlus className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Dodaj post</span>
				</PanelLinkNav>
				<PanelLinkNav href="/panel/galeria">
					<RiImageAddFill className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />{' '}
					<span className="hidden lg:block">Dodaj zdjęcia</span>
				</PanelLinkNav>
				<PanelLinkNav href="/panel/ustawienia">
					<IoMdSettings className="size-7 flex-shrink-0 lg:mr-4 lg:size-8" />
					<span className="hidden lg:block">Ustawienia</span>
				</PanelLinkNav>
			</ul>
		</nav>
	)
}

export default PanelNavigation
