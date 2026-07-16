import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { HomeHero } from "@/components/home/home-hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { HomeCta } from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HomeHero />
        <ServicesPreview />
        <WhyChooseUs />
        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
