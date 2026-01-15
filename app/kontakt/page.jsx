'use client'
import React, { useState, useRef } from 'react'
import { MapPin, Mail, Phone, ArrowRight, Send, Globe, CheckCircle2, User, AlertCircle } from 'lucide-react'
// Importujemy naszą akcję serwerową
import { sendContactEmail } from '@/app/lib/actions'

export default function ContactPage() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState(null) // null | 'success' | 'error'
	const formRef = useRef(null)

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus(null)

		const formData = new FormData(e.currentTarget)

		// Wywołanie Server Action
		const result = await sendContactEmail(formData)

		if (result.success) {
			setSubmitStatus('success')
			formRef.current?.reset()
			// Przewiń widok do komunikatu sukcesu (opcjonalne, ale przydatne na mobile)
			// e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
		} else {
			setSubmitStatus('error')
		}

		setIsSubmitting(false)
	}

	return (
		<div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
			{/* Breadcrumbs */}
			<div className="max-w-[1600px] mx-auto mb-12 flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
				<a href="/" className="hover:text-blue-500 transition-colors">
					Home
				</a>
				<span>/</span>
				<span className="text-blue-500">Kontakt</span>
			</div>

			<div className="max-w-[1600px] mx-auto">
				{/* --- HEADER --- */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
					<div>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
							<span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
							Direct Access
						</div>
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
							Kontakt <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Techniczny.</span>
						</h1>
					</div>
					<p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6 mb-4">
						Skontaktuj się bezpośrednio z koordynatorem technicznym. Gwarantujemy merytoryczną rozmowę i szybką wycenę
						usług.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
					{/* --- LEWA KOLUMNA: DANE KONTAKTOWE --- */}
					<div className="lg:col-span-5 space-y-12">
						{/* Główna Karta Kontaktu */}
						<div className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
							{/* Efekt tła */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>

							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-8">
									<div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
										<User className="w-8 h-8" />
									</div>
									<div>
										<div className="text-white font-bold text-xl">Robert Domagalski</div>
									</div>
								</div>

								<div className="space-y-6">
									{/* Telefon */}
									<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
										<div className="flex items-center gap-3 mb-2">
											<Phone className="w-4 h-4 text-blue-500" />
											<span className="text-xs font-mono text-gray-400 uppercase">Telefon Bezpośredni</span>
										</div>
										<a
											href="tel:+48517463469"
											className="text-2xl font-bold text-white hover:text-blue-400 transition-colors block font-mono">
											+48 517 463 469
										</a>
									</div>

									{/* Email */}
									<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
										<div className="flex items-center gap-3 mb-2">
											<Mail className="w-4 h-4 text-blue-500" />
											<span className="text-xs font-mono text-gray-400 uppercase">Email</span>
										</div>
										<a
											href="mailto:rdomagalski@argo-system.pl"
											className="text-lg md:text-xl font-medium text-white hover:text-blue-400 transition-colors block break-all">
											rdomagalski@argo-system.pl
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Dane Rejestrowe */}
						<div className="pl-6 border-l border-white/10">
							<h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Dane Firmowe</h4>
							<div className="text-gray-400 text-sm space-y-1">
								<p className="text-white font-bold">ARGO SYSTEM</p>
								<p>ul. Przykładowa 123</p>
								<p>00-000 Warszawa</p>
							</div>
						</div>
					</div>

					{/* --- PRAWA KOLUMNA: TERMINAL ZGŁOSZENIOWY --- */}
					<div className="lg:col-span-7">
						<div className="bg-[#080808] p-8 md:p-12 rounded-3xl border border-white/10 relative shadow-2xl shadow-black h-full flex flex-col justify-center">
							{/* HUD Corners */}
							<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-600/30 rounded-tl-xl" />
							<div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-600/30 rounded-br-xl" />

							{submitStatus === 'success' ? (
								<div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
									<div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
										<CheckCircle2 className="w-12 h-12 text-green-500" />
									</div>
									<h3 className="text-3xl font-bold text-white mb-4">Wiadomość wysłana</h3>
									<p className="text-gray-400 max-w-md mx-auto mb-8">
										Dziękujemy za kontakt. Twoje zgłoszenie trafiło bezpośrednio do naszego systemu. Odpowiemy w ciągu
										24 godzin.
									</p>
									<button
										onClick={() => setSubmitStatus(null)}
										className="text-blue-400 hover:text-blue-300 underline underline-offset-4 text-sm font-mono">
										Wyślij kolejną wiadomość
									</button>
								</div>
							) : (
								<>
									<div className="mb-8">
										<h3 className="text-2xl font-bold text-white">Napisz do nas</h3>
										<p className="text-gray-500 text-sm mt-2">Wypełnij formularz, a skontaktujemy się w ciągu 24h.</p>
									</div>

									<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<label className="text-xs font-mono text-gray-500 uppercase ml-1">Imię i Nazwisko</label>
												<input
													name="name"
													type="text"
													className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
													placeholder="Jan Kowalski"
													required
												/>
											</div>
											<div className="space-y-2">
												<label className="text-xs font-mono text-gray-500 uppercase ml-1">Telefon</label>
												<input
													name="phone"
													type="tel"
													className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
													placeholder="+48..."
												/>
											</div>
										</div>

										<div className="space-y-2">
											<label className="text-xs font-mono text-gray-500 uppercase ml-1">Adres Email</label>
											<input
												name="email"
												type="email"
												className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
												placeholder="email@firma.pl"
												required
											/>
										</div>

										<div className="space-y-2">
											<label className="text-xs font-mono text-gray-500 uppercase ml-1">Temat rozmowy</label>
											<div className="relative">
												<select
													name="subject"
													className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
													<option className="bg-black" value="Zapytanie o wycenę / Audyt">
														Zapytanie o wycenę / Audyt
													</option>
													<option className="bg-black" value="Awaria / Serwis">
														Awaria / Serwis
													</option>
													<option className="bg-black" value="Współpraca">
														Współpraca
													</option>
													<option className="bg-black" value="Inne">
														Inne
													</option>
												</select>
												<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
													<svg
														width="12"
														height="12"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2">
														<path d="M6 9l6 6 6-6" />
													</svg>
												</div>
											</div>
										</div>

										<div className="space-y-2">
											<label className="text-xs font-mono text-gray-500 uppercase ml-1">Wiadomość</label>
											<textarea
												name="message"
												rows="4"
												className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all resize-none"
												placeholder="Opisz, czego potrzebujesz..."
												required></textarea>
										</div>

										{submitStatus === 'error' && (
											<div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20 animate-in fade-in slide-in-from-top-2">
												<AlertCircle className="w-5 h-5" />
												<span className="text-sm">Wystąpił błąd serwera. Spróbuj wysłać maila bezpośrednio.</span>
											</div>
										)}

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 group overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed">
											<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
											<span className="relative z-10">{isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}</span>
											<Send
												className={`w-5 h-5 relative z-10 transition-transform ${
													isSubmitting ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1'
												}`}
											/>
										</button>
									</form>
								</>
							)}
						</div>
					</div>
				</div>

				{/* --- SEKCJA LOKALIZACJI (RADAR) --- */}
				<div className="mt-24">
					<div
						className="w-full h-[350px] bg-[#0a0a0a] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group cursor-pointer"
						onClick={() => window.open('https://goo.gl/maps/TuWstawLinkDoGoogleMaps')}>
						{/* Tło Mapy */}
						<div
							className="absolute inset-0 opacity-20"
							style={{
								backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
								backgroundSize: '20px 20px',
							}}></div>

						<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

						<div className="relative z-10 flex flex-col items-center">
							<div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.5)] backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
								<MapPin className="w-8 h-8 text-blue-500" />
							</div>
							<div className="mt-4 px-4 py-2 bg-black/60 border border-white/10 rounded-full backdrop-blur text-sm text-white font-mono flex items-center gap-2 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
								<Globe className="w-4 h-4" />
								Sprawdź dojazd
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
