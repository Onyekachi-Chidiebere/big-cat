import { sendMail } from "@/app/lib/email/sendMail";

type CareersPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: string;
  licence?: string;
  about?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CareersPayload;
    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const role = String(body.role ?? "").trim();
    const licence = String(body.licence ?? "").trim();
    const about = String(body.about ?? "").trim();

    if (!firstName || !lastName || !email) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

    await sendMail({
      to: "careers@bigcatsecurity.co.uk",
      subject: `Job application - ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Role of interest: ${role || "-"}`,
        `SIA licence status: ${licence || "-"}`,
        "",
        "About candidate:",
        about || "-",
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email send failed";
    console.error("Careers form email send failed:", message);
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
