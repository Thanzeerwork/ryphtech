"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "@/components/landing/animated-wave";

const footerLinks = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  Services: [
    { name: "Web Development", href: "/services" },
    { name: "App Development", href: "/services" },
    { name: "Machine Learning", href: "/services" },
    { name: "Poster Designing", href: "/services" },
  ],
  Contact: [
    { name: "ryphtech@gmail.com", href: "mailto:ryphtech@gmail.com" },
    { name: "+91 9497051820", href: "tel:+919497051820" },
    { name: "Kollam, Kerala, India", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/ryphtech" },
  { name: "GitHub", href: "https://github.com/ryphtech" },
  { name: "Instagram", href: "https://instagram.com/ryphtech" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/images/logo.svg" 
                    alt="RyphTech Logo" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-contain scale-[1.35]"
                  />
                </div>
                <span className="text-2xl font-display">RyphTech</span>
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Transforming ideas into digital reality. We build modern web applications, mobile
                apps, and AI-powered solutions for businesses worldwide.
              </p>

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} RyphTech. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
