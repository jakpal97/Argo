import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Facility Management Śląsk — Bezpłatna Wycena FM | ARGO System',
  description: 'Szukasz obsługi technicznej obiektów komercyjnych na Śląsku? Facility management, przeglądy elektryczne, serwis 24/7. Bezpłatna wycena w 24h.',
}

export default function WycenaLayout({ children }) {
  return (
    <>
      {/* Google Ads tag — AW-18005751711 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18005751711"
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18005751711');
        `}
      </Script>

      <div className={jakarta.className}>
        {children}
      </div>
    </>
  )
}