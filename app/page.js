import ServicesSection from '@/components/ServicesSection'
import Hero from '../components/Hero'
import HeroAboutSection from '@/components/HeroAboutSection'
import AboutSection from '@/components/AboutSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<div className="font-sans min-h-screen">
			<Hero />
			<HeroAboutSection />
			<AboutSection />
			<ServicesSection />
			<WhyChooseSection />
			<ContactSection />
			<Footer />
		</div>
	)
}
