import { Plus_Jakarta_Sans } from 'next/font/google'
 
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})
 
export const metadata = {
  title: 'Bezpłatna Wycena FM — Obsługa Techniczna Obiektów | ARGO System',
  description: 'Szukasz partnera do facility management lub obsługi technicznej obiektów komercyjnych na Śląsku? Opisz swój budynek — przygotujemy ofertę w 24h. Bez zobowiązań.',
  alternates: {
    canonical: 'https://www.argo-system.pl/wycena',
  },
}
 
export default function WycenaLayout({ children }) {
  return (
    <div className={jakarta.className}>
      {children}
    </div>
  )
}
 