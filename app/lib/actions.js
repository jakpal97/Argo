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
