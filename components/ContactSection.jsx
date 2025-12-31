'use client'
import React, { useState } from 'react'
import { Send, Phone, Mail, Globe, ArrowUpRight, Facebook, Linkedin, Instagram } from 'lucide-react'

const ContactFooter = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Symulacja wysyłania
        setTimeout(() => setIsSubmitting(false), 2000)
    }

    return (
        <footer className="relative bg-[#020202] text-white pt-24 font-sans border-t border-white/5 overflow-hidden">
            
            {/* Globalne style dla inputów */}
            <style jsx>{`
                .tech-input {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: all 0.3s ease;
                }
                .tech-input:focus {
                    border-color: #3b82f6;
                    background: rgba(59, 130, 246, 0.05);
                    outline: none;
                    box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
                }
                /* Wielki napis w tle stopki */
                .giant-text {
                    font-size: 15vw;
                    line-height: 0.8;
                    font-weight: 900;
                    color: #080808;
                    user-select: none;
                    pointer-events: none;
                    white-space: nowrap;
                }
            `}</style>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-8 relative z-10">
                
                {/* --- SEKCJA KONTAKTOWA (GÓRA) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32">
                    
                    {/* LEWA STRONA: Dane i Narracja */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-mono text-green-500/80 text-xs tracking-widest uppercase">Direct Contact</span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Rozpocznijmy <br />
                            <span className="text-blue-600">współpracę.</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed">
                            Skontaktuj się bezpośrednio z koordynatorem technicznym. 
                            Zapewniamy szybką wycenę i terminowe realizacje na terenie całego kraju.
                        </p>

                        <div className="space-y-8">
                            
                            {/* Telefon */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    <Phone className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Telefon Bezpośredni</p>
                                    <a href="tel:+48517463469" className="text-xl font-medium group-hover:text-blue-400 transition-colors block">
                                        +48 517 463 469
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    <Mail className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Email kontaktowy</p>
                                    <a href="mailto:rdomagalski@argo-system.pl" className="text-xl font-medium group-hover:text-blue-400 transition-colors block break-all">
                                        rdomagalski@argo-system.pl
                                    </a>
                                </div>
                            </div>

                            {/* Obszar Działania (Zamiast Adresu) */}
                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    <Globe className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-1">Obszar Działania</p>
                                    <p className="text-xl font-medium">
                                        Cała Polska <br />
                                        <span className="text-sm text-gray-400 font-light">Baza operacyjna: Śląsk</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PRAWA STRONA: Formularz (The Terminal) */}
                    <div className="bg-[#080808] p-8 md:p-10 rounded-3xl border border-white/10 relative shadow-2xl shadow-black">
                        {/* Decorative HUD corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-600/30 rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-600/30 rounded-br-2xl" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">Imię i Nazwisko *</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="tech-input w-full px-4 py-4 rounded-lg bg-transparent"
                                        placeholder="Jan Kowalski"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">Firma</label>
                                    <input 
                                        type="text" 
                                        className="tech-input w-full px-4 py-4 rounded-lg bg-transparent"
                                        placeholder="Nazwa Firmy"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">Email służbowy *</label>
                                <input 
                                    type="email" 
                                    required
                                    className="tech-input w-full px-4 py-4 rounded-lg bg-transparent"
                                    placeholder="email@firma.pl"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">Szczegóły zgłoszenia *</label>
                                <textarea 
                                    rows="4"
                                    required
                                    className="tech-input w-full px-4 py-4 rounded-lg bg-transparent resize-none"
                                    placeholder="Opisz zakres potrzebnych usług..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10">{isSubmitting ? 'Przetwarzanie...' : 'Wyślij Zgłoszenie'}</span>
                                {!isSubmitting && <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />}
                            </button>
                            
                            <p className="text-center text-xs text-gray-600 font-mono mt-4">
                                DANE SZYFROWANE SSL • RODO COMPLIANT
                            </p>
                        </form>
                    </div>
                </div>

                {/* --- STOPKA WŁAŚCIWA (BOTTOM) --- */}
                <div className="border-t border-white/10 pt-16 pb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {/* Kolumna 1 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold mb-2">Menu</h4>
                            {['O Firmie', 'Usługi', 'Realizacje', 'Kariera'].map(item => (
                                <a key={item} href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item}
                                </a>
                            ))}
                        </div>
                        {/* Kolumna 2 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold mb-2">Usługi</h4>
                            {['Facility Management', 'Maintenance', 'Audyty', 'Pomiary'].map(item => (
                                <a key={item} href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">{item}</a>
                            ))}
                        </div>
                        {/* Kolumna 3 */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold mb-2">Legal</h4>
                            {['Polityka Prywatności', 'Regulamin', 'Cookies', 'RODO'].map(item => (
                                <a key={item} href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">{item}</a>
                            ))}
                        </div>
                        {/* Kolumna 4 (Socials) */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold mb-2">Social Media</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-white/10"><Linkedin className="w-4 h-4"/></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-white/10"><Facebook className="w-4 h-4"/></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors text-white border border-white/10"><Instagram className="w-4 h-4"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
                        <p className="text-gray-600 text-sm font-mono">
                            © 2025 ARGO SYSTEM. Wszelkie prawa zastrzeżone.
                        </p>
                        <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                            Designed and developed by AppLike
                        </p>
                    </div>
                </div>

            </div>

            {/* OGROMNY TEKST W TLE */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 giant-text z-0">
                ARGO
            </div>
        </footer>
    )
}

export default ContactFooter