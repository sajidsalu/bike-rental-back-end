import nodemailer from "nodemailer";

import { env } from "../config/env";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export const EmailService = {
  async send(to: string, subject: string, html: string) {
    const info = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to,
      subject,
      html,
    });
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  },
};
