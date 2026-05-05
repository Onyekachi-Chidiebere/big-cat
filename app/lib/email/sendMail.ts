import nodemailer from "nodemailer";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

function createTransporter() {
  const host = required("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = required("SMTP_USER");
  const pass = required("SMTP_PASS");
  const secure = String(process.env.SMTP_SECURE ?? "false") === "true";

  console.log({pass})
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

export async function sendMail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
 try { const from = process.env.SMTP_FROM ?? required("SMTP_USER");
  const transporter = createTransporter();
  await transporter.sendMail({ from, to, subject, text });
  console.log('Email sent successfully');
  console.log({from, to, subject, text});
  return true;
} catch (error) {
  console.error('Error sending email:', error);
  return false;
}
}
