'use client'
import React, { useState } from 'react'
import { CheckCircle2, ArrowRight, ChevronDown, Activity, Cpu, FileText } from 'lucide-react'

const ServiceLayout = ({ data }) => {
    const [activeAccordion, setActiveAccordion] = useState(0)

    return (
        <div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            
            {/* Breadcrumbs Tech */}
            <div className="max-w-[1600px] mx-auto mb-12 flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
                <span>/</span>
                <span className="text-gray-400">Services</span>
                <span>/</span>
                <span className="text-blue-500">{data.id}</span>
            </div>

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* --- LEWA KOLUMNA (CONTENT) --- */}
                <div className="lg:col-span-8">
                    
                    {/* Hero Header */}
                    <header className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"/>
                            {data.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-lg text-gray-300 font-light leading-relaxed max-w-3xl border-l-2 border-white/10 pl-6">
                            {data.description}
                        </p>
                    </header>

                    {/* Technical Specs Grid (Bento Style) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                        {data.specs.map((spec, i) => (
                            <div key={i} className="bg-[#0a0a0a] border border-white/10 p-5 rounded-xl hover:border-blue-500/30 transition-colors group">
                                <div className="text-[10px] text-gray-500 font-mono uppercase mb-2 tracking-wider">{spec.label}</div>
                                <div className="text-white font-bold text-sm md:text-lg group-hover:text-blue-400 transition-colors">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Sekcja: Zakres Działań */}
                    <div className="mb-20">
                        <h2 className="text-2xl text-white font-bold mb-8 flex items-center gap-3">
                            <Cpu className="w-6 h-6 text-blue-500" />
                            Specyfikacja Operacyjna
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.features.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-5 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                                    <CheckCircle2 className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="mb-16">
                        <h2 className="text-2xl text-white font-bold mb-8">Baza Wiedzy (FAQ)</h2>
                        <div className="space-y-4">
                            {data.faq.map((item, i) => (
                                <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-[#080808]">
                                    <button 
                                        onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-white font-medium pr-4">{item.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeAccordion === i ? 'rotate-180 text-blue-500' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- PRAWA KOLUMNA (STICKY SIDEBAR) --- */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="sticky top-32">
                        {/* Karta Kontaktowa */}
                        <div className="bg-[#080808] border border-blue-500/20 p-8 rounded-3xl relative overflow-hidden group">
                            {/* Efekty tła */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>
                            
                            <h3 className="text-2xl text-white font-bold mb-4 relative z-10">Zleć audyt lub serwis</h3>
                            <p className="text-gray-400 text-sm mb-8 relative z-10">
                                Gwarantujemy czas reakcji zgodny z SLA oraz pełną dokumentację powykonawczą.
                            </p>
                            
                            <a href="#contact" className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20 group-hover:scale-[1.02]">
                                Skontaktuj się
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Dyspozytornia 24/7</p>
                                <p className="text-xl text-white font-mono font-bold tracking-tight">+48 517 463 469</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceLayout