'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'

// Rejestracja ScrollTrigger
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
	const [currentIconIndex, setCurrentIconIndex] = useState(0)
	const [showFinalLogo, setShowFinalLogo] = useState(false)
	const [isTransitioning, setIsTransitioning] = useState(false)
	const [showContent, setShowContent] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const logoRef = useRef(null)
	const textRef = useRef(null)
	const videoContainerRef = useRef(null)
	const contentSectionRef = useRef(null)

	// Ikony systemów bezpieczeństwa dla animacji początkowej
	const heroIcons = [
		<svg
			className="w-32 h-32 sm:w-40 sm:h-40"
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
		</svg>,
		<svg
			className="w-32 h-32 sm:w-40 sm:h-40"
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
		</svg>,
		<svg
			className="w-32 h-32 sm:w-40 sm:h-40"
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
		</svg>,
		<svg
			className="w-32 h-32 sm:w-40 sm:h-40"
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
		</svg>,
		<svg
			className="w-32 h-32 sm:w-40 sm:h-40"
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
		</svg>,
		<svg
			className="w-32 h-32 sm:w-40 sm:h-40"
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
		</svg>,
	]

	useEffect(() => {
		if (showFinalLogo) return

		const interval = setInterval(() => {
			// Rozpocznij przejście fade-out
			setIsTransitioning(true)

			setTimeout(() => {
				setCurrentIconIndex(prevIndex => {
					const nextIndex = (prevIndex + 1) % heroIcons.length
					// Po ostatniej ikonie pokaż logo ARGO
					if (nextIndex === 0) {
						setTimeout(() => {
							setShowFinalLogo(true)
							// Po sekundzie uruchom animację CSS
							setTimeout(() => {
								setShowContent(true)
							}, 1000)
						}, 800)
						clearInterval(interval)
					}
					return nextIndex
				})
				// Zakończ przejście fade-in
				setIsTransitioning(false)
			}, 400) // Czas fade-out
		}, 2000) // Całkowity czas na każdą ikonę: 2 sekundy

		return () => clearInterval(interval)
	}, [heroIcons.length, showFinalLogo])

	// Blokuj scroll podczas animacji powitalnej
	useEffect(() => {
		if (!showContent) {
			// Zablokuj scroll
			document.body.style.overflow = 'hidden'
		} else {
			// Odblokuj scroll po zakończeniu animacji
			document.body.style.overflow = 'unset'
		}

		// Cleanup - zawsze przywróć scroll przy unmount
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [showContent])

	// Zamknij menu po kliknięciu poza nim
	useEffect(() => {
		const handleClickOutside = event => {
			if (isMenuOpen && !event.target.closest('.menu-container')) {
				setIsMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isMenuOpen])

	return (
		<>
			<section className="relative w-full h-screen bg-white flex">
				{/* Hamburger Menu - pojawi się w prawym górnym rogu */}
				{showContent && (
					<div className="menu-container">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`fixed top-6 right-6 z-50 p-3 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl ${
								showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
							}`}>
							<div className="flex flex-col space-y-1.5">
								<span
									className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
										isMenuOpen ? 'rotate-45 translate-y-2' : ''
									}`}></span>
								<span
									className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
										isMenuOpen ? 'opacity-0' : ''
									}`}></span>
								<span
									className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
										isMenuOpen ? '-rotate-45 -translate-y-2' : ''
									}`}></span>
							</div>
						</button>

						{/* Dropdown Menu */}
						{isMenuOpen && (
							<div className="fixed top-20 right-6 z-40 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px] transition-all duration-300">
								<a
									href="#home"
									className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
									Strona główna
								</a>
								<a
									href="#services"
									className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
									Usługi
								</a>
								<a
									href="#about"
									className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
									O nas
								</a>
								<a
									href="#contact"
									className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
									Kontakt
								</a>
								<div className="border-t border-gray-200 my-2"></div>
								<a
									href="#quote"
									className="block px-4 py-3 text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium">
									Wyceń projekt
								</a>
							</div>
						)}
					</div>
				)}

				{/* Video background - będzie się zmniejszać do 50% */}
				<div
					ref={videoContainerRef}
					className="relative overflow-hidden m-4 rounded-[16px] hero-video-transition"
					style={{
						width: showContent ? 'calc(50% - 16px)' : 'calc(100% - 32px)',
						height: 'calc(100vh - 32px)',
					}}>
					<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
						<source src="/herobg.mp4" type="video/mp4" />
					</video>
					{/* Overlay dla lepszej czytelności tekstu */}
					<div className="absolute inset-0 bg-black/20" />

					{/* Animowane ikony lub finalne logo */}
					<div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-6">
						{showFinalLogo ? (
							// Finalne logo ARGO
							<>
								<img
									src="/logobez.png"
									alt="Argo logo"
									className="h-[80px] sm:h-[100px] object-contain animate-fadeIn"
									onError={e => (e.currentTarget.style.display = 'none')}
								/>
								<div
									ref={logoRef}
									className="text-white text-[14vw] sm:text-[11vw] leading-none tracking-tight font-semibold select-none animate-fadeIn">
									ARGO
								</div>
								<p ref={textRef} className="text-white/90 text-base sm:text-lg tracking-wide animate-fadeIn">
									Profesjonalne systemy bezpieczeństwa
								</p>
							</>
						) : (
							// Animowane ikony
							<div className="flex flex-col items-center gap-6">
								<div
									className={`text-white transition-all duration-500 ease-in-out ${
										isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-iconPulse'
									}`}>
									{heroIcons[currentIconIndex]}
								</div>
								<div
									className={`text-white/90 text-lg sm:text-xl text-center max-w-md transition-all duration-500 ease-in-out ${
										isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
									}`}>
									Systemy Bezpieczeństwa
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Sekcja treści - pojawi się po prawej stronie */}
				{showContent && (
					<div
						ref={contentSectionRef}
						className={`w-1/2 h-[calc(100vh-32px)] flex flex-col justify-center items-start px-12 py-8 bg-gradient-to-br from-gray-50 to-white hero-content-transition transform ${
							showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
						}`}>
						<div className="max-w-lg">
							<h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
								Kompleksowe rozwiązania bezpieczeństwa
							</h2>
							<p className="text-lg text-gray-600 mb-8 leading-relaxed">
								Zapewniamy profesjonalne systemy bezpieczeństwa dla Twojego biznesu. Od monitoringu CCTV po systemy
								alarmowe - kompleksowo chronimy to, co najważniejsze.
							</p>
							<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
								Skontaktuj się z nami
							</button>
						</div>
					</div>
				)}
			</section>

		
		</>
	)
}
