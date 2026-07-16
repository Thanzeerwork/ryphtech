"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/site/navigation";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "ryphtech@gmail.com",
    href: "mailto:ryphtech@gmail.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 9497051820",
    href: "tel:+919497051820",
    description: "Mon-Sat, 9am to 7pm IST",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Kollam, Kerala, India",
    href: "https://maps.google.com/?q=Kollam,Kerala,India",
    description: "Available for on-site meetings",
  },
];

const services = [
  "Web Development",
  "App Development",
  "Machine Learning",
  "Poster Designing",
  "Cloud Solutions",
  "Other",
];

const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most projects take 2-8 weeks depending on complexity. We'll provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We offer 24/7 support and maintenance plans to keep your solutions running smoothly after launch.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely. We regularly work with existing projects for feature additions, optimizations, and migrations.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React, Next.js, React Native, Flutter, Python, TensorFlow, and more. We choose the best tools for each project.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          eyebrow="Get in touch"
          title="Let's build something"
          titleAccent="amazing together"
          description="Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours."
        />

        {/* Contact Info Cards */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("https") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("https")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group bg-background p-8 lg:p-12 hover:bg-foreground/[0.02] transition-colors"
                >
                  <info.icon
                    className="w-7 h-7 mb-6"
                    strokeWidth={1.25}
                  />
                  <h3 className="text-lg font-medium mb-1 flex items-center gap-2">
                    {info.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-xl font-display mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
              {/* Form */}
              <div>
                <div className="mb-12">
                  <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                    <span className="w-8 h-px bg-foreground/30" />
                    Send a message
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
                    Tell us about your project
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Fill out the form below and we&apos;ll get back to you with
                    a detailed proposal.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="border border-foreground/10 p-12 text-center">
                    <CheckCircle
                      className="w-12 h-12 mx-auto mb-6 text-foreground"
                      strokeWidth={1}
                    />
                    <h3 className="text-3xl font-display mb-4">
                      Message sent!
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                      Thank you for reaching out. We&apos;ll review your project
                      details and get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          budget: "",
                          message: "",
                        });
                      }}
                      variant="outline"
                      className="rounded-full px-8 h-12 border-foreground/20"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-mono text-muted-foreground mb-3"
                        >
                          Your name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-mono text-muted-foreground mb-3"
                        >
                          Email address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-mono text-muted-foreground mb-3"
                        >
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg focus:border-foreground focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-mono text-muted-foreground mb-3"
                        >
                          Service needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg focus:border-foreground focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-mono text-muted-foreground mb-4">
                        Project budget
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {budgetRanges.map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() =>
                              setFormState((prev) => ({ ...prev, budget }))
                            }
                            className={`px-4 py-2 text-sm border rounded-full transition-all ${
                              formState.budget === budget
                                ? "bg-foreground text-background border-foreground"
                                : "border-foreground/20 text-muted-foreground hover:border-foreground/40"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-mono text-muted-foreground mb-3"
                      >
                        Project details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg focus:border-foreground focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/40"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 text-base rounded-full group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send message
                          <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-12">
                {/* Quick contact */}
                <div className="border border-foreground/10 p-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-3">
                    <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                    Prefer a quick chat?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Reach out directly on WhatsApp for a faster response. We&apos;re
                    usually online during business hours.
                  </p>
                  <a
                    href="https://wa.me/919497051820?text=Hi%20RyphTech!%20I%27m%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/70 transition-colors group"
                  >
                    Chat on WhatsApp
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Response time */}
                <div className="border border-foreground/10 p-8">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-3">
                    <Clock className="w-5 h-5" strokeWidth={1.5} />
                    What to expect
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Response within 24 hours",
                      "Free initial consultation",
                      "Detailed project proposal",
                      "No-obligation quote",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle
                          className="w-4 h-4 shrink-0"
                          strokeWidth={1.5}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-sm font-mono text-muted-foreground mb-4">
                    Follow us
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "LinkedIn", href: "https://linkedin.com/company/ryphtech" },
                      { name: "GitHub", href: "https://github.com/ryphtech" },
                      { name: "Instagram", href: "https://instagram.com/ryphtech" },
                    ].map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-foreground/30" />
                FAQ
              </span>
              <h2 className="text-4xl lg:text-6xl font-display tracking-tight max-w-2xl text-balance">
                Common questions
              </h2>
            </div>

            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className={`grid md:grid-cols-[1fr_1fr] gap-4 md:gap-12 py-10 ${
                    i > 0 ? "border-t border-foreground/10" : ""
                  }`}
                >
                  <h3 className="text-xl font-display">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
