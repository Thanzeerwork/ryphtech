import type { Metadata } from "next";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { HomeCta } from "@/components/home/home-cta";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export const metadata: Metadata = {
  title: "Our Projects | RyphTech",
  description:
    "Explore RyphTech's portfolio of web development, mobile app, and AI projects delivered for clients worldwide.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Our work"
          title={"Projects we're"}
          titleAccent="proud of"
          description={
            "A selection of web, mobile, and AI projects we've delivered for clients across industries."
          }
        />

        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <ProjectsGrid />
          </div>
        </section>

        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
