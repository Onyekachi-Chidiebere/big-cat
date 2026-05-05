import { sendMail } from "@/app/lib/email/sendMail";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await sendMail({
      to: "contact@bigcatsecurity.co.uk",
      subject: `Website enquiry - ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Service: ${service || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email send failed";
    console.error("Contact form email send failed:", message);
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
