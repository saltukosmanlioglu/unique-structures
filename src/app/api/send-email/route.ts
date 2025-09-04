import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "yunusemrey85@gmail.com",
    subject: "Unique Structure",
    html: `
      <div>
        <b>Sender: ${body.fullName}</b><br/>
        <b>Email: ${body.email}</b><br/>
        <b>Message: ${body.message}</b><br/>
        <b>Phone: ${body.phoneNumber}</b>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err }, { status: 400 });
  }
}
