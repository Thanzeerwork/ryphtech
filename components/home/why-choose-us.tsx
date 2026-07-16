"use client";

import { Zap, Shield, Users, Monitor, Palette, Code } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time and within budget, without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure your solution works flawlessly.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced team brings diverse skills and deep industry knowledge to every project.",
  },
  {
    icon: Monitor,
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance to keep your systems running smoothly.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Tailored solutions designed specifically for your business needs and objectives.",
  },
  {
    icon: Code,
    title: "Modern Technology",
    description: "We use the latest technologies and best practices to build future-proof solutions.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why RyphTech
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
            Built on trust, delivered with excellence
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="group hover-lift">
              <div className="flex items-center gap-4 mb-5">
                <reason.icon className="w-6 h-6" strokeWidth={1.25} />
                <span className="text-xs font-mono text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
