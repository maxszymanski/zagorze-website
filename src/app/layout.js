import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import 'animate.css'

const nunito = Nunito_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
	title: {
		template: '%s | Sołetwo Zagórze',
		default: 'Sołetwo Zagórze',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${nunito.className} relative h-full min-h-dvh lg:min-h-screen bg-white`}>{children}</body>
		</html>
	)
}
