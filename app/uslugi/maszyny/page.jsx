import ServiceLayout from '@/components/ServiceLayout'

// 1. METADATA SEO
export const metadata = {
  title: 'Utrzymanie Ruchu i Serwis Maszyn | Śląsk & Polska | ARGO',
  description: 'Profesjonalne Utrzymanie Ruchu (UR) dla przemysłu. Serwis maszyn 24/7, diagnostyka wibroakustyczna, osiowanie laserowe i relokacje linii produkcyjnych. Działamy w strefach KSSE (Gliwice, Tychy) i całej Polsce.',
  keywords: [
    'Utrzymanie Ruchu Śląsk',
    'Serwis maszyn przemysłowych',
    'Relokacja maszyn Polska',
    'Diagnostyka wibroakustyczna',
    'Osiowanie laserowe wałów',
    'Naprawa automatyki przemysłowej'
  ],
  openGraph: {
    title: 'Serwis Maszyn i Utrzymanie Ruchu - ARGO System',
    description: 'Minimalizujemy przestoje. Serwis 24/7, diagnostyka i modernizacje parków maszynowych.',
  }
}

export default function MachinesPage() {
    
    // 2. SCHEMA.ORG (JSON-LD)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Obsługa Maszyn i Urządzeń Przemysłowych',
        'provider': {
            '@type': 'LocalBusiness',
            'name': 'ARGO SYSTEM',
            'areaServed': ['Śląsk', 'Katowice', 'Gliwice', 'Tychy', 'Polska']
        },
        'description': 'Outsourcing utrzymania ruchu, naprawy maszyn, diagnostyka i relokacje.',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Usługi Utrzymania Ruchu',
            'itemListElement': [
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Prewencyjne Utrzymanie Ruchu' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Diagnostyka Wibroakustyczna' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Relokacja Maszyn' } }
            ]
        }
    }

    const content = {
        id: "MACHINERY-SERVICE",
        category: "Utrzymanie Ruchu (UR)",
        title: "Obsługa Maszyn i Urządzeń Przemysłowych",
        
        // SEO Description: Nacisk na ciągłość produkcji i lokalizację przemysłową
        description: "Minimalizujemy kosztowne przestoje produkcyjne poprzez proaktywny serwis i zaawansowaną diagnostykę. Jako firma ze Śląska, rozumiemy specyfikę pracy ciągłej w przemyśle ciężkim i automotive. Oferujemy wsparcie 24/7 dla parków maszynowych w strefach ekonomicznych (np. KSSE Gliwice/Tychy) oraz mobilny serwis na terenie całej Polski. Zajmujemy się wszystkim: od regeneracji części, przez relokację linii, aż po modernizację automatyki.",
        
        specs: [
            { label: "Dostępność", value: "Serwis 24/7" },
            { label: "Czas reakcji", value: "SLA < 4h (Śląsk)" },
            { label: "Zakres", value: "Mechanika & Auto" },
            { label: "Części", value: "OEM & Zamienniki" },
        ],
        
        features: [
            "Prewencyjne utrzymanie ruchu (Preventive Maintenance) w oparciu o harmonogramy",
            "Diagnostyka wibroakustyczna łożysk i napędów (wykrywanie awarii przed wystąpieniem)",
            "Laserowe osiowanie wałów i dynamiczne wyważanie wirników",
            "Remonty kapitalne i modernizacja układów sterowania (PLC / SCADA)",
            "Relokacja pojedynczych maszyn i całych linii produkcyjnych (Demontaż -> Transport -> Uruchomienie)",
            "Gospodarka smarownicza i filtrowanie olejów hydraulicznych"
        ],
        
        faq: [
            { q: "Czy obsługujecie maszyny wszystkich producentów?", a: "Tak, posiadamy doświadczenie w serwisie wiodących marek automatyki (Siemens, Allen-Bradley) i mechaniki. W przypadku starych lub nietypowych urządzeń bez dokumentacji, nasz zespół inżynierów przeprowadza inżynierię wsteczną (Reverse Engineering)." },
            { q: "Jak szybko możecie przyjechać do awarii?", a: "Dla klientów kontraktowych na Śląsku gwarantujemy czas reakcji nawet do 4 godzin. W pozostałych regionach Polski dojazd następuje zazwyczaj w ciągu 8-12 godzin lub zgodnie z ustalonym SLA." },
            { q: "Czy zapewniacie części zamienne?", a: "Tak, to klucz do szybkiej naprawy. Posiadamy własny magazyn części krytycznych oraz sieć zaufanych dostawców komponentów hydrauliki siłowej i pneumatyki, co pozwala nam omijać długie czasy oczekiwania u producentów." }
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