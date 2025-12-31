'use client'
import React, { useState } from 'react'
import { MapPin, Mail, Phone, ArrowRight, Send, Globe, CheckCircle2, User } from 'lucide-react'

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Symulacja wysyłania
        setTimeout(() => {
            setIsSubmitting(false)
            alert('Wiadomość wysłana.')
        }, 2000)
    }

    return (
        <div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            
            {/* Breadcrumbs */}
            <div className="max-w-[1600px] mx-auto mb-12 flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
                <span>/</span>
                <span className="text-blue-500">Kontakt</span>
            </div>

            <div className="max-w-[1600px] mx-auto">
                
                {/* --- HEADER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"/>
                            Direct Access
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                            Kontakt <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Techniczny.</span>
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6 mb-4">
                        Skontaktuj się bezpośrednio z koordynatorem technicznym. 
                        Gwarantujemy merytoryczną rozmowę i szybką wycenę usług.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* --- LEWA KOLUMNA: DANE KONTAKTOWE (Jedna Karta) --- */}
                    <div className="lg:col-span-5 space-y-12">
                        
                        {/* Główna Karta Kontaktu */}
                        <div className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
                            {/* Efekt tła */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                                        <User className="w-8 h-8"/>
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
                                        <a href="tel:+48517463469" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors block font-mono">
                                            +48 517 463 469
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Mail className="w-4 h-4 text-blue-500" />
                                            <span className="text-xs font-mono text-gray-400 uppercase">Email</span>
                                        </div>
                                        <a href="mailto:rdomagalski@argo-system.pl" className="text-lg md:text-xl font-medium text-white hover:text-blue-400 transition-colors block break-all">
                                            rdomagalski@argo-system.pl
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dane Rejestrowe (Opcjonalne, jeśli chcesz) */}
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
                        <div className="bg-[#080808] p-8 md:p-12 rounded-3xl border border-white/10 relative shadow-2xl shadow-black">
                            
                            {/* HUD Corners */}
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-600/30 rounded-tl-xl" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-600/30 rounded-br-xl" />

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white">Napisz do nas</h3>
                                <p className="text-gray-500 text-sm mt-2">Wypełnij formularz, a skontaktujemy się w ciągu 24h.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase ml-1">Imię i Nazwisko</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                                            placeholder="Jan Kowalski"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase ml-1">Telefon</label>
                                        <input 
                                            type="tel" 
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                                            placeholder="+48..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">Adres Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all"
                                        placeholder="email@firma.pl"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">Temat rozmowy</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:border-blue-500 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                                        <option className="bg-black">Zapytanie o wycenę / Audyt</option>
                                        <option className="bg-black">Awaria / Serwis</option>
                                        <option className="bg-black">Współpraca</option>
                                        <option className="bg-black">Inne</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">Wiadomość</label>
                                    <textarea 
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-600 focus:border-blue-500 focus:bg-white/10 outline-none transition-all resize-none"
                                        placeholder="Opisz, czego potrzebujesz..."
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 group overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10">{isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}</span>
                                    <Send className={`w-5 h-5 relative z-10 transition-transform ${isSubmitting ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1'}`} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* --- SEKCJA LOKALIZACJI (RADAR) --- */}
                <div className="mt-24">
                    <div className="w-full h-[350px] bg-[#0a0a0a] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center group cursor-pointer" onClick={() => window.open('https://maps.google.com')}>
                        
                        {/* Tło Mapy */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
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