import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { HomeCta } from "@/components/home/home-cta";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights, tutorials, and news about web development, mobile apps, and artificial intelligence from the RyphTech team.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1 pt-24">
        <PageHero
          title="Our Blog"
          description="Insights, tutorials, and updates from our team of developers and designers."
        />

        <section className="py-24 relative z-10 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-card rounded-3xl border border-foreground/10 overflow-hidden hover:border-foreground/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`h-48 w-full bg-gradient-to-br ${post.imageGradient} p-6 flex items-end relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[url('/noise.png')] mix-blend-overlay"></div>
                    <span className="inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground relative z-10">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-medium mb-3 group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-foreground/10">
                      <span className="text-sm font-medium">{post.author}</span>
                      <span className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HomeCta />
      </main>

      <Footer />
    </div>
  );
}
