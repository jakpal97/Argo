'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const menuItems = [
		{ name: 'Usługi', href: '#services' },
		{ name: 'O nas', href: '#about' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'Portfolio', href: '#portfolio' },
	]

	return (
		<footer className="relative overflow-hidden">
			{/* Video Background */}
			<div className="absolute inset-0 w-full h-full">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
					crossOrigin="anonymous">
					<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
				</video>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/70"></div>
			</div>

			{/* Footer Content */}
			<div className="relative z-10 text-white">
				{/* Main Footer Section */}
				<div className="max-w-7xl mx-auto px-8 py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						{/* Logo and Company Description */}
						<div>
							<div className="flex items-center space-x-3 mb-6">
								<img
									src="/logobez.png"
									alt="Argo logo"
									className="h-12 object-contain"
									onError={e => (e.currentTarget.style.display = 'none')}
								/>
								<span className="text-2xl font-bold font-montserrat">ARGO</span>
							</div>
							<p className="text-gray-300 leading-relaxed font-inter">
								Jako lider w facility management i obsłudze technicznej obiektów, dbamy o bezawaryjne funkcjonowanie
								budynków i instalacji. Nasze usługi obejmują diagnostykę techniczną, maintenance maszyn i urządzeń oraz
								tworzenie kompletnej dokumentacji technicznej, aby zapewnić maksymalne bezpieczeństwo i efektywność
								Twojej infrastruktury.
							</p>
						</div>

						{/* Navigation Menu */}
						<div className="md:flex md:justify-end">
							<nav className="flex flex-col space-y-4">
								{menuItems.map((item, index) => (
									<a
										key={index}
										href={item.href}
										className="text-lg font-inter text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-2 transform">
										{item.name}
									</a>
								))}
							</nav>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className=" backdrop-blur-sm">
					<div className="max-w-7xl mx-auto px-8 py-6">
						<div className="md:flex md:items-center md:justify-between">
							<div className="text-gray-400 text-sm font-inter">© {currentYear} ARGO. Wszystkie prawa zastrzeżone.</div>
							<div className="mt-4 md:mt-0">
								<div className="flex space-x-6 text-sm">
									<Link href="/polityka-prywatnosci" className="text-gray-400 font-inter hover:text-white transition-colors duration-200">
										Polityka prywatności
									</Link>
									<Link href="/regulamin" className="text-gray-400 font-inter hover:text-white transition-colors duration-200">
										Regulamin
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
