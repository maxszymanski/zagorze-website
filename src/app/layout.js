import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Footer from './_components/home/Footer'

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
				{children}
				<Footer />
			</body>
		</html>
	)
}
