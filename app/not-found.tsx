import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${16.66 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${10 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8 justify-center">
          <span className="w-8 h-px bg-foreground/30" />
          Page not found
          <span className="w-8 h-px bg-foreground/30" />
        </span>

        <h1 className="text-[clamp(6rem,20vw,12rem)] font-display leading-none tracking-tight mb-6">
          404
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed mb-12 text-pretty">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5 bg-transparent"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
