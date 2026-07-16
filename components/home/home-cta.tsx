"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "@/components/landing/animated-tetrahedron";

export function HomeCta() {
  return (
    <section className="relative py-24 lg:py-40 border-t border-foreground/10 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] opacity-30 pointer-events-none">
        <AnimatedTetrahedron />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 justify-center">
          <span className="w-8 h-px bg-foreground/30" />
          Ready to start?
          <span className="w-8 h-px bg-foreground/30" />
        </span>

        <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 text-balance">
          Let&apos;s build something great together
        </h2>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 text-pretty">
          Whether you need a website, mobile app, or AI-powered solution, our team is ready to
          turn your vision into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5 bg-transparent"
          >
            <Link href="/services">Explore services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
