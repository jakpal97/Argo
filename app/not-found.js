import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center px-4">
			{/* Video Background */}
			<div className="absolute inset-0 w-full h-full">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
					crossOrigin="anonymous">
					<source src="https://ls-bodyshop-portfolio.s3.eu-north-1.amazonaws.com/BG+11.mp4" type="video/mp4" />
				</video>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/60"></div>
			</div>
			<div className="relative z-10 max-w-2xl mx-auto text-center">
				{/* 404 Number */}
				<div className="mb-8">
					<h1 className="text-9xl font-bold font-montserrat text-blue-600 mb-4">404</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
				</div>

				{/* Error Message */}
				<div className="mb-12">
					<h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-6">Strona nie została znaleziona</h2>
					<p className="text-xl font-inter text-gray-600 leading-relaxed">
						Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona. Sprawdź adres URL lub wróć do
						strony głównej.
					</p>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold font-inter py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
						Wróć do strony głównej
					</Link>
					<Link
						href="/kontakt"
						className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold font-inter py-4 px-8 rounded-xl transition-all duration-300">
						Skontaktuj się z nami
					</Link>
				</div>

				{/* Additional Help */}
				<div className="mt-16 p-8 bg-gray-50 rounded-2xl">
					<h3 className="text-xl font-bold font-montserrat text-gray-900 mb-4">Potrzebujesz pomocy?</h3>
					<p className="text-gray-600 font-inter mb-6">
						Jeśli masz problemy z nawigacją lub potrzebujesz pomocy, skontaktuj się z naszym zespołem.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
						<a href="tel:+48123456789" className="text-blue-600 hover:text-blue-800 font-inter">
							📞 +48 123 456 789
						</a>
						<a href="mailto:kontakt@argo.pl" className="text-blue-600 hover:text-blue-800 font-inter">
							✉️ kontakt@argo.pl
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
