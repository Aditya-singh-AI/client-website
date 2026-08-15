"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { CLINIC_DATA } from "@/constants/business";
import { INITIAL_POSTS } from "@/constants/initialBlogData";
import { BlogOrPosterItem } from "@/types/blog";

export interface AppointmentEnquiry {
  id: string;
  name: string;
  phone: string;
  serviceType: "clinic" | "home" | "online";
  area: string;
  preferredDate: string;
  concern: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  createdAt: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Clinic" | "Treatment" | "Equipment" | "Home Visits";
  imageUrl: string;
  caption: string;
}

export interface ClinicSettings {
  phone: string;
  rawPhone: string;
  whatsapp: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  pincode: string;
  openingHours: string;
  consultationFee: string;
  googleMapsEmbedUrl: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  condition: string;
  reviewText: string;
  serviceType: string;
  date: string;
}

interface ClinicDataContextType {
  posts: BlogOrPosterItem[];
  addPost: (post: BlogOrPosterItem) => void;
  deletePost: (id: string) => void;
  enquiries: AppointmentEnquiry[];
  addEnquiry: (enquiry: Omit<AppointmentEnquiry, "id" | "createdAt" | "status">) => void;
  updateEnquiryStatus: (id: string, status: AppointmentEnquiry["status"]) => void;
  deleteEnquiry: (id: string) => void;
  photos: GalleryPhoto[];
  addPhoto: (photo: GalleryPhoto) => void;
  deletePhoto: (id: string) => void;
  settings: ClinicSettings;
  updateSettings: (newSettings: Partial<ClinicSettings>) => void;
  reviews: PatientReview[];
  addReview: (review: PatientReview) => void;
  deleteReview: (id: string) => void;
}

const DEFAULT_SETTINGS: ClinicSettings = {
  phone: CLINIC_DATA.contact.phone,
  rawPhone: CLINIC_DATA.contact.rawPhone,
  whatsapp: CLINIC_DATA.contact.whatsapp,
  email: "nityahemantsingh@gmail.com",
  addressLine1: CLINIC_DATA.location.line1,
  addressLine2: CLINIC_DATA.location.line2,
  area: CLINIC_DATA.location.area,
  city: CLINIC_DATA.location.city,
  pincode: CLINIC_DATA.location.pincode,
  openingHours: "Mon – Sat: 9:00 AM – 8:00 PM | Sun: On Advance Appointment",
  consultationFee: "₹300 - ₹500 (Clinic) / ₹500 - ₹800 (Home Visit)",
  googleMapsEmbedUrl: CLINIC_DATA.location.mapsEmbedUrlPlaceholder,
};

const INITIAL_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-solo",
    title: "1-on-1 Knee & Musculoskeletal Rehabilitation Assessment",
    category: "Treatment",
    imageUrl: "/images/dr-hemant-solo.jpg",
    caption: "Dr. Hemant Singh PT evaluating joint range of motion and delivering targeted physical therapy in Thatipur, Gwalior.",
  },
  {
    id: "photo-grid-1",
    title: "Comprehensive Clinical Consultation & Care Suite",
    category: "Clinic",
    imageUrl: "/images/dr-hemant-clinical-grid-1.jpg",
    caption: "Authentic clinical sessions including knee evaluation, desk consultation with anatomical spine model, cervical neck mobilization, and arm resistance exercise.",
  },
  {
    id: "photo-grid-2",
    title: "Targeted Joint Mobilization & Physical Exercise Therapy",
    category: "Treatment",
    imageUrl: "/images/dr-hemant-clinical-grid-2.jpg",
    caption: "Specialized lumbar, hip, knee flexion, and arm/elbow physical therapy care for optimal functional recovery.",
  },
];

const INITIAL_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    patientName: "Rajesh Sharma",
    condition: "Lower Back Pain & Sciatica",
    reviewText: "Dr. Hemant's assessment was very thorough. The guided exercises helped me resume daily walking comfortably in just three weeks.",
    serviceType: "Clinic Consultation (Thatipur)",
    date: "July 2026",
  },
  {
    id: "rev-2",
    patientName: "Sunita Verma",
    condition: "Post Knee Replacement (TKR)",
    reviewText: "The home visit physiotherapy sessions across Thatipur made my mother's post-surgery recovery smooth and safe. Highly recommended.",
    serviceType: "Home Physiotherapy Visit",
    date: "August 2026",
  },
];

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

