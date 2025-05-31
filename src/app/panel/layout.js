import PanelHeader from '../_components/ui/PanelHeader'
import PanelNavigation from '../_components/ui/PanelNavigation'
import { Toaster } from 'react-hot-toast'

async function layout({ children }) {
	return (
		<>
			<Toaster
				position={'top-right'}
				gutter={12}
				containerStyle={{
					marginTop: '14px',
					marginRight: '12px',
				}}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 3000,
						style: {
							color: '#ef4444',
						},
					},
					loading: { duration: 3000 },

					style: {
						fontSize: '14px',
						padding: '12px 16px',
						backgroundColor: '#f1f5f9',
						color: '#2e4fbb',
						border: '1px solid #f3f4f6',
						WebkitBoxShadow: '0px 2px 12px 0px #bae6fd',
						MozBoxShadow: '0px 2px 12px 0px #bae6fd',
						boxShadow: '0px 2px 12px 0px #bae6fd',
						fontFamily: 'nunito Sans',
						textAlign: 'center',
						width: '318px',
					},
				}}
			/>
			<div className="flex h-dvh lg:h-screen flex-col-reverse bg-slate-50 lg:flex-row relative">
				<PanelNavigation />
				<div className="w-full flex-1 overflow-y-auto lg:flex lg:flex-col scrollbar-thin scrollbar-track-primary scrollbar-thumb-primary2">
					<PanelHeader />

					<main className="w-full flex-1 py-6   xl:py-8 2xl:py-10">
						<div className="xl:container xl:mx-auto xl:max-w-[1440px]">{children}</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default layout
