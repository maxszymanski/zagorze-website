import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const poppins = Nunito_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
	title: {
		template: '%s | Sołectwo Zagórze',
		default: 'Sołectwo Zagórze',
	},
	description: 'Sołectwo Zagórze - Strona internetowa sołectwa Zagórze',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} relative h-full min-h-dvh lg:min-h-screen bg-white`}>
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
					{children}
				</>
			</body>
		</html>
	)
}
