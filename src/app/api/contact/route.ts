import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const recipientEmail = "sanchezdaniel121603@gmail.com"

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = body.name?.trim()
    const email = body.email?.trim()
    const subject = body.subject?.trim()
    const message = body.message?.trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER?.trim()
    // Gmail app passwords are often copied with spaces like "abcd efgh ...".
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "")

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`,
      html: `
        <p>New message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form send error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
