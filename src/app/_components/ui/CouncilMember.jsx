import Image from 'next/image'
import Man from '@/assets/member-man.webp'
import Woman from '@/assets/member-woman.webp'

function CouncilMember({ gender = 'man', name, role = 'Sołtys' }) {
	return (
		<div className="w-full max-w-[250px] ">
			<div className="relative h-[250px] w-[250px] rounded-full overflow-hidden z-10">
				<Image
					src={gender == 'man' ? Man : Woman}
					fill
					className="object-cover aspect-square"
					alt="zdjęcie członka rady"
				/>
			</div>
			<div className="bg-white -mt-12 px-4 py-6 text-lg font-bold text-center rounded-lg relative z-20">
				<p className="text-gray-800 mb-1">{name}</p>
				<p className="text-yellow-500">{role}</p>
			</div>
		</div>
	)
}

export default CouncilMember
