"use client";

import { useEffect, useState } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
}

export function PageHero({ eyebrow, title, titleAccent, description }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(4)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${25 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${12.5 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            {eyebrow}
          </span>
        </div>

        <h1
          className={`text-[clamp(2.75rem,8vw,6.5rem)] font-display leading-[0.95] tracking-tight mb-8 text-balance transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="relative inline-block">
                {titleAccent}
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
              </span>
            </>
          )}
        </h1>

        <p
          className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl text-pretty transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
