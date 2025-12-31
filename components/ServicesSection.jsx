'use client'
import React, { useState } from 'react'
import { ArrowUpRight, Settings, Activity, ShieldCheck, Cpu, Factory, FileText } from 'lucide-react'

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            id: '01',
            title: 'Audyty i Pomiary',
            short: 'Śląsk & Cała Polska', // Zmiana
            description: 'Wykonujemy okresowe przeglądy techniczne budynków (5-letnie), pomiary elektryczne i termowizję. Obsługujemy obiekty przemysłowe w strefach ekonomicznych (KSSE) oraz biurowce w całej Polsce.',
            specs: ['Pomiary Elektryczne', 'Przeglądy Budowlane', 'Termowizja Przemysłowa'],
            icon: <FileText className="w-8 h-8" />
        },
        {
            id: '02',
            title: 'Serwis Maszyn',
            short: 'Utrzymanie Ruchu (UR)',
            description: 'Kompleksowe wsparcie dla zakładów produkcyjnych na Śląsku. Serwis 24/7, naprawy automatyki, relokacje maszyn i modernizacje linii produkcyjnych.',
            specs: ['Diagnostyka Maszyn', 'Serwis Mobilny', 'Automatyka'],
            icon: <Cpu className="w-8 h-8" />
        },
        {
            id: '03',
            title: 'Facility Management',
            short: 'Techniczna Obsługa Nieruchomości',
            description: 'Stała obsługa techniczna obiektów komercyjnych i logistycznych. Oferujemy model stacjonarny (technik na obiekcie) oraz patrolowy na terenie województwa śląskiego.',
            specs: ['HVAC & Wod-Kan', 'Obsługa Wspólnot', 'Serwis Techniczny'],
            icon: <Factory className="w-8 h-8" />
        },
    ]

    return (
        <section id="services" className="relative bg-transparent py-24 px-4 sm:px-6 lg:px-8 font-sans border-t border-white/5">
            
            <div className="max-w-[1600px] mx-auto">
                
                {/* Header sekcji */}
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            Specyfikacja <span className="text-blue-500">Usług.</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg font-light">
                            Wybierz obszar, aby zobaczyć szczegóły techniczne naszych działań operacyjnych.
                        </p>
                    </div>
                    {/* Ozdobny licznik */}
                    <div className="hidden md:block text-right">
                        <div className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-1">Total Services</div>
                        <div className="text-3xl text-white font-mono">0{services.length}</div>
                    </div>
                </div>

                {/* --- INTERACTIVE LAYOUT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* LEWA KOLUMNA: Lista Usług */}
                    <div className="lg:col-span-7 flex flex-col">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                onMouseEnter={() => setActiveService(index)}
                                className={`group relative py-10 border-t border-white/10 cursor-pointer transition-all duration-300 ${index === services.length - 1 ? 'border-b' : ''}`}
                            >
                                {/* Hover background effect */}
                                <div className={`absolute inset-y-0 left-0 w-full bg-white/[0.02] transition-transform duration-500 origin-left ${activeService === index ? 'scale-x-100' : 'scale-x-0'}`} />
                                
                                <div className="relative z-10 flex items-start justify-between gap-6">
                                    <div className="flex gap-6 md:gap-10">
                                        <span className={`font-mono text-lg transition-colors duration-300 ${activeService === index ? 'text-blue-500' : 'text-gray-600'}`}>
                                            /{service.id}
                                        </span>
                                        <div>
                                            <h3 className={`text-2xl md:text-4xl font-bold transition-colors duration-300 mb-2 ${activeService === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                                {service.title}
                                            </h3>
                                            <p className={`text-sm md:text-base transition-colors duration-300 ${activeService === index ? 'text-blue-400' : 'text-gray-600'}`}>
                                                {service.short}
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowUpRight className={`w-8 h-8 transition-all duration-300 ${activeService === index ? 'text-white translate-x-0 opacity-100' : 'text-gray-600 -translate-x-4 opacity-0'}`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PRAWA KOLUMNA: Dynamiczny Viewport */}
                    <div className="lg:col-span-5 relative hidden lg:block h-[500px]">
                        {/* Sticky container - sprawia, że podgląd "płynie" przy scrollowaniu jeśli sekcja jest długa, tu jest fixowana do grida */}
                        <div className="sticky top-10 w-full h-full rounded-2xl overflow-hidden bg-[#111] border border-white/10 relative">
                            
                            {/* Dekoracyjne linie HUD */}
                            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30" />
                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/30" />
                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/30" />
                            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30" />
                            
                            {/* Dynamic Content Mapping */}
                            {services.map((service, index) => (
                                <div 
                                    key={index}
                                    className={`absolute inset-0 p-8 flex flex-col justify-between transition-all duration-700 ease-in-out ${activeService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                                >
                                    {/* Tło (placeholder gradientu lub obrazu) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-50`} />
                                    
                                    {/* Icon & ID */}
                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="p-4 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-900/20">
                                            {service.icon}
                                        </div>
                                        <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-gray-400">
                                            SYS.CONFIG.{service.id}
                                        </div>
                                    </div>

                                    {/* Detailed Description */}
                                    <div className="relative z-10">
                                        <div className="w-12 h-1 bg-blue-500 mb-6" />
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                            {service.description}
                                        </p>
                                        
                                        {/* Specs List */}
                                        <div className="space-y-3">
                                            <div className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-2">Capabilities:</div>
                                            {service.specs.map((spec, sIdx) => (
                                                <div key={sIdx} className="flex items-center gap-3 text-sm text-gray-300 border-b border-white/5 pb-2 last:border-0">
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                                    {spec}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Mobile Viewport (Fallback dla mobilek) */}
                <div className="lg:hidden mt-8 p-6 bg-[#111] rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 text-blue-400 mb-4">
                        <Activity className="w-5 h-5" />
                        <span className="text-sm font-mono uppercase">Service Details</span>
                    </div>
                     <p className="text-gray-300">
                        {services[activeService].description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {services[activeService].specs.map((spec, i) => (
                            <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">{spec}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServicesSection