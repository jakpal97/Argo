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
	metadataBase: new URL('https://argo-system.pl'),
	icons: {
		icon: [{ url: '/logobez.png', type: 'image/png' }],
		apple: [{ url: '/logobez.png', sizes: '180x180', type: 'image/png' }],
		shortcut: '/logobez.png',
	},
	title: {
		default: 'ARGO System | Facility Management & Obsługa Techniczna Nieruchomości',
		template: '%s | ARGO System',
	},
	description:
		'Profesjonalny Facility Management i obsługa techniczna budynków. Audyty bezpieczeństwa, serwis maszyn, pomiary elektryczne. Działamy na terenie Śląska (Katowice, Gliwice) i całej Polski. Ponad 15 lat doświadczenia.',
	keywords: [
		'Facility Management',
		'Facility Management Śląsk',
		'Obsługa techniczna budynków',
		'Serwis techniczny Katowice',
		'Pomiary elektryczne Śląsk',
		'Utrzymanie ruchu',
		'Audyty techniczne',
		'Maintenance maszyn',
		'FM outsourcing',
		'Obsługa techniczna obiektów',
		'Przeglądy instalacji',
		'Diagnostyka techniczna',
	],
	authors: [{ name: 'ARGO System' }],
	creator: 'ARGO System',
	publisher: 'ARGO System',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		url: 'https://argo-system.pl',
		siteName: 'ARGO System',
		title: 'ARGO System | Facility Management & Obsługa Techniczna',
		description:
			'Profesjonalny Facility Management i obsługa techniczna budynków. Audyty, serwis maszyn, pomiary elektryczne. Działamy na Śląsku i w całej Polsce.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'ARGO System - Facility Management',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ARGO System | Facility Management & Obsługa Techniczna',
		description:
			'Profesjonalny Facility Management i obsługa techniczna budynków. Audyty, serwis maszyn, pomiary elektryczne.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		// google: 'your-google-verification-code',
		// yandex: 'your-yandex-verification-code',
	},
	alternates: {
		canonical: 'https://argo-system.pl',
	},
}

// JSON-LD Structured Data dla SEO
const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'ARGO System',
	description: 'Profesjonalny Facility Management i obsługa techniczna budynków',
	url: 'https://argo-system.pl',
	logo: 'https://argo-system.pl/logobez.png',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+48-123-456-789',
		contactType: 'customer service',
		availableLanguage: ['Polish'],
	},
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'ul. Przykładowa 123',
		addressLocality: 'Warszawa',
		postalCode: '00-000',
		addressCountry: 'PL',
	},
	sameAs: [
		// 'https://www.facebook.com/argosystem',
		// 'https://www.linkedin.com/company/argosystem',
	],
	areaServed: {
		'@type': 'Country',
		name: 'Poland',
	},
	serviceType: [
		'Facility Management',
		'Obsługa techniczna budynków',
		'Audyty techniczne',
		'Serwis maszyn i urządzeń',
		'Pomiary elektryczne',
	],
}

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<meta name="google-site-verification" content="haZztW2UvBuXX2npbq4pW1Ym5tTph4SuGH7KEWEaxWw" />
			</head>
			<body className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-slate-900`}>{children}</body>
		</html>
	)
}
