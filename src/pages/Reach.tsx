import { ArrowRight, Eye, Ban, Clock, Bell, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import ReachHeroScene from "@/components/home/ReachHeroScene";
import homeFeed from "@/assets/yankee/home-feed.png";
import heroParty from "@/assets/hero-party.jpg";
import { blockCard } from "@/lib/yankeeBlock";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Eye,
    title: "every follower, every time",
    text: "what you post reaches everyone who follows you. no hidden suppression, no quiet demotion.",
  },
  {
    icon: Ban,
    title: "no shadow bans",
    text: "yankee does not bury posts based on engagement. chronological means chronological.",
  },
  {
    icon: Clock,
    title: "in the order you posted",
    text: "your people see it when it lands, in the order it landed. nothing reshuffled overnight.",
  },
  {
    icon: Bell,
    title: "alerts they asked for",
    text: "close friends and people who opted in get a ping. everyone else finds it in the feed.",
  },
];

const blocks = [
  {
    kicker: "complete reach",
    title: (
      <>
        post once. <span className="font-serif-display italic font-medium">it actually lands.</span>
      </>
    ),
    body: "no opaque ranking deciding who sees you. every account that follows you gets the post in their feed.",
    chat: [
      { from: "you" as const, text: "did everyone get the trail dump?" },
      { from: "them" as const, text: "yes. 248 followers. all of them." },
    ],
  },
  {
    kicker: "choose the room",
    title: (
      <>
        share wide, or <span className="font-serif-display italic font-medium">keep it close.</span>
      </>
    ),
    body: "post to all followers, a crowd, or close friends. same calm composer, clear audience every time.",
    chat: [
      { from: "you" as const, text: "close friends only for this one" },
      { from: "them" as const, text: "saved. 12 people. nobody else." },
    ],
  },
  {
    kicker: "honest delivery",
    title: (
      <>
        see who got it. <span className="font-serif-display italic font-medium">not vanity math.</span>
      </>
    ),
    body: "delivery is simple: reached, opened, replied. no reshuffled reach graphs, no mystery percentages.",
    chat: [
      { from: "them" as const, text: "248 reached · 61 opened · 9 replies" },
      { from: "you" as const, text: "that's the real number. good." },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "write the post",
    d: "open the composer, drop the photo, the caption, the clip. yankee holds the draft on your device.",
  },
  {
    n: "02",
    t: "pick who sees it",
    d: "all followers, a crowd, or close friends. one clear audience, no accidental leaks.",
  },
  {
    n: "03",
    t: "ship it",
    d: "it lands in every chosen feed in order. no algorithm deciding who is worthy of seeing you.",
  },
];

const faqs = [
  {
    q: "Does every follower really see my posts?",
    a: "Yes. Yankee is chronological. Every post you publish appears in the feed of everyone who follows you, in the order you posted it. There is no engagement ranking that quietly hides you.",
  },
  {
    q: "Can I post to only some people?",
    a: "Yes. Choose all followers, a specific Crowd, or close friends before you ship. The audience is always visible in the composer so there are no surprises.",
  },
  {
    q: "What about shadow bans?",
    a: "Yankee does not shadow ban. We do not demote posts based on how they perform, and we do not run a secret reach penalty. If someone follows you, they get the post.",
  },
  {
    q: "Will my post get reshuffled later?",
    a: "No. Once it lands, it stays in chronological order. Nothing resurfaces out of nowhere to farm attention.",
  },
  {
    q: "How do notifications work with reach?",
    a: "People who asked for alerts — close friends, mentions, Crowds they care about — can get a ping. Everyone else finds the post when they open their feed.",
  },
  {
    q: "Is this different from cross posting to Instagram or X?",
    a: "Yes. Yankee does not publish to other social networks. Reach is about what happens inside Yankee: one post, complete delivery to the people who chose to follow you.",
  },
];

const Reach = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <PromoPill tag="reach" text="every follower · every time" to="/features" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[11ch] mx-auto lg:mx-0"
            >
              post once,{" "}
              <span className="font-serif-display italic font-medium">reach everyone.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              no opaque ranking. every post you publish reaches every person who follows you, in the order you posted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
              >
                get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#how"
                className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
              >
                see how it works
              </a>
            </motion.div>
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">chronological · free · no switching</p>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
            >
              <ReachHeroScene />
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the promise</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            complete reach. <span className="font-serif-display italic font-medium">no tricks.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <div className={blockCard(i, "p-6")}>
                  <div className="yankee-block__icon w-10 h-10 rounded-full flex items-center justify-center mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[15px] font-semibold lowercase tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[13px] yankee-block__muted leading-relaxed lowercase">{p.text}</p>
                </div>
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
            <span className="font-serif-display italic font-medium">when you post</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-4">
          {blocks.map((b, i) => (
            <AnimatedSection key={b.kicker} delay={i * 0.08}>
              <div className={blockCard(i, "p-6 md:p-7 flex flex-col gap-5")}>
                <p className="font-serif-display italic text-[1.05rem] yankee-block__kicker lowercase leading-none">
                  {b.kicker}
                </p>
                <h3 className="text-[22px] md:text-[24px] font-semibold leading-[1.08] tracking-tight lowercase">
                  {b.title}
                </h3>
                <p className="text-[13px] md:text-[14px] yankee-block__muted leading-relaxed lowercase">{b.body}</p>
                <div className="mt-auto flex flex-col gap-2.5 pt-2">
                  {b.chat.map((m, j) => (
                    <div key={j} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                      <span
                        className={`yankee-surface inline-block max-w-[90%] px-3.5 py-2 text-[12.5px] md:text-[13px] leading-snug lowercase rounded-2xl ${ m.from === "you" ? "bg-folk-bubble text-white rounded-br-md " : "bg-folk-bubble-soft text-foreground rounded-bl-md " }`}
                      >
                        {m.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
            three steps. <span className="font-serif-display italic font-medium">then it lands.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.08}>
              <div className={blockCard(i, "p-6 flex flex-col")}>
                <span className="font-serif-display italic text-[1.5rem] yankee-block__kicker leading-none">{s.n}</span>
                <h3 className="mt-5 text-[17px] font-semibold lowercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-[13px] yankee-block__muted leading-relaxed lowercase">{s.d}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="yankee-surface rounded-[1.75rem] bg-card overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-center">
                <span className="yankee-surface yankee-surface--control inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 text-[11px] lowercase">
                  <Heart size={12} />
                  for people who post
                </span>
                <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
                  your people follow you.{" "}
                  <span className="font-serif-display italic font-medium">let them actually see you.</span>
                </h2>
                <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg">
                  yankee was built so a quiet post still reaches the room. no fighting an algorithm for the right to be seen.
                </p>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                  >
                    start posting <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-border bg-folk-bubble-soft">
                <img
                  src={homeFeed}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {["all followers", "close friends", "crowds", "no ranking"].map((label) => (
                    <span
                      key={label}
                      className="yankee-surface yankee-surface--control px-2.5 py-1 rounded-full bg-card text-[11px] lowercase"
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
            short answers about delivery, audiences and why reach stays honest.
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
                className="mt-4 md:mt-5 text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.95] max-w-[14ch]"
              >
                ready for a feed that{" "}
                <span className="font-serif-display italic font-medium">actually shows you?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                post once. reach everyone who chose to follow you. no fighting an algorithm for the right to be seen.
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
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[14px] md:text-[15px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                >
                  get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/feed"
                  className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
                >
                  see the feed
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
                  className="yankee-surface ml-auto w-[92%] rounded-[1.5rem] bg-card p-4"
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
                  <div className="yankee-surface rounded-2xl rounded-bl-md bg-folk-bubble-soft px-4 py-3 text-[13px] leading-snug lowercase">
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

export default Reach;
