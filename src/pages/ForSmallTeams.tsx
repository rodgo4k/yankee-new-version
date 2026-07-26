import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import TeamHeroScene from "@/components/home/TeamHeroScene";
import { AiModelsStrip } from "@/components/home/AiFeatureScenes";
import {
  AiChooseDemo,
  AiContributeDemo,
  AiInviteDemo,
  AiTrioScene,
  AiCollabDemo,
  AiResultDemo,
  AiCommandsDemo,
  AiSessionScene,
} from "@/components/home/AiPrintDemos";
import smallTeamCollab from "@/assets/small-team-collab.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const steps = [
  {
    n: "01",
    t: "choose ai prompt",
    d: "open any crowd, create a channel, and pick ai prompt. text and voice stay one tap away.",
  },
  {
    n: "02",
    t: "invite with roles",
    d: "contribute, view or publish. everyone shapes the prompt before it runs across your models.",
  },
  {
    n: "03",
    t: "run and share",
    d: "execute the shared prompt. results stay inside the crowd: searchable, exportable, yours.",
  },
];

const faqs = [
  {
    q: "Which AI models does Yankee support?",
    a: "Yankee AI runs prompts across GPT-4o, Claude, Gemini and Yankee Local. You pick which models to include in each session and compare outputs side by side.",
  },
  {
    q: "Can my crowd collaborate on a prompt before it runs?",
    a: "Yes. Invite members with contribute, view or publish roles. Everyone can add lines, refine the goal and attach sources before you execute.",
  },
  {
    q: "What sources can I attach to a session?",
    a: "Posts from your crowd, Notion pages and crowd history. Events and external web search are optional. Context stays inside your group by default.",
  },
  {
    q: "Who sees the AI results?",
    a: "You control visibility per session: participants only, the full crowd or specific members with publish permission. Nothing leaks outside unless you share it.",
  },
  {
    q: "Does Yankee train on our prompts?",
    a: "No. Your prompts, contributions and results stay in your crowd. Yankee does not use your content to train models or sell data to third parties.",
  },
];

const ForSmallTeams = () => (
  <Layout>
    {}
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
              <PromoPill tag="yankee ai" text="multi-llm · collaborate on prompts" to="/features" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[12ch] mx-auto lg:mx-0"
            >
              <span className="normal-case">AI</span> in the crowd,{" "}
              <span className="font-serif-display italic font-medium">built together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              collaborate on prompts with your crowd. run one session across gpt-4o, claude, gemini
              and yankee local. permissions, sources and results stay inside your group.
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
                get yankee{" "}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#in-app"
                className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
              >
                see it in the app
              </a>
            </motion.div>
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">multi-llm · collaborate on prompts</p>
          </div>

          <div className="lg:col-span-7">
            <TeamHeroScene />
          </div>
        </div>
      </div>
    </section>

    {}
    <section className="relative py-16 md:py-20 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
            multi-llm
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            one prompt.{" "}
            <span className="font-serif-display italic font-medium">many models.</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase max-w-lg mx-auto leading-relaxed">
            run the same session across gpt-4o, claude, gemini and yankee local. then compare side
            by side.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="mt-10">
          <AiModelsStrip />
        </AnimatedSection>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
            <AiChooseDemo />
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7 order-1 lg:order-2" delay={0.08}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              channel type
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[16ch]">
              pick <span className="font-serif-display italic font-medium">ai prompt</span> and
              start a session
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              text, voice or ai prompt. the new channel type lets your crowd share one prompt with
              citations, not a private chat with a bot.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "ai prompt marked new in the channel picker",
                "shared prompts with citations from your crowd",
                "owner permission + crowd-level toggle",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase"
                >
                  <Sparkles size={14} className="mt-1 shrink-0 text-foreground/40" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section id="in-app" className="relative py-20 md:py-28 dotted-bg overflow-hidden">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
            in the app
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            from session to{" "}
            <span className="font-serif-display italic font-medium">shared result.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            define a goal, attach crowd sources, invite with roles, then watch contributions build
            the final prompt.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-12 md:mt-16">
          <AiTrioScene />
        </AnimatedSection>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-6">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              roles
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[14ch]">
              contribute, view or{" "}
              <span className="font-serif-display italic font-medium">publish.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              every member joins with a role. some add lines to the prompt, some only read, one
              person runs and publishes the output.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { label: "contribute", bg: "#2f6bff" },
                { label: "view", bg: "rgba(0,0,0,0.35)" },
                { label: "publish", bg: "#34c759" },
              ].map((r, i) => (
                <motion.span
                  key={r.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="rounded-full px-4 py-2 text-[12px] font-semibold text-white lowercase"
                  style={{ background: r.bg }}
                >
                  {r.label}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6 flex justify-center lg:justify-end" delay={0.1}>
            <AiInviteDemo />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
            <AiContributeDemo />
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6 order-1 lg:order-2" delay={0.08}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              ai channel
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[15ch]">
              contributions merge into{" "}
              <span className="font-serif-display italic font-medium">one prompt.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              members drop notes into the session. the shared prompt grows in real time. then you
              run it across every model you picked.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-6">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              in the crowd
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[14ch]">
              a live collaborative prompt{" "}
              <span className="font-serif-display italic font-medium">inside the channel.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              see who is online, add inputs as a card in the chat, react, and run when the crowd is
              ready. ai lives where the conversation already is.
            </p>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6 flex justify-center lg:justify-end" delay={0.1}>
            <AiCollabDemo />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
            <AiResultDemo />
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6 order-1 lg:order-2" delay={0.08}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              crowd sources
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[15ch]">
              the answer cites{" "}
              <span className="font-serif-display italic font-medium">your crowd.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              top picks, week summaries and source chips from chat, notions and budget notes. then
              iterate, save or publish back to the feed.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-6">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              commands
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[14ch]">
              /prompt, /run, /invite{" "}
              <span className="font-serif-display italic font-medium">right in chat.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              start a collaborative prompt, pick sources, invite members and iterate without leaving
              the crowd channel.
            </p>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-6 flex justify-center lg:justify-end" delay={0.1}>
            <AiCommandsDemo />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              full flow
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              watch the whole{" "}
              <span className="font-serif-display italic font-medium">session play out.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              hello → ask → generate. the same yankee ai screens from the app, animated end to end.
            </p>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7 flex justify-center lg:justify-end shrink-0" delay={0.1}>
            <AiSessionScene />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {}
    <section id="how" className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
            how it works
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps.{" "}
            <span className="font-serif-display italic font-medium">then you&apos;re in.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <span className="font-serif-display italic text-[2rem] text-foreground/30 leading-none">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[17px] font-semibold lowercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">
                  {s.d}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {}
    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            frequently <span className="font-serif-display italic font-medium">asked</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about models, collaboration and privacy.
          </p>
        </AnimatedSection>
        <div className="mt-10 md:mt-12">
          <FAQ items={faqs} />
        </div>
      </div>
    </section>

    {}
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
                yankee ai
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                className="mt-4 md:mt-5 text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.95] max-w-[14ch]"
              >
                ready to run{" "}
                <span className="normal-case">AI</span>{" "}
                <span className="font-serif-display italic font-medium">with your crowd?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                multi-llm sessions, collaborative prompts and crowd sources. built for groups that
                think together.
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
                  get yankee{" "}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
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
                    <span className="text-[12px] lowercase text-foreground/70">
                      ai session · multi-llm
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-folk-bubble px-2.5 py-1 text-[11px] text-white lowercase">
                      <Sparkles size={10} />
                      live
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
                  <div className="yankee-chat__bubble yankee-chat__bubble--them text-[13px] md:text-[14px]">
                    one prompt. your crowd. many models.
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
