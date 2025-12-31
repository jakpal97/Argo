import ServiceLayout from '@/components/ServiceLayout'

// 1. METADATA DLA GOOGLE (SEO)
export const metadata = {
  title: 'Przeglądy Budowlane i Pomiary Elektryczne | Śląsk & Polska | ARGO',
  description: 'Wykonujemy obowiązkowe przeglądy 5-letnie budynków, pomiary elektryczne i termowizję na terenie Śląska (Katowice, Gliwice, KSSE) i całej Polski. Pełna dokumentacja do KOB.',
  keywords: [
    'Przeglądy budowlane Śląsk', 
    'Pomiary elektryczne Katowice', 
    'Audyt KOB Gliwice', 
    'Termowizja przemysłowa', 
    'Przeglądy roczne budynków',
    'Pomiary oświetlenia awaryjnego'
  ],
  openGraph: {
    title: 'Profesjonalne Audyty Techniczne Obiektów - ARGO System',
    description: 'Zadbaj o legalizację techniczną Twojego obiektu. Pomiary elektryczne, gazowe i ppoż dla przemysłu.',
  }
}

export default function AuditsPage() {
    
    // 2. SCHEMA.ORG (JSON-LD) - Żeby Google wiedziało, że to usługa + FAQ
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Przeglądy Techniczne i Audyty Obiektów',
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'ARGO SYSTEM',
            'areaServed': ['Śląsk', 'Polska', 'Katowice', 'Gliwice']
        },
        'description': 'Kompleksowe badania instalacji elektrycznych, przeglądy budowlane i audyty KOB.',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Usługi Audytorskie',
            'itemListElement': [
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Pomiary Elektryczne' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Przeglądy Budowlane 5-letnie' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Termowizja' } }
            ]
        }
    }

    const content = {
        id: "TECHNICAL-AUDITS",
        category: "Dokumentacja & Prawo",
        title: "Przeglądy Techniczne i Audyty Obiektów",
        
        // SEO CONTENT: Dodano wzmiankę o Śląsku i KSSE
        description: "Zapewniamy pełną legalizację techniczną Twojego obiektu przemysłowego lub komercyjnego. Specjalizujemy się w obsłudze firm z terenu Śląska (w tym strefy KSSE) oraz realizacjach sieciowych w całej Polsce. Przeprowadzamy obowiązkowe przeglądy budowlane (roczne i 5-letnie), pomiary elektryczne oraz audyty systemów bezpieczeństwa, dostarczając dokumentację akceptowaną przez Ubezpieczycieli.",
        
        specs: [
            { label: "Zgodność", value: "Prawo Budowlane" },
            { label: "Obszar", value: "Śląsk / Polska" }, // Zmienione na geo-lokalizację
            { label: "Certyfikacja", value: "Uprawnienia UDT/SEP" },
            { label: "Czas realizacji", value: "od 48h" },
        ],
        
        features: [
            "Pomiary elektryczne i termowizja rozdzielni (Katowice / Gliwice / Cały Kraj)",
            "Przeglądy systemów oddymiania, SAP i hydrantów",
            "Prowadzenie i audyty Książki Obiektu Budowlanego (KOB)",
            "Badania szczelności instalacji gazowych i chłodniczych",
            "Pomiary natężenia oświetlenia awaryjnego i ewakuacyjnego",
            "Przygotowanie obiektu do kontroli PSP i UDT"
        ],
        
        faq: [
            { q: "Jak często należy wykonywać pomiary elektryczne?", a: "Zgodnie z Prawem Budowlanym, pełne pomiary instalacji elektrycznej w obiektach przemysłowych i usługowych należy przeprowadzać nie rzadziej niż co 5 lat. W warunkach uciążliwych (np. przemysł ciężki na Śląsku) zalecamy częstsze weryfikacje." },
            { q: "W jakiej formie otrzymam protokół?", a: "Dostarczamy nowoczesną dokumentację w formie cyfrowej (PDF z kwalifikowanym podpisem elektronicznym) oraz w wersji papierowej do archiwum technicznego obiektu." },
            { q: "Czy audyt obejmuje zalecenia pokontrolne?", a: "Tak, nasz raport to nie tylko 'papier'. Wskazujemy listę wykrytych usterek, priorytetyzujemy je pod kątem bezpieczeństwa i przygotowujemy kosztorys naprawczy." }
        ]
    }

    return (
        <>
            {/* Wstrzyknięcie danych strukturalnych dla Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceLayout data={content} />
        </>
    )
}