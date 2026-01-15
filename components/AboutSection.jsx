'use client'
import React, { useRef } from 'react'
import {
    Shield,
    Zap,
    Users,
    ArrowRight,
    CheckCircle2,
    Activity,
    Settings,
    BarChart3
} from 'lucide-react'

const AboutSection = () => {
    
    // Dane usług zaktualizowane o techniczny opis
    const services = [
        {
            id: '01',
            icon: <Shield className="w-6 h-6" />,
            title: 'Systemy Bezpieczeństwa',
            desc: 'Zaawansowana integracja CCTV, SSWiN oraz kontroli dostępu. Projektowanie zgodne z normami ISO.',
            features: ['Monitoring IP', 'Biometria', 'PPOŻ'],
           
        },
        {
            id: '02',
            icon: <Activity className="w-6 h-6" />,
            title: 'Diagnostyka Techniczna',
            desc: 'Prewencyjne utrzymanie ruchu. Analiza wibroakustyczna i termowizyjna parków maszynowych.',
            features: ['Termowizja', 'Audyty Energetyczne', 'Raportowanie'],
            
        },
        {
            id: '03',
            icon: <Settings className="w-6 h-6" />,
            title: 'Maintenance & Serwis',
            desc: 'Kompleksowy FM outsourcing. Gwarantowany czas reakcji SLA i dostępność części zamiennych.',
            features: ['SLA < 4h', 'Części OEM', 'Modernizacje'],
           
        },
    ]

    const stats = [
        { val: '15+', label: 'Lat Doświadczenia' },
        { val: '2.5k', label: 'Projektów' },
        { val: '98%', label: 'Efektywność' },
        { val: '24/7', label: 'Wsparcie' },
    ]

    return (
        <section className="relative bg-transparent py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            
            {/* Global Styles for this section */}
            <style jsx>{`
                .tech-card {
                    background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .tech-card:hover {
                    border-color: rgba(59, 130, 246, 0.5); /* Blue-500 */
                    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
                    transform: translateY(-5px);
                }
                /* Animacja paska (Marquee) */
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
            `}</style>

            {/* --- DECORATIVE BACKGROUND --- */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />
            
            {/* Infinite Text Marquee (Tło) */}
            <div className="absolute top-10 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <div className="flex whitespace-nowrap animate-scroll">
                    <span className="text-[120px] font-black font-mono mx-8">FACILITY MANAGEMENT</span>
                    <span className="text-[120px] font-black font-mono mx-8">TECHNICAL SUPPORT</span>
                    <span className="text-[120px] font-black font-mono mx-8">ENGINEERING</span>
                    {/* Powtórzenie dla płynności */}
                    <span className="text-[120px] font-black font-mono mx-8">FACILITY MANAGEMENT</span>
                    <span className="text-[120px] font-black font-mono mx-8">TECHNICAL SUPPORT</span>
                    <span className="text-[120px] font-black font-mono mx-8">ENGINEERING</span>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                
                {/* --- TOP: MISSION STATEMENT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="font-mono text-blue-400 text-xs tracking-widest uppercase">System Overview</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
                            Twoja infrastruktura <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">pod pełną kontrolą</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-400 text-lg font-light leading-relaxed border-l border-white/10 pl-6">
                            Dostarczamy profesjonalne rozwiązania w zakresie maintenance i obsługi technicznej. 
                            Gwarantujemy bezpieczeństwo, niezawodność i pełną kontrolę nad każdym systemem technicznym Twojego obiektu.
                        </p>
                        
                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 mt-8 pl-6">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white font-mono">{stat.val}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM: SERVICES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group tech-card rounded-xl p-8 relative overflow-hidden flex flex-col justify-between h-[400px]">
                            
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <span className="font-mono text-2xl text-white/10 font-bold group-hover:text-white/20 transition-colors">
                                    {service.id}
                                </span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl text-white font-medium mb-3 group-hover:translate-x-1 transition-transform">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300">
                                    {service.desc}
                                </p>
                                
                                {/* Feature List */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feat, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-500 font-mono group-hover:text-blue-200/70">
                                            <span className="w-1 h-1 bg-blue-500 rounded-full" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer / Action */}
                            <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest border border-blue-500/20 px-2 py-1 rounded">
                                    {service.highlight}
                                </span>
                                
                            </div>

                            {/* Decorative Tech Corners */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/10 group-hover:border-blue-500/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/10 group-hover:border-blue-500/50 transition-colors" />

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AboutSection