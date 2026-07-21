import { ArrowRight, ArrowUpRight, Globe2, Users, Timer, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import cafeFriends from "@/assets/cafe-friends.jpg";
import smallTeamCollab from "@/assets/small-team-collab.jpg";
import rememberOffice from "@/assets/remember-office.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Globe2,
    bubble: "deep work over meetings",
    title: "remote, async first",
    desc: "one synchronous hour a day, at most. time zones are a feature, not a bug.",
  },
  {
    icon: Users,
    bubble: "own it end to end",
    title: "small teams, big scope",
    desc: "you'll own product areas from spec to on-call. no ticket farms.",
  },
  {
    icon: Timer,
    bubble: "cycles, not sprints",
    title: "ship in six weeks",
    desc: "everyone gets a real cooldown between cycles. burnout is not a badge.",
  },
  {
    icon: Eye,
    bubble: "bands are public",
    title: "compensation is open",
    desc: "salary bands are transparent inside and outside the company. no guessing.",
  },
];

const roles = [
  {
    title: "senior ios engineer",
    tag: "engineering",
    loc: "remote · americas / europe",
    desc: "swift, swiftui, deep experience with real-time and offline sync.",
    href: "mailto:jobs@yankee.app?subject=Senior%20iOS%20Engineer",
  },
  {
    title: "product designer",
    tag: "design",
    loc: "remote · worldwide",
    desc: "systems, motion, taste. you draw on paper before you draw in figma.",
    href: "mailto:jobs@yankee.app?subject=Product%20Designer",
  },
  {
    title: "backend engineer, feed",
    tag: "engineering",
    loc: "remote · americas / europe",
    desc: "go / rust. you've built ranking-free timelines at scale before.",
    href: "mailto:jobs@yankee.app?subject=Backend%20Engineer%20Feed",
  },
];

const perks = [
  { n: "01", t: "public salary bands" },
  { n: "02", t: "six-week cycles" },
  { n: "03", t: "fridays protected" },
  { n: "04", t: "equipment stipend" },
];

