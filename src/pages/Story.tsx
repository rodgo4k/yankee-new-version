import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import teamHero from "@/assets/team-hero.jpg";
import rememberOffice from "@/assets/remember-office.jpg";
import heroMeadow from "@/assets/hero-meadow.jpg";
import heroMountain from "@/assets/hero-mountain.jpg";
import heroPainterly from "@/assets/hero-painterly.jpg";
import heroFolkMountains from "@/assets/hero-folk-mountains.jpg";
import homeFeed from "@/assets/yankee/home-feed.png";
const principles = [
    {
        title: "your feed, in order",
        desc: "Chronological by default. No hidden reshuffling, no surprise resurfacing.",
        bubble: "newest first, always",
    },
    {
        title: "every post reaches everyone",
        desc: "When you follow someone, you see every post. The follow button actually means something.",
        bubble: "no shadow banning",
    },
    {
        title: "crowds stay small",
        desc: "Groups have a ceiling. When they get too big, they split before they become forums.",
        bubble: "capped by design",
    },
    {
        title: "memory is private",
        desc: "Your saved posts, notes, and preferences are encrypted and never used to train models.",
        bubble: "encrypted, yours alone",
    },
    {
        title: "notifications you control",
        desc: "No bait, no streaks, no alerts designed to pull you back in.",
        bubble: "only pings you asked for",
    },
];
const teamRoles = [
    "design",
    "engineering",
    "privacy",
    "writing",
    "community",
];
const Polaroid = ({ src, alt, caption, rotate = 0, }: {
    src: string;
    alt: string;
    caption: string;
    rotate?: number;
}) => (<motion.div className="rounded-[1.2rem] border border-border bg-background p-3 pb-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]" style={{ rotate }} whileHover={{ y: -8, rotate: 0, scale: 1.02 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
    <div className="rounded-[0.8rem] overflow-hidden aspect-[4/3] bg-muted">
      <img src={src} alt={alt} className="w-full h-full object-cover"/>
    </div>
    <p className="mt-4 text-center text-[13px] text-muted-foreground font-medium">
      {caption}
    </p>
  </motion.div>);
const PrincipleCard = ({ title, desc, bubble, }: {
    title: string;
    desc: string;
    bubble: string;
}) => (<motion.div className="h-full rounded-[2rem] border border-border bg-card p-6 flex flex-col gap-5 shadow-sm" whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
    <div className="flex justify-start">
      <span className="inline-block max-w-[90%] px-4 py-2.5 text-[14px] leading-snug rounded-[1.4rem] bg-folk text-folk-foreground rounded-bl-md">
        {bubble}
      </span>
    </div>
    <div className="mt-auto">
      <h3 className="text-xl font-semibold text-foreground leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>);
const Story = () => (<Layout>
    <div className="relative overflow-hidden">

      <div className="absolute inset-0 dotted-bg opacity-[0.12] pointer-events-none"/>

      <div className="relative">

        <section className="pt-12 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_1.05fr] gap-12 md:gap-16 items-center">
              <AnimatedSection>
                <div className="max-w-xl">
                  <SpeechBubble tail="none" className="text-[13px]">
                    <PillTag>story</PillTag>about us
                  </SpeechBubble>
                  <h1 className="mt-8 text-5xl md:text-7xl lg:text-[6rem] font-semibold text-foreground tracking-[-0.02em] leading-[0.95]">
                    the story behind{" "}
                    <span className="font-serif-display italic">Yankee</span>
                  </h1>
                  <p className="mt-8 text-[17px] text-foreground/70 leading-relaxed max-w-md">
                    We are building a social network that treats people like people. Chronological, finite, and private by default.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1} direction="right">
                <div className="relative flex justify-center md:justify-end">
                  <Polaroid src={teamHero} alt="The Yankee team" caption="the team, early days" rotate={2}/>
                  <div className="hidden md:block absolute -bottom-6 -left-8">
                    <SpeechBubble tail="tr" size="sm" className="text-[13px]">
                      meet the team
                    </SpeechBubble>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 border-t border-border/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_1fr] gap-14 md:gap-20 items-center">
              <AnimatedSection>
                <div className="max-w-lg">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                    why we exist
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
                    we want a feed to feel like{" "}
                    <span className="font-serif-display italic">friends</span>, not a product
                  </h2>
                  <div className="mt-8 space-y-5 text-[16px] text-foreground/75 leading-relaxed">
                    <p>
                      Most feeds today are built to keep you scrolling, not to keep you connected. They hide posts from the people you follow, surface stuff you never asked for, and call it engagement.
                    </p>
                    <p>
                      We started Yankee because we missed the early internet: a feed that was just your friends, in order, and a notification meant someone actually wanted to talk to you.
                    </p>
                    <p>
                      So we are building the quietest social app we can. No algorithmic ranking. No infinite scroll. No growth hacking your attention. Just a place to post and be seen.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1} direction="right">
                <div className="flex justify-center md:justify-end">
                  <motion.img src={homeFeed} alt="Yankee feed on a phone" className="w-full max-w-[280px] rounded-[2.5rem] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] border border-border" whileHover={{ y: -10 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}/>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 border-t border-border/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                  five things we won't compromise on
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
                  this is <span className="font-serif-display italic">Yankee</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.slice(0, 3).map((p, i) => (<AnimatedSection key={p.title} delay={i * 0.06}>
                  <PrincipleCard {...p}/>
                </AnimatedSection>))}
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4 max-w-[66%] mx-auto">
              {principles.slice(3).map((p, i) => (<AnimatedSection key={p.title} delay={(i + 3) * 0.06}>
                  <PrincipleCard {...p}/>
                </AnimatedSection>))}
            </div>
          </div>
        </section>

        
        <section className="py-24 md:py-32 border-t border-border/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                  the people we are building for
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
                  this energy
                </h2>
                <p className="mt-4 text-[16px] text-foreground/70">people, not screens</p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 items-center">
              <AnimatedSection delay={0}>
                <Polaroid src={rememberOffice} alt="People working in a bright office" caption="a group that actually shows up" rotate={-2}/>
              </AnimatedSection>
              <AnimatedSection delay={0.08}>
                <Polaroid src={heroPainterly} alt="Warm painterly mountains" caption="a weekend with the people you choose" rotate={1}/>
              </AnimatedSection>
              <AnimatedSection delay={0.16}>
                <Polaroid src={heroMeadow} alt="Golden meadow at sunset" caption="time away from the timeline" rotate={-1}/>
              </AnimatedSection>
            </div>
          </div>
        </section>

        
        <section className="py-24 md:py-32 border-t border-border/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                  life at Yankee
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
                  how we build
                </h2>
                <p className="mt-4 text-[16px] text-foreground/70">
                  Small team, big opinions, shipped weekly.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection delay={0}>
                <Polaroid src={heroMountain} alt="Mountain range at dusk" caption="a quiet office, a loud whiteboard" rotate={-1}/>
              </AnimatedSection>
              <AnimatedSection delay={0.08}>
                <Polaroid src={heroFolkMountains} alt="Folk mountains at sunset" caption="the details live on paper first" rotate={2}/>
              </AnimatedSection>
              <AnimatedSection delay={0.16}>
                <Polaroid src={teamHero} alt="Team debate" caption="everyone talks to users" rotate={-2}/>
              </AnimatedSection>
            </div>
          </div>
        </section>

        
        <section className="py-24 md:py-32 border-t border-border/40">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
                the team behind <span className="font-serif-display italic">Yankee</span>
              </h2>
              <p className="mt-6 text-[16px] text-foreground/75 leading-relaxed max-w-lg mx-auto">
                A handful of designers, engineers, and writers who think social software should feel social. We are remote first, small by choice, and always hiring people who care about the same things.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {teamRoles.map((role) => (<span key={role} className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card text-[13px] font-medium text-foreground">
                    {role}
                  </span>))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        
        <section className="py-24 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="rounded-[2.5rem] border border-border bg-card px-8 md:px-16 py-20 md:py-28 text-center">
                <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
                  want to build Yankee with us?
                </h2>
                <p className="mt-6 text-[16px] text-foreground/75 max-w-md mx-auto">
                  We are a small team who care a lot. If that sounds like you, come say hi.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-90 transition-opacity">
                    see open roles <ArrowRight size={14}/>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground border border-border text-[14px] font-medium hover:bg-muted transition-colors">
                    just say hi
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-[13px] text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"/>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
                  </span>
                  Yankee is online
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  </Layout>);
export default Story;
