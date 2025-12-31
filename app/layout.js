
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
	subsets: ['latin', 'latin-ext'], // latin-ext dla polskich znaków
	variable: '--font-inter',
  })
  
  const montserrat = Montserrat({ 
	subsets: ['latin', 'latin-ext'],
	variable: '--font-montserrat',
  })

  export const metadata = {
	title: 'ARGO System | Obsługa Techniczna Nieruchomości Śląsk & Polska',
	description: 'Profesjonalny Facility Management i obsługa techniczna budynków. Audyty, serwis maszyn, pomiary elektryczne. Działamy na terenie Śląska (Katowice, Gliwice) i całej Polski.',
	keywords: ['Facility Management Śląsk', 'Obsługa techniczna budynków', 'Serwis techniczny Katowice', 'Pomiary elektryczne Śląsk', 'Utrzymanie ruchu'],
  }

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-slate-900`}>
				{children}
			</body>
		</html>
	)
}
