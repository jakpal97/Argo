'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
	Shield,
	Zap,
	Users,
	Award,
	ArrowRight,
	CheckCircle2,
	Sparkles,
	Target,
	Eye,
	Heart,
	Star,
	Play,
	ChevronDown,
	Quote,
	Briefcase,
	Clock,
	Globe,
} from 'lucide-react'

const AboutSection = () => {
	const [activeSection, setActiveSection] = useState(0)
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		setIsVisible(true)

		const interval = setInterval(() => {
			setActiveSection(prev => (prev + 1) % 3)
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const services = [
		{
			icon: <Shield className="w-7 h-7" />,
			title: 'Instalacje Systemów Bezpieczeństwa',
			description:
				'Projektowanie i instalacja zaawansowanych systemów bezpieczeństwa z wykorzystaniem najnowszych technologii i standardów branżowych.',
			features: ['Systemy CCTV', 'Kontrola dostępu', 'Sygnalizacja pożaru', 'Systemy alarmowe'],
			color: 'from-blue-600 via-blue-700 to-blue-800',
			accent: 'from-blue-400 to-cyan-300',
		},
		{
			icon: <Zap className="w-7 h-7" />,
			title: 'Przeglądy Techniczne',
			description:
				'Kompleksowe przeglądy i audyty techniczne przeprowadzane przez certyfikowanych specjalistów zgodnie z obowiązującymi normami.',
			features: ['Audyty bezpieczeństwa', 'Certyfikacja', 'Dokumentacja', 'Raporty techniczne'],
			color: 'from-blue-700 via-blue-800 to-blue-900',
			accent: 'from-purple-400 to-blue-300',
		},
		{
			icon: <Users className="w-7 h-7" />,
			title: 'Serwis i Naprawy',
			description:
				'Profesjonalna obsługa serwisowa z gwarancją szybkiej reakcji i wysokiej jakości wykonanych usług naprawczych.',
			features: ['Serwis 24/7', 'Części zamienne', 'Modernizacje', 'Wsparcie techniczne'],
			color: 'from-blue-800 via-blue-900 to-indigo-900',
			accent: 'from-emerald-400 to-teal-300',
		},
	]

	const stats = [
		{ number: '15', label: 'Lat doświadczenia', icon: <Award className="w-5 h-5" />, suffix: '+' },
		{ number: '2500', label: 'Zrealizowanych projektów', icon: <Target className="w-5 h-5" />, suffix: '+' },
		{ number: '98', label: 'Zadowolonych klientów', icon: <Heart className="w-5 h-5" />, suffix: '%' },
		{ number: '24', label: 'Wsparcie techniczne', icon: <Clock className="w-5 h-5" />, suffix: '/7' },
	]

	const features = [
		{
			title: 'Doświadczenie i Profesjonalizm',
			description:
				'Nasz zespół składa się z wykwalifikowanych techników i inżynierów z wieloletnim doświadczeniem w branży bezpieczeństwa.',
			icon: <Briefcase className="w-6 h-6" />,
		},
		{
			title: 'Bezpieczeństwo na Pierwszym Miejscu',
			description:
				'Wszystkie nasze usługi są projektowane z myślą o zapewnieniu najwyższego poziomu bezpieczeństwa i ochrony.',
			icon: <Shield className="w-6 h-6" />,
		},
		{
			title: 'Indywidualne Podejście',
			description:
				'Każdy projekt traktujemy indywidualnie, dostosowując rozwiązania do specyficznych potrzeb i wymagań klienta.',
			icon: <Globe className="w-6 h-6" />,
		},
	]

	return (
		<div className="relative min-h-screen bg-white overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-8 pt-24" ref={sectionRef}>
				{/* Elegant Main Content */}
				<div className="grid lg:grid-cols-5 gap-16 mb-32">
					{/* Left Column - Refined Image & Story */}
					<div className="lg:col-span-2 space-y-12">
						<div className="relative group">
							<div className="absolute -inset-4  rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
							<div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 transition-all duration-700">
								<img
									src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
									alt="Zespół ARGO"
									className="w-full h-72 object-cover rounded-2xl mb-8 group-hover:scale-[1.02] transition-transform duration-700 filter grayscale group-hover:grayscale-0"
								/>
								<div className="space-y-6">
									<h3 className="text-2xl font-light font-montserrat text-black tracking-wide">Nasza Misja</h3>
									<p className="text-black leading-relaxed font-light font-inter">
										Dzięki wieloletniemu doświadczeniu i niezachwianemu profesjonalizmowi, dostarczamy rozwiązania
										bezpieczeństwa najwyższej klasy, dostosowane do unikalnych potrzeb każdego klienta.
									</p>
								</div>
							</div>
						</div>

						{/* Refined Stats */}
						<div className="grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<div
									key={index}
									className="group bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/30 hover:shadow-2xl hover:scale-105 transition-all duration-500"
									style={{ animationDelay: `${index * 150}ms` }}>
									<div className="flex flex-col items-center text-center space-y-3">
										<div className="text-blue-600 group-hover:scale-110 transition-transform duration-500 p-3 bg-blue-100/50 rounded-full">
											{stat.icon}
										</div>
										<div className="text-3xl font-light font-montserrat text-black">
											{stat.number}
											<span className="text-blue-600">{stat.suffix}</span>
										</div>
										<p className="text-sm text-black font-light font-inter leading-tight">{stat.label}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Column - Elegant Services */}
					<div className="lg:col-span-3 space-y-8">
						<div className="">
							<h2 className="text-5xl font-bold font-montserrat text-black mb-6 tracking-wide">O firmie</h2>
							<div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent mb-8"></div>
							<p className="text-black leading-relaxed font-light font-inter text-lg">
								Firma ARGO to synonim doskonałości w dziedzinie systemów bezpieczeństwa. Specjalizujemy się w
								kompleksowych rozwiązaniach dla wymagających klientów.
							</p>
						</div>

						{services.map((service, index) => (
							<div
								key={index}
								className="group relative bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-1"
								style={{ animationDelay: `${index * 200}ms` }}>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`}></div>

								<div className="relative z-10">
									<div className="flex items-start gap-6 mb-6">
										<div
											className={`p-4 rounded-2xl bg-gradient-to-br ${service.accent} text-white group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
											{service.icon}
										</div>
										<div className="flex-1">
											<h3 className="text-2xl font-light font-montserrat text-black mb-3 group-hover:text-blue-900 transition-colors duration-500 tracking-wide">
												{service.title}
											</h3>
											<p className="text-black leading-relaxed font-light font-inter mb-6">{service.description}</p>

											<div className="grid grid-cols-2 gap-3 mb-6">
												{service.features.map((feature, idx) => (
													<div key={idx} className="flex items-center gap-2 text-sm text-black">
														<div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
														<span className="font-light font-inter">{feature}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
