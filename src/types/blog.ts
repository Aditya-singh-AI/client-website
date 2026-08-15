export type PostType = "poster" | "article";

export type BlogCategory = 
  | "Spine & Back" 
  | "Knee & Joint" 
  | "Home Physiotherapy" 
  | "Sports Rehab" 
  | "Posture & Ergonomics" 
  | "Post-Surgical Care";

export interface BlogOrPosterItem {
  id: string;
  slug: string;
  type: PostType;
  title: string;
  category: BlogCategory;
  readTimeOrDuration: string;
  publishedDate: string;
  author: string;
  authorCredentials: string;
  summary: string;
  posterImageUrl?: string; // Base64 or URL
  keyTakeaways: string[];
  contentSections?: {
    heading: string;
    body: string;
  }[];
}
