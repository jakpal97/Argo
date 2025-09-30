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

			<section className="relative w-full h-screen bg-white flex">
				{/* Hamburger Menu */}
				<div className="menu-container">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-300 border border-gray-200">
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
						<div className="fixed top-20 right-6 z-40 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px] transition-all duration-300">
							<a href="#services" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								Usługi
							</a>
							<a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								O nas
							</a>
							<a href="#contact" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								Kontakt
							</a>
							<a href="#portfolio" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
								Portfolio
							</a>
						</div>
					)}
				</div>

				{/* Video background */}
				<div
					className="relative hero-video-transition rounded-2xl  overflow-hidden"
					style={{
						width: '50%',
						height: 'calc(100vh) - 32px',
						margin: '16px 0 16px 16px',
					}}>
					<video
						autoPlay
						muted
						loop
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
						crossOrigin="anonymous">
						<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
					</video>
					<div className="absolute inset-0 bg-black/20" />
				</div>

				{/* Sekcja treści */}
				<div className="w-1/2 h-[calc(100vh-32px)] flex flex-col px-12 py-8 bg-gradient-to-br from-gray-50 to-white hero-content-transition rounded-tr-2xl">
					{/* Logo i ARGO na górze - wyśrodkowane */}
					<div className="flex flex-col items-center pt-8 mt-15">
						<div className="mb-6 animate-hero-scaleIn animate-delay-300 hover-lift">
							<img
								src="/logobez.png"
								alt="Argo logo"
								className="h-[120px] object-contain"
								onError={e => (e.currentTarget.style.display = 'none')}
							/>
						</div>
						<div className="text-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight font-bold select-none animate-hero-slideFromBottom animate-delay-500 mb-8 relative">
							<span className="block animate-text-reveal animate-delay-700">ARGO</span>
							<div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl opacity-0 animate-hero-glow animate-delay-900"></div>
						</div>
					</div>

					{/* Treść w środku */}
					<div className="flex-grow flex flex-col justify-center max-w-lg mx-auto">
						<div className="overflow-hidden">
							<h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight text-left animate-text-reveal animate-delay-700">
								Kompleksowe rozwiązania bezpieczeństwa
							</h2>
						</div>
						<div className="overflow-hidden">
							<p className="text-lg text-gray-600 mb-8 leading-relaxed text-left animate-hero-slideFromLeft animate-delay-900">
								Zapewniamy profesjonalne systemy bezpieczeństwa dla Twojego biznesu. Od monitoringu CCTV po systemy
								alarmowe - kompleksowo chronimy to, co najważniejsze.
							</p>
						</div>
						<div className="flex justify-center">
							<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-500 shadow-lg hover-lift hover-glow animate-hero-fadeIn animate-delay-1100 transform-gpu">
								<span className="flex items-center gap-3">
									Skontaktuj się z nami
									<svg
										className="w-5 h-5 transition-transform group-hover:translate-x-2"
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
			</section>
		</>
	)
}
