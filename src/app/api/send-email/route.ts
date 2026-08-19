import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, area, serviceType, preferredDate, concern } = body;

    // Admin emails to receive every enquiry notification
    // NOTE: With Resend free tier (onboarding@resend.dev sender), only the account
    // owner's email can receive. Once a custom domain is verified on resend.com/domains,
    // both emails will receive notifications.
    const recipientEmails = [
      "nityahemantsingh@gmail.com",
      // Enable after verifying domain on Resend
    ];

    // Format email content
    const emailSubject = `🚨 New Patient Enquiry: ${name || "Web Visitor"} (${serviceType || "Physiotherapy"})`;
    
    const emailText = `
New Patient Booking Enquiry Received!

------------------------------------------
Patient Name: ${name || "Not provided"}
Phone Number: ${phone || "Not provided"}
Service Requested: ${serviceType === "home" ? "Home Visit (Gwalior)" : serviceType === "clinic" ? "Clinic Visit (Thatipur)" : "Online Video Consult"}
Locality in Gwalior: ${area || "Not specified"}
Preferred Date: ${preferredDate || "Earliest Available"}
Medical Condition / Notes: ${concern || "General Physiotherapy Evaluation"}
------------------------------------------
Date Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

Log in to Admin Dashboard to manage all bookings:
https://nityaphysiotherapy.com/admin/dashboard
`;

    // Check if Resend API key is available
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("[EMAIL] ⚠️ RESEND_API_KEY is not set. Email will NOT be sent. Add it to your Vercel environment variables.");
      return NextResponse.json({
        success: true,
        emailSent: false,
        message: "Enquiry saved but email not sent — RESEND_API_KEY is missing.",
      });
    }

    // Send email to all recipients
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Nitya Physiotherapy Website <onboarding@resend.dev>",
        to: recipientEmails,
        subject: emailSubject,
        text: emailText,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("[EMAIL] ❌ Resend API Error:", JSON.stringify(resendData));
      return NextResponse.json({
        success: true,
        emailSent: false,
        error: resendData,
        message: "Enquiry saved but email failed to send.",
      });
    }

    console.log(`[EMAIL] ✅ Notification sent to ${recipientEmails.join(", ")} for patient ${name} (${phone})`);

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Enquiry submitted and email notification sent to admins.",
    });
  } catch (error) {
    console.error("[EMAIL] ❌ Critical error sending enquiry email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch email notification" },
      { status: 500 }
    );
  }
}

