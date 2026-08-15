"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useClinicData, AppointmentEnquiry, GalleryPhoto, PatientReview } from "@/context/ClinicDataContext";
import { BlogOrPosterItem, BlogCategory, PostType } from "@/types/blog";
import { CLINIC_DATA } from "@/constants/business";

type AdminTab = "overview" | "enquiries" | "blog" | "gallery" | "settings" | "reviews";

const BLOG_CATEGORIES: BlogCategory[] = [
  "Spine & Back",
  "Knee & Joint",
  "Home Physiotherapy",
  "Sports Rehab",
  "Posture & Ergonomics",
  "Post-Surgical Care",
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const {
    posts,
    addPost,
    deletePost,
    enquiries,
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
  } = useClinicData();

  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [adminUser, setAdminUser] = useState("Doctor");

  // Route Authentication Guard
  useEffect(() => {
    const isAuth = sessionStorage.getItem("nitya_admin_auth");
    if (!isAuth) {
      router.push("/admin");
    } else {
      setAdminUser(sessionStorage.getItem("nitya_admin_user") || "Dr. Hemant");
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("nitya_admin_auth");
    sessionStorage.removeItem("nitya_admin_user");
    router.push("/admin");
  };

  // --- BLOG / POSTER CREATION STATE ---
  const [newPostType, setNewPostType] = useState<PostType>("poster");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostCategory, setNewPostCategory] = useState<BlogCategory>("Spine & Back");
  const [newPostSummary, setNewPostSummary] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState<string | null>(null);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle || !newPostSummary) return;

    const slug = newPostTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const post: BlogOrPosterItem = {
      id: `post-${Date.now()}`,
      slug: `${slug}-${Date.now().toString().slice(-4)}`,
      type: newPostType,
      title: newPostTitle,
      category: newPostCategory,
      readTimeOrDuration: newPostType === "poster" ? "Infographic Poster" : "4 min read",
      publishedDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      author: CLINIC_DATA.practitioner.name,
      authorCredentials: `${CLINIC_DATA.practitioner.qualifications} (Bachelor of Physiotherapy)`,
      summary: newPostSummary,
      posterImageUrl: newPostImage || undefined,
      keyTakeaways: ["Clinical assessment advised before starting new exercises."],
      contentSections: newPostContent ? [{ heading: "Clinical Insights & Guidance", body: newPostContent }] : undefined,
    };

    addPost(post);
    setNewPostTitle("");
    setNewPostSummary("");
    setNewPostContent("");
    setNewPostImage(null);
    alert("Post / Poster published successfully to the live website!");
  };

  // --- GALLERY PHOTO CREATION STATE ---
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoCategory, setPhotoCategory] = useState<GalleryPhoto["category"]>("Clinic");
  const [photoCaption, setPhotoCaption] = useState("");
  const [photoFileUrl, setPhotoFileUrl] = useState<string | null>(null);

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoTitle || !photoFileUrl) {
      alert("Please provide a photo title and select an image file.");
      return;
    }

    const photo: GalleryPhoto = {
      id: `photo-${Date.now()}`,
      title: photoTitle,
      category: photoCategory,
      imageUrl: photoFileUrl,
      caption: photoCaption || "Nitya Physiotherapy Thatipur clinic photograph.",
    };

    addPhoto(photo);
    setPhotoTitle("");
    setPhotoCaption("");
    setPhotoFileUrl(null);
    alert("Photo added to clinic gallery!");
  };

  // --- REVIEW CREATION STATE ---
  const [reviewName, setReviewName] = useState("");
  const [reviewCondition, setReviewCondition] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewService, setReviewService] = useState("Clinic Consultation (Thatipur)");

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewText) return;

    const rev: PatientReview = {
      id: `rev-${Date.now()}`,
      patientName: reviewName,
      condition: reviewCondition || "General Physical Therapy",
      reviewText,
      serviceType: reviewService,
      date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };

    addReview(rev);
    setReviewName("");
    setReviewCondition("");
    setReviewText("");
    alert("Patient review verified and added!");
  };

  // Helper: File to Base64
  const handleFileConvert = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setter(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Admin Navigation Bar */}
      <header className="bg-teal-950 text-white border-b border-teal-900 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg">
              <img src="/logo.png" alt="Nitya Physiotherapy Logo" className="h-8 w-auto object-contain" />
            </div>
            <div>
              <h1 className="font-extrabold text-sm sm:text-base leading-none">Nitya Clinic Admin Portal</h1>
              <p className="text-[10px] text-teal-300 mt-0.5">Welcome, {adminUser} • Thatipur, Gwalior</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1 bg-teal-900 hover:bg-teal-800 text-teal-200 text-xs px-3 py-1.5 rounded-lg border border-teal-700 transition"
            >
              <span>🌐</span> View Live Website
            </Link>
            <button
              onClick={handleLogout}
              className="bg-rose-900/80 hover:bg-rose-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side Tab Navigation */}
        <aside className="lg:col-span-3 space-y-1">
          {[
            { id: "overview", label: "Dashboard Overview", icon: "📊" },
            { id: "enquiries", label: `Enquiries (${enquiries.filter((e) => e.status === "Pending").length} New)`, icon: "📅" },
            { id: "blog", label: "Blog & Health Posters", icon: "🖼️" },
            { id: "gallery", label: "Clinic Photo Gallery", icon: "📸" },
            { id: "reviews", label: "Patient Reviews", icon: "⭐" },
            { id: "settings", label: "Clinic Info & Contact", icon: "⚙️" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition text-left ${
                activeTab === tab.id
                  ? "bg-teal-900 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200"
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}

          <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl mt-6 text-xs text-teal-900 space-y-1">
            <p className="font-bold">Live Synced:</p>
            <p className="text-[11px] text-teal-800">
              Any changes saved here instantly update all visitor pages, forms, and calculators across the website.
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Practice Overview</h2>
                <p className="text-xs text-slate-500 mt-1">Real-time status of appointment enquiries and content.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-200">
                  <p className="text-[10px] font-bold uppercase text-teal-800">Pending Inquiries</p>
                  <p className="text-2xl font-black text-teal-950 mt-1">
                    {enquiries.filter((e) => e.status === "Pending").length}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase text-slate-600">Total Posters & Articles</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">{posts.length}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase text-slate-600">Gallery Photos</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">{photos.length}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-[10px] font-bold uppercase text-slate-600">Verified Reviews</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">{reviews.length}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h3 className="font-bold text-sm text-slate-800">Quick Actions</h3>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => setActiveTab("enquiries")}
                    className="bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
                  >
                    View Recent Bookings →
                  </button>
                  <button
                    onClick={() => setActiveTab("blog")}
                    className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
                  >
                    + Publish New Poster
                  </button>
                  <button
                    onClick={() => setActiveTab("gallery")}
                    className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
                  >
                    + Upload Clinic Photo
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: APPOINTMENT ENQUIRIES */}
          {activeTab === "enquiries" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">Appointment Bookings & Requests</h2>
                  <p className="text-xs text-slate-500 mt-1">Manage patient inquiries received from the website.</p>
                </div>
              </div>

              {enquiries.length === 0 ? (
                <p className="text-xs text-slate-500 py-8 text-center bg-slate-50 rounded-xl border border-slate-200">
                  No appointment requests yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-sm text-slate-900">{enq.name}</h3>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                                enq.status === "Pending"
                                  ? "bg-amber-100 text-amber-900"
                                  : enq.status === "Confirmed"
                                  ? "bg-emerald-100 text-emerald-900"
                                  : enq.status === "Completed"
                                  ? "bg-blue-100 text-blue-900"
                                  : "bg-slate-200 text-slate-700"
                              }`}
                            >
                              {enq.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-0.5">
                            <strong>Phone:</strong> {enq.phone} • <strong>Area:</strong> {enq.area}
                          </p>
                        </div>
                        <span className="text-[11px] text-slate-400">{enq.createdAt}</span>
                      </div>

                      <div className="text-xs bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                        <p>
                          <strong>Requested Mode:</strong>{" "}
                          <span className="text-teal-800 font-semibold">
                            {enq.serviceType === "home"
                              ? "🏡 Home Visit (Gwalior)"
                              : enq.serviceType === "clinic"
                              ? "🏥 Clinic Visit (Thatipur)"
                              : "💻 Online Video Consult"}
                          </span>
                        </p>
                        <p><strong>Preferred Date:</strong> {enq.preferredDate || "Earliest Available"}</p>
                        <p><strong>Patient Note:</strong> {enq.concern || "Assessment"}</p>
                      </div>

                      {/* Status Changing & Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-slate-500 font-medium">Status:</span>
                          <select
                            value={enq.status}
                            onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                            className="text-xs border border-slate-300 rounded px-2 py-1 bg-white font-semibold"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/${enq.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(
                              enq.name
                            )},%20this%20is%20Dr.%20Hemant%20Singh%20PT%20from%20Nitya%20Physiotherapy.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded transition"
                          >
                            💬 WhatsApp Patient
                          </a>
                          <a
                            href={`tel:${enq.phone.replace(/\D/g, "")}`}
                            className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded transition"
                          >
                            📞 Call
                          </a>
                          <button
                            onClick={() => deleteEnquiry(enq.id)}
                            className="text-slate-400 hover:text-rose-600 text-xs p-1"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: BLOG & HEALTH POSTERS */}
          {activeTab === "blog" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Blog & Health Posters Manager</h2>
                <p className="text-xs text-slate-500 mt-1">Upload educational posters or publish rehabilitation articles.</p>
              </div>

              {/* Create Form */}
              <form onSubmit={handleCreatePost} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <h3 className="font-bold text-sm text-slate-900">+ Add New Health Poster or Article</h3>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setNewPostType("poster")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                      newPostType === "poster" ? "bg-teal-900 text-white" : "bg-white border border-slate-200 text-slate-700"
                    }`}
                  >
                    🖼️ Infographic Poster
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewPostType("article")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                      newPostType === "article" ? "bg-teal-900 text-white" : "bg-white border border-slate-200 text-slate-700"
                    }`}
                  >
                    📝 Full Clinical Article
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 5 Exercises for Knee Arthritis"
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                    <select
                      value={newPostCategory}
                      onChange={(e) => setNewPostCategory(e.target.value as any)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none"
                    >
                      {BLOG_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {newPostType === "poster" && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Upload Poster Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileConvert(e, setNewPostImage)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white"
                    />
                    {newPostImage && (
                      <img src={newPostImage} alt="Preview" className="max-h-32 mt-2 rounded border border-slate-200" />
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Clinical Summary *</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Short advice for patients..."
                    value={newPostSummary}
                    onChange={(e) => setNewPostSummary(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  ></textarea>
                </div>

                {newPostType === "article" && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Article Content</label>
                    <textarea
                      rows={4}
                      placeholder="Write complete article..."
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                    ></textarea>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  Publish Now
                </button>
              </form>

              {/* Existing Posts List */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-slate-800">Currently Published Content ({posts.length})</h3>
                {posts.map((p) => (
                  <div key={p.id} className="p-3 rounded-lg border border-slate-200 flex justify-between items-center bg-white text-xs">
                    <div>
                      <span className="font-bold text-teal-900">{p.type === "poster" ? "🖼️ Poster:" : "📝 Article:"}</span>{" "}
                      <span className="font-semibold text-slate-800">{p.title}</span>
                      <span className="text-[10px] text-slate-500 ml-2">({p.category})</span>
                    </div>
                    <button
                      onClick={() => deletePost(p.id)}
                      className="text-rose-600 font-bold hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CLINIC PHOTO GALLERY */}
          {activeTab === "gallery" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Clinic Photo Gallery Manager</h2>
                <p className="text-xs text-slate-500 mt-1">Upload authentic photos of the clinic, equipment, and home visits.</p>
              </div>

              {/* Upload Photo Form */}
              <form onSubmit={handleAddPhoto} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <h3 className="font-bold text-sm text-slate-900">+ Upload New Clinic Photograph</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Photo Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Treatment Bed & Modalities"
                      value={photoTitle}
                      onChange={(e) => setPhotoTitle(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category *</label>
                    <select
                      value={photoCategory}
                      onChange={(e) => setPhotoCategory(e.target.value as any)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none"
                    >
                      <option value="Clinic">Clinic Interior / Exterior</option>
                      <option value="Treatment">Treatment Session</option>
                      <option value="Equipment">Rehab Equipment</option>
                      <option value="Home Visits">Home Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Choose Photo File *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileConvert(e, setPhotoFileUrl)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Caption / Description</label>
                  <input
                    type="text"
                    placeholder="Short description for accessibility..."
                    value={photoCaption}
                    onChange={(e) => setPhotoCaption(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  Save Photo to Gallery
                </button>
              </form>

              {/* Gallery List Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {photos.map((ph) => (
                  <div key={ph.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                    <img src={ph.imageUrl} alt={ph.title} className="aspect-[4/3] w-full object-cover" />
                    <div className="p-3 flex justify-between items-center text-xs">
                      <div>
                        <p className="font-bold text-slate-900">{ph.title}</p>
                        <p className="text-[10px] text-slate-500">{ph.category}</p>
                      </div>
                      <button onClick={() => deletePhoto(ph.id)} className="text-rose-600 font-bold hover:underline">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PATIENT REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Verified Patient Reviews Manager</h2>
                <p className="text-xs text-slate-500 mt-1">Add genuine reviews received from clinic patients or Google Reviews.</p>
              </div>

              <form onSubmit={handleAddReview} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <h3 className="font-bold text-sm text-slate-900">+ Add Verified Patient Review</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Patient Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Condition Treated</label>
                    <input
                      type="text"
                      placeholder="e.g. Frozen Shoulder / Lumbar Strain"
                      value={reviewCondition}
                      onChange={(e) => setReviewCondition(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Review Statement *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Patient's genuine feedback..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Service Type</label>
                  <select
                    value={reviewService}
                    onChange={(e) => setReviewService(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white outline-none"
                  >
                    <option value="Clinic Consultation (Thatipur)">Clinic Consultation (Thatipur)</option>
                    <option value="Home Physiotherapy Visit">Home Physiotherapy Visit</option>
                    <option value="Online Video Consultation">Online Video Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition"
                >
                  Publish Review
                </button>
              </form>

              <div className="space-y-3">
                {reviews.map((r) => (
                  <div key={r.id} className="p-4 rounded-xl border border-slate-200 bg-white flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-xs text-slate-900">{r.patientName}</p>
                        <span className="text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-semibold">
                          {r.condition}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 italic">"{r.reviewText}"</p>
                      <p className="text-[10px] text-slate-400 mt-1">{r.serviceType} • {r.date}</p>
                    </div>
                    <button onClick={() => deleteReview(r.id)} className="text-rose-600 text-xs font-bold hover:underline">
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CLINIC SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Clinic Information & SEO Settings</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Updates made here immediately change phone numbers, addresses, and consultation charges on the website.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Clinic Phone</label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => updateSettings({ phone: e.target.value, rawPhone: e.target.value.replace(/\D/g, "") })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
                  <input
                    type="text"
                    value={settings.whatsapp}
                    onChange={(e) => updateSettings({ whatsapp: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Opening Hours</label>
                  <input
                    type="text"
                    value={settings.openingHours}
                    onChange={(e) => updateSettings({ openingHours: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Consultation Fee Guidance</label>
                  <input
                    type="text"
                    value={settings.consultationFee}
                    onChange={(e) => updateSettings({ consultationFee: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Clinic Address Line 1</label>
                <input
                  type="text"
                  value={settings.addressLine1}
                  onChange={(e) => updateSettings({ addressLine1: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Address Line 2 (Landmark)</label>
                <input
                  type="text"
                  value={settings.addressLine2}
                  onChange={(e) => updateSettings({ addressLine2: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg outline-none"
                />
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-semibold">
                ✓ Changes are automatically saved and synced with the live website layout and booking forms.
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
