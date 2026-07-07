import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { transporter } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, message } = body;

    await Contact.create({
      name,
      email,
      message,
    });

    // Email to user
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "Backstrap Law - Message Received",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting <b>Backstrap Law</b>.</p>

        <p>We have received your message and our team will respond as soon as possible.</p>

        <br/>

        <p>Regards,</p>
        <h3>Backstrap Law</h3>
      `,
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Message",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err: any) {
  console.error("CONTACT API ERROR:", err);

  return NextResponse.json(
    {
      success: false,
      message: err.message,
      error: err,
    },
    { status: 500 }
  );
}
}