export interface BlogPost {
  slug: string;
  title: string;
  category: "Spine & Back" | "Neck & Cervical" | "Knee & Joint" | "Home Physiotherapy" | "Sports Rehab";
  readTime: string;
  publishedDate: string;
  author: string;
  authorCredentials: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-causes-lower-back-pain-and-when-to-see-a-physiotherapist",
    title: "Understanding Lower Back Pain: Common Mechanical Causes and When to Seek Assessment",
    category: "Spine & Back",
    readTime: "4 min read",
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
        heading: "What Truly Contributes to Mechanical Back Pain?",
        body: "Lower back pain rarely arises from a single event. It is usually the outcome of cumulative factors: prolonged sedentary sitting without ergonomic breaks, deconditioned spinal stabilizing muscles, or sudden lifting loads beyond current tissue tolerance. The lumbar spine relies on an intricate balance between deep abdominal stabilizers, the gluteal complex, and back extensors."
      },
      {
        heading: "How Physiotherapy Assessment Evaluates the Root Cause",
        body: "At Nitya Physiotherapy in Thatipur, Gwalior, assessment does not rely on passive modalities alone. Dr. Hemant Singh PT evaluates spinal range of motion, hip rotational flexibility, nerve tension tests, and functional movement patterns to determine whether your discomfort responds best to extension-based loading, flexion-based decompression, or core stabilization."
      },
      {
        heading: "When Should You Seek Professional Assessment?",
        body: "If your back discomfort persists for more than 7–10 days, interferes with sleep, or causes tingling sensations traveling down into your leg or foot, an individual physical evaluation is strongly advised to establish a structured recovery plan."
      }
    ]
  },
  {
    slug: "who-benefits-from-home-physiotherapy-in-gwalior",
    title: "Who May Benefit From Home Physiotherapy? A Guide for Families in Gwalior",
    category: "Home Physiotherapy",
    readTime: "5 min read",
    publishedDate: "August 2026",
    author: "Dr. Hemant Singh PT",
    authorCredentials: "BPT (Bachelor of Physiotherapy)",
    summary: "Discover how in-home physical rehabilitation delivers 1-on-1 personalized recovery for post-surgical orthopedic patients and elderly individuals across Gwalior.",
    keyTakeaways: [
      "Home visits eliminate strenuous transportation barriers for recovering post-surgical patients.",
      "Rehabilitating in your natural living environment ensures safer bed, chair, and bathroom transfers.",
      "Family members can directly observe and support prescribed home exercises."
    ],
    contentSections: [
      {
        heading: "Addressing the Mobility Challenge",
        body: "Traveling to an outpatient clinic immediately after a major orthopedic procedure—such as a Total Knee Replacement (TKR) or fracture fixation—can cause severe discomfort and risk aggravating healing incisions. Home physiotherapy provides direct clinical care right inside your residence across Thatipur, Suresh Nagar, Morar, and greater Gwalior."
      },
      {
        heading: "What Happens During an In-Home Physiotherapy Session?",
        body: "Dr. Hemant Singh PT brings specialized portable equipment to assess joint range, supervise therapeutic resistance exercises, guide safe walking technique with assistive devices, and optimize household ergonomics to minimize fall risks."
      },
      {
        heading: "How to Schedule Home Care in Gwalior",
        body: "Families can request a home visit by providing basic patient mobility details and preferred time slots. Advance booking ensures proper coordination across different Gwalior localities."
      }
    ]
  },
  {
    slug: "knee-osteoarthritis-exercise-rehabilitation-guide",
    title: "Knee Osteoarthritis: Why Movement and Strengthening are Essential for Joint Health",
    category: "Knee & Joint",
    readTime: "4 min read",
    publishedDate: "August 2026",
    author: "Dr. Hemant Singh PT",
    authorCredentials: "BPT (Bachelor of Physiotherapy)",
    summary: "Why avoiding movement worsens knee stiffness and how progressive quadriceps strengthening helps reduce daily joint stress.",
    keyTakeaways: [
      "Cartilage requires joint movement and fluid circulation to stay nourished.",
      "Strong quadriceps and calves act as natural shock absorbers for the knee.",
      "Low-impact exercises can significantly reduce reliance on temporary pain relievers."
    ],
    contentSections: [
      {
        heading: "The Myth of Total Rest in Knee Arthritis",
        body: "When experiencing knee discomfort, many individuals instinctively avoid walking or exercise. However, joint cartilage lacks direct blood vessels and depends on joint compression and decompression (such as controlled walking and cycling) to circulate synovial fluid and receive nutrients. Complete immobility leads to muscle atrophy and stiffer joints."
      },
      {
        heading: "Targeted Physiotherapy Protocols",
        body: "A structured physiotherapy program focuses on strengthening the quadriceps, hamstrings, and hip abductors. Strengthening these surrounding muscle groups reduces the compressive load placed directly onto the knee joint surfaces during stair climbing and daily walking."
      }
    ]
  }
];
