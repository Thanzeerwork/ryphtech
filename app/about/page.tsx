import type { Metadata } from "next";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { HomeCta } from "@/components/home/home-cta";
import { Target, Eye, Heart, Zap, Users, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About RyphTech - Our Story, Mission & Values",
  description:
    "Learn about RyphTech's journey, mission, and values. Founded by Thanzeer J and Devdarsh M, we're passionate about transforming businesses through innovative technology solutions.",
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering the highest quality solutions that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Our passion for technology drives us to create innovative solutions that make a real impact.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and close collaboration with our clients to achieve the best results.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of the curve with cutting-edge technologies and creative problem-solving approaches.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description:
      "RyphTech was established by Thanzeer J and Devdarsh M with a vision to transform businesses through technology.",
  },
  {
    year: "2023",
    title: "First Major Project",
    description:
      "Successfully delivered our first enterprise web application, establishing our reputation for quality.",
  },
  {
    year: "2024",
    title: "Team Expansion",
    description:
      "Grew our team to include talented developers, designers, and AI specialists.",
  },
  {
    year: "2024",
    title: "50+ Projects",
    description:
      "Reached a milestone of 50+ successful projects across web, mobile, and AI domains.",
  },
];

const stats = [
  { number: "2", label: "Years Experience", icon: Award },
  { number: "50+", label: "Projects Delivered", icon: CheckCircle },
  { number: "25+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "Client Satisfaction", icon: Heart },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          eyebrow="About us"
          title="Building the future,"
          titleAccent="one project at a time"
          description="RyphTech was founded with a simple vision: to transform businesses through innovative technology solutions that make a real difference."
        />

        {/* Mission & Vision */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              <div className="bg-background p-8 lg:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <Target className="w-7 h-7" strokeWidth={1.25} />
                  <span className="text-sm font-mono text-muted-foreground">Our Mission</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display mb-6">
                  Empowering businesses through technology
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To empower businesses with innovative technology solutions that drive growth,
                  efficiency, and success. We combine technical expertise with creative
                  problem-solving to deliver results that matter.
                </p>
              </div>
              <div className="bg-background p-8 lg:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <Eye className="w-7 h-7" strokeWidth={1.25} />
                  <span className="text-sm font-mono text-muted-foreground">Our Vision</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-display mb-6">
                  A trusted partner in digital transformation
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the trusted technology partner for businesses worldwide, known for
                  delivering exceptional digital experiences and pioneering solutions that shape
                  the future of technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-4 text-muted-foreground" strokeWidth={1.25} />
                  <div className="text-5xl lg:text-6xl font-display mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16 lg:mb-24">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Our values
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
                What drives us forward
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
              {values.map((value, i) => (
                <div key={value.title} className="hover-lift">
                  <div className="flex items-center gap-4 mb-5">
                    <value.icon className="w-6 h-6" strokeWidth={1.25} />
                    <span className="text-xs font-mono text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16 lg:mb-24">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Our journey
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
                Milestones along the way
              </h2>
            </div>

            <div className="flex flex-col">
              {milestones.map((milestone, i) => (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  className={`grid md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-10 ${
                    i > 0 ? "border-t border-foreground/10" : ""
                  }`}
                >
                  <span className="text-3xl font-display text-muted-foreground">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="text-2xl font-display mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
