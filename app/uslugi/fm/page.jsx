import ServiceLayout from '@/components/ServiceLayout'

// 1. METADATA SEO
export const metadata = {
  title: 'Facility Management Śląsk & Polska | Obsługa Techniczna Nieruchomości | ARGO',
  description: 'Kompleksowy Facility Management Techniczny (FM). Przejmujemy opiekę nad instalacjami HVAC, elektrycznymi i BMS. Obsługujemy hale i biurowce na Śląsku (Katowice, KSSE) i w całej Polsce.',
  keywords: [
    'Facility Management Śląsk',
    'Obsługa techniczna nieruchomości',
    'Techniczna obsługa budynków Katowice',
    'Outsourcing techniczny',
    'Serwis HVAC i BMS',
    'Utrzymanie ruchu w biurowcach'
  ],
  openGraph: {
    title: 'Techniczny Facility Management - ARGO System',
    description: 'Jeden dostawca, jedna faktura, pełne bezpieczeństwo techniczne Twojego obiektu.',
  }
}

export default function FMPage() {
    
    // 2. SCHEMA.ORG (JSON-LD)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Techniczny Facility Management (FM)',
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'ARGO SYSTEM',
            'areaServed': ['Katowice', 'Gliwice', 'Śląsk', 'Polska']
        },
        'description': 'Outsourcing utrzymania technicznego nieruchomości. Serwis HVAC, Elektryki, Wod-Kan.',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Usługi FM',
            'itemListElement': [
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Obsługa Techniczna Nieruchomości' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Serwis Klimatyzacji i Wentylacji' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Konserwacja BMS' } }
            ]
        }
    }

    const content = {
        id: "FACILITY-MANAGEMENT",
        category: "Infrastruktura Budynku",
        title: "Utrzymanie Instalacji Przemysłowych (FM)",
        
        // SEO Description: Nacisk na model outsourcingu i lokalizację
        description: "Kompleksowy Facility Management Techniczny. Przejmujemy pełną odpowiedzialność za działanie instalacji w Twoim obiekcie – od HVAC i elektryki, po systemy wod-kan i BMS. Oferujemy elastyczne modele współpracy: od serwisów mobilnych na terenie Śląska (Gliwice, Katowice, Tychy), po stałe utrzymanie techniczne obiektów logistycznych w całej Polsce.",
        
        specs: [
            { label: "Model", value: "Pełny Outsourcing" },
            { label: "Baza / Zasięg", value: "Śląsk / Polska" },
            { label: "Systemy", value: "HVAC / El / Gaz" },
            { label: "Nadzór", value: "Dedykowany PM" },
        ],
        
        features: [
            "Obsługa central wentylacyjnych i klimatyzacji (HVAC) – przeglądy i serwis",
            "Nadzór nad węzłami cieplnymi i kotłowniami gazowymi",
            "Eksploatacja stacji transformatorowych SN/nn (Uprawnienia SEP)",
            "Serwis instalacji wodno-kanalizacyjnych i sprężonego powietrza",
            "Zarządzanie systemami BMS (Building Management System)",
            "Bieżące naprawy ogólnobudowlane i 'Złota Rączka' (Handyman)"
        ],
        
        faq: [
            { q: "Czym różni się FM od zwykłego serwisu?", a: "FM (Facility Management) to ciągła obecność i proaktywna odpowiedzialność za całość infrastruktury. W przeciwieństwie do serwisu 'na wezwanie', to my pilnujemy terminów przeglądów, UDT i książki obiektu, zanim wystąpi awaria." },
            { q: "Czy mogę zlecić obsługę tylko jednej instalacji?", a: "Tak, oferujemy zarówno pakiety kompleksowe (Total FM), jak i obsługę modułową – np. przejęcie wyłącznie serwisu klimatyzacji, wentylacji i ogrzewania (HVAC) w Twoim biurowcu lub hali." },
            { q: "Czy zapewniacie technika na obiekcie?", a: "W przypadku dużych obiektów (powyżej 10 000 m² lub stref przemysłowych KSSE) rekomendujemy model ze stałym technikiem dyżurnym na miejscu. Dla mniejszych obiektów stosujemy grupy mobilne z szybkim czasem dojazdu." }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceLayout data={content} />
        </>
    )
}