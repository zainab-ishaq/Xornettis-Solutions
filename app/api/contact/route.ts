import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Vercel me variable name 'RESEND_API_key' hai, isliye hum wahi check kar rahe hain
const apiKey = process.env.RESEND_API_key || process.env.RESEND_API_key;

const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(req: NextRequest) {
  if (!resend) {
    return NextResponse.json(
      { error: "Resend API key is missing. Please configure it in your environment variables." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message, company, service } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Xornettis Contact <onboarding@resend.dev>",
      to: "zainabmirza124@gmail.com",
      replyTo: email, // Visitor ke email par direct reply karne ke liye
      subject: `New Lead from Xornettis: ${name}`,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "Not Specified"}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>This email was sent from the Xornettis Contact Form.</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", data },
      { status: 200 }
    );

  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send message.",
      },
      { status: 500 }
    );
  }
}