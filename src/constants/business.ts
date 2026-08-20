// src/constants/business.ts
export interface ServiceItem {
  id?: string;
  title: string;
  slug: string;
  description: string;
  summary?: string;
  indications?: string[];
}

export interface ConditionItem {
  id?: string;
  title: string;
  slug: string;
  category?: string;
}

const servicesList: ServiceItem[] = [
  { 
    id: "home-physiotherapy", 
    title: "Home Physiotherapy", 
    slug: "home-physiotherapy", 
    description: "Professional rehabilitation in the comfort of your home.", 
    summary: "Professional rehabilitation in the comfort of your home.",
    indications: ["Post-surgical rehab", "Stroke & neuro recovery", "Elderly mobility care", "Severe acute joint pain"]
  },
  { 
    id: "sports-physiotherapy", 
    title: "Sports Physiotherapy", 
    slug: "sports-physiotherapy", 
    description: "Specialized care for athletes and sports-related injuries.", 
    summary: "Specialized care for athletes and sports-related injuries.",
    indications: ["Ligament sprains", "Muscle strains", "Rotator cuff issues", "Joint sprains"]
  },
  { 
    id: "musculoskeletal-physiotherapy", 
    title: "Musculoskeletal Physiotherapy", 
    slug: "musculoskeletal-physiotherapy", 
    description: "Treatment for muscle, bone, and joint conditions.", 
    summary: "Treatment for muscle, bone, and joint conditions.",
    indications: ["Lower back pain", "Neck stiffness", "Frozen shoulder", "Knee osteoarthritis"]
  },
  { 
    id: "online-consultation", 
    title: "Online Consultation", 
    slug: "online-consultation", 
    description: "Expert guidance and exercise planning via video call.", 
    summary: "Expert guidance and exercise planning via video call.",
    indications: ["Follow-up reviews", "Ergonomic advice", "Exercise progress tracking", "Initial triaging"]
  }
];

const conditionsList: ConditionItem[] = [
  { id: "back-pain", title: "Back Pain", slug: "back-pain", category: "Spine" },
  { id: "neck-pain", title: "Neck Pain", slug: "neck-pain", category: "Spine" },
  { id: "knee-pain", title: "Knee Pain", slug: "knee-pain", category: "Joints" },
  { id: "shoulder-pain", title: "Shoulder Pain", slug: "shoulder-pain", category: "Joints" },
  { id: "post-surgical-rehab", title: "Post-Surgical Rehab", slug: "post-surgical-rehab", category: "Rehab" }
];

export const BUSINESS_DETAILS = {
  name: "Nitya Physiotherapy Clinic",
  shortName: "Nitya Physiotherapy Clinic",
  practitioner: {
    name: "Dr. Hemant Singh PT",
    qualifications: "BPT",
    specialization: "Sports and Musculoskeletal Physiotherapy"
  },
  qualifications: "BPT",
  specialization: "Sports and Musculoskeletal Physiotherapy",
  phone: "+91 82696 15097",
  whatsapp: "+91 82696 15097",
  email: "nityahemantsingh@gmail.com",
  contact: {
    phone: "+91 82696 15097",
    rawPhone: "918269615097",
    whatsapp: "+91 82696 15097",
    email: "nityahemantsingh@gmail.com"
  },
  address: {
    street: "402, Akanksha Kirana Store, New Suresh Nagar, Near Sheetla Garden, Thatipur",
    city: "Gwalior",
    state: "Madhya Pradesh",
    zip: "474011",
    full: "402, Akanksha Kirana Store, New Suresh Nagar, Near Sheetla Garden, Thatipur, Gwalior – 474011, Madhya Pradesh, India"
  },
  location: {
    fullAddress: "402, Akanksha Kirana Store, New Suresh Nagar, Near Sheetla Garden, Thatipur, Gwalior – 474011, Madhya Pradesh, India",
    line1: "402, Akanksha Kirana Store, New Suresh Nagar",
    line2: "Near Sheetla Garden",
    area: "Thatipur",
    city: "Gwalior",
    state: "Madhya Pradesh",
    pincode: "474011",
    country: "India",
    googleMapsUrl: "https://maps.app.goo.gl/2HYrc4QT5aXfof9s5",
    googleSearchUrl: "https://share.google/pLHTFZrqIOKn08Rt0",
    openingHoursPlaceholder: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: By Appointment",
    mapsEmbedUrlPlaceholder: "https://maps.google.com/maps?q=Nitya+Physiotherapy+Thatipur+Gwalior&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  googleMapsUrl: "https://maps.app.goo.gl/2HYrc4QT5aXfof9s5",
  googleSearchUrl: "https://share.google/pLHTFZrqIOKn08Rt0",
  services: servicesList,
  conditions: conditionsList,
  verifiedServices: servicesList,
  verifiedConditions: conditionsList
};

export const CLINIC_DATA = BUSINESS_DETAILS;