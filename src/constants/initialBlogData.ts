import { BlogOrPosterItem } from "@/types/blog";

export const INITIAL_POSTS: BlogOrPosterItem[] = [
  {
    id: "poster-1",
    slug: "proper-sitting-ergonomics-desk-posture-guide",
    type: "poster",
    title: "Clinical Guide: 5 Rules for Desk Posture & Spine Alignment",
    category: "Posture & Ergonomics",
    readTimeOrDuration: "Infographic",
    publishedDate: "August 2026",
    author: "Dr. Hemant Singh PT",
    authorCredentials: "BPT (Bachelor of Physiotherapy)",
    summary: "Visual ergonomic guide for IT professionals and desk workers in Thatipur and Gwalior to minimize cervical neck and lower back strain.",
    posterImageUrl: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "Keep monitor at natural eye level to avoid neck hyper-flexion.",
      "Support lower lumbar curve with a small towel roll or ergonomic lumbar pad.",
      "Take 60-second micro-stretch breaks every 45 minutes of continuous sitting."
    ]
  },
  {
    id: "article-1",
    slug: "what-causes-lower-back-pain-and-when-to-see-a-physiotherapist",
    type: "article",
    title: "Understanding Lower Back Pain: Common Mechanical Causes and When to Seek Assessment",
    category: "Spine & Back",
    readTimeOrDuration: "4 min read",
    publishedDate: "August 2026",
    author: "Dr. Hemant Singh PT",
    authorCredentials: "BPT (Bachelor of Physiotherapy)",
    summary: "A clinical overview of mechanical lumbar discomfort, how active exercise therapy helps, and signs that indicate you need a hands-on physical therapy assessment in Gwalior.",
    keyTakeaways: [
      "Most back pain is mechanical, stemming from load imbalances rather than permanent damage.",
      "Resting in bed for extended periods often delays muscular recovery.",
      "Targeted hip mobility and core endurance exercises help prevent repeat flare-ups."
    ],
    contentSections: [
      {
        heading: "What Contributes to Mechanical Back Pain?",
        body: "Lower back pain usually arises from cumulative lifestyle factors: prolonged sitting without ergonomic support, deconditioned spinal stabilizing muscles, or sudden lifting loads beyond current tissue tolerance."
      },
      {
        heading: "How Physiotherapy Assessment Works",
        body: "At Nitya Physiotherapy in Thatipur, Gwalior, Dr. Hemant Singh PT evaluates spinal range of motion, hip mobility, nerve tension, and movement patterns before designing a tailored exercise recovery program."
      }
    ]
  },
  {
    id: "poster-2",
    slug: "post-knee-surgery-dos-and-donts",
    type: "poster",
    title: "Post Total-Knee Replacement (TKR): Safe Home Movement Guide",
    category: "Post-Surgical Care",
    readTimeOrDuration: "Infographic",
    publishedDate: "August 2026",
    author: "Dr. Hemant Singh PT",
    authorCredentials: "BPT (Bachelor of Physiotherapy)",
    summary: "Key recovery principles for patients recovering at home in Gwalior following joint surgery.",
    posterImageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    keyTakeaways: [
      "Never place a pillow directly beneath your knee in bed to prevent flexion contractures.",
      "Perform gentle ankle pumps 10 times every hour to promote venous return.",
      "Schedule supervised in-home gait training prior to unassisted walking."
    ]
  },
  {
    id: "article-2",
    slug: "who-benefits-from-home-physiotherapy-in-gwalior",
    type: "article",
    title: "Who May Benefit From Home Physiotherapy? A Guide for Families in Gwalior",
    category: "Home Physiotherapy",
    readTimeOrDuration: "5 min read",
    publishedDate: "August 2026",
    author: "Dr. Hemant Singh PT",
    authorCredentials: "BPT (Bachelor of Physiotherapy)",
    summary: "Discover how in-home physical rehabilitation delivers 1-on-1 personalized recovery for post-surgical orthopedic patients and elderly individuals across Gwalior.",
    keyTakeaways: [
      "Home visits eliminate strenuous transportation barriers for recovering post-surgical patients.",
      "Rehabilitating in your natural living environment ensures safer bed, chair, and bathroom transfers.",
      "Family members can directly observe and support prescribed home exercises."
    ]
  }
];
