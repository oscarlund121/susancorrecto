"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactLabels = {
  call: "Ring mig op",
  sms: "Svar via SMS",
  email: "Svar via e-mail",
};

export async function sendContactEmail(formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message") || "Ingen besked";
  const contactPreference = formData.get("contactPreference");
  const isStudent = formData.get("isStudent") === "on";

  // Basic validation
  if (!name || !phone || !contactPreference) {
    return { success: false, error: "Udfyld venligst alle påkrævede felter." };
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Kontaktformular <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "susan@example.com",
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #367067;">Ny henvendelse fra kontaktformularen</h2>
          <hr style="border: 1px solid #e5e5e5;" />
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 180px;">Navn:</td>
              <td style="padding: 8px 0; color: #555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Mobilnummer:</td>
              <td style="padding: 8px 0; color: #555;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Foretrukken kontakt:</td>
              <td style="padding: 8px 0; color: #555;">${contactLabels[contactPreference] || contactPreference}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Studerende:</td>
              <td style="padding: 8px 0; color: #555;">${isStudent ? "Ja" : "Nej"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8f8f8; border-radius: 8px;">
            <p style="font-weight: bold; color: #333; margin: 0 0 8px;">Besked:</p>
            <p style="color: #555; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 1px solid #e5e5e5; margin-top: 24px;" />
          <p style="color: #999; font-size: 12px; margin-top: 12px;">
            Denne email er sendt fra kontaktformularen på susancorrecto.dk
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Der opstod en fejl. Prøv igen senere." };
  }
}