const ClinicDataContext = createContext<ClinicDataContextType | undefined>(undefined);

export function ClinicDataProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<BlogOrPosterItem[]>(INITIAL_POSTS);
  const [enquiries, setEnquiries] = useState<AppointmentEnquiry[]>(INITIAL_ENQUIRIES);
  const [photos, setPhotos] = useState<GalleryPhoto[]>(INITIAL_PHOTOS);
  const [settings, setSettings] = useState<ClinicSettings>(DEFAULT_SETTINGS);
  const [reviews, setReviews] = useState<PatientReview[]>(INITIAL_REVIEWS);

  // Sync with LocalStorage
  useEffect(() => {
    const storedPosts = localStorage.getItem("nitya_admin_posts");
    const storedEnquiries = localStorage.getItem("nitya_admin_enquiries");
    const storedPhotos = localStorage.getItem("nitya_admin_photos");
    const storedSettings = localStorage.getItem("nitya_admin_settings");
    const storedReviews = localStorage.getItem("nitya_admin_reviews");

    if (storedPosts) setPosts(JSON.parse(storedPosts));
    if (storedEnquiries) setEnquiries(JSON.parse(storedEnquiries));
    if (storedPhotos) setPhotos(JSON.parse(storedPhotos));
    if (storedSettings) setSettings(JSON.parse(storedSettings));
    if (storedReviews) setReviews(JSON.parse(storedReviews));
  }, []);

  const addPost = useCallback((post: BlogOrPosterItem) => {
    setPosts((prev) => {
      const updated = [post, ...prev];
      localStorage.setItem("nitya_admin_posts", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deletePost = useCallback((id: string) => {
    setPosts((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem("nitya_admin_posts", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const addEnquiry = useCallback((enqData: Omit<AppointmentEnquiry, "id" | "createdAt" | "status">) => {
    const newEnq: AppointmentEnquiry = {
      ...enqData,
      id: `enq-${Date.now()}`,
      status: "Pending",
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    setEnquiries((prev) => {
      const updated = [newEnq, ...prev];
      localStorage.setItem("nitya_admin_enquiries", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateEnquiryStatus = useCallback((id: string, status: AppointmentEnquiry["status"]) => {
    setEnquiries((prev) => {
      const updated = prev.map((e) => (e.id === id ? { ...e, status } : e));
      localStorage.setItem("nitya_admin_enquiries", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteEnquiry = useCallback((id: string) => {
    setEnquiries((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      localStorage.setItem("nitya_admin_enquiries", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const addPhoto = useCallback((photo: GalleryPhoto) => {
    setPhotos((prev) => {
      const updated = [photo, ...prev];
      localStorage.setItem("nitya_admin_photos", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deletePhoto = useCallback((id: string) => {
    setPhotos((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem("nitya_admin_photos", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateSettings = useCallback((newSettings: Partial<ClinicSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem("nitya_admin_settings", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const addReview = useCallback((review: PatientReview) => {
    setReviews((prev) => {
      const updated = [review, ...prev];
      localStorage.setItem("nitya_admin_reviews", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteReview = useCallback((id: string) => {
    setReviews((prev) => {
      const updated = prev.filter((r) => r.id !== id);
      localStorage.setItem("nitya_admin_reviews", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const contextValue = useMemo(() => ({
    posts,
    addPost,
    deletePost,
    enquiries,
    addEnquiry,
    updateEnquiryStatus,
    deleteEnquiry,
    photos,
    addPhoto,
    deletePhoto,
    settings,
    updateSettings,
    reviews,
    addReview,
    deleteReview,
  }), [posts, enquiries, photos, settings, reviews, addPost, deletePost, addEnquiry, updateEnquiryStatus, deleteEnquiry, addPhoto, deletePhoto, updateSettings, addReview, deleteReview]);

  return (
    <ClinicDataContext.Provider value={contextValue}>
      {children}
    </ClinicDataContext.Provider>
  );
}

export function useClinicData() {
  const context = useContext(ClinicDataContext);
  if (!context) {
    throw new Error("useClinicData must be used within a ClinicDataProvider");
  }
  return context;
}
