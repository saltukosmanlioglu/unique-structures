import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        let transporter = nodemailer.createTransport({
            secure: true,
            service: "gmail",
            port: 465,
            auth: {
                user: "yunusemrey85@gmail.com",
                pass: process.env.password,
            },
        });

        let info = {
            from: "yunusemrey85@gmail.com",
            subject: "Unique Structure",
            html: `
      <div>
        <b style="display: block;">Sender: ${req.body.fullName}</b> <br />
        <b style="display: block;">Sender email: ${req.body.email}</b> <br />
        <b style="display: block;">Message: ${req.body.message}</b>
        <b style="display: block;">Phone number: ${req.body.phoneNumber}</b>
      </div>`,
            to: "yunusemrey85@gmail.com",
        };

        transporter.sendMail(info, (err, info) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(info);
            }
        });
    }
}