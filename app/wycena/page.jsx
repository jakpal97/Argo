'use client'

// Google Ads conversion
const gtagConversion = () => {
	if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
		window.gtag('event', 'conversion', {
			send_to: 'AW-18005751711/xfS4CLq-9YocEJ_v54lD',
			value: 1.0,
			currency: 'PLN',
		})
	}
}

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { sendWycenaEmail } from '@/app/lib/actions'

// ─── IKONY ───────────────────────────────────────────────────────────────────

function IconArrow() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	)
}

function IconSend() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
		</svg>
	)
}

function IconCheck() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#22c55e"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polyline points="20 6 9 17 4 12" />
		</svg>
	)
}

function IconPhone() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="#60a5fa"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-4 h-4">
			<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.5 19.79 19.79 0 01.42 1.88 2 2 0 012.42 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
		</svg>
	)
}

function IconMail() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="#60a5fa"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-4 h-4">
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
			<polyline points="22,6 12,13 2,6" />
		</svg>
	)
}

function IconPin() {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="#60a5fa"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="w-4 h-4">
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	)
}

// ─── STAŁE ───────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
	{ label: 'Katowice', sub: 'centrum obsługi' },
	{ label: 'Gliwice', sub: 'serwis mobilny' },
	{ label: 'Zabrze', sub: 'obsługa techniczna' },
	{ label: 'Bytom', sub: 'przeglądy budynków' },
	{ label: 'Tychy', sub: 'facility management' },
	{ label: 'Dąbrowa Górnicza', sub: 'serwis hal' },
	{ label: 'KSSE', sub: 'strefy ekonomiczne' },
	{ label: 'SLA <4h', sub: 'gwarantowany czas reakcji' },
	{ label: '24/7', sub: 'wsparcie techniczne' },
	{ label: '15+ lat', sub: 'doświadczenia na Śląsku' },
]

const SERVICES = [
	{
		n: '01',
		title: 'Systemy Bezpieczeństwa',
		desc: 'Zaawansowana integracja CCTV, SSWiN oraz kontroli dostępu. Projektowanie zgodne z normami ISO dla obiektów przemysłowych i komercyjnych.',
		caps: ['Monitoring IP', 'Biometria', 'PPOŻ'],
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-5 h-5"
				fill="none"
				stroke="#60a5fa"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			</svg>
		),
	},
	{
		n: '02',
		title: 'Diagnostyka Techniczna',
		desc: 'Prewencyjne utrzymanie ruchu. Analiza wibroakustyczna i termowizyjna parków maszynowych dla zakładów produkcyjnych na Śląsku.',
		caps: ['Termowizja', 'Audyty energetyczne', 'Raportowanie'],
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-5 h-5"
				fill="none"
				stroke="#60a5fa"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round">
				<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
			</svg>
		),
	},
	{
		n: '03',
		title: 'Maintenance & Serwis',
		desc: 'Kompleksowy FM outsourcing. Gwarantowany czas reakcji SLA i dostępność części zamiennych OEM. Serwis 24/7 na całym Śląsku.',
		caps: ['SLA <4h', 'Części OEM', 'Modernizacje'],
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-5 h-5"
				fill="none"
				stroke="#60a5fa"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round">
				<circle cx="12" cy="12" r="3" />
				<path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
			</svg>
		),
	},
]

const WHY_ITEMS = [
	{
		n: '01',
		title: 'Jeden punkt kontaktu',
		desc: 'Jeden koordynator techniczny odpowiada za cały obiekt. Koniec z szukaniem różnych podwykonawców dla każdej usterki.',
	},
	{
		n: '02',
		title: 'Doświadczenie w KSSE',
		desc: 'Obsługujemy obiekty w Katowickiej Specjalnej Strefie Ekonomicznej. Znamy wymagania compliance dla obiektów przemysłowych.',
	},
	{
		n: '03',
		title: 'Przejrzyste raportowanie',
		desc: 'Regularne raporty techniczne, dokumentacja przeglądów i jasna ewidencja kosztów. Pełna kontrola nad stanem technicznym.',
	},
	{
		n: '04',
		title: 'Elastyczne modele współpracy',
		desc: 'Stały technik na obiekcie, serwis patrolowy lub outsourcing wybranych funkcji — dopasowujemy do Twoich potrzeb i budżetu.',
	},
]

// ─── KOMPONENTY ──────────────────────────────────────────────────────────────

