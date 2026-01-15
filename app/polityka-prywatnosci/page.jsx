'use client'

import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
	const sections = [
		{
			icon: <Database className="w-6 h-6" />,
			title: '1. Administrator Danych Osobowych',
			content: `Administratorem Twoich danych osobowych jest ARGO SYSTEM z siedzibą w Warszawie, ul. Przykładowa 123, 00-000 Warszawa, NIP: XXXXXXXXXX, REGON: XXXXXXXXXX.

Kontakt z administratorem możliwy jest pod adresem e-mail: rodo@argo-system.pl lub listownie na adres siedziby firmy.`,
		},
		{
			icon: <Eye className="w-6 h-6" />,
			title: '2. Zakres Zbieranych Danych',
			content: `Zbieramy następujące kategorie danych osobowych:

• Dane identyfikacyjne: imię, nazwisko, nazwa firmy
• Dane kontaktowe: adres e-mail, numer telefonu, adres korespondencyjny
• Dane techniczne: adres IP, typ przeglądarki, system operacyjny (zbierane automatycznie)
• Dane dotyczące zapytań: treść wiadomości, preferowane usługi

Podanie danych jest dobrowolne, ale niezbędne do realizacji usług lub odpowiedzi na zapytania.`,
		},
		{
			icon: <Lock className="w-6 h-6" />,
			title: '3. Cele Przetwarzania Danych',
			content: `Twoje dane osobowe przetwarzamy w następujących celach:

• Odpowiedź na zapytania przesłane przez formularz kontaktowy (art. 6 ust. 1 lit. b RODO)
• Realizacja umów i świadczenie usług facility management (art. 6 ust. 1 lit. b RODO)
• Marketing bezpośredni własnych produktów i usług (art. 6 ust. 1 lit. f RODO)
• Wypełnienie obowiązków prawnych, w tym podatkowych i rachunkowych (art. 6 ust. 1 lit. c RODO)
• Dochodzenie roszczeń lub obrona przed roszczeniami (art. 6 ust. 1 lit. f RODO)`,
		},
		{
			icon: <UserCheck className="w-6 h-6" />,
			title: '4. Prawa Użytkownika',
			content: `Przysługują Ci następujące prawa związane z przetwarzaniem danych osobowych:

• Prawo dostępu do swoich danych oraz otrzymania ich kopii
• Prawo do sprostowania (poprawiania) swoich danych
• Prawo do usunięcia danych ("prawo do bycia zapomnianym")
• Prawo do ograniczenia przetwarzania danych
• Prawo do przenoszenia danych
• Prawo do wniesienia sprzeciwu wobec przetwarzania danych
• Prawo do cofnięcia zgody w dowolnym momencie
• Prawo do wniesienia skargi do Prezesa UODO

Aby skorzystać z powyższych praw, skontaktuj się z nami: rodo@argo-system.pl`,
		},
		{
			icon: <Shield className="w-6 h-6" />,
			title: '5. Bezpieczeństwo Danych',
			content: `Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych osobowych:

• Szyfrowanie połączenia SSL/TLS
• Regularne aktualizacje systemów bezpieczeństwa
• Ograniczony dostęp do danych tylko dla upoważnionych pracowników
• Regularne szkolenia personelu z zakresu ochrony danych
• Procedury reagowania na incydenty bezpieczeństwa
• Kopie zapasowe przechowywane w bezpiecznych lokalizacjach`,
		},
		{
			icon: <Mail className="w-6 h-6" />,
			title: '6. Okres Przechowywania Danych',
			content: `Dane osobowe przechowujemy przez okres:

• Dane z formularza kontaktowego: do 2 lat od ostatniego kontaktu
• Dane związane z realizacją umowy: przez okres trwania umowy + 6 lat (okres przedawnienia roszczeń)
• Dane księgowe i podatkowe: 5 lat od końca roku podatkowego
• Dane marketingowe: do momentu wniesienia sprzeciwu

Po upływie wskazanych okresów dane są usuwane lub anonimizowane.`,
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
							<Shield className="w-8 h-8" />
						</div>
						<div>
							<h1 className="text-4xl md:text-5xl font-bold font-montserrat">Polityka Prywatności</h1>
							<p className="text-gray-400 mt-2 font-inter">Ostatnia aktualizacja: Styczeń 2026</p>
						</div>
					</div>
					<p className="text-lg text-gray-300 font-inter max-w-3xl">
						Dbamy o Twoją prywatność. Poniżej znajdziesz szczegółowe informacje o tym, jak przetwarzamy Twoje dane
						osobowe zgodnie z RODO.
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

				{/* Cookies Section */}
				<div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
					<h2 className="text-2xl font-bold font-montserrat mb-4">7. Pliki Cookies</h2>
					<div className="font-inter leading-relaxed space-y-4">
						<p>
							Nasza strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania serwisu oraz analizy
							ruchu.
						</p>
						<div className="grid md:grid-cols-2 gap-6 mt-6">
							<div className="bg-white/10 rounded-xl p-4">
								<h3 className="font-bold mb-2">Cookies niezbędne</h3>
								<p className="text-sm text-blue-100">Wymagane do podstawowego funkcjonowania strony. Nie można ich wyłączyć.</p>
							</div>
							<div className="bg-white/10 rounded-xl p-4">
								<h3 className="font-bold mb-2">Cookies analityczne</h3>
								<p className="text-sm text-blue-100">Pomagają nam zrozumieć, jak użytkownicy korzystają ze strony.</p>
							</div>
						</div>
						<p className="text-sm text-blue-100 mt-4">
							Możesz zarządzać ustawieniami cookies w swojej przeglądarce internetowej.
						</p>
					</div>
				</div>

				{/* Contact */}
				<div className="mt-12 text-center bg-gray-100 rounded-2xl p-8">
					<h2 className="text-2xl font-bold font-montserrat text-gray-900 mb-4">Masz pytania dotyczące prywatności?</h2>
					<p className="text-gray-600 font-inter mb-6">
						Skontaktuj się z naszym Inspektorem Ochrony Danych
					</p>
					<a
						href="mailto:rodo@argo-system.pl"
						className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
						<Mail className="w-5 h-5" />
						rodo@argo-system.pl
					</a>
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
