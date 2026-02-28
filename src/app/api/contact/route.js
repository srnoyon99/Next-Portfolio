import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // basic validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill in all required fields." }),
        { status: 400 }
      );
    }

    // create reusable transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New contact form submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return new Response(JSON.stringify({ error: err.message || "Server error" }), {
      status: 500,
    });
  }
}