function Eyebrow({ children }) {
	return (
		<div className="flex items-center gap-2 text-[11px] font-bold text-blue-400 tracking-[0.12em] uppercase mb-3">
			<span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
			{children}
		</div>
	)
}

function FormCard({ children, id }) {
	return (
		<div
			id={id}
			className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl"
			style={{ background: 'rgba(255,255,255,0.04)' }}>
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
			{children}
		</div>
	)
}

function FormHead({ eyebrow, title, subtitle }) {
	return (
		<div className="px-8 pt-7 pb-5 border-b border-white/[0.07]">
			<div className="flex items-center gap-1.5 text-[10px] font-semibold text-blue-400 tracking-[0.1em] uppercase mb-2.5">
				<span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_#22c55e]" />
				{eyebrow}
			</div>
			<h2 className="font-extrabold text-xl text-white leading-snug mb-1.5">{title}</h2>
			<p className="text-sm text-slate-400">{subtitle}</p>
		</div>
	)
}

function FormFooter({ items }) {
	return (
		<div
			className="flex items-center justify-center gap-5 px-8 py-3 border-t border-white/[0.06]"
			style={{ background: 'rgba(0,0,0,0.3)' }}>
			{items.map((item, i) => (
				<div
					key={i}
					className="flex items-center gap-1.5 text-[10px] font-medium text-slate-600 tracking-[0.04em] uppercase">
					{item.icon}
					{item.label}
				</div>
			))}
		</div>
	)
}

function SelectInput({ label, id, value, onChange, options, required }) {
	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={id} className="text-[10px] font-semibold text-slate-600 tracking-[0.07em] uppercase">
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={e => onChange(e.target.value)}
				required={required}
				className="bg-white/5 border border-white/10 rounded-lg text-white text-sm px-3.5 py-2.5 outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-colors appearance-none cursor-pointer">
				{options.map(opt => (
					<option key={opt.value} value={opt.value} disabled={opt.disabled} className="bg-neutral-900">
						{opt.label}
					</option>
				))}
			</select>
		</div>
	)
}

function TextInput({ label, id, type = 'text', value, onChange, placeholder, required }) {
	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={id} className="text-[10px] font-semibold text-slate-600 tracking-[0.07em] uppercase">
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={e => onChange(e.target.value)}
				placeholder={placeholder}
				required={required}
				className="bg-white/5 border border-white/10 rounded-lg text-white text-sm px-3.5 py-2.5 outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-colors placeholder:text-slate-700"
			/>
		</div>
	)
}

function SuccessState({ title, subtitle, phone }) {
	return (
		<div className="flex flex-col items-center justify-center px-8 py-16 text-center gap-4 min-h-[380px]">
			<div className="w-16 h-16 rounded-full flex items-center justify-center border border-green-500/30 bg-green-500/10 mb-2">
				<IconCheck />
			</div>
			<h3 className="font-extrabold text-xl text-white">{title}</h3>
			<p className="text-sm text-slate-400 max-w-[260px]">{subtitle}</p>
			<p className="text-xs text-slate-600 mt-1">Chcesz porozmawiać od razu?</p>
			<a
				href={`tel:${phone.replace(/\s/g, '')}`}
				className="text-base font-bold text-blue-400 hover:text-blue-300 transition-colors">
				{phone}
			</a>
		</div>
	)
}

// ─── FORMULARZ GŁÓWNY (HERO) ─────────────────────────────────────────────────

