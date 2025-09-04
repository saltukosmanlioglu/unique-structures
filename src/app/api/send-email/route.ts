import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const email = 'yunusemrey85@gmail.com'

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: process.env.password,
    },
  });

  const mailOptions = {
    from: email,
    to: email,
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

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}