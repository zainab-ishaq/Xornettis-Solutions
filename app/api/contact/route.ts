import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
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

  // Visitor ke email par direct reply karne ke liye
  replyTo: email,

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
