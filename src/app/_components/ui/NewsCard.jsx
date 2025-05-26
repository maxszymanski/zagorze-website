import Image from 'next/image'
import Link from 'next/link'
import Test from '@/assets/test.png'

function NewsCard() {
	return (
		<Link
			href="/news"
			className="bg-white shadow-lg shadow-gray-300  pb-4  w-full border border-gray-200 rounded-xl hover:shadow-gray-500  transition-shadow duration-300 ease-in-out flex flex-col  max-w-[400px]  mx-auto lg:max-w-full lg:flex-row lg:gap-4 lg:pb-0 lg:items-stretch xl:gap-12">
			<div className="w-full max-w-[400px] mx-auto relative z-10 ">
				<Image src={Test} height={522} width={400} alt="Zdjęcie artykułu" className="rounded-t-xl lg:hidden" />
				<Image
					src={Test}
					height={230}
					width={570}
					alt="zdjęcie artykułu"
					className="rounded-xl hidden lg:block lg:h-full"
				/>
			</div>
			<div className="w-full py-4 px-4 lg:pb-7">
				<h3 className="text-xl leading-[150%] font-bold text-gray-800 lg:text-2xl lg:leading-[150%]">
					Wybory sołtysa i rady sołeckiej na kadencję 2024 – 2029
				</h3>
				<p className="text-gray-600 text-sm mt-4 leading-[160%] overflow-ellipsis whitespace-normal line-clamp-4 lg:max-w-[85%] lg:text-base">
					W imieniu organizatorów Rady Sołeckiej, koła gospodyń wiejskich Nowe Czepinianki oraz własnym , mam
					przyjemność zaprosić mieszkańców naszego sołectwa na tradycyjną wspólną wigilię. Wigilia odbędzie
					się w dniu 14.12.24 o godzinie 16:00 w świetlicy wiejskiej w Nowym Czepinie.
				</p>
				<div className="w-full pl-2 pt-6">
					<p className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-10 py-1.5 rounded-2xl  inline-block ">
						Więcej
					</p>
				</div>
			</div>
		</Link>
	)
}

export default NewsCard