const Careers = () => {
  const [front, setFront] = useState<"main" | "side" | null>(null);

  return (
  <Layout>
    <section className="relative -mt-24 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-3.5 py-1.5 text-[12px] lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-folk-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-folk-success" />
              </span>
              hiring · 3 open roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.5rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[14ch] mx-auto lg:mx-0"
            >
              come build what you{" "}
              <span className="font-serif-display italic font-medium">wish existed.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              a small, remote-first team across a handful of time zones. we ship carefully, argue kindly, and take fridays seriously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#open-roles"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                  folk-cta
                  shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                  hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
              >
                see open roles <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:jobs@yankee.app"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
              >
                jobs@yankee.app
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[420px] pb-10 md:pb-12">
              <motion.div
                initial={{ opacity: 0, y: 28, rotate: -2 }}
                animate={
                  front === "main"
                    ? {
                        opacity: 1,
                        y: -14,
                        x: 6,
                        rotate: 0,
                        scale: 1.04,
                        zIndex: 30,
                        boxShadow: "10px 14px 0 0 hsl(var(--foreground))",
                      }
                    : front === "side"
                      ? {
                          opacity: 1,
                          y: 10,
                          x: -4,
                          rotate: -3,
                          scale: 0.97,
                          zIndex: 10,
                          boxShadow: "4px 4px 0 0 hsl(var(--foreground))",
                        }
                      : {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          rotate: -1.5,
                          scale: 1,
                          zIndex: 10,
                          boxShadow: "6px 6px 0 0 hsl(var(--foreground))",
                        }
                }
                transition={{ type: "spring", stiffness: 320, damping: 24, mass: 0.85 }}
                onHoverStart={() => setFront("main")}
                onHoverEnd={() => setFront(null)}
                className="relative rounded-[1.5rem] border-2 border-foreground bg-card p-3 pb-5 cursor-pointer"
                style={{ zIndex: front === "main" ? 30 : 10 }}
              >
                <div className="rounded-[1.1rem] overflow-hidden aspect-[5/4] bg-muted">
                  <img src={cafeFriends} alt="The Yankee team" className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-center text-[13px] text-foreground/70 lowercase">the people you&apos;d work with</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 4 }}
                animate={
                  front === "side"
                    ? {
                        opacity: 1,
                        x: -10,
                        y: -18,
                        rotate: -2,
                        scale: 1.08,
                        zIndex: 30,
                        boxShadow: "8px 10px 0 0 hsl(var(--foreground))",
                      }
                    : front === "main"
                      ? {
                          opacity: 1,
                          x: 12,
                          y: 14,
                          rotate: 6,
                          scale: 0.94,
                          zIndex: 10,
                          boxShadow: "3px 3px 0 0 hsl(var(--foreground))",
                        }
                      : {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 3,
                          scale: 1,
                          zIndex: 20,
                          boxShadow: "4px 4px 0 0 hsl(var(--foreground))",
                        }
                }
                transition={{ type: "spring", stiffness: 320, damping: 24, mass: 0.85 }}
                onHoverStart={() => setFront("side")}
                onHoverEnd={() => setFront(null)}
                className="absolute -right-2 md:-right-8 -bottom-2 md:-bottom-4 w-[42%] rounded-[1.15rem] border-2 border-foreground bg-card p-2 pb-3 cursor-pointer"
                style={{ zIndex: front === "side" ? 30 : front === "main" ? 10 : 20 }}
              >
                <div className="rounded-[0.85rem] overflow-hidden aspect-square bg-muted">
                  <img src={smallTeamCollab} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -left-1 md:-left-4 top-[18%] z-40 max-w-[72%] pointer-events-none"
              >
                <div className="rounded-2xl rounded-bl-md bg-folk-bubble px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-folk-bubble-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                  remote first · small by choice
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-16 md:py-20 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
          {perks.map((p, i) => (
            <AnimatedSection key={p.t} delay={i * 0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-card px-4 py-2 text-[13px] lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                <span className="font-serif-display italic text-foreground/45">{p.n}</span>
                <span className="font-medium text-foreground">{p.t}</span>
              </span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how we work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            four <span className="font-serif-display italic font-medium">non-negotiables</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full rounded-[1.5rem] border-2 border-foreground bg-card p-6 flex flex-col gap-5 shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                >
                  <div className="flex justify-start">
                    <span className="inline-block max-w-[95%] px-3.5 py-2 text-[13px] leading-snug lowercase rounded-2xl rounded-bl-md bg-folk-bubble text-white shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                      {p.bubble}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="w-9 h-9 rounded-xl border-2 border-foreground bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-[16px] font-semibold lowercase tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{p.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    <section id="open-roles" className="relative py-20 md:py-28 dotted-bg scroll-mt-24">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">open roles</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            currently <span className="font-serif-display italic font-medium">hiring</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">click a role to email us. no forms, no ats maze.</p>
        </AnimatedSection>

        <div className="space-y-4">
          {roles.map((role, i) => (
            <AnimatedSection key={role.title} delay={i * 0.07}>
              <a
                href={role.href}
                className="group block rounded-[1.5rem] border-2 border-foreground bg-card p-5 md:p-6 shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_hsl(var(--foreground))] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex rounded-full border-2 border-foreground bg-folk-panel px-2.5 py-0.5 text-[11px] font-medium lowercase">
                        {role.tag}
                      </span>
                      <span className="text-[12px] text-muted-foreground lowercase">{role.loc}</span>
                    </div>
                    <h3 className="text-[18px] md:text-[20px] font-semibold lowercase tracking-tight group-hover:underline underline-offset-4 decoration-2">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed lowercase max-w-xl">
                      {role.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 self-start shrink-0 rounded-full border-2 border-foreground bg-primary text-primary-foreground px-4 py-2 text-[13px] font-medium lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                    apply <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="rounded-[1.75rem] border-2 border-foreground bg-card overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))]">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-5 relative min-h-[200px] border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                <img
                  src={rememberOffice}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 p-7 md:p-10 flex flex-col justify-center">
                <p className="font-serif-display italic text-[1.2rem] text-foreground/50 lowercase">not now</p>
                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-[1.05] lowercase">
                  nothing here for you{" "}
                  <span className="font-serif-display italic font-medium">today?</span>
                </h2>
                <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
                  write us anyway. we keep a shortlist and reach out first when a role opens.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:jobs@yankee.app?subject=General%20interest"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground bg-folk-panel text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                  >
                    send a note <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            apply, or{" "}
            <span className="font-serif-display italic font-medium">just say hello.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto">
            every email reaches a real person. we reply within a few days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:jobs@yankee.app"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                folk-cta
                shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
            >
              get in touch <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/story"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
            >
              read our story
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
  );
};

export default Careers;
