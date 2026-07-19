import { ArrowRight, Eye, Users, Download, Ban, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import CreatorHeroScene from "@/components/home/CreatorHeroScene";
import rememberOffice from "@/assets/remember-office.jpg";
import heroParty from "@/assets/hero-party.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Eye,
    title: "every follower, every time",
    text: "what you post reaches everyone who follows you. no quiet demotion, no auction for your own audience.",
  },
  {
    icon: Ban,
    title: "no algorithm tax",
    text: "chronological delivery. yankee does not bury your work to sell boosts back to you.",
  },
  {
    icon: Users,
    title: "crowds that stay human",
    text: "grow rooms that cap and split on purpose. conversations stay grounded, not stadium-sized.",
  },
  {
    icon: Download,
    title: "you own the archive",
    text: "export posts, replies and metrics any time. leave with your work if you ever need to.",
  },
];

const blocks = [
  {
    kicker: "complete reach",
    title: (
      <>
        post once. <span className="font-serif-display italic font-medium">reach every follower.</span>
      </>
    ),
    body: "your people chose to follow you. yankee makes sure they see what you make, without ranking games in the middle.",
    chat: [
      { from: "them" as const, text: "your last post reached 98% of followers." },
      { from: "you" as const, text: "that feels like the old internet." },
    ],
  },
  {
    kicker: "honest numbers",
    title: (
      <>
        views, saves, replies. <span className="font-serif-display italic font-medium">nothing vanity.</span>
      </>
    ),
    body: "simple delivery stats you can trust. no dopamine graphs, no mystery engagement score.",
    chat: [
      { from: "them" as const, text: "248 reached · 61 opened · 9 replies" },
      { from: "you" as const, text: "that's the real number. good." },
    ],
  },
  {
    kicker: "portable work",
    title: (
      <>
        your archive, <span className="font-serif-display italic font-medium">always exportable</span>
      </>
    ),
    body: "download every post, metric and reply. your content is yours, not locked inside rules that change overnight.",
    chat: [
      { from: "you" as const, text: "can i download everything?" },
      { from: "them" as const, text: "yes. markdown, csv or media zip." },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "set up your profile",
    d: "claim your name, pin a few posts, and invite the people who already care about your work.",
  },
  {
    n: "02",
    t: "post to your people",
    d: "ship to all followers, a crowd, or close friends. one composer, clear audience every time.",
  },
  {
    n: "03",
    t: "see real delivery",
    d: "watch reached, opened and replies without vanity math. then keep making the next thing.",
  },
];

const faqs = [
  {
    q: "Will my followers actually see my posts?",
    a: "Yes. Yankee is chronological. Every post you publish appears in the feed of everyone who follows you, in the order you posted it. There is no engagement ranking that quietly hides you.",
  },
  {
    q: "Is this the same as posting to Instagram or X?",
    a: "No. Yankee does not publish to other social networks. For Creators is about building and reaching your audience inside Yankee — complete delivery, Crowds, and an archive you own.",
  },
  {
    q: "Can I schedule posts?",
    a: "Yes. Set the date, time and timezone. Yankee drafts it, queues it, and publishes it for you.",
  },
  {
    q: "What analytics does Yankee show?",
    a: "Reached, opened, replies, saves and shares. Simple, honest numbers without engagement scores or dopamine graphs.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Free forever for posting, chat, Crowds and basic analytics. Yankee Pro is $8/month for scheduling, memory and full audience exports. Cancel any time.",
  },
  {
    q: "Who owns my content?",
    a: "You do. Yankee stores your library so you can export or leave any time. We do not train models on your posts or sell your audience data.",
  },
];

const ForCreators = () => (
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
              className="flex justify-center lg:justify-start"
            >
              <PromoPill tag="for creators" text="reach every follower · every time" to="/reach" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[13ch] mx-auto lg:mx-0"
            >
              reach your audience,{" "}
              <span className="font-serif-display italic font-medium">without the algorithm tax.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              post once on yankee and every person who follows you actually gets it. no auction, no shadow ban, no fighting a feed to be seen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white lowercase tracking-tight
                  bg-[radial-gradient(120%_120%_at_50%_20%,#7EB6FF_0%,#3B82F6_45%,#2563EB_100%)]
                  shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                  hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
              >
                get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
              >
                see how it works
              </a>
            </motion.div>
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">free forever · no card needed</p>
          </div>

          <div className="lg:col-span-6">
            <CreatorHeroScene />
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the deal</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            built for people who <span className="font-serif-display italic font-medium">make things</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full rounded-[1.5rem] border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                >
                  <div className="w-10 h-10 rounded-xl border-2 border-foreground bg-primary text-primary-foreground flex items-center justify-center mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[15px] font-semibold lowercase tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed lowercase">{p.text}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">what it does</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            what yankee does{" "}
            <span className="font-serif-display italic font-medium">for creators</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-4">
          {blocks.map((b, i) => (
            <AnimatedSection key={b.kicker} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="h-full rounded-[1.5rem] border-2 border-foreground bg-card p-6 md:p-7 flex flex-col gap-5 shadow-[4px_4px_0_0_hsl(var(--foreground))]"
              >
                <p className="font-serif-display italic text-[1.05rem] text-foreground/45 lowercase leading-none">
                  {b.kicker}
                </p>
                <h3 className="text-[22px] md:text-[24px] font-semibold text-foreground leading-[1.08] tracking-tight lowercase">
                  {b.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed lowercase">{b.body}</p>
                <div className="mt-auto flex flex-col gap-2.5 pt-2">
                  {b.chat.map((m, j) => (
                    <div key={j} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                      <span
                        className={`inline-block max-w-[90%] px-3.5 py-2 text-[12.5px] md:text-[13px] leading-snug lowercase rounded-2xl ${
                          m.from === "you"
                            ? "bg-[#5B9CFF] text-white rounded-br-md shadow-[3px_3px_0_0_hsl(var(--foreground))]"
                            : "bg-[#E8E6E1] text-foreground rounded-bl-md border-2 border-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))]"
                        }`}
                      >
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section id="how" className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps. <span className="font-serif-display italic font-medium">then you ship.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="h-full rounded-[1.5rem] border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_hsl(var(--foreground))] flex flex-col"
              >
                <span className="font-serif-display italic text-[1.5rem] text-foreground/35 leading-none">{s.n}</span>
                <h3 className="mt-5 text-[17px] font-semibold lowercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{s.d}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="rounded-[1.75rem] border-2 border-foreground bg-card overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))]">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-center">
                <span className="inline-flex self-start items-center gap-2 rounded-full border-2 border-foreground px-3 py-1.5 text-[11px] lowercase">
                  <Sparkles size={12} />
                  for people who post
                </span>
                <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
                  your audience followed you.{" "}
                  <span className="font-serif-display italic font-medium">let them actually see you.</span>
                </h2>
                <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg">
                  yankee was built so a quiet post still reaches the room. no fighting an algorithm for the right to be seen.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/reach"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border-2 border-foreground/90 bg-background text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                  >
                    learn about reach
                  </Link>
                  <Link
                    to="/communities"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                  >
                    explore crowds
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full border-t-2 lg:border-t-0 lg:border-l-2 border-foreground">
                <img
                  src={rememberOffice}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {["complete reach", "honest stats", "portable archive"].map((label) => (
                    <span
                      key={label}
                      className="px-2.5 py-1 rounded-full border-2 border-foreground bg-card text-[11px] lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            frequently <span className="font-serif-display italic font-medium">asked</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about reach, analytics, ownership and pricing.
          </p>
        </AnimatedSection>
        <div className="mt-10 md:mt-12">
          <FAQ items={faqs} />
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif-display italic text-[1.35rem] md:text-[1.6rem] text-foreground/55 lowercase leading-none"
              >
                yankee
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                className="mt-4 md:mt-5 text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.95] max-w-[12ch]"
              >
                ready to own{" "}
                <span className="font-serif-display italic font-medium">your audience?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                free forever for the basics. pro at $8/month. cancel any time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="mt-8 md:mt-10 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[14px] md:text-[15px] font-semibold text-white lowercase tracking-tight
                    bg-[radial-gradient(120%_120%_at_50%_20%,#7EB6FF_0%,#3B82F6_45%,#2563EB_100%)]
                    shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                    hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                >
                  get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                >
                  see all features
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 28, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12, ease }}
                  className="ml-auto w-[92%] rounded-[1.5rem] border-2 border-foreground bg-card p-4 shadow-[6px_6px_0_0_hsl(var(--foreground))]"
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                    <img
                      src={heroParty}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">just posted · listening party</span>
                    <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      seen by all
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -18, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="relative z-10 -mt-5 mr-auto max-w-[85%]"
                >
                  <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-[#E8E6E1] px-4 py-3 text-[13px] leading-snug lowercase shadow-[4px_4px_0_0_hsl(var(--foreground))]">
                    no ranking. every friend got it.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default ForCreators;
