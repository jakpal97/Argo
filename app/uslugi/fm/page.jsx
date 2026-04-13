import ServiceLayout from '@/components/ServiceLayout'
import Link from 'next/link'

// 1. METADATA SEO — poprawione pod CTR i spójność z reklamami
export const metadata = {
  title: 'Facility Management Śląsk | Obsługa Techniczna Obiektów Komercyjnych | ARGO System',
  description: 'Kompleksowa obsługa techniczna biurowców, hal i zakładów produkcyjnych na Śląsku. Jeden koordynator, SLA poniżej 4h, serwis 24/7. Bezpłatna wycena w 24h — Katowice, Gliwice, cały Śląsk.',
  keywords: [
    'Facility Management Śląsk',
    'Obsługa techniczna obiektów komercyjnych',
    'Facility Management Katowice',
    'Techniczna obsługa budynków Śląsk',
    'Outsourcing obsługi technicznej',
    'Serwis HVAC Śląsk',
    'Utrzymanie techniczne obiektów',
    'FM outsourcing Katowice',
  ],
  alternates: {
    canonical: 'https://www.argo-system.pl/uslugi/fm',
  },
  openGraph: {
    title: 'Facility Management Śląsk | Obsługa Techniczna Obiektów | ARGO System',
    description: 'Kompleksowa obsługa techniczna biurowców, hal i zakładów na Śląsku. SLA <4h, jeden koordynator, bezpłatna wycena w 24h.',
    url: 'https://www.argo-system.pl/uslugi/fm',
  },
}

// 2. SCHEMA.ORG (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Facility Management — Obsługa Techniczna Obiektów Komercyjnych',
  provider: {
    '@type': 'LocalBusiness',
    name: 'ARGO System',
    telephone: '+48517463469',
    url: 'https://www.argo-system.pl',
    areaServed: ['Katowice', 'Gliwice', 'Zabrze', 'Bytom', 'Tychy', 'Śląsk', 'Polska'],
  },
  description: 'Kompleksowa obsługa techniczna obiektów komercyjnych na Śląsku. Outsourcing FM, serwis HVAC, elektryki, wod-kan i BMS. SLA poniżej 4h, serwis 24/7.',
  offers: {
    '@type': 'Offer',
    description: 'Bezpłatna wycena obsługi technicznej obiektu w 24h',
    url: 'https://www.argo-system.pl/wycena',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi Facility Management',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Obsługa Techniczna Nieruchomości Komercyjnych' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Serwis Klimatyzacji i Wentylacji (HVAC)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Konserwacja BMS i systemów automatyki' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Przeglądy instalacji elektrycznej' } },
    ],
  },
}

const content = {
  id: 'FACILITY-MANAGEMENT',
  category: 'Infrastruktura Budynku',
  title: 'Utrzymanie Instalacji Przemysłowych (FM)',

  description:
    'Kompleksowy Facility Management Techniczny. Przejmujemy pełną odpowiedzialność za działanie instalacji w Twoim obiekcie – od HVAC i elektryki, po systemy wod-kan i BMS. Oferujemy elastyczne modele współpracy: od serwisów mobilnych na terenie Śląska (Gliwice, Katowice, Tychy), po stałe utrzymanie techniczne obiektów logistycznych w całej Polsce.',

  specs: [
    { label: 'Model', value: 'Pełny Outsourcing' },
    { label: 'Baza / Zasięg', value: 'Śląsk / Polska' },
    { label: 'Systemy', value: 'HVAC / El / Gaz' },
    { label: 'Nadzór', value: 'Dedykowany PM' },
  ],

  features: [
    'Obsługa central wentylacyjnych i klimatyzacji (HVAC) – przeglądy i serwis',
    'Nadzór nad węzłami cieplnymi i kotłowniami gazowymi',
    'Eksploatacja stacji transformatorowych SN/nn (Uprawnienia SEP)',
    'Serwis instalacji wodno-kanalizacyjnych i sprężonego powietrza',
    'Zarządzanie systemami BMS (Building Management System)',
    'Bieżące naprawy ogólnobudowlane i Złota Rączka (Handyman)',
  ],

  faq: [
    {
      q: 'Czym różni się FM od zwykłego serwisu?',
      a: 'FM (Facility Management) to ciągła obecność i proaktywna odpowiedzialność za całość infrastruktury. W przeciwieństwie do serwisu na wezwanie, to my pilnujemy terminów przeglądów, UDT i książki obiektu, zanim wystąpi awaria.',
    },
    {
      q: 'Czy mogę zlecić obsługę tylko jednej instalacji?',
      a: 'Tak, oferujemy zarówno pakiety kompleksowe (Total FM), jak i obsługę modułową – np. przejęcie wyłącznie serwisu klimatyzacji, wentylacji i ogrzewania (HVAC) w Twoim biurowcu lub hali.',
    },
    {
      q: 'Czy zapewniacie technika na obiekcie?',
      a: 'W przypadku dużych obiektów (powyżej 10 000 m² lub stref przemysłowych KSSE) rekomendujemy model ze stałym technikiem dyżurnym na miejscu. Dla mniejszych obiektów stosujemy grupy mobilne z szybkim czasem dojazdu.',
    },
  ],
}

// Sekcja CTA — prowadzi do /wycena
function CTASection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-[1220px] mx-auto px-10">
        <div
          className="relative rounded-2xl px-10 py-14 overflow-hidden border border-blue-500/20 text-center"
          style={{
            background:
              'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(20,50,160,0.4) 0%, rgba(10,10,10,0.9) 70%)',
          }}>
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59,124,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,124,246,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Eyebrow */}
          <div className="relative flex items-center justify-center gap-2 text-[11px] font-bold text-blue-400 tracking-[0.12em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#22c55e] animate-pulse" />
            Bezpłatna analiza potrzeb
          </div>

          <h2
            className="relative font-extrabold leading-tight tracking-tight text-white mb-4"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
            Szukasz partnera FM dla swojego obiektu?
          </h2>

          <p className="relative text-[15px] text-slate-400 max-w-[520px] mx-auto mb-8 leading-relaxed">
            Opisz swój obiekt — przygotujemy ofertę dopasowaną do Twoich potrzeb w ciągu 24 godzin.
            Jeden koordynator, jeden kontrakt, pełna kontrola nad infrastrukturą.
          </p>

          {/* Stats */}
          <div className="relative flex items-center justify-center gap-10 mb-10 flex-wrap">
            {[
              { val: '<4h', label: 'Gwarantowany SLA' },
              { val: '24/7', label: 'Wsparcie techniczne' },
              { val: '15+', label: 'Lat doświadczenia' },
              { val: '100%', label: 'Bez zobowiązań' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-extrabold text-2xl text-white leading-none">{s.val}</span>
                <span className="text-[11px] font-medium text-slate-600 uppercase tracking-[0.08em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="relative flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/wycena"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-all hover:shadow-[0_4px_28px_rgba(59,124,246,0.4)] no-underline">
              Bezpłatna wycena FM
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+48517463469"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-lg border border-white/10 hover:border-white/20 transition-all no-underline"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.5 19.79 19.79 0 01.42 1.88 2 2 0 012.42 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +48 517 463 469
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceLayout data={content} />
      <CTASection />
    </>
  )
}