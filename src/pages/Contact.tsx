import { Mail, Instagram, Twitter, Music2, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import heroMountain from "@/assets/hero-mountain.jpg";
const channels = [
    { name: "General", handle: "hello@yankee.app", href: "mailto:hello@yankee.app", icon: Mail },
    { name: "Press", handle: "press@yankee.app", href: "mailto:press@yankee.app", icon: Mail },
    { name: "Partnerships", handle: "partners@yankee.app", href: "mailto:partners@yankee.app", icon: Mail },
    { name: "Jobs", handle: "jobs@yankee.app", href: "mailto:jobs@yankee.app", icon: Mail },
    { name: "Instagram", handle: "@yankeeapp", href: "https://instagram.com/yankeeapp", icon: Instagram },
    { name: "X / Twitter", handle: "@yankeeapp", href: "https://x.com/yankeeapp", icon: Twitter },
    { name: "TikTok", handle: "@yankeeapp", href: "https://tiktok.com/@yankeeapp", icon: Music2 },
];
const helps = [
    { t: "Partnerships", d: "Brands, creators or Crowds interested in collaborating with us." },
    { t: "Press", d: "Interviews, coverage requests or background on the company." },
    { t: "Support", d: "Trouble with your account, a bug, or a moderation question." },
    { t: "Careers", d: "Engineering, design and community roles. We&apos;re hiring." },
];
const Contact = () => (<Layout>
    <section className="relative -mt-24 pt-32 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMountain} alt="" className="w-full h-full object-cover object-bottom"/>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"/>
      </div>
      <div className="relative max-w-[1000px] mx-auto px-6 text-center">
        <SpeechBubble tail="none" className="text-[13px]"><PillTag>contact</PillTag>we read everything</SpeechBubble>
        <h1 className="mt-8 text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-[0.98]">
          Get in touch.{" "}
          <span className="font-serif-display italic">Directly.</span>
        </h1>
        <p className="mt-6 text-[17px] text-foreground/70 max-w-xl mx-auto leading-relaxed">
          No forms, no ticket queues. Every email below reaches a real person on the Yankee team.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24 border-t border-border/40">
      <div className="max-w-[900px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-8">our channels</p>
        </AnimatedSection>
        <div className="rounded-[2rem] border border-border bg-card divide-y divide-border overflow-hidden">
          {channels.map((c, i) => {
        const Icon = c.icon;
        return (<AnimatedSection key={c.name} delay={i * 0.03}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center justify-between gap-4 p-6 md:p-7 hover:bg-muted/40 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center">
                      <Icon size={16} className="text-foreground/70"/>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">{c.name}</p>
                      <p className="text-[13px] text-muted-foreground">{c.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors"/>
                </a>
              </AnimatedSection>);
    })}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">how we can help</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight max-w-xl leading-[1.02]">
            Reach the right <span className="font-serif-display italic">team.</span>
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {helps.map((h, i) => (<AnimatedSection key={h.t} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-7">
                <h3 className="text-[16px] font-semibold text-foreground">{h.t}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{h.d}</p>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-4">
        <AnimatedSection>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">office</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Global · remote-first</h3>
            <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">The Yankee team is distributed across three continents. We publish our current locations in the Careers listings.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.06}>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">response time</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Under 48 hours</h3>
            <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">Every email is triaged the same day it arrives. If it&apos;s urgent (a moderation issue or a security report), we escalate immediately.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default Contact;
