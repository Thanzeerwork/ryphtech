"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Category = "all" | "web" | "mobile" | "ai" | "design";

interface Project {
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  technologies: string[];
  gradient: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "A full-featured e-commerce platform with product management, payment integration, real-time inventory tracking, and an admin dashboard.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
    gradient: "from-neutral-200 to-neutral-400",
  },
  {
    title: "Restaurant Ordering App",
    category: "mobile",
    categoryLabel: "App Development",
    description:
      "Cross-platform mobile app for restaurant ordering with real-time order tracking, push notifications, and integrated payment gateway.",
    technologies: ["React Native", "Firebase", "Node.js", "Razorpay"],
    gradient: "from-stone-200 to-stone-400",
  },
  {
    title: "Crop Disease Detection",
    category: "ai",
    categoryLabel: "Machine Learning",
    description:
      "AI-powered image classification system that identifies crop diseases from photographs with 94% accuracy, helping farmers take timely action.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "AWS"],
    gradient: "from-zinc-200 to-zinc-400",
  },
  {
    title: "Tech Conference Branding",
    category: "design",
    categoryLabel: "Poster Designing",
    description:
      "Complete visual identity and promotional materials for a regional tech conference, including event posters, social media kits, and banners.",
    technologies: ["Figma", "Photoshop", "Illustrator"],
    gradient: "from-neutral-300 to-neutral-500",
  },
  {
    title: "Healthcare Dashboard",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "Patient management dashboard for a healthcare startup, featuring appointment scheduling, medical records, and analytics with role-based access.",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js", "Vercel"],
    gradient: "from-stone-300 to-stone-500",
  },
  {
    title: "Fitness Tracker App",
    category: "mobile",
    categoryLabel: "App Development",
    description:
      "Feature-rich fitness tracking app with workout logging, progress charts, social challenges, and wearable device integration.",
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
    gradient: "from-zinc-300 to-zinc-500",
  },
  {
    title: "Sentiment Analysis Tool",
    category: "ai",
    categoryLabel: "Machine Learning",
    description:
      "NLP-based sentiment analysis engine for social media monitoring, providing real-time brand perception insights and automated reporting.",
    technologies: ["Python", "NLTK", "Scikit-learn", "React", "FastAPI"],
    gradient: "from-neutral-200 to-neutral-400",
  },
  {
    title: "Startup Launch Campaign",
    category: "design",
    categoryLabel: "Poster Designing",
    description:
      "End-to-end marketing collateral for a fintech startup launch, including digital posters, pitch deck visuals, and social media creatives.",
    technologies: ["Canva Pro", "Figma", "After Effects"],
    gradient: "from-stone-200 to-stone-400",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI / ML", value: "ai" },
  { label: "Design", value: "design" },
];

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-16">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-2.5 text-sm rounded-full transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-foreground text-background"
                : "border border-foreground/15 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group bg-background p-8 lg:p-12 hover:bg-foreground/[0.02] transition-colors"
          >
            {/* Project Image Placeholder */}
            <div
              className={`relative w-full aspect-[16/10] mb-8 overflow-hidden bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl lg:text-7xl font-display text-white/20 select-none">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
            </div>

            {/* Category Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-muted-foreground px-3 py-1 border border-foreground/10 rounded-full">
                {project.categoryLabel}
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>

            {/* Title */}
            <h3 className="text-2xl lg:text-3xl font-display mb-4 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs border border-foreground/10 rounded-full text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="border border-foreground/10 p-16 text-center">
          <p className="text-muted-foreground text-lg">
            No projects found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
