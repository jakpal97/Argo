'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function KontaktPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: '',
		service: '',
	})

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Form submitted:', formData)
		// Tutaj można dodać logikę wysyłania formularza
		alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.')
		setFormData({
			name: '',
			email: '',
			phone: '',
			company: '',
			message: '',
			service: '',
		})
	}

	const contactInfo = [
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
			),
			label: 'Telefon',
			value: '+48 123 456 789',
			href: 'tel:+48123456789',
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			label: 'Email',
			value: 'kontakt@argo.pl',
			href: 'mailto:kontakt@argo.pl',
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
			),
			label: 'Adres',
			value: 'ul. Przykładowa 123\n00-000 Warszawa',
			href: '#',
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			label: 'Godziny pracy',
			value: 'Pon-Pt: 8:00-18:00\nSb: 9:00-14:00',
			href: '#',
		},
	]

	const services = ['Przeglądy techniczne i audyty', 'Obsługa maszyn i urządzeń', 'Utrzymanie instalacji przemysłowych']

	return (
		<div className="min-h-screen bg-white relative overflow-hidden">
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
				<div className="absolute inset-0 bg-black/50"></div>
			</div>

			{/* Header */}
			<div className="relative z-10 0 text-white py-20">
				<div className="max-w-7xl mx-auto px-8">
					<div className="text-center">
						<h1 className="text-xl md:text-6xl font-bold font-montserrat mb-6">Kontakt</h1>
						<p className="text-xl font-inter text-blue-100 max-w-3xl mx-auto">
							Skontaktuj się z nami, aby omówić Twoje potrzeby w zakresie facility management, maintenance i obsługi
							technicznej obiektów.
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{/* Formularz kontaktowy */}
					<div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
						<h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-6">Wyślij zapytanie</h2>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="name" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
										Imię i nazwisko *
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-inter"
										placeholder="Jan Kowalski"
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
										Email *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-inter"
										placeholder="jan@example.com"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="phone" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
										Telefon
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-inter"
										placeholder="+48 123 456 789"
									/>
								</div>

								<div>
									<label htmlFor="company" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
										Firma
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-inter"
										placeholder="Nazwa firmy"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="service" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
									Interesująca usługa
								</label>
								<select
									id="service"
									name="service"
									value={formData.service}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors font-inter">
									<option value="">Wybierz usługę</option>
									{services.map((service, index) => (
										<option key={index} value={service}>
											{service}
										</option>
									))}
								</select>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-semibold font-inter text-gray-700 mb-2">
									Wiadomość *
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none font-inter"
									placeholder="Opisz swoje potrzeby i oczekiwania..."
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold font-inter py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
								Wyślij zapytanie
							</button>
						</form>
					</div>

					{/* Informacje kontaktowe */}
					<div className="space-y-8">
						<div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
							<h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-6">Dane kontaktowe</h3>

							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<div key={index} className="flex items-start space-x-4">
										<div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
											{info.icon}
										</div>
										<div>
											<h4 className="font-semibold font-montserrat text-gray-900 mb-1">{info.label}</h4>
											{info.href !== '#' ? (
												<a
													href={info.href}
													className="text-gray-600 hover:text-blue-600 transition-colors whitespace-pre-line font-inter">
													{info.value}
												</a>
											) : (
												<p className="text-gray-600 whitespace-pre-line font-inter">{info.value}</p>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Dodatkowe informacje */}
						<div className="bg-blue-600 rounded-3xl shadow-xl p-8 text-white">
							<h3 className="text-2xl font-bold font-montserrat mb-4">Dlaczego warto nas wybrać?</h3>
							<ul className="space-y-3">
								<li className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="font-inter">Ponad 15 lat doświadczenia</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="font-inter">Certyfikowani specjaliści</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="font-inter">24/7 wsparcie techniczne</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="font-inter">Gwarancja na wszystkie usługi</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									<span className="font-inter">Bezpłatna wycena i konsultacja</span>
								</li>
							</ul>
						</div>

						{/* Link do strony głównej */}
						<div className="text-center">
							<Link
								href="/"
								className="inline-flex items-center gap-2 text-white text-2xl hover:text-blue-800 font-inter transition-colors">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
								</svg>
								Powrót do strony głównej
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
