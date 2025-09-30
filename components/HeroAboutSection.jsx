'use client'
import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Quote } from 'lucide-react'

const HeroAboutSection = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		setIsVisible(true)
	}, [])

	return (
		<div className="relative  overflow-hidden m-5 rounded-2xl">
			{/* Video Background */}
			<div className="absolute inset-0 w-full h-full">
				<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" crossOrigin="anonymous">
					<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
				</video>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-8 py-24" ref={sectionRef}>
				{/* Elegant Hero Section */}
				<div
					className={`text-center  transform transition-all duration-1500 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
					}`}>
					<h1 className="text-6xl md:text-8xl font-light mb-8 tracking-tight leading-none">
						<span className="text-white">Dlaczego</span>
						<br />
						<span className="text-white font-extralight">Firma ARGO?</span>
					</h1>

					<div className="max-w-4xl mx-auto mb-16">
						<p className="text-xl md:text-2xl text-white leading-relaxed font-light mb-8">
							Nie tylko dostarczamy systemy bezpieczeństwa — jesteśmy partnerem, który dba o spokój i bezpieczeństwo
							naszych klientów.
						</p>

						<div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-12"></div>

						<Quote className="w-8 h-8 text-white/70 mx-auto mb-6" />
						<p className="text-lg text-white/80 italic font-light max-w-2xl mx-auto">
							"Bezpieczeństwo to nasza pasja, a satysfakcja klienta — nasz priorytet"
						</p>
					</div>

					<div className="flex justify-center">
						<button className="group flex items-center gap-3 text-white hover:text-blue-300 transition-colors duration-500 text-lg font-light">
							<span>Skontaktuj się z nami</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroAboutSection
