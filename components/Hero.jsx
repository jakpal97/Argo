'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
    // --- STANY ---
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)

    // --- STANY INTRO ---
    const [showIntro, setShowIntro] = useState(true) 
    const [startHeroAnimation, setStartHeroAnimation] = useState(false) 

    // 1. LOGIKA INTRO (POPRAWIONA)
    useEffect(() => {
        // Sprawdź czy użytkownik już był na stronie w tej sesji
        const hasSeenIntro = typeof window !== 'undefined' ? sessionStorage.getItem('argo_intro_seen') : false

        if (hasSeenIntro) {
            // SCENARIUSZ A: Użytkownik wraca (już widział intro)
            setShowIntro(false)         // Wyłącz intro natychmiast
            setStartHeroAnimation(true) // Pokaż napisy od razu
        } else {
            // SCENARIUSZ B: Pierwsze wejście
            
            // ZAPISZ NATYCHMIAST
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('argo_intro_seen', 'true')
            }

            // Timery animacji
            const timer1 = setTimeout(() => {
                setShowIntro(false)
            }, 2200)

            const timer2 = setTimeout(() => {
                setStartHeroAnimation(true)
            }, 2500)

            return () => {
                clearTimeout(timer1)
                clearTimeout(timer2)
            }
        }
    }, [])

    // 2. LOGIKA NAVBARA
    useEffect(() => {
        const controlNavbar = () => {
            if (isMenuOpen) return 

            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsNavbarVisible(false)
            } else {
                setIsNavbarVisible(true)
            }
            setIsScrolled(currentScrollY > 50)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    }, [lastScrollY, isMenuOpen])

    // Blokowanie scrolla (JS Fallback)
    useEffect(() => {
        if (showIntro || isMenuOpen) {
            document.body.style.overflow = 'hidden'
            // Dodatkowo blokujemy HTML dla pewności na mobilkach
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
    }, [isMenuOpen, showIntro])

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black font-sans text-white">
            
            {/* NAPRAWA BŁĘDU: Używamy zwykłego tagu style z dangerouslySetInnerHTML.
               To omija kompilator styled-jsx (który wyrzucał błąd nested tag), 
               ale nadal aplikuje CSS natychmiastowo po renderze.
            */}
            {showIntro && (
                <style dangerouslySetInnerHTML={{__html: `
                    html, body {
                        overflow: hidden !important;
                        height: 100% !important;
                    }
                `}} />
            )}

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;600;800&display=swap');
                .font-mono-tech { font-family: 'JetBrains Mono', monospace; }
                .font-inter { font-family: 'Inter', sans-serif; }
                
                .glass-panel {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .hero-content {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
                }
                
                .hero-content.active {
                    opacity: 1;
                    transform: translateY(0);
                }

                .delay-1 { transition-delay: 0.1s; }
                .delay-2 { transition-delay: 0.3s; }
                .delay-3 { transition-delay: 0.5s; }

                @keyframes pulse-logo {
                    0% { opacity: 0; transform: scale(0.95); }
                    50% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(1.05); }
                }

                @keyframes slideRight {
                    0% { transform: scaleX(0); transform-origin: left; }
                    50% { transform: scaleX(1); transform-origin: left; }
                    51% { transform: scaleX(1); transform-origin: right; }
                    100% { transform: scaleX(0); transform-origin: right; }
                }
            `}</style>

            {/* --- INTRO PRELOADER --- */}
            <div 
                className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out ${showIntro ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col items-center">
                     <img
                        src="/logobez.png" 
                        alt="ARGO Loading" 
                        className="h-24 md:h-32 brightness-0 invert animate-[pulse-logo_2s_ease-in-out_infinite]"
                    />
                    <div className="mt-4 w-32 h-[1px] bg-white/20 overflow-hidden">
                        <div className="h-full bg-blue-500 w-full animate-[slideRight_1.5s_ease-in-out_infinite]" />
                    </div>
                </div>
            </div>

            {/* --- VIDEO BACKGROUND --- */}
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] z-10 pointer-events-none opacity-40" />
            </div>

            {/* --- SMART NAVIGATION --- */}
            <nav 
                className={`fixed top-0 left-0 w-full z-[100] px-6 py-4 transition-all duration-700 transform ${
                    isNavbarVisible && !showIntro ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                } ${
                    isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
            >
                <div className="max-w-[1920px] mx-auto flex justify-between items-center">
                    
                    {/* Logo Nav */}
                    <div className="relative z-50 hover:scale-105 transition-transform duration-300">
                         <img
                            src="/logobez.png" 
                            alt="ARGO Logo" 
                            className="h-10 md:h-12 brightness-0 invert opacity-90 cursor-pointer" 
                            onClick={() => window.location.href = '/'}
                        />
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative z-50 group flex items-center gap-3 px-4 py-2 glass-panel rounded-none border border-white/20 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300"
                    >
                        <span className="hidden sm:block font-mono-tech text-xs uppercase tracking-widest text-white/80 group-hover:text-blue-400">
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </span>
                        <div className="flex flex-col gap-[5px] w-6">
                            <span className={`h-[2px] bg-white w-full transition-all duration-300 group-hover:bg-blue-400 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                            <span className={`h-[2px] bg-white w-2/3 ml-auto group-hover:w-full transition-all duration-300 group-hover:bg-blue-400 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`h-[2px] bg-white w-full transition-all duration-300 group-hover:bg-blue-400 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* --- FULL SCREEN MENU OVERLAY --- */}
            <div className={`fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                 <div className="h-full w-full flex flex-col justify-center items-center relative">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />

                    <div className="flex flex-col space-y-2 w-full max-w-lg px-6 relative z-10">
                        <a href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl md:text-5xl font-bold text-white/60 hover:text-white transition-colors tracking-tight py-2 border-b border-white/10 hover:border-blue-500/50">Strona Główna</a>
                        
                        <div className="py-2 border-b border-white/10 hover:border-blue-500/50 transition-colors">
                            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full flex items-center justify-between text-3xl md:text-5xl font-bold text-white/60 hover:text-white transition-colors tracking-tight group">
                                Usługi <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-blue-500' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isServicesOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="flex flex-col space-y-3 pl-4 border-l-2 border-blue-500/30 ml-2">
                                    <a href="/uslugi/audyty" className="text-lg md:text-xl text-gray-400 hover:text-blue-400 transition-colors font-mono-tech flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Audyty & Pomiary</a>
                                    <a href="/uslugi/maszyny" className="text-lg md:text-xl text-gray-400 hover:text-blue-400 transition-colors font-mono-tech flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Serwis Maszyn</a>
                                    <a href="/uslugi/fm" className="text-lg md:text-xl text-gray-400 hover:text-blue-400 transition-colors font-mono-tech flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Facility Management</a>
                                </div>
                            </div>
                        </div>

                        <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-3xl md:text-5xl font-bold text-white/60 hover:text-white transition-colors tracking-tight py-2 border-b border-white/10 hover:border-blue-500/50">O firmie</a>
                        <a href="/kontakt" onClick={() => setIsMenuOpen(false)} className="text-3xl md:text-5xl font-bold text-white/60 hover:text-white transition-colors tracking-tight py-2 border-b border-white/10 hover:border-blue-500/50">Kontakt</a>
                    </div>
                    <div className="absolute bottom-10 left-0 w-full text-center"><p className="text-gray-500 font-mono-tech text-xs uppercase tracking-widest">ARGO SYSTEM • SYSTEM ONLINE</p></div>
                </div>
            </div>

            {/* --- HERO CONTENT --- */}
            <div className="relative z-20 w-full h-full flex flex-col justify-end pb-24 px-6 md:px-16 max-w-[1920px] mx-auto pointer-events-none">
                <div className="pointer-events-auto">
                    
                    {/* Badge */}
                    {/* <div className={`hero-content ${startHeroAnimation ? 'active' : ''} mb-6 flex items-center gap-4`}>
                        <div className="px-3 py-1 border border-blue-500/50 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-mono-tech uppercase tracking-widest rounded-full flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            System Maintenance & Facility
                        </div>
                    </div> */}

                    {/* H1 */}
                    <h1 className={`hero-content delay-1 ${startHeroAnimation ? 'active' : ''} font-inter font-black text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] leading-[0.9] tracking-tight text-white mix-blend-overlay opacity-90 mb-8 max-w-6xl`}>
                        OBSŁUGA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">TECHNICZNA</span> <br />
                        ŚLĄSK & POLSKA
                    </h1>

                    {/* Content Grid */}
                    <div className={`hero-content delay-2 ${startHeroAnimation ? 'active' : ''} grid grid-cols-1 md:grid-cols-12 gap-8 items-end`}>
                        <div className="md:col-span-5 lg:col-span-4">
                            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed border-l-2 border-blue-500 pl-6">
                                Lider Facility Management w Aglomeracji Śląskiej.
                                Zapewniamy serwis techniczny, audyty i maintenance dla przemysłu 
                                na terenie Śląska (Katowice, Gliwice, Tychy) oraz całej Polski.
                            </p>
                        </div>
                        <div className="hidden md:block md:col-span-3 lg:col-span-5" />
                        <div className="md:col-span-4 lg:col-span-3 flex justify-start md:justify-end">
                            <a href="/kontakt" className="group relative overflow-hidden bg-white text-black px-8 py-6 w-full md:w-auto flex items-center justify-between gap-6 transition-all hover:bg-blue-600 hover:text-white">
                                <span className="font-mono-tech font-bold uppercase tracking-wider text-sm">Poznaj ARGO</span>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/50 group-hover:bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-black group-hover:bg-white"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}