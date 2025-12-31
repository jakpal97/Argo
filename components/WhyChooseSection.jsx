'use client'
import React from 'react'
import { Briefcase, Shield, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

const WhyChooseCTA = () => {
    
    const features = [
        {
            title: 'Doświadczenie i Profesjonalizm',
            description: 'Zespół certyfikowanych specjalistów w FM outsourcingu i obsłudze maszyn. Ponad 15 lat praktyki inżynieryjnej.',
            icon: <Briefcase className="w-6 h-6" />,
            stat: '15+ LAT'
        },
        {
            title: 'Bezpieczeństwo (HSE)',
            description: 'Wszystkie systemy i instalacje działają zgodnie z najwyższymi standardami ISO oraz normami facility management.',
            icon: <Shield className="w-6 h-6" />,
            stat: '100% ISO'
        },
        {
            title: 'Indywidualne Podejście',
            description: 'Dostosowujemy rozwiązania do specyfiki obiektu (SLA), zapewniając pełną cyfrową dokumentację techniczną.',
            icon: <Globe className="w-6 h-6" />,
            stat: 'CUSTOM SLA'
        },
    ]

    return (
        <section className="relative bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
            
            <div className="max-w-[1600px] mx-auto">
                
               
                {/* --- CZĘŚĆ 2: VIDEO CTA (FINAŁ) --- */}
                <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center justify-center group">
                    
                    {/* Video Background */}
                    <div className="absolute inset-0 w-full h-full">
                         <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out opacity-60"
                        >
                            <source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
                        </video>
                        {/* Mocny Overlay dla czytelności tekstu */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
                        {/* Ziarno/Noise */}
                        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-4xl px-6">
                       

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Gotowy na współpracę <br />
                            z liderem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">branży?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Skontaktuj się z nami i poznaj, jak nasza kompleksowa obsługa obiektów, 
                            FM outsourcing i maintenance mogą usprawnić Twój biznes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="#contact" className="group/btn relative bg-white text-black px-10 py-5 rounded-xl font-bold font-mono uppercase tracking-wide overflow-hidden transition-all hover:scale-105">
                                <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                                <span className="relative z-10 flex items-center gap-3 group-hover/btn:text-white transition-colors">
                                    Skontaktuj się
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </a>
                            
                            <div className="hidden sm:flex items-center gap-4 text-sm font-mono text-gray-400">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>Bezpłatna wycena</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default WhyChooseCTA