function HeroForm() {
	const [sent, setSent] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState(false)
	const [form, setForm] = useState({
		name: '',
		company: '',
		email: '',
		phone: '',
		objectType: '',
		objectSize: '',
		location: '',
		urgency: '',
		service: '',
		message: '',
		rodo: false,
	})

	const set = key => val => setForm(f => ({ ...f, [key]: val }))

	const submit = async () => {
		if (!form.name || !form.email || !form.phone || !form.rodo) {
			alert('Uzupełnij wymagane pola (imię, e-mail, telefon) i zaakceptuj RODO.')
			return
		}
		setIsSubmitting(true)
		setError(false)
		const utm = JSON.parse(sessionStorage.getItem('argo_utm') || '{}')
		const result = await sendWycenaEmail({ ...form, utm, formType: 'hero' })
		setIsSubmitting(false)
		if (result.success) {
			gtagConversion()
			window.location.href = '/wycena/dziekujemy'
		} else {
			setError(true)
		}
	}

	if (sent) {
		return (
			<FormCard id="wycena">
				<SuccessState
					title="Zgłoszenie przyjęte!"
					subtitle="Nasz koordynator techniczny zapozna się z Twoim obiektem i oddzwoni, by omówić szczegóły."
					phone="+48 517 463 469"
				/>
			</FormCard>
		)
	}

	return (
		<FormCard id="wycena">
			<FormHead
				eyebrow="Bezpłatna analiza potrzeb"
				title={
					<>
						Opisz swój obiekt —<br />
						dobierzemy rozwiązanie
					</>
				}
				subtitle="Każdy obiekt jest inny. Powiedz nam o swoim — przygotujemy ofertę skrojoną na miarę."
			/>

			<div className="px-8 py-6 flex flex-col gap-3">
				<div className="grid grid-cols-2 gap-3">
					<TextInput
						label="Imię i nazwisko *"
						id="f-name"
						value={form.name}
						onChange={set('name')}
						placeholder="Jan Kowalski"
						required
					/>
					<TextInput
						label="Firma *"
						id="f-company"
						value={form.company}
						onChange={set('company')}
						placeholder="Nazwa firmy"
					/>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<TextInput
						label="E-mail służbowy *"
						id="f-email"
						type="email"
						value={form.email}
						onChange={set('email')}
						placeholder="jan@firma.pl"
						required
					/>
					<TextInput
						label="Telefon *"
						id="f-phone"
						type="tel"
						value={form.phone}
						onChange={set('phone')}
						placeholder="+48 500 000 000"
						required
					/>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<SelectInput
						label="Typ obiektu *"
						id="f-obj"
						value={form.objectType}
						onChange={set('objectType')}
						required
						options={[
							{ value: '', label: 'Wybierz typ', disabled: true },
							{ value: 'Hala produkcyjna', label: 'Hala produkcyjna' },
							{ value: 'Magazyn / centrum logistyczne', label: 'Magazyn / centrum logistyczne' },
							{ value: 'Biurowiec / budynek komercyjny', label: 'Biurowiec / budynek komercyjny' },
							{ value: 'Centrum handlowe', label: 'Centrum handlowe' },
							{ value: 'Obiekt przemysłowy / zakład', label: 'Obiekt przemysłowy / zakład' },
							{ value: 'Wspólnota / budynek mieszkalny', label: 'Wspólnota / budynek mieszkalny' },
							{ value: 'Obiekt użyteczności publicznej', label: 'Obiekt użyteczności publicznej' },
							{ value: 'Inny', label: 'Inny' },
						]}
					/>
					<SelectInput
						label="Powierzchnia obiektu"
						id="f-size"
						value={form.objectSize}
						onChange={set('objectSize')}
						options={[
							{ value: '', label: 'Przybliżona pow.', disabled: true },
							{ value: 'do 500 m²', label: 'do 500 m²' },
							{ value: '500 – 2 000 m²', label: '500 – 2 000 m²' },
							{ value: '2 000 – 10 000 m²', label: '2 000 – 10 000 m²' },
							{ value: '10 000 – 50 000 m²', label: '10 000 – 50 000 m²' },
							{ value: 'powyżej 50 000 m²', label: 'powyżej 50 000 m²' },
							{ value: 'Nie wiem / chcę omówić', label: 'Nie wiem / chcę omówić' },
						]}
					/>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<TextInput
						label="Lokalizacja obiektu"
						id="f-loc"
						value={form.location}
						onChange={set('location')}
						placeholder="np. Gliwice, Katowice"
					/>
					<SelectInput
						label="Pilność"
						id="f-urgency"
						value={form.urgency}
						onChange={set('urgency')}
						options={[
							{ value: '', label: 'Kiedy potrzebujesz?', disabled: true },
							{ value: 'Jak najszybciej (awaria / pilne)', label: 'Jak najszybciej (awaria / pilne)' },
							{ value: 'W ciągu 2–4 tygodni', label: 'W ciągu 2–4 tygodni' },
							{ value: 'W ciągu 1–3 miesięcy', label: 'W ciągu 1–3 miesięcy' },
							{ value: 'Planuję na przyszłość', label: 'Planuję na przyszłość' },
						]}
					/>
				</div>
				<SelectInput
					label="Zakres usług"
					id="f-svc"
					value={form.service}
					onChange={set('service')}
					options={[
						{ value: '', label: 'Co Cię interesuje?', disabled: true },
						{
							value: 'Stały FM outsourcing (kontrakt długoterminowy)',
							label: 'Stały FM outsourcing (kontrakt długoterminowy)',
						},
						{ value: 'Serwis maszyn / utrzymanie ruchu', label: 'Serwis maszyn / utrzymanie ruchu' },
						{ value: 'Audyt techniczny / przegląd budynku', label: 'Audyt techniczny / przegląd budynku' },
						{ value: 'Pomiary elektryczne', label: 'Pomiary elektryczne' },
						{ value: 'Termowizja przemysłowa', label: 'Termowizja przemysłowa' },
						{ value: 'HVAC / instalacje', label: 'HVAC / instalacje' },
						{ value: 'Systemy bezpieczeństwa (CCTV, SSWiN)', label: 'Systemy bezpieczeństwa (CCTV, SSWiN)' },
						{ value: 'Kompleksowe wsparcie — chcę omówić zakres', label: 'Kompleksowe wsparcie — chcę omówić zakres' },
					]}
				/>

				<div className="flex flex-col gap-1.5">
					<label className="text-[10px] font-semibold text-slate-600 tracking-[0.07em] uppercase">
						Dodatkowe informacje
					</label>
					<textarea
						value={form.message}
						onChange={e => set('message')(e.target.value)}
						placeholder="Np. obecna sytuacja techniczna, liczba hal, specyficzne wymagania, czy macie już kogoś do zastąpienia..."
						rows={3}
						className="bg-white/5 border border-white/10 rounded-lg text-white text-sm px-3.5 py-2.5 outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-colors placeholder:text-slate-700 resize-y"
					/>
				</div>

				<div className="flex items-start gap-2.5 mt-1">
					<input
						type="checkbox"
						id="f-rodo"
						checked={form.rodo}
						onChange={e => set('rodo')(e.target.checked)}
						className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-blue-500 cursor-pointer"
					/>
					<label htmlFor="f-rodo" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
						Wyrażam zgodę na przetwarzanie danych osobowych przez ARGO System w celu przygotowania oferty. Dane
						szyfrowane SSL, nie są udostępniane osobom trzecim.
					</label>
				</div>

				{error && (
					<p className="text-xs text-red-400 text-center">
						Wystąpił błąd serwera. Spróbuj ponownie lub napisz bezpośrednio na rdomagalski@argo-system.pl
					</p>
				)}

				<button
					onClick={submit}
					disabled={isSubmitting}
					className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-lg px-6 py-3.5 transition-all duration-200 hover:shadow-[0_4px_24px_rgba(59,124,246,0.4)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed">
					{isSubmitting ? (
						'Wysyłanie...'
					) : (
						<>
							<span>Wyślij Zgłoszenie</span>
							<IconSend />
						</>
					)}
				</button>
			</div>

			<FormFooter
				items={[
					{
						label: 'DANE SZYFROWANE SSL',
						icon: (
							<svg width="11" height="11" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
								<rect x="3" y="11" width="18" height="11" rx="2" />
								<path d="M7 11V7a5 5 0 0110 0v4" />
							</svg>
						),
					},
					{
						label: 'RODO COMPLIANT',
						icon: (
							<svg width="11" height="11" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
								<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
							</svg>
						),
					},
					{
						label: 'ODDZWONIMY W 24H',
						icon: (
							<svg width="11" height="11" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
								<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.42 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
							</svg>
						),
					},
				]}
			/>
		</FormCard>
	)
}

// ─── FORMULARZ SZYBKI (DÓŁ) ──────────────────────────────────────────────────

function QuickForm() {
	const [sent, setSent] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState(false)
	const [name, setName] = useState('')
	const [contact, setContact] = useState('')
	const [message, setMessage] = useState('')
	const [rodo, setRodo] = useState(false)

	const submit = async () => {
		if (!name || !contact || !rodo) {
			alert('Uzupełnij wymagane pola i zaakceptuj RODO.')
			return
		}
		setIsSubmitting(true)
		setError(false)
		const utm = JSON.parse(sessionStorage.getItem('argo_utm') || '{}')
		const result = await sendWycenaEmail({ name, contact, message, utm, formType: 'quick' })
		setIsSubmitting(false)
		if (result.success) {
			if (result.success) {
        gtagConversion()
        window.location.href = '/wycena/dziekujemy'
    }
		} else {
			setError(true)
		}
	}

	if (sent) {
		return (
			<FormCard>
				<SuccessState
					title="Zgłoszenie przyjęte!"
					subtitle="Oddzwonimy i razem ustalimy zakres — bez zobowiązań."
					phone="+48 517 463 469"
				/>
			</FormCard>
		)
	}

	return (
		<FormCard>
			<FormHead
				eyebrow="Szybkie zapytanie"
				title="Napisz do nas"
				subtitle="Opisz obiekt i potrzeby — oddzwonimy i razem ustalimy zakres współpracy."
			/>
			<div className="px-8 py-6 flex flex-col gap-3">
				<TextInput
					label="Imię i firma *"
					id="q-name"
					value={name}
					onChange={setName}
					placeholder="Jan Kowalski, Firma XYZ"
					required
				/>
				<TextInput
					label="Telefon lub e-mail *"
					id="q-contact"
					value={contact}
					onChange={setContact}
					placeholder="+48 500 000 000 lub jan@firma.pl"
					required
				/>
				<div className="flex flex-col gap-1.5">
					<label className="text-[10px] font-semibold text-slate-600 tracking-[0.07em] uppercase">
						Szczegóły zgłoszenia
					</label>
					<textarea
						value={message}
						onChange={e => setMessage(e.target.value)}
						placeholder="Opisz obiekt — typ, lokalizacja, co Cię najbardziej interesuje..."
						rows={4}
						className="bg-white/5 border border-white/10 rounded-lg text-white text-sm px-3.5 py-2.5 outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-colors placeholder:text-slate-700 resize-y"
					/>
				</div>
				<div className="flex items-start gap-2.5 mt-1">
					<input
						type="checkbox"
						id="q-rodo"
						checked={rodo}
						onChange={e => setRodo(e.target.checked)}
						className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-blue-500 cursor-pointer"
					/>
					<label htmlFor="q-rodo" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
						Zgadzam się na przetwarzanie danych osobowych w celu odpowiedzi na zapytanie.
					</label>
				</div>
				{error && (
					<p className="text-xs text-red-400 text-center">
						Wystąpił błąd serwera. Spróbuj ponownie lub napisz bezpośrednio na rdomagalski@argo-system.pl
					</p>
				)}
				<button
					onClick={submit}
					disabled={isSubmitting}
					className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-lg px-6 py-3.5 transition-all duration-200 hover:shadow-[0_4px_24px_rgba(59,124,246,0.4)] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed">
					{isSubmitting ? (
						'Wysyłanie...'
					) : (
						<>
							<span>Wyślij Zgłoszenie</span>
							<IconSend />
						</>
					)}
				</button>
			</div>
			<FormFooter
				items={[
					{
						label: 'ODPOWIEDŹ W 24H',
						icon: (
							<svg width="11" height="11" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
								<circle cx="12" cy="12" r="10" />
								<polyline points="12 6 12 12 16 14" />
							</svg>
						),
					},
					{
						label: 'DANE BEZPIECZNE',
						icon: (
							<svg width="11" height="11" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
								<rect x="3" y="11" width="18" height="11" rx="2" />
								<path d="M7 11V7a5 5 0 0110 0v4" />
							</svg>
						),
					},
				]}
			/>
		</FormCard>
	)
}

// ─── STRONA GŁÓWNA ────────────────────────────────────────────────────────────

export default function WycenaPage() {
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const utm = {}
		;['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].forEach(k => {
			if (params.get(k)) utm[k] = params.get(k)
		})
		if (Object.keys(utm).length) sessionStorage.setItem('argo_utm', JSON.stringify(utm))
	}, [])

	const scrollTo = id => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div
			className="bg-black text-white font-sans overflow-x-hidden"
			style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
			{/* ── NAV ── */}
			<nav
				className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 border-b border-white/[0.06]"
				style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(20px)' }}>
				<Link href="https://www.argo-system.pl/" className="flex items-center gap-2.5 no-underline">
					<img src="/logobez.png" alt="Argo logo" className="h-10" />
				</Link>
				<a
					href="tel:+48517463469"
					className="hidden md:flex items-center gap-2 text-[13px] font-medium text-slate-400 hover:text-white transition-colors no-underline">
					<span className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_8px_#22c55e] animate-pulse" />
					+48 517 463 469
				</a>
				<button
					onClick={() => scrollTo('wycena2')}
					className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(59,124,246,0.4)]">
					Bezpłatna Analiza <IconArrow />
				</button>
			</nav>

			{/* ── HERO ── */}
			<section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `
            radial-gradient(ellipse 60% 50% at 75% 40%, rgba(30,60,180,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 70%, rgba(180,60,20,0.2) 0%, transparent 55%),
            radial-gradient(ellipse 50% 60% at 85% 80%, rgba(10,20,80,0.4) 0%, transparent 50%)
          `,
					}}
				/>
				<div className="absolute inset-0 pointer-events-none hero-grid" />

				<div className="relative z-10 max-w-[1220px] mx-auto px-10 w-full">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-center">
						<div className="animate-fadeUp">
							<h1
								className="font-extrabold leading-none tracking-[-0.03em] mb-6"
								style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}>
								OBSŁUGA
								<br />
								<span className="text-white/40">TECHNICZNA</span>
								<br />
								<span className="text-blue-400">ŚLĄSK & POLSKA</span>
							</h1>
							<p className="text-base text-slate-400 leading-relaxed max-w-[480px] mb-9">
								Lider Facility Management w Aglomeracji Śląskiej. Zapewniamy serwis techniczny, audyty i maintenance dla
								przemysłu na terenie Śląska (Katowice, Gliwice, Tychy) oraz całej Polski.
							</p>
							<div className="flex gap-9 mb-9 flex-wrap">
								{[
									{ val: '15+', unit: '', label: 'lat doświadczenia' },
									{ val: '<4', unit: 'h', label: 'gwarantowany SLA' },
									{ val: '2.5k', unit: '', label: 'projektów' },
									{ val: '24', unit: '/7', label: 'wsparcie' },
								].map((s, i) => (
									<>
										{i > 0 && <div key={`div-${i}`} className="w-px bg-white/[0.08] self-stretch" />}
										<div key={s.label} className="flex flex-col gap-1">
											<span className="font-extrabold text-[30px] text-white leading-none tracking-tight">
												{s.val}
												<span className="text-slate-400 text-lg font-bold">{s.unit}</span>
											</span>
											<span className="text-[11px] font-medium text-slate-600 uppercase tracking-[0.08em]">
												{s.label}
											</span>
										</div>
									</>
								))}
							</div>
							<div className="flex gap-2.5 flex-wrap">
								<div
									className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 border border-white/[0.09]"
									style={{ background: 'rgba(255,255,255,0.04)' }}>
									<span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#22c55e]" />
									Konsultacja bez zobowiązań
								</div>
								<div
									className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 border border-white/[0.09]"
									style={{ background: 'rgba(255,255,255,0.04)' }}>
									KSSE · Strefy ekonomiczne
								</div>
								<div
									className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 border border-white/[0.09]"
									style={{ background: 'rgba(255,255,255,0.04)' }}>
									ISO · Certified
								</div>
							</div>
						</div>

						<HeroForm />
					</div>
				</div>
			</section>

			{/* ── TICKER ── */}
			<div
				className="border-t border-b border-white/[0.06] py-4 overflow-hidden"
				style={{ background: 'rgba(255,255,255,0.02)' }}>
				<div className="ticker-track flex gap-14" style={{ width: 'max-content', whiteSpace: 'nowrap' }}>
					{[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
						<div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
							<span className="w-1 h-1 rounded-full bg-blue-500 opacity-60" />
							<strong className="text-slate-400 font-semibold">{item.label}</strong> · {item.sub}
						</div>
					))}
				</div>
			</div>

			{/* ── SERVICES ── */}
			<section className="py-20 bg-black">
				<div className="max-w-[1220px] mx-auto px-10">
					<h2
						className="font-extrabold leading-none tracking-tight mb-3.5"
						style={{ fontSize: 'clamp(30px, 3.5vw, 46px)' }}>
						Twoja infrastruktura
						<br />
						pod <span className="text-blue-400">pełną kontrolą</span>
					</h2>
					<p className="text-[15px] text-slate-400 max-w-[500px] mb-14 leading-relaxed">
						Dostarczamy profesjonalne rozwiązania w zakresie maintenance i obsługi technicznej. Gwarantujemy
						bezpieczeństwo, niezawodność i pełną kontrolę.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						{SERVICES.map(svc => (
							<div
								key={svc.n}
								className="relative rounded-2xl p-8 border border-white/[0.08] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/35"
								style={{ background: 'rgba(255,255,255,0.04)' }}>
								<span className="absolute top-5 right-6 text-[13px] font-bold text-white/[0.07]">{svc.n}</span>
								<div
									className="w-11 h-11 rounded-xl flex items-center justify-center border border-blue-500/20 mb-5"
									style={{ background: 'rgba(59,124,246,0.12)' }}>
									{svc.icon}
								</div>
								<h3 className="font-bold text-[17px] text-white mb-2.5">{svc.title}</h3>
								<p className="text-[13px] text-slate-400 leading-relaxed mb-5">{svc.desc}</p>
								<div className="flex flex-wrap gap-1.5">
									{svc.caps.map(c => (
										<span
											key={c}
											className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-600 border border-white/[0.08]"
											style={{ background: 'rgba(255,255,255,0.04)' }}>
											{c}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SLA ── */}
			<section className="pb-20 bg-black">
				<div className="max-w-[1220px] mx-auto px-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div
							className="relative rounded-2xl p-10 border border-blue-500/20 overflow-hidden"
							style={{ background: 'rgba(59,124,246,0.06)' }}>
							<div
								className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
								style={{
									background: 'radial-gradient(circle, rgba(59,124,246,0.15) 0%, transparent 70%)',
									transform: 'translate(30%, -30%)',
								}}
							/>
							<div
								className="font-extrabold text-blue-400 leading-none tracking-tight mb-2"
								style={{ fontSize: '72px' }}>
								&lt;4
								<span className="text-slate-400 font-bold" style={{ fontSize: '30px' }}>
									h
								</span>
							</div>
							<div className="font-bold text-xl text-white mb-2.5">Gwarantowany czas reakcji</div>
							<p className="text-[13px] text-slate-400 leading-relaxed">
								Strategiczna lokalizacja w centrum aglomeracji śląskiej. Dotrzemy do każdego obiektu w województwie w
								czasie poniżej 4 godzin od zgłoszenia awarii.
							</p>
						</div>
						<div
							className="relative rounded-2xl p-10 border border-blue-500/20"
							style={{ background: 'rgba(59,124,246,0.06)' }}>
							<ul className="flex flex-col gap-3.5">
								{[
									'Mobilne zespoły serwisowe w Katowicach i Gliwicach',
									'Helpdesk dostępny 24 godziny na dobę, 7 dni w tygodniu',
									'Umowy SLA z konkretnymi penalizacjami za opóźnienia',
									'Własny magazyn części zamiennych i komponentów OEM',
									'Obsługa kontraktów sieciowych na terenie całego Śląska',
									'Obsługa obiektów w Katowickiej Strefie Ekonomicznej (KSSE)',
								].map(item => (
									<li key={item} className="flex items-start gap-3 text-sm text-slate-400">
										<span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ── WHY ── */}
			<section className="py-20 bg-black">
				<div className="max-w-[1220px] mx-auto px-10">
					<Eyebrow>DLACZEGO ARGO</Eyebrow>
					<h2
						className="font-extrabold leading-none tracking-tight mb-3.5"
						style={{ fontSize: 'clamp(30px, 3.5vw, 46px)' }}>
						Inżynieria <span className="text-blue-400">Niezawodności</span>
					</h2>
					<p className="text-[15px] text-slate-400 max-w-[500px] mb-10 leading-relaxed">
						Znamy specyfikę śląskiego przemysłu. Obsługujemy hale produkcyjne, strefy ekonomiczne i obiekty klasy A.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{WHY_ITEMS.map(item => (
							<div
								key={item.n}
								className="flex gap-4 p-7 rounded-xl border border-white/[0.07] transition-all duration-200 hover:border-white/[0.12]"
								style={{ background: 'rgba(255,255,255,0.03)' }}>
								<span className="text-[11px] font-bold text-blue-500 tracking-[0.08em] flex-shrink-0 pt-0.5">
									{item.n}
								</span>
								<div>
									<h4 className="font-bold text-[15px] text-white mb-1.5">{item.title}</h4>
									<p className="text-[13px] text-slate-400 leading-relaxed">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA BANNER ── */}
			<section className="py-20" style={{ background: '#0a0a0a' }}>
				<div className="max-w-[1220px] mx-auto px-10">
					<div
						className="relative rounded-2xl px-12 py-16 text-center overflow-hidden border border-blue-500/20"
						style={{
							background:
								'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(20,50,160,0.4) 0%, rgba(10,10,10,0.9) 70%)',
						}}>
						<div
							className="absolute inset-0 pointer-events-none rounded-2xl"
							style={{
								backgroundImage:
									'linear-gradient(rgba(59,124,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,124,246,0.04) 1px, transparent 1px)',
								backgroundSize: '40px 40px',
							}}
						/>
						<h2
							className="relative font-extrabold leading-tight tracking-tight mb-3.5"
							style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
							Gotowy na współpracę
							<br />z <span className="text-blue-400">liderem branży?</span>
						</h2>
						<p className="relative text-[15px] text-slate-400 max-w-[500px] mx-auto mb-8 leading-relaxed">
							Skontaktuj się z nami. Razem przeanalizujemy potrzeby Twojego obiektu i dobierzemy model współpracy — bez
							sztucznych cenników.
						</p>
						<div className="relative flex items-center justify-center gap-4 flex-wrap">
							<button
								onClick={() => scrollTo('wycena2')}
								className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all hover:shadow-[0_4px_28px_rgba(59,124,246,0.4)]">
								SKONTAKTUJ SIĘ <IconArrow />
							</button>
							<span className="flex items-center gap-1.5 text-[13px] font-medium text-slate-400">
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#22c55e"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
									<polyline points="22 4 12 14.01 9 11.01" />
								</svg>
								Analiza potrzeb bez zobowiązań
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* ── KONTAKT + FORMULARZ ── */}
			<section id="wycena2" className="py-20 bg-black">
				<div className="max-w-[1220px] mx-auto px-10">
					<div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 items-start">
						<div>
							<h2
								className="font-extrabold leading-none tracking-tight mb-3.5"
								style={{ fontSize: 'clamp(30px, 3vw, 44px)' }}>
								Rozpocznijmy
								<br />
								<span className="text-blue-400">współpracę</span>
							</h2>
							<p className="text-[15px] text-slate-400 max-w-[400px] mb-8 leading-relaxed">
								Skontaktuj się bezpośrednio z koordynatorem technicznym. Każde zapytanie traktujemy indywidualnie — nie
								ma tu gotowych cenników.
							</p>
							<div className="flex flex-col gap-3">
								{[
									{
										href: 'tel:+48517463469',
										icon: <IconPhone />,
										label: 'Telefon bezpośredni',
										value: '+48 517 463 469',
									},
									{
										href: 'mailto:rdomagalski@argo-system.pl',
										icon: <IconMail />,
										label: 'Email kontaktowy',
										value: 'rdomagalski@argo-system.pl',
									},
									{ href: null, icon: <IconPin />, label: 'Obszar działania', value: 'Cała Polska · Baza: Śląsk' },
								].map(item =>
									item.href ? (
										<a
											key={item.label}
											href={item.href}
											className="flex items-center gap-3.5 px-5 py-4 rounded-xl border border-white/[0.08] transition-all hover:border-blue-500/30 no-underline"
											style={{ background: 'rgba(255,255,255,0.04)' }}>
											<div
												className="w-9 h-9 rounded-lg flex items-center justify-center border border-blue-500/15 flex-shrink-0"
												style={{ background: 'rgba(59,124,246,0.1)' }}>
												{item.icon}
											</div>
											<div>
												<div className="text-[10px] font-semibold text-slate-600 tracking-[0.08em] uppercase mb-0.5">
													{item.label}
												</div>
												<div className="text-[15px] font-semibold text-white">{item.value}</div>
											</div>
										</a>
									) : (
										<div
											key={item.label}
											className="flex items-center gap-3.5 px-5 py-4 rounded-xl border border-white/[0.08]"
											style={{ background: 'rgba(255,255,255,0.04)' }}>
											<div
												className="w-9 h-9 rounded-lg flex items-center justify-center border border-blue-500/15 flex-shrink-0"
												style={{ background: 'rgba(59,124,246,0.1)' }}>
												{item.icon}
											</div>
											<div>
												<div className="text-[10px] font-semibold text-slate-600 tracking-[0.08em] uppercase mb-0.5">
													{item.label}
												</div>
												<div className="text-[15px] font-semibold text-white">{item.value}</div>
											</div>
										</div>
									),
								)}
							</div>
						</div>
						<QuickForm />
					</div>
				</div>
			</section>

			{/* ── FOOTER ── */}
			<footer className="flex items-center justify-between flex-wrap gap-4 px-10 py-6 border-t border-white/[0.07]">
				<span className="font-extrabold text-sm text-slate-400 tracking-[0.04em]">ARGO SYSTEM</span>
				<span className="text-xs text-slate-600">© 2025 ARGO SYSTEM. Wszelkie prawa zastrzeżone.</span>
				<div className="flex gap-6">
					<Link
						href="/polityka-prywatnosci"
						className="text-xs text-slate-600 hover:text-blue-400 transition-colors no-underline">
						Polityka Prywatności
					</Link>
					<Link href="/regulamin" className="text-xs text-slate-600 hover:text-blue-400 transition-colors no-underline">
						Regulamin
					</Link>
					<Link href="/" className="text-xs text-slate-600 hover:text-blue-400 transition-colors no-underline">
						Strona główna
					</Link>
				</div>
			</footer>
		</div>
	)
}
