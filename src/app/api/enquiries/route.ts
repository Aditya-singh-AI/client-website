import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Upstash Redis instance (credentials from environment variables)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

const ENQUIRIES_KEY = "nitya_global_enquiries";

// ─── Auto-expiry: 4 days in milliseconds ───
const EXPIRY_DAYS = 4;
const EXPIRY_MS = EXPIRY_DAYS * 24 * 60 * 60 * 1000;

interface StoredEnquiry {
  id: string;
  name: string;
  phone: string;
  serviceType: "clinic" | "home" | "online";
  area: string;
  preferredDate: string;
  concern: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  createdAt: string;
  timestamp: number; // Unix ms timestamp for auto-expiry
}

const SEED_ENQUIRIES: StoredEnquiry[] = [
  {
    id: "enq-seed-1",
    name: "Amitabh Dubey",
    phone: "+91 98260 00000",
    serviceType: "home",
    area: "Suresh Nagar, Gwalior",
    preferredDate: "2026-08-20",
    concern: "Post-surgery knee mobilization after orthopedic discharge",
    status: "Pending",
    createdAt: "Aug 14, 2026",
    timestamp: Date.now(),
  },
  {
    id: "enq-seed-2",
    name: "Priya Sengar",
    phone: "+91 94251 11111",
    serviceType: "clinic",
    area: "Thatipur, Gwalior",
    preferredDate: "2026-08-18",
    concern: "Cervical neck stiffness from prolonged laptop work",
    status: "Confirmed",
    createdAt: "Aug 13, 2026",
    timestamp: Date.now(),
  },
];

// ─── Helper: Remove enquiries older than 4 days ───
function purgeExpired(enquiries: StoredEnquiry[]): StoredEnquiry[] {
  const cutoff = Date.now() - EXPIRY_MS;
  return enquiries.filter((e) => {
    // If an enquiry has no timestamp (legacy), assign it now and keep it
    if (!e.timestamp) return true;
    return e.timestamp > cutoff;
  });
}

// ─── Helper: Get all enquiries from Redis (auto-cleans expired) ───
async function getEnquiries(): Promise<StoredEnquiry[]> {
  try {
    const data = await redis.get<StoredEnquiry[]>(ENQUIRIES_KEY);
    if (data && Array.isArray(data) && data.length > 0) {
      const cleaned = purgeExpired(data);
      // If expired entries were removed, save the cleaned list back
      if (cleaned.length !== data.length) {
        await redis.set(ENQUIRIES_KEY, cleaned);
      }
      return cleaned;
    }
    // First time: seed default enquiries
    await redis.set(ENQUIRIES_KEY, SEED_ENQUIRIES);
    return SEED_ENQUIRIES;
  } catch (err) {
    console.error("Redis GET error:", err);
    return SEED_ENQUIRIES;
  }
}

// ─── Helper: Save all enquiries to Redis ───
async function saveEnquiries(enquiries: StoredEnquiry[]): Promise<void> {
  try {
    await redis.set(ENQUIRIES_KEY, enquiries);
  } catch (err) {
    console.error("Redis SET error:", err);
  }
}

// ─── GET: Fetch all global enquiries (auto-purges expired) ───
export async function GET() {
  const enquiries = await getEnquiries();
  return NextResponse.json({ success: true, enquiries });
}

// ─── POST: Add a new patient booking enquiry ───
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const currentEnquiries = await getEnquiries();

    const now = Date.now();
    const newEnquiry: StoredEnquiry = {
      id: `enq-${now}`,
      name: body.name || "Patient Enquiry",
      phone: body.phone || "Not Provided",
      serviceType: body.serviceType || "clinic",
      area: body.area || "Gwalior",
      preferredDate: body.preferredDate || "Earliest Available",
      concern: body.concern || "General Physical Therapy Evaluation",
      status: "Pending",
      createdAt: new Date(now).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      timestamp: now,
    };

    const updated = [newEnquiry, ...currentEnquiries];
    await saveEnquiries(updated);

    return NextResponse.json({ success: true, enquiry: newEnquiry, enquiries: updated });
  } catch (err) {
    console.error("Error creating enquiry:", err);
    return NextResponse.json({ success: false, error: "Failed to create enquiry" }, { status: 500 });
  }
}

// ─── PATCH: Update enquiry status ───
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;
    const currentEnquiries = await getEnquiries();

    const updated = currentEnquiries.map((e) =>
      e.id === id ? { ...e, status } : e
    );
    await saveEnquiries(updated);

    return NextResponse.json({ success: true, enquiries: updated });
  } catch (err) {
    console.error("Error updating enquiry status:", err);
    return NextResponse.json({ success: false, error: "Failed to update status" }, { status: 500 });
  }
}

// ─── DELETE: Remove an enquiry permanently ───
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing enquiry ID" }, { status: 400 });
    }

    const currentEnquiries = await getEnquiries();
    const updated = currentEnquiries.filter((e) => e.id !== id);
    await saveEnquiries(updated);

    return NextResponse.json({ success: true, enquiries: updated });
  } catch (err) {
    console.error("Error deleting enquiry:", err);
    return NextResponse.json({ success: false, error: "Failed to delete enquiry" }, { status: 500 });
  }
}
