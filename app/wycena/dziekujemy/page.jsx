'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DziekujemyPage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18005751711/xfS4CLq-9YocEJ_v54lD',
        value: 1.0,
        currency: 'PLN',
      })
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* BG GLOW */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 40%, rgba(30,70,200,0.25) 0%, transparent 65%)',
        }}
      />

      {/* GRID */}
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,124,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,124,246,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center max-w-[520px] w-full transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* ICON */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-green-500/30"
          style={{ background: 'rgba(34,197,94,0.08)' }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* EYEBROW */}
        <div className="flex items-center gap-2 text-[11px] font-bold text-blue-400 tracking-[0.12em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#22c55e]" />
          Zgłoszenie przyjęte
        </div>

        {/* HEADING */}
        <h1
          className="font-extrabold leading-none tracking-[-0.03em] mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
        >
          Dziękujemy<br />
          <span className="text-blue-400">za kontakt!</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-[15px] text-slate-400 leading-relaxed mb-10 max-w-[400px]">
          Nasz koordynator techniczny zapozna się z Twoim zgłoszeniem i skontaktuje się z Tobą w ciągu <strong className="text-white">24 godzin roboczych</strong>.
        </p>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/[0.07] mb-10" />

        {/* CONTACT DIRECT */}
        <p className="text-xs text-slate-600 uppercase tracking-[0.1em] font-semibold mb-4">
          Chcesz porozmawiać od razu?
        </p>
        <a
          href="tel:+48517463469"
          className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-blue-500/25 transition-all hover:border-blue-500/50 hover:bg-blue-500/5 mb-3 no-underline"
          style={{ background: 'rgba(59,124,246,0.07)' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 flex-shrink-0"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.5 19.79 19.79 0 01.42 1.88 2 2 0 012.42 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-base font-bold text-white">+48 517 463 469</span>
        </a>
        <a
          href="mailto:rdomagalski@argo-system.pl"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.08] transition-all hover:border-white/20 mb-10 no-underline"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 flex-shrink-0"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="text-sm font-medium text-slate-400">rdomagalski@argo-system.pl</span>
        </a>

        {/* BACK */}
        <Link
          href="https://www.argo-system.pl/"
          className="text-xs text-slate-600 hover:text-slate-400 transition-colors no-underline"
        >
          ← Wróć do strony głównej
        </Link>
      </div>
    </div>
  )
}