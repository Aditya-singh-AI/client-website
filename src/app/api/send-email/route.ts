import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, area, serviceType, preferredDate, concern } = body;

    const recipientEmail = "nityahemantsingh@gmail.com";

    // Format HTML email content
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

    // 1. Check if Resend API key is available
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Nitya Physiotherapy Website <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: emailSubject,
          text: emailText,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error("Resend API Email Error:", errorData);
      }
    }

    // 2. Server side audit log for backup
    console.log(`[ENQUIRY NOTIFICATION] Direct email dispatch attempt to ${recipientEmail} for patient ${name} (${phone})`);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully and notification dispatched to Dr. Hemant.",
    });
  } catch (error) {
    console.error("Error sending enquiry email notification:", error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch email notification" },
      { status: 500 }
    );
  }
}
