'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Clock, Handshake, Ban } from 'lucide-react'

export default function TermsPage() {
	const sections = [
		{
			icon: <FileText className="w-6 h-6" />,
			title: '§1. Postanowienia Ogólne',
			content: `1. Niniejszy Regulamin określa zasady korzystania ze strony internetowej argo-system.pl oraz świadczenia usług przez ARGO SYSTEM.

2. Właścicielem serwisu jest ARGO SYSTEM z siedzibą w Bytom, ul. Stanisława Moniuszki 22 / 403, 1-902 Bytom, NIP: 6263023958, REGON: 366086995.

3. Korzystanie ze strony internetowej oznacza akceptację niniejszego Regulaminu.

4. Regulamin dostępny jest nieodpłatnie na stronie internetowej w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.`,
		},
		{
			icon: <Scale className="w-6 h-6" />,
			title: '§2. Definicje',
			content: `Na potrzeby niniejszego Regulaminu przyjmuje się następujące definicje:

• Usługodawca – ARGO SYSTEM z siedzibą w Warszawie
• Klient – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług Usługodawcy
• Usługi – usługi facility management, obsługi technicznej, audytów i przeglądów oferowane przez Usługodawcę
• Serwis – strona internetowa dostępna pod adresem argo-system.pl
• Formularz kontaktowy – elektroniczny formularz umożliwiający przesłanie zapytania do Usługodawcy`,
		},
		{
			icon: <Handshake className="w-6 h-6" />,
			title: '§3. Zakres Usług',
			content: `1. ARGO SYSTEM świadczy profesjonalne usługi w zakresie:
   a) Facility Management i outsourcing FM
   b) Przeglądy techniczne i audyty bezpieczeństwa
   c) Obsługa i serwis maszyn oraz urządzeń
   d) Utrzymanie instalacji przemysłowych
   e) Pomiary elektryczne i diagnostyka techniczna
   f) Tworzenie dokumentacji technicznej

2. Szczegółowy zakres usług ustalany jest indywidualnie z każdym Klientem.

3. Usługodawca zobowiązuje się do wykonywania usług z należytą starannością, zgodnie z obowiązującymi przepisami prawa i normami branżowymi.`,
		},
		{
			icon: <CreditCard className="w-6 h-6" />,
			title: '§4. Warunki Płatności',
			content: `1. Ceny usług ustalane są indywidualnie na podstawie wyceny.

2. Wycena jest bezpłatna i niezobowiązująca.

3. Płatność za usługi następuje na podstawie faktury VAT, w terminie wskazanym na fakturze (standardowo 14 dni).

4. Akceptowane formy płatności:
   • Przelew bankowy
   • Płatność kartą (po uzgodnieniu)

5. W przypadku opóźnienia w płatności Usługodawca ma prawo naliczać odsetki ustawowe za opóźnienie.`,
		},
		{
			icon: <Clock className="w-6 h-6" />,
			title: '§5. Realizacja Usług',
			content: `1. Termin realizacji usług ustalany jest indywidualnie i potwierdzany w umowie lub zleceniu.

2. Usługodawca zobowiązuje się do:
   a) Terminowej realizacji zleconych usług
   b) Informowania Klienta o postępie prac
   c) Przestrzegania przepisów BHP i ochrony środowiska
   d) Zachowania poufności informacji uzyskanych od Klienta

3. Klient zobowiązuje się do:
   a) Udostępnienia niezbędnej dokumentacji i dostępu do obiektu
   b) Współpracy w zakresie niezbędnym do realizacji usług
   c) Terminowej płatności za wykonane usługi`,
		},
		{
			icon: <AlertTriangle className="w-6 h-6" />,
			title: '§6. Odpowiedzialność',
			content: `1. Usługodawca ponosi odpowiedzialność za szkody wyrządzone Klientowi wskutek niewykonania lub nienależytego wykonania usług, z winy umyślnej lub rażącego niedbalstwa.

2. Odpowiedzialność Usługodawcy ograniczona jest do wartości zlecenia, chyba że odrębna umowa stanowi inaczej.

3. Usługodawca nie ponosi odpowiedzialności za:
   a) Szkody powstałe z przyczyn leżących po stronie Klienta
   b) Przerwy w dostępie do serwisu spowodowane przyczynami technicznymi
   c) Działanie siły wyższej

4. Usługodawca posiada ubezpieczenie OC z tytułu prowadzonej działalności.`,
		},
		{
			icon: <Ban className="w-6 h-6" />,
			title: '§7. Reklamacje',
			content: `1. Klient ma prawo do złożenia reklamacji w przypadku nienależytego wykonania usługi.

2. Reklamację należy zgłosić pisemnie lub mailowo w terminie 14 dni od daty wykonania usługi.

3. Reklamacja powinna zawierać:
   a) Dane Klienta
   b) Opis przedmiotu reklamacji
   c) Żądanie Klienta

4. Usługodawca rozpatrzy reklamację w terminie 14 dni roboczych od jej otrzymania.

5. O wyniku rozpatrzenia reklamacji Klient zostanie poinformowany pisemnie lub mailowo.`,
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Header */}
			<div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
				<div className="max-w-5xl mx-auto px-6">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
						<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
						Wróć do strony głównej
					</Link>
					<div className="flex items-center gap-4 mb-6">
						<div className="p-3 bg-blue-600 rounded-xl">
							<Scale className="w-8 h-8" />
						</div>
						<div>
							<h1 className="text-4xl md:text-5xl font-bold font-montserrat">Regulamin</h1>
							<p className="text-gray-400 mt-2 font-inter">Ostatnia aktualizacja: Styczeń 2026</p>
						</div>
					</div>
					<p className="text-lg text-gray-300 font-inter max-w-3xl">
						Regulamin korzystania z serwisu internetowego oraz świadczenia usług przez ARGO SYSTEM.
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="max-w-5xl mx-auto px-6 py-16">
				<div className="space-y-8">
					{sections.map((section, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-start gap-4">
								<div className="p-3 bg-blue-100 text-blue-600 rounded-xl flex-shrink-0">{section.icon}</div>
								<div>
									<h2 className="text-xl font-bold font-montserrat text-gray-900 mb-4">{section.title}</h2>
									<div className="text-gray-600 font-inter leading-relaxed whitespace-pre-line">{section.content}</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Final Provisions */}
				<div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
					<h2 className="text-2xl font-bold font-montserrat mb-4">§8. Postanowienia Końcowe</h2>
					<div className="font-inter leading-relaxed space-y-4 text-gray-300">
						<p>1. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego.</p>
						<p>2. Usługodawca zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą w życie z chwilą ich publikacji na stronie.</p>
						<p>3. Ewentualne spory rozstrzygane będą przez sąd właściwy dla siedziby Usługodawcy.</p>
						<p>4. Regulamin wchodzi w życie z dniem 1 stycznia 2026 roku.</p>
					</div>
				</div>

				{/* Contact */}
				<div className="mt-12 text-center bg-gray-100 rounded-2xl p-8">
					<h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">Masz pytania dotyczące regulaminu?</h2>
					<p className="text-gray-600 font-inter mb-6">Skontaktuj się z nami</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/kontakt"
							className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
							Formularz kontaktowy
						</Link>
						<a
							href="mailto:kontakt@argo-system.pl"
							className="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-colors">
							kontakt@argo-system.pl
						</a>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="bg-gray-900 text-white py-8">
				<div className="max-w-5xl mx-auto px-6 text-center">
					<p className="text-gray-400 font-inter">© {new Date().getFullYear()} ARGO SYSTEM. Wszystkie prawa zastrzeżone.</p>
				</div>
			</div>
		</div>
	)
}
