import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { AppointmentEnquiry } from "@/context/ClinicDataContext";

// Server-side persistent storage file path
const DATA_FILE = path.join(process.cwd(), "data_enquiries.json");

const INITIAL_ENQUIRIES: AppointmentEnquiry[] = [
  {
    id: "enq-1",
    name: "Amitabh Dubey",
    phone: "+91 98260 00000",
    serviceType: "home",
    area: "Suresh Nagar, Gwalior",
    preferredDate: "2026-08-20",
    concern: "Post-surgery knee mobilization after orthopedic discharge",
    status: "Pending",
    createdAt: "Aug 14, 2026",
  },
  {
    id: "enq-2",
    name: "Priya Sengar",
    phone: "+91 94251 11111",
    serviceType: "clinic",
    area: "Thatipur, Gwalior",
    preferredDate: "2026-08-18",
    concern: "Cervical neck stiffness from prolonged laptop work",
    status: "Confirmed",
    createdAt: "Aug 13, 2026",
  },
];

// Helper to read enquiries from server storage
function getStoredEnquiries(): AppointmentEnquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading enquiries data file:", err);
  }
  return INITIAL_ENQUIRIES;
}

// Helper to write enquiries to server storage
function saveStoredEnquiries(enquiries: AppointmentEnquiry[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(enquiries, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving enquiries data file:", err);
  }
}

// GET: Return all global enquiries across all devices
export async function GET() {
  const enquiries = getStoredEnquiries();
  return NextResponse.json({ success: true, enquiries });
}

// POST: Add new patient enquiry submitted from any device
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const currentEnquiries = getStoredEnquiries();

    const newEnquiry: AppointmentEnquiry = {
      id: `enq-${Date.now()}`,
      name: body.name || "Patient Enquiry",
      phone: body.phone || "Not Provided",
      serviceType: body.serviceType || "clinic",
      area: body.area || "Gwalior",
      preferredDate: body.preferredDate || "Earliest Available",
      concern: body.concern || "General Physical Therapy Evaluation",
      status: "Pending",
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };

    const updated = [newEnquiry, ...currentEnquiries];
    saveStoredEnquiries(updated);

    return NextResponse.json({ success: true, enquiry: newEnquiry, enquiries: updated });
  } catch (err) {
    console.error("Error creating enquiry:", err);
    return NextResponse.json({ success: false, error: "Failed to create enquiry" }, { status: 500 });
  }
}

// PATCH: Update status (Pending -> Confirmed / Completed / Cancelled)
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;
    const currentEnquiries = getStoredEnquiries();

    const updated = currentEnquiries.map((e) => (e.id === id ? { ...e, status } : e));
    saveStoredEnquiries(updated);

    return NextResponse.json({ success: true, enquiries: updated });
  } catch (err) {
    console.error("Error updating enquiry status:", err);
    return NextResponse.json({ success: false, error: "Failed to update enquiry status" }, { status: 500 });
  }
}

// DELETE: Remove an enquiry
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });

    const currentEnquiries = getStoredEnquiries();
    const updated = currentEnquiries.filter((e) => e.id !== id);
    saveStoredEnquiries(updated);

    return NextResponse.json({ success: true, enquiries: updated });
  } catch (err) {
    console.error("Error deleting enquiry:", err);
    return NextResponse.json({ success: false, error: "Failed to delete enquiry" }, { status: 500 });
  }
}
