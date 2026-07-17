import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { HomeCta } from "@/components/home/home-cta";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Generate static pages at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-[800px] mx-auto px-6 lg:px-12">
          {/* Back button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-foreground/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Hero Image / Gradient Placeholder */}
          <div className={`w-full h-64 md:h-96 rounded-3xl bg-gradient-to-br ${post.imageGradient} mb-16 relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-medium prose-a:text-foreground max-w-none mb-24">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        <HomeCta />
      </main>

      <Footer />
    </div>
  );
}
