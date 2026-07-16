import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { HomeCta } from "@/components/home/home-cta";
import { Linkedin, Github, Mail, Globe, Award, Users, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Our Team | RyphTech",
  description:
    "Meet the talented team behind RyphTech - innovators, creators, and problem-solvers dedicated to transforming businesses through technology.",
};

const founders = [
  
  {
    name: "Thanzeer J",
    role: "Co-Founder & Co-CEO",
    image: "/images/team/thanzeer.jpeg",
    bio: "Technical expert specializing in mobile development and web development. Committed to building scalable, cutting-edge technology solutions.",
    skills: ["Mobile Development", "Web Development", "System Architecture", "Technical Leadership"],
    social: {
      linkedin: "https://linkedin.com/in/thanzeer",
      github: "https://github.com/thanzeer",
      email: "thanzeerwork@gmail.com",
      website: "https://thanzeer.dev",
    },
  },
  {
    name: "Devdarsh M",
    role: "Co-Founder & Co-CEO",
    image: "/images/team/devdarsh.jpg",
    bio: "Visionary leader with expertise in Artificial Intelligence,automation and business strategy. Passionate about creating innovative solutions that drive business growth.",
    skills: ["Machine Learning", "Business Strategy", "Product Management", "Team Leadership","Automation","Robotics"],
    social: {
      linkedin: "https://linkedin.com/in/devdarsh",
      github: "https://github.com/devdarsh",
      email: "devdarsh@ryphtech.com",
      website: "https://devdarsh.dev",
    },
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about technology and creating solutions that make a difference.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly explore new technologies and approaches to solve complex problems.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client relationships.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Our team"
          title="Meet the people"
          titleAccent="behind RyphTech"
          description="A talented group of innovators, creators, and problem-solvers dedicated to transforming businesses through technology."
        />

        {/* Founders */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16 lg:mb-24">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                Founders
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
                The visionaries driving innovation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {founders.map((founder) => (
                <div key={founder.name} className="bg-background p-8 lg:p-12">
                  <div className="relative w-full aspect-[4/5] max-w-sm mb-8 overflow-hidden bg-muted">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={`Portrait of ${founder.name}`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  <h3 className="text-3xl font-display mb-1">{founder.name}</h3>
                  <p className="text-sm font-mono text-muted-foreground mb-6">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{founder.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm border border-foreground/15 rounded-full text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-5">
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${founder.name} on GitHub`}
                    >
                      <Github className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Email ${founder.name}`}
                    >
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a
                      href={founder.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${founder.name}'s website`}
                    >
                      <Globe className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
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
                Team values
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
                What we stand for
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

        <HomeCta />
      </main>
      <Footer />
    </div>
  );
}
