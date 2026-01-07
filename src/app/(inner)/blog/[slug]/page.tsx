import Posts from "@/data/Posts.json";
import BlogClient from "./BlogClient";

export async function generateStaticParams() {
  return Posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in case it's a promise (future proofing and current Next.js best practice)
  const { slug } = await params;
  return <BlogClient />;
}
