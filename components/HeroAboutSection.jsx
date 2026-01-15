'use client'
import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Quote, CheckCircle2, Zap } from 'lucide-react'

const HeroAboutSection = () => {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1 }
		)
		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	return (
		<section id="whyUs" className="relative bg-transparent py-20 px-4 sm:px-6 lg:px-8 font-sans " ref={sectionRef}>
			{/* Globalne style dla tej sekcji */}
			<style jsx>{`
				.glass-card {
					background: rgba(255, 255, 255, 0.03);
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
					border: 1px solid rgba(255, 255, 255, 0.08);
				}
				.tech-border {
					position: relative;
				}
				/* Narożniki techniczne */
				.tech-border::before,
				.tech-border::after {
					content: '';
					position: absolute;
					width: 10px;
					height: 10px;
					border: 1px solid rgba(255, 255, 255, 0.4);
					transition: all 0.3s ease;
				}
				.tech-border::before {
					top: -1px;
					left: -1px;
					border-right: 0;
					border-bottom: 0;
				}
				.tech-border::after {
					bottom: -1px;
					right: -1px;
					border-left: 0;
					border-top: 0;
				}

				.hover-glow:hover {
					box-shadow: 0 0 30px rgba(37, 99, 235, 0.15);
					border-color: rgba(37, 99, 235, 0.3);
				}
			`}</style>

			<div className="max-w-[1600px] mx-auto">
				{/* --- HEADER --- */}
				<div
					className={`mb-16 transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}>
					<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
						Inżynieria{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
							Niezawodności
						</span>
					</h2>
				</div>

				{/* --- BENTO GRID LAYOUT --- */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
					{/* 1. BIG CARD (TEXT) - Spans 7 columns */}
					<div
						className={`md:col-span-7 relative group overflow-hidden rounded-3xl glass-card p-8 md:p-12 tech-border hover-glow transition-all duration-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 delay-100'
						}`}>
						{/* Tło wideo przyciemnione */}
						<div className="absolute inset-0 z-0">
							<video
								autoPlay
								muted
								loop
								playsInline
								className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700">
								<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
							</video>
							<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
						</div>

						<div className="relative z-10 h-full flex flex-col justify-between">
							<div>
								<h3 className="text-2xl md:text-3xl text-white font-light mb-6">
									Twoje wsparcie techniczne <br />
									<b className="font-bold">na Śląsku i w Polsce</b>
								</h3>
								<p className="text-gray-300 text-lg leading-relaxed max-w-2xl font-light">
									Operujemy z serca przemysłowego Śląska. Dzięki strategicznej lokalizacji zapewniamy błyskawiczny czas
									reakcji (SLA) w miastach takich jak
									<span className="text-blue-400"> Katowice, Gliwice, Zabrze, Bytom</span>. Nasze mobilne zespoły
									serwisowe realizują również kontrakty sieciowe na terenie całego kraju.
								</p>
							</div>

							<div className="mt-12 flex flex-wrap gap-4">
								<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
									<CheckCircle2 className="w-4 h-4 text-blue-400" />
									<span className="text-sm text-white/80 font-mono">Pełne bezpieczeństwo</span>
								</div>
								<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
									<CheckCircle2 className="w-4 h-4 text-blue-400" />
									<span className="text-sm text-white/80 font-mono">Efektywność infrastruktury</span>
								</div>
							</div>
						</div>
					</div>

					{/* 2. QUOTE CARD (DARK) - Spans 5 columns */}
					<div
						className={`md:col-span-5 flex flex-col justify-center relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12 tech-border hover:border-blue-500/30 transition-all duration-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 delay-200'
						}`}>
						<Quote className="w-12 h-12 text-blue-500 mb-6 opacity-50" />
						<blockquote className="text-xl md:text-2xl text-white font-light italic leading-relaxed mb-6">
							"Profesjonalna obsługa techniczna obiektów to nasza specjalność, a spokój klienta — nasz priorytet."
						</blockquote>
						<div className="flex items-center gap-4 mt-auto">
							<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs">
								A
							</div>
							<div>
								<div className="text-white text-sm font-bold">ZESPÓŁ ARGO</div>
								<div className="text-gray-500 text-xs font-mono uppercase">Technical Support</div>
							</div>
						</div>
					</div>

					{/* 3. CTA CARD (BOTTOM) - Spans 12 columns (full width) */}
					<div
						className={`md:col-span-12 relative overflow-hidden rounded-2xl bg-blue-600 p-1 transition-all duration-700 group cursor-pointer ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 delay-300'
						}`}>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-100 group-hover:opacity-90 transition-opacity" />

						<div className="relative bg-black rounded-xl px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 group-hover:bg-black/90 transition-colors">
							<div className="flex items-center gap-6">
								<div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
									<Zap className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-white text-xl font-bold">Gotowy na współpracę?</h4>
									<p className="text-gray-400 text-sm md:text-base">
										Skontaktuj się z nami i poznaj szczegóły oferty maintenance.
									</p>
								</div>
							</div>

							<button
								className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-bold font-mono text-sm uppercase tracking-wide hover:bg-blue-50 transition-colors cursor-pointer"
								onClick={() => (window.location.href = '/kontakt')}>
								Skontaktuj się
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroAboutSection
