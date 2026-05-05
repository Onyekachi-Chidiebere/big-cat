
const nodemailer = require("nodemailer");

async function test() {
  const host = "mail.privateemail.com";
  const port = 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = true;

  console.log(`Testing with Host: ${host}, Port: ${port}, Secure: ${secure}, User: ${user}`);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
  });

  try {
    await transporter.verify();
    console.log("Success: Connection verified");
  } catch (error) {
    console.error("Failure:", error);
  }
}

test();
