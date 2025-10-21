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
		<div
			id="whyUs"
			className="relative overflow-hidden mx-2 sm:mx-4 md:mx-5 mb-5 mt-10 rounded-2xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
			{/* Video Background */}
			<div className="absolute inset-0 w-full h-full">
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="none"
					className="absolute inset-0 w-full h-full object-cover"
					crossOrigin="anonymous">
					<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
				</video>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/50"></div>
			</div>

			<div
				className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
				ref={sectionRef}>
				{/* Elegant Hero Section */}
				<div
					className={`text-center  transform transition-all duration-1500 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
					}`}>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light font-montserrat mb-4 sm:mb-6 md:mb-8 tracking-tight leading-none">
						<span className="text-white">Dlaczego</span>
						<br />
						<span className="text-white font-extralight">warto wybrać ARGO?</span>
					</h1>

					<div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
						<p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed font-light font-inter mb-6 sm:mb-8">
							Jako lider w facility management i obsłudze technicznej obiektów, dbamy o bezawaryjne funkcjonowanie
							budynków i instalacji. Nasze usługi obejmują diagnostykę techniczną, maintenance maszyn i urządzeń oraz
							tworzenie kompletnej dokumentacji technicznej, aby zapewnić maksymalne bezpieczeństwo i efektywność Twojej
							infrastruktury.
						</p>

						<div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8 sm:mb-10 md:mb-12"></div>

						<Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/70 mx-auto mb-4 sm:mb-6" />
						<p className="text-sm sm:text-base md:text-lg text-white/80 italic font-light font-inter max-w-2xl mx-auto">
							&quot;Profesjonalna obsługa techniczna obiektów to nasza specjalność, a spokój klienta — nasz
							priorytet.&quot;
						</p>
					</div>

					<div className="flex justify-center">
						<button className="group flex items-center gap-2 sm:gap-3 text-white hover:text-blue-300 transition-colors duration-500 text-sm sm:text-base md:text-lg font-light font-inter">
							<span>Skontaktuj się z nami</span>
							<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-500" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroAboutSection
