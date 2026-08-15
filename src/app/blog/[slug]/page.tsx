import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blogData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Nitya Physiotherapy Gwalior`,
    description: post.summary,
    authors: [{ name: post.author }],
  };
}

export default function SingleBlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-teal-700">Patient Education</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800 font-medium">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              {post.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">{post.readTime}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">{post.publishedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
            {post.title}
          </h1>

          {/* Author Badge (E-E-A-T Signal) */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-teal-900 text-white flex items-center justify-center text-sm font-bold">
              ⚕️
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">Reviewed by {post.author}</p>
              <p className="text-slate-500">{post.authorCredentials} • Nitya Physiotherapy Thatipur</p>
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="p-6 bg-teal-50/60 rounded-xl border border-teal-100 space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-900">Key Clinical Takeaways</h2>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">✓</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {post.contentSections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-950">{sec.heading}</h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{sec.body}</p>
            </section>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <div className="p-4 bg-slate-100 rounded-lg text-xs text-slate-600 border border-slate-200">
          <strong>Medical Note:</strong> This educational article is intended for general informational purposes and does not replace an in-person clinical assessment. Always consult a certified physical therapist or orthopedic physician before commencing any new exercise program.
        </div>

        {/* In-article Appointment CTA */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-lg font-bold">Need a Personal Assessment in Gwalior?</h3>
            <p className="text-xs text-slate-300 mt-1">Consult with Dr. Hemant Singh PT at our Thatipur clinic or request a home visit.</p>
          </div>
          <Link
            href="/book-appointment"
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-6 py-3 rounded-lg whitespace-nowrap transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
