import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { HomeCta } from "@/components/home/home-cta";
import {
  Globe,
  Smartphone,
  Brain,
  Image,
  Check,
  Cloud,
  Shield,
  BarChart3,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - Web Development, Mobile Apps, AI Solutions & Poster Design | RyphTech",
  description:
    "RyphTech offers comprehensive web development, mobile app development, AI/ML solutions, and professional poster designing services.",
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We create modern, responsive, and scalable web applications that deliver exceptional user experiences and drive business growth.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Application Development",
      "API Development & Integration",
      "Database Design & Optimization",
      "Performance Optimization",
      "SEO & Digital Marketing",
      "Maintenance & Support",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
    process: [
      { step: "01", title: "Discovery & Planning", description: "Understanding your requirements and creating a detailed project plan" },
      { step: "02", title: "Design & Prototyping", description: "Creating wireframes and visual designs for your approval" },
      { step: "03", title: "Development", description: "Building your website with clean, maintainable code" },
      { step: "04", title: "Testing & Launch", description: "Thorough testing and deployment to production" },
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "We develop native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "App Analytics & Monitoring",
      "App Maintenance & Updates",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect", "Google Play Console"],
    process: [
      { step: "01", title: "Requirements Analysis", description: "Defining app features, user flows, and technical requirements" },
      { step: "02", title: "UI/UX Design", description: "Creating intuitive and engaging user interfaces" },
      { step: "03", title: "Development", description: "Building the app with best practices and performance in mind" },
      { step: "04", title: "Testing & Deployment", description: "Comprehensive testing and app store submission" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "We leverage artificial intelligence and machine learning to create intelligent solutions that automate processes and provide insights.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Data Analysis & Visualization",
      "Model Training & Optimization",
      "AI Integration",
      "Continuous Learning Systems",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLTK", "Pandas", "NumPy"],
    process: [
      { step: "01", title: "Data Analysis", description: "Understanding your data and defining ML objectives" },
      { step: "02", title: "Model Development", description: "Building and training machine learning models" },
      { step: "03", title: "Integration", description: "Integrating ML models into your existing systems" },
      { step: "04", title: "Monitoring & Optimization", description: "Continuous monitoring and model improvement" },
    ],
  },
  {
    icon: Image,
    title: "Poster Designing",
    description:
      "We create stunning, professional posters that capture attention and effectively communicate your message to your target audience.",
    features: [
      "Event Posters & Flyers",
      "Marketing & Promotional Posters",
      "Social Media Graphics",
      "Print-Ready Designs",
      "Brand-Consistent Designs",
      "High-Resolution Output",
      "Multiple Format Support",
      "Quick Turnaround Times",
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva Pro", "Figma", "CorelDRAW", "InDesign"],
    process: [
      { step: "01", title: "Concept & Briefing", description: "Understanding your requirements, target audience, and design objectives" },
      { step: "02", title: "Design & Layout", description: "Creating initial concepts and layouts for your approval" },
      { step: "03", title: "Refinement", description: "Incorporating feedback and perfecting the design details" },
      { step: "04", title: "Final Delivery", description: "Providing high-resolution files in all required formats" },
    ],
  },
];

const additionalServices = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for your applications.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation to protect your digital assets.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics solutions.",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description: "Streamline your development process with CI/CD pipelines and automation.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Our services"
          title="Solutions built for"
          titleAccent="your success"
          description="From web and mobile development to AI solutions and design, we offer end-to-end technology services that drive real business results."
        />

        {/* Main services */}
        {services.map((service, index) => (
          <section
            key={service.title}
            className="py-24 lg:py-32 border-t border-foreground/10"
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left: overview */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <service.icon className="w-8 h-8" strokeWidth={1.25} />
                    <span className="text-sm font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                    {service.description}
                  </p>

                  <div className="mb-10">
                    <h3 className="text-sm font-mono text-muted-foreground mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm border border-foreground/15 rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: process */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-sm font-mono text-muted-foreground mb-8">Our process</h3>
                  <div className="flex flex-col">
                    {service.process.map((step, i) => (
                      <div
                        key={step.step}
                        className={`flex gap-6 py-6 ${i > 0 ? "border-t border-foreground/10" : ""}`}
                      >
                        <span className="text-2xl font-display text-muted-foreground shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional services */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                And more
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
                Additional expertise
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
              {additionalServices.map((service) => (
                <div key={service.title} className="bg-background p-8 hover:bg-foreground/[0.02] transition-colors">
                  <service.icon className="w-7 h-7 mb-6" strokeWidth={1.25} />
                  <h3 className="text-lg font-medium mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Need something specific? Let&apos;s talk about your project.
              </Link>
            </div>
          </div>
        </section>

        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
