'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Zamknij menu po kliknięciu poza nim
	useEffect(() => {
		const handleClickOutside = event => {
			if (isMenuOpen && !event.target.closest('.menu-container')) {
				setIsMenuOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [isMenuOpen])

	return (
		<>
			<style jsx>{`
				.hero-video-transition {
					transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
				}
				.hero-content-transition {
					transition: opacity 1s ease-in-out, transform 1s cubic-bezier(0.4, 0, 0.2, 1);
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: scale(0.95);
					}
					to {
						opacity: 1;
						transform: scale(1);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.8s ease-out forwards;
				}
			`}</style>

			<section className="relative w-full h-screen bg-white p-2 sm:p-4 font-inter">
				{/* Hamburger Menu */}
				<div className="menu-container">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 border border-gray-200">
						<div className="w-6 h-5 flex flex-col justify-between">
							<span
								className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
									isMenuOpen ? 'rotate-45 translate-y-2' : ''
								}`}></span>
							<span
								className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
									isMenuOpen ? 'opacity-0' : ''
								}`}></span>
							<span
								className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
									isMenuOpen ? '-rotate-45 -translate-y-2' : ''
								}`}></span>
						</div>
					</button>

					{isMenuOpen && (
						<div className="fixed top-16 right-4 sm:top-20 sm:right-6 z-40 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px] sm:min-w-[200px] transition-all duration-300">
							<a href="#whyUs" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								Dlaczego My
							</a>
							<a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								O firmie
							</a>
							<a href="#services" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								Usługi
							</a>
							<a href="/kontakt" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								Kontakt
							</a>
						</div>
					)}
				</div>

				{/* Container z video w tle */}
				<div className="relative w-full h-full rounded-2xl overflow-hidden">
					{/* Video background - pełna szerokość */}
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
					<div className="absolute inset-0 bg-black/20" />

					{/* Biała sekcja z treścią - wycentrowana */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] h-[95%] bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col hero-content-transition z-10">
						{/* Logo i ARGO na górze - wyśrodkowane */}
						<div className="flex flex-col items-center mb-8">
							<div className="hover-lift">
								<img
									src="/logobez.png"
									alt="Argo logo"
									width="200"
									height="150"
									className="h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] object-contain"
									onError={e => (e.currentTarget.style.display = 'none')}
								/>
							</div>
						</div>

						{/* Treść w środku */}
						<div className="flex-grow flex flex-col justify-center space-y-6">
							<div className="overflow-hidden">
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-gray-900 mb-4 sm:mb-6 leading-tight text-center">
									Profesjonalna obsługa i kontrola techniczna Twojego obiektu
								</h2>
							</div>
							<div className="overflow-hidden">
								<p className="text-sm sm:text-base md:text-lg font-inter text-gray-600 mb-6 sm:mb-8 leading-relaxed text-center">
									Dbamy o obsługę techniczną obiektów na najwyższym poziomie, zapewniając kompleksową obsługę obiektów i
									pełne bezpieczeństwo instalacji przemysłowych. Jesteśmy Twoim pewnym partnerem w FM outsourcingu,
									konserwacji (maintenance) urządzeń oraz codziennej diagnostyce technicznej, dzięki czemu Twój obiekt
									działa niezawodnie.
								</p>
							</div>
							<div className="flex justify-center ">
								<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold font-inter py-3 px-6 sm:py-4 sm:px-10 rounded-xl transition-all duration-300 shadow-lg hover-lift hover-glow text-sm sm:text-base">
									<span className="flex items-center gap-2 sm:gap-3">
										O Nas
										<svg
											className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
