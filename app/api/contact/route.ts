// import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);

    const message = {
      from: data.email,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: data.subject,
      text: data.message,
      html: `
      <body>
      <div >
        <h1>New Message</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <div >
          <strong>Message:</strong>
          <p>${data.subject}</p>
        </div>
      </div>
    </body>`,
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail(message);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ message: err.message });
  }
}
