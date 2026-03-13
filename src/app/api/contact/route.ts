import { NextResponse } from "next/server";
import { klantConfig } from "@/config/klant";

export async function POST(request: Request) {
  try {
    const { naam, email, telefoon, bericht } = await request.json();

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Naam, email en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not set — skipping email send");
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `${klantConfig.bedrijfsnaam} Website <onboarding@resend.dev>`,
      to: klantConfig.email,
      subject: `Nieuwe aanvraag van ${naam}`,
      text: `
Nieuwe contactaanvraag via de website:

Naam: ${naam}
E-mail: ${email}
Telefoon: ${telefoon || "Niet opgegeven"}

Bericht:
${bericht}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Er is iets misgegaan bij het versturen." },
      { status: 500 }
    );
  }
}
