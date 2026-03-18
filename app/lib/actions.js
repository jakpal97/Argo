'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData) {
	// Pobieramy wszystkie możliwe pola
	const name = formData.get('name')
	const email = formData.get('email')
	const message = formData.get('message')

	// Pola opcjonalne (mogą być puste w zależności od formularza)
	const company = formData.get('company') || 'Nie podano'
	const phone = formData.get('phone') || 'Nie podano'
	const subject = formData.get('subject') || 'Nowe zgłoszenie ze strony'

	try {
		const data = await resend.emails.send({
			// --- TU BYŁA ZMIANA ---
			// Musi być @kontakt.argo-system.pl, bo taką domenę zweryfikowaliśmy
			from: 'Formularz Argo <powiadomienia@kontakt.argo-system.pl>',

			// Twój mail, na który przyjdzie wiadomość
			to: ['rdomagalski@argo-system.pl'],

			// To pozwala Ci kliknąć "Odpowiedz" i pisać prosto do klienta
			reply_to: email,

			subject: `${subject} - od: ${name}`,
			text: `
        Nowe zgłoszenie:
        ----------------
        Imię i Nazwisko: ${name}
        Email: ${email}
        Telefon: ${phone}
        Firma: ${company}
        Temat: ${subject}
        
        Wiadomość:
        ${message}
      `,
			html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #020202;">Nowe zgłoszenie: ${subject}</h2>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Imię i Nazwisko:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Firma:</strong> ${company}</p>
          <br />
          <p><strong>Treść wiadomości:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
		})

		return { success: true, data }
	} catch (error) {
		console.error(error)
		return { success: false, error }
	}
}

export async function sendWycenaEmail(data) {
	const {
		name,
		company,
		email,
		phone,
		objectType,
		objectSize,
		location,
		urgency,
		service,
		message,
		contact,
		utm,
		formType,
	} = data

	const replyTo = email || (contact?.includes('@') ? contact : undefined)
	const displayPhone = phone || (!contact?.includes('@') ? contact : 'Nie podano')
	const displayEmail = email || (contact?.includes('@') ? contact : 'Nie podano')

	const subject =
		formType === 'quick'
			? `Szybkie zapytanie (Wycena) — ${name}`
			: `Zapytanie o wycenę — ${name}${company ? ` | ${company}` : ''}${objectType ? ` | ${objectType}` : ''}`

	const utmText =
		utm && Object.keys(utm).length
			? Object.entries(utm)
					.map(([k, v]) => `${k}: ${v}`)
					.join(', ')
			: 'brak'

	const textBody =
		formType === 'quick'
			? `
Nowe szybkie zapytanie ze strony /wycena:
-----------------------------------------
Imię i firma:  ${name}
Kontakt:       ${contact}
UTM:           ${utmText}

Treść:
${message || '(brak)'}
`
			: `
Nowe zapytanie o wycenę ze strony /wycena:
------------------------------------------
Imię i Nazwisko: ${name}
Firma:           ${company || 'Nie podano'}
Email:           ${displayEmail}
Telefon:         ${displayPhone}

Typ obiektu:     ${objectType || 'Nie podano'}
Powierzchnia:    ${objectSize || 'Nie podano'}
Lokalizacja:     ${location || 'Nie podano'}
Pilność:         ${urgency || 'Nie podano'}
Zakres usług:    ${service || 'Nie podano'}

UTM:             ${utmText}

Dodatkowe informacje:
${message || '(brak)'}
`

	const row = (label, value) =>
		`<tr><td style="padding:6px 12px 6px 0;color:#888;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#fff;font-size:13px">${value || '—'}</td></tr>`

	const htmlBody =
		formType === 'quick'
			? `<div style="font-family:sans-serif;background:#0d0d0d;padding:32px;border-radius:10px;max-width:600px">
				<h2 style="color:#60a5fa;margin:0 0 4px">Szybkie zapytanie — Wycena</h2>
				<p style="color:#555;font-size:12px;margin:0 0 24px">Formularz: /wycena → Szybkie zapytanie</p>
				<table style="border-collapse:collapse;width:100%">
					${row('Imię i firma', name)}
					${row('Kontakt', contact)}
					${row('UTM', utmText)}
				</table>
				${message ? `<div style="margin-top:20px"><p style="color:#888;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.08em">Treść zgłoszenia</p><div style="background:#111;border:1px solid #222;border-radius:6px;padding:14px;color:#ccc;font-size:13px;line-height:1.7">${message.replace(/\n/g, '<br>')}</div></div>` : ''}
			</div>`
			: `<div style="font-family:sans-serif;background:#0d0d0d;padding:32px;border-radius:10px;max-width:600px">
				<h2 style="color:#60a5fa;margin:0 0 4px">Nowe zapytanie o wycenę</h2>
				<p style="color:#555;font-size:12px;margin:0 0 24px">Formularz: /wycena → Bezpłatna analiza potrzeb</p>
				<table style="border-collapse:collapse;width:100%">
					${row('Imię i Nazwisko', name)}
					${row('Firma', company)}
					${row('Email', displayEmail)}
					${row('Telefon', displayPhone)}
				</table>
				<hr style="border:none;border-top:1px solid #1e1e1e;margin:20px 0">
				<table style="border-collapse:collapse;width:100%">
					${row('Typ obiektu', objectType)}
					${row('Powierzchnia', objectSize)}
					${row('Lokalizacja', location)}
					${row('Pilność', urgency)}
					${row('Zakres usług', service)}
				</table>
				<hr style="border:none;border-top:1px solid #1e1e1e;margin:20px 0">
				<table style="border-collapse:collapse;width:100%">
					${row('UTM / Źródło', utmText)}
				</table>
				${message ? `<div style="margin-top:20px"><p style="color:#888;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.08em">Dodatkowe informacje</p><div style="background:#111;border:1px solid #222;border-radius:6px;padding:14px;color:#ccc;font-size:13px;line-height:1.7">${message.replace(/\n/g, '<br>')}</div></div>` : ''}
			</div>`

	try {
		const result = await resend.emails.send({
			from: 'Formularz Argo <powiadomienia@kontakt.argo-system.pl>',
			to: ['rdomagalski@argo-system.pl'],
			...(replyTo ? { reply_to: replyTo } : {}),
			subject,
			text: textBody,
			html: htmlBody,
		})
		return { success: true, data: result }
	} catch (error) {
		console.error(error)
		return { success: false, error }
	}
}
