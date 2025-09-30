import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
	title: 'ARGO - Systemy Bezpieczeństwa',
	description: 'Profesjonalne systemy bezpieczeństwa - instalacje, przeglądy techniczne, serwis',
}

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<body className={`${spaceGrotesk.variable} font-sans antialiased bg-white text-slate-900`}>{children}</body>
		</html>
	)
}
