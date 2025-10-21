'use client'
import React, { useState, useEffect } from 'react'
import { Briefcase, Shield, Globe, Star, Eye, ArrowRight, Sparkles } from 'lucide-react'

const WhyChooseSection = () => {
	const [activeFeature, setActiveFeature] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(true)

		const interval = setInterval(() => {
			setActiveFeature(prev => (prev + 1) % 3)
		}, 4000)

		return () => clearInterval(interval)
	}, [])

	const features = [
		{
			title: 'Doświadczenie i Profesjonalizm',
			description: 'Zespół certyfikowanych specjalistów w FM outsourcingu i obsłudze maszyn i urządzeń.',
			icon: <Briefcase className="w-6 h-6" />,
		},
		{
			title: 'Bezpieczeństwo i niezawodnosć',
			description: 'Wszystkie systemy i instalacje działają zgodnie z najwyższymi standardami w facility management.',
			icon: <Shield className="w-6 h-6" />,
		},
		{
			title: 'Indywidualne Podejście',
			description:
				'Dostosowujemy rozwiązania do specyficznych potrzeb klienta, zapewniając pełną dokumentację techniczną.',
			icon: <Globe className="w-6 h-6" />,
		},
	]

	return (
		<div className="relative min-h-screen bg-white overflow-hidden ">
			<div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
				{/* Header Section */}
				<div
					className={`text-center mb-20 transform transition-all duration-1500 ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
					}`}>
					<h2 className="text-5xl md:text-5xl font-bold font-inter text-black mb-8 tracking-wide">
						Dlaczego wybierają nas klienci?
					</h2>
					<div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
					<p className="pt-10">
						Klienci wybierają ARGO System, bo jesteśmy liderem w obsłudze technicznej obiektów i facility management.
						Nasze doświadczenie pozwala zapewnić bezawaryjne działanie budynków, profesjonalną diagnostykę techniczną
						oraz skuteczny maintenance wszystkich instalacji i urządzeń.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-8 mb-20">
					{features.map((feature, index) => (
						<div
							key={index}
							className={`group p-8 bg-white/50 backdrop-blur-xl rounded-3xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] ${
								activeFeature === index ? 'ring-1 ring-blue-300/50 shadow-blue-500/20 bg-white/70' : ''
							}`}>
							<div className="flex flex-col items-center text-center space-y-6">
								<div className="p-4 bg-blue-100/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
									<div className="text-blue-600">{feature.icon}</div>
								</div>
								<h3 className="text-xl font-light font-montserrat text-black tracking-wide">{feature.title}</h3>
								<p className="text-black leading-relaxed font-light font-inter">{feature.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action Section */}
				<div className="relative">
					<div className="absolute inset-0  rounded-3xl  opacity-20"></div>
					<div className="relative overflow-hidden p-16 rounded-3xl text-white text-center shadow-2xl ">
						{/* Video Background */}
						<video
							autoPlay
							muted
							loop
							playsInline
							className="absolute inset-0 w-full h-full object-cover rounded-3xl"
							crossOrigin="anonymous">
							<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
						</video>

						{/* Content */}
						<div className="relative z-10">
							<div className="max-w-4xl mx-auto">
								<h3 className="text-4xl md:text-5xl font-light font-montserrat mb-8 tracking-wide leading-tight">
									Gotowy na współpracę z liderem branży?
								</h3>

								<p className="text-xl text-blue-100 mb-12 leading-relaxed font-light font-inter max-w-3xl mx-auto">
									Skontaktuj się z nami i poznaj, jak nasza kompleksowa obsługa obiektów, FM outsourcing i maintenance
									mogą usprawnić Twój biznes.
								</p>

								<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
									<button className="group bg-white text-blue-800 px-10 py-5 rounded-full font-light font-inter shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-500">
										<span className="flex items-center gap-3 text-lg">
											Skontaktuj się z nami
											<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyChooseSection
