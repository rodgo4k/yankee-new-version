import { ArrowRight, Clock, Split, Moon, Search, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import TeamHeroScene from "@/components/home/TeamHeroScene";
import teamFeed from "@/assets/yankee/home-feed.png";
import smallTeamCollab from "@/assets/small-team-collab.jpg";
import { blockCard } from "@/lib/yankeeBlock";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Clock,
    title: "chronological, always",
    text: "announcements stay in order. threads stay readable. nothing reshuffles overnight.",
  },
  {
    icon: Split,
    title: "rooms that stay small",
    text: "cap a sprint room, a standup, a launch. when it gets loud, yankee suggests a split.",
  },
  {
    icon: Moon,
    title: "focus hours by default",
    text: "only urgent mentions and direct calls break through. the rest waits until morning.",
  },
  {
    icon: Shield,
    title: "private workspace",
    text: "closed by default. encrypted messages and calls. no public search indexing.",
  },
];

const blocks = [
  {
    kicker: "one calm feed",
    title: (
      <>
        one feed, in order, with <span className="font-serif-display italic font-medium">zero noise</span>
      </>
    ),
    body: "announcements stay at the top. threads stay readable. no algorithm deciding what your team needs to see.",
    chat: [
      { from: "you" as const, text: "quarterly review is live in the feed." },
      { from: "them" as const, text: "got it. catching up on the thread now." },
    ],
  },
  {
    kicker: "split before it gets loud",
    title: (
      <>
        rooms for projects, rituals,{" "}
        <span className="font-serif-display italic font-medium">and squads</span>
      </>
    ),
    body: "create capped rooms for a sprint, a standup, or a launch. when a room gets too big, yankee suggests a split.",
    chat: [
      { from: "them" as const, text: "new design room is capped at 8. join?" },
      { from: "you" as const, text: "in. much better than the old channel." },
    ],
  },
  {
    kicker: "quiet hours",
    title: (
      <>
        important things reach you.{" "}
        <span className="font-serif-display italic font-medium">everything else waits</span>
      </>
    ),
    body: "set team-wide focus hours. only urgent mentions and direct calls break through.",
    chat: [
      { from: "you" as const, text: "focus mode is on. back at 9." },
      { from: "them" as const, text: "no worries. the deadline can wait." },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "create your workspace",
    d: "set up a private workspace for your company. no public profiles, no search indexing.",
  },
  {
    n: "02",
    t: "invite your team",
    d: "send invite links by email or phone. everyone joins in seconds.",
  },
  {
    n: "03",
    t: "post, thread, decide",
    d: "share updates, discuss in threads, make calls. everything lives in one calm, searchable place.",
  },
];

const faqs = [
  {
    q: "Do we need to stop using Slack?",
    a: "No. You can run Yankee alongside Slack while you transition. Many teams start with one department and expand once the noise drops.",
  },
  {
    q: "Is it really private?",
    a: "Yes. Your workspace is closed by default. Messages and calls are end-to-end encrypted. We cannot read the content.",
  },
  {
    q: "Can we share files and documents?",
    a: "Yes. Drop files into any room or thread. Storage is shared across the workspace and access can be revoked any time.",
  },
  {
    q: "Can we schedule posts for later?",
    a: "Yes. Write updates now, publish later, across time zones. Perfect for async teams and company-wide announcements.",
  },
  {
    q: "What happens when our team grows?",
    a: "Rooms split when they hit a healthy size. You can add workspaces, keep channels separate, and still search everything in one place.",
  },
];

const ForSmallTeams = () => (
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
              <PromoPill tag="small teams" text="quieter than slack · sharper than email" to="/features" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[12ch] mx-auto lg:mx-0"
            >
              a workspace your team{" "}
              <span className="font-serif-display italic font-medium">will actually love.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              no channel overload, no missing threads, no noisy notifications. just one calm place for work to happen.
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
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">quieter than slack · sharper than email</p>
          </div>

          <div className="lg:col-span-7">
            <TeamHeroScene />
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the idea</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            work without the{" "}
            <span className="font-serif-display italic font-medium">notification tax</span>
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
            <span className="font-serif-display italic font-medium">for your team</span>
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

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">catch up</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              open once.{" "}
              <span className="font-serif-display italic font-medium">see what matters.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              a chronological team feed with a real ending. when you&apos;re caught up, yankee says so and lets you go.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "searchable threads across every room",
                "pinned announcements that stay put",
                "no infinite scroll of status noise",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase">
                  <Search size={14} className="mt-1 shrink-0 text-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.1}>
            <div className="relative mx-auto max-w-[300px]">
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="yankee-surface yankee-surface--media rounded-[1.75rem] bg-card p-3 overflow-hidden aspect-[9/17]"
              >
                <img
                  src={teamFeed}
                  alt="Yankee team feed"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute -right-2 bottom-[18%] z-10 max-w-[70%]"
              >
                <div className="yankee-surface rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2.5 text-[12px] leading-snug text-folk-bubble-foreground lowercase">
                  you&apos;re all caught up
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section id="how" className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps. <span className="font-serif-display italic font-medium">then you&apos;re in.</span>
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

    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            frequently <span className="font-serif-display italic font-medium">asked</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about slack, privacy and files.
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
                ready to give your team{" "}
                <span className="font-serif-display italic font-medium">a quieter tool?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                quieter rooms, clearer threads, less noise than slack. built for teams that want focus.
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
                  talk to us <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/features"
                  className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
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
                  className="yankee-surface ml-auto w-[92%] rounded-[1.5rem] bg-card p-4"
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                    <img
                      src={smallTeamCollab}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">design room · capped at 8</span>
                    <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      focus on
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
                    no channel overload. just the work.
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

export default ForSmallTeams;
