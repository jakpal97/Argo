'use client'
import React, { useState, useEffect, useRef } from 'react'

const ServicesSection = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [scrollY, setScrollY] = useState(0)
	const sectionRef = useRef(null)

	useEffect(() => {
		setIsVisible(true)

		const handleMouseMove = e => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}

		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Ikony systemów bezpieczeństwa
	const icons = [
		{
			icon: (
				<svg
					className="w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
				</svg>
			),
			title: 'Systemy Sygnalizacji Pożaru',
			description:
				'Sygnalizacja pożaru to nie tylko wymóg prawny ale również kluczowy element zapewniania bezpieczeństwa w przypadku zagrożenia życia i mienia. Nasze systemy sygnalizacji pożaru są zaprojektowane tak, aby szybko wykrywać nawet najmniejsze oznaki pożaru i natychmiast informować personel oraz służby ratownicze.',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
					<path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
					<path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
					<path d="M2 21v-4" />
					<path d="M7 9h.01" />
				</svg>
			),
			title: 'Systemy Monitoringu CCTV',
			description:
				'Monitorowanie wizualne jest skutecznym narzędziem do śledzenia przestrzeni oraz monitorowania ruchu osób w danym obiekcie. Nasze systemy monitoringu CCTV pozwalają na ciągłą obserwację, nagrywanie zdarzeń oraz identyfikację intruzów, zapewniając dodatkową warstwę ochrony.',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M10 12h.01" />
					<path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
					<path d="M2 20h8" />
					<path d="M20 17v-2a2 2 0 1 0-4 0v2" />
					<rect x="14" y="17" width="8" height="5" rx="1" />
				</svg>
			),
			title: 'Systemy Kontroli Dostępu',
			description:
				'Zarządzanie dostępem do różnych stref w budynku czy kluczowe dla bezpieczeństwa, szczególnie w obiektach o dużej liczbie pracowników lub klientów. Nasze systemy kontroli dostępu umożliwiają efektywne zarządzanie oraz śledzenie aktywności użytkowników, zwiększając ogólne bezpieczeństwo i kontrolę.',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M10.268 21a2 2 0 0 0 3.464 0" />
					<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
				</svg>
			),
			title: 'Systemy Alarmowe',
			description:
				'Natychmiastowe powiadomienie o próbie włamania, kradzieży lub innym zagrożeniu jest kluczowe do szybkiej reakcji personelu. Nasze systemy alarmowe reagują na wszelkie niebezpieczeństwa generowane przez czujniki dźwiękowe i wizualne, które ostrzegają personel i odstraszają potencjalnych intruzów.',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
					<path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
					<circle cx="16" cy="7" r="5" />
				</svg>
			),
			title: 'Systemy Dźwiękowego Ostrzegania',
			description:
				'W sytuacjach awaryjnych czy zagrożenia, skuteczne ostrzeżenie jest kluczowe dla bezpiecznej ewakuacji i reakcji personelu. Nasze systemy dźwiękowego ostrzegania są zoptymalizowane pod kątem jasnych i zrozumiałych komunikatów, które informują o zagrożeniu i kierują działaniami ewakuacyjnymi.',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
					<path d="M9 18h6" />
					<path d="M10 22h4" />
				</svg>
			),
			title: 'Systemy Oświetlenia Awaryjnego',
			description:
				'W przypadku awarii zasilania lub innych nagłych sytuacji, utrzymanie odpowiedniego poziomu oświetlenia staje się kluczowe dla bezpiecznej ewakuacji i działania służb ratowniczych. Nasze systemy oświetlenia awaryjnego automatycznie włączają się w przypadku utraty zasilania, zapewniając widoczność i orientację nawet w warunkach ograniczonej widoczności.',
		},
	]

	return (
		<div className="relative min-h-screen bg-white overflow-hidden">
			{/* Elegant Background Elements */}
			

			<div className="relative z-10 max-w-7xl mx-auto px-8 pb-24" ref={sectionRef}>
				
				{/* Elegant Hero Section */}
				<div
					className={`text-center mb-32 transform transition-all duration-1500 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
					}`}>
					<h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight leading-none">
						<span className="text-black">Systemy</span>
					</h1>

					<div className="max-w-4xl mx-auto mb-16">
						<div className="text-lg text-black mb-4 font-medium">
							Bezpieczeństwo w Biznesie: Kluczowa Rola Systemów Bezpieczeństwa
						</div>
						<p className="text-base text-black max-w-4xl mx-auto leading-relaxed">
							W dzisiejszych czasach zapewnienie bezpieczeństwa w miejscach pracy i obiektach użyteczności publicznej
							jest niezwykle istotne. Zarówno dla pracowników, jak i klientów, poczucie bezpieczeństwa stanowi fundament
							stabilnego i funkcjonującego środowiska biznesowego. W tym kontekście firma ARGO stawia sobie za cel
							dostarczanie kompleksowych rozwiązań bezpieczeństwa, które nie tylko chronią przed różnego rodzaju
							zagrożeniami, ale również zapewniają spokój i pewność w codziennej działalności.
						</p>
					</div>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{icons.map((service, index) => (
						<div
							key={index}
							className="group p-8 bg-white/50 backdrop-blur-xl rounded-3xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] flex flex-col h-full">
							{/* Icon */}
							<div className="flex justify-center mb-6">
								<div className="p-4 bg-blue-100/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
									<div className="text-blue-600">{service.icon}</div>
								</div>
							</div>

							{/* Title */}
							<h3 className="text-xl font-light text-black mb-4 group-hover:text-blue-900 transition-colors duration-500 tracking-wide text-center">
								{service.title}
							</h3>

							{/* Description */}
							<p className="text-black leading-relaxed font-light mb-6 flex-grow text-center">{service.description}</p>

							{/* CTA Button */}
							<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-light py-3 px-6 rounded-2xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl mt-auto">
								Dowiedz się więcej
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ServicesSection


