import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-inter',
})

const montserrat = Montserrat({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-montserrat',
})

export const metadata = {
	metadataBase: new URL('https://www.argo-system.pl'),
	icons: {
		icon: [{ url: '/logobez.png', type: 'image/png' }],
		apple: [{ url: '/logobez.png', sizes: '180x180', type: 'image/png' }],
		shortcut: '/logobez.png',
	},
	title: {
		default: 'Facility Management Śląsk | Obsługa Techniczna Obiektów | ARGO System',
		template: '%s | ARGO System',
	},
	description:
		'Kompleksowy facility management na Śląsku. Obsługa techniczna biurowców, hal produkcyjnych i zakładów. SLA poniżej 4h, serwis 24/7. Bezpłatna wycena w 24h — bez zobowiązań.',
	keywords: [
		'Facility Management Śląsk',
		'Facility Management Katowice',
		'Obsługa techniczna obiektów komercyjnych',
		'Obsługa techniczna budynków',
		'Serwis techniczny Katowice',
		'Przegląd instalacji elektrycznej',
		'Pomiary elektryczne Śląsk',
		'Utrzymanie techniczne obiektów',
		'Audyty techniczne budynków',
		'Maintenance maszyn',
		'FM outsourcing Śląsk',
		'Przeglądy budynków 5-letnie',
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
		url: 'https://www.argo-system.pl',
		siteName: 'ARGO System',
		title: 'Facility Management Śląsk | Obsługa Techniczna Obiektów | ARGO System',
		description:
			'Kompleksowy facility management na Śląsku. Obsługa techniczna biurowców, hal i zakładów produkcyjnych. SLA <4h, serwis 24/7. Bezpłatna wycena.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'ARGO System - Facility Management Śląsk',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Facility Management Śląsk | Obsługa Techniczna Obiektów | ARGO System',
		description:
			'Kompleksowy facility management na Śląsku. Obsługa techniczna biurowców, hal i zakładów. SLA <4h, serwis 24/7.',
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
	alternates: {
		canonical: 'https://www.argo-system.pl',
	},
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'ARGO System',
	description:
		'Kompleksowy facility management i obsługa techniczna obiektów komercyjnych na Śląsku. SLA poniżej 4h, serwis 24/7.',
	url: 'https://www.argo-system.pl',
	logo: 'https://www.argo-system.pl/logobez.png',
	telephone: '+48517463469',
	email: 'rdomagalski@argo-system.pl',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+48-517-463-469',
		contactType: 'customer service',
		availableLanguage: ['Polish'],
		hoursAvailable: 'Mo-Su 00:00-24:00',
	},
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Katowice',
		addressRegion: 'Śląsk',
		addressCountry: 'PL',
	},
	areaServed: [
		'Katowice',
		'Gliwice',
		'Zabrze',
		'Bytom',
		'Tychy',
		'Dąbrowa Górnicza',
		'Sosnowiec',
		'Śląsk',
		'Polska',
	],
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '00:00',
		closes: '23:59',
	},
	sameAs: [],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Usługi Facility Management',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Facility Management',
					description: 'Kompleksowa obsługa techniczna obiektów komercyjnych na Śląsku',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Przegląd instalacji elektrycznej',
					description: 'Okresowe przeglądy i pomiary elektryczne obiektów przemysłowych i komercyjnych',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Serwis maszyn i urządzeń',
					description: 'Utrzymanie ruchu, diagnostyka i serwis maszyn produkcyjnych na Śląsku',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Audyty techniczne budynków',
					description: 'Przeglądy 5-letnie, audyty energetyczne i termowizja przemysłowa',
				},
			},
		],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="pl">
			<head>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<meta name="google-site-verification" content="haZztW2UvBuXX2npbq4pW1Ym5tTph4SuGH7KEWEaxWw" />
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-BHHCJCQTRE" strategy="afterInteractive" />
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-BHHCJCQTRE');
					`}
				</Script>
				<Script src="https://www.googletagmanager.com/gtag/js?id=AW-18005751711" strategy="afterInteractive" />
				<Script id="google-ads-init" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'AW-18005751711');
					`}
				</Script>
				<Script
					id="clarity-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "w3rmch45b7");`,
					}}
				/>
			</head>
			<body className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-slate-900`}>
				{children}
			</body>
		</html>
	)
}