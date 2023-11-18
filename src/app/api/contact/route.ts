import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { compileEmailTemplate } from "@/lib/email-templates";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    throw new Error("SMTP_EMAIL or SMTP_PASSWORD not defined");
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (error) {
    return;
  }

  try {
    //Send email to visitor
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Thank you for contacting me",
      html: await compileEmailTemplate(name),
    });

    //Send email to me
    await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: `${name} viewed your portfolio!!!`,
      html: `<p>Hi Tunji,</p>
      <p>${name} has filled the contact form on your portfolio website. Here's what ${name} has to say:</p>
      <p>${message}</p>
      <p>Regards, ${name}</p>
      <p>${email}</p>`,
    });

    return NextResponse.json({
      status: "success",
      message: "Email sent successfully",
      data: { name },
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Email not sent",
    });
  }
}
// export async function GET() {
//   return NextResponse.json({
//     status: "success",
//     message: "Email sent successfully",
//   });
// }
