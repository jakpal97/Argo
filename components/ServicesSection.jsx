'use client'

import React from 'react'

const ServicesSection = () => {
	const services = [
		{
			title: 'Systemy Sygnalizacji Pożaru',
			description:
				'Nowoczesne systemy detekcji i alarmowania pożarowego. Zapewniamy kompleksową ochronę przeciwpożarową z zastosowaniem najnowszych technologii detekcji dymu, ciepła i płomieni.',
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
					/>
				</svg>
			),
		},
		{
			title: 'Systemy Monitoringu CCTV',
			description:
				'Profesjonalne systemy nadzoru wizyjnego z możliwością zdalnego monitoringu. Oferujemy kamery wysokiej rozdzielczości z funkcjami analizy wideo i zapisem w chmurze.',
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
					<circle cx="8" cy="10" r="2" />
					<path d="m9 17 3-3.3L15 17" />
				</svg>
			),
		},
		{
			title: 'Systemy Kontroli Dostępu',
			description:
				'Zaawansowane rozwiązania kontroli dostępu z czytnikami kart, biometrią i systemami zarządzania. Pełna kontrola nad wejściami i wyjściami w Twoim obiekcie.',
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 12h.01M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14M2 20h8M20 17v-2a2 2 0 1 0-4 0v2"
					/>
					<rect x="14" y="17" width="8" height="5" rx="1" />
				</svg>
			),
		},
		{
			title: 'Systemy Alarmowe',
			description:
				'Kompleksowe systemy zabezpieczeń antywłamaniowych z czujnikami ruchu, kontaktronami i centralami alarmowymi. Zapewniamy 24/7 monitoring i szybką reakcję.',
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
					/>
				</svg>
			),
		},
		{
			title: 'Systemy Ochrony Peryferii',
			description:
				'Zaawansowane systemy ochrony terenu z czujnikami podczerwieni, kamerami termowizyjnymi i barierami podczerwieni. Skuteczna ochrona granic Twojej własności.',
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
					/>
					<circle cx="16" cy="7" r="5" />
				</svg>
			),
		},
		{
			title: 'Inteligentne Systemy Budynkowe',
			description:
				'Nowoczesne rozwiązania automatyki budynkowej z integracją systemów oświetlenia, klimatyzacji i bezpieczeństwa. Zarządzanie budynkiem w jednym systemie.',
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"
					/>
				</svg>
			),
		},
	]

	return (
		<section id="services" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nasze Usługi</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Oferujemy kompleksowe rozwiązania w zakresie systemów bezpieczeństwa, dostosowane do indywidualnych potrzeb
						każdego klienta.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] flex flex-col h-full">
							<div className="flex items-center mb-6">
								<div className="text-blue-600 mr-4">{service.icon}</div>
								<h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
									{service.title}
								</h3>
							</div>

							<p className="text-gray-600 leading-relaxed mb-8 flex-grow">{service.description}</p>

							
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
