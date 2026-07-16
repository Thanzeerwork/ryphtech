"use client";

import Link from "next/link";
import { Globe, Smartphone, Brain, Image, ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    description: "Modern websites and web applications built with cutting-edge technologies.",
    features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
  },
  {
    icon: Brain,
    number: "03",
    title: "Machine Learning",
    description: "AI-powered solutions and predictive analytics to transform your business.",
    features: ["Python & TensorFlow", "Data Analysis", "Model Training", "AI Integration"],
  },
  {
    icon: Image,
    number: "04",
    title: "Poster Designing",
    description: "Stunning, professional posters that capture attention and communicate your message.",
    features: ["Event Posters", "Marketing Graphics", "Social Media Design", "Print-Ready Files"],
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              What we do
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-balance">
              Services that drive growth
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            Explore all services
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group bg-background p-8 lg:p-12 hover:bg-foreground/[0.02] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <service.icon className="w-8 h-8 text-foreground" strokeWidth={1.25} />
                <span className="text-sm font-mono text-muted-foreground">{service.number}</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-display mb-4 flex items-center gap-3">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                {service.description}
              </p>

              <ul className="grid grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
