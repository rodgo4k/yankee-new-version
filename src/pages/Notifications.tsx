import { ArrowRight, Bell, BellOff, Moon, Filter, MessageSquare, AtSign } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import NotifHeroScene from "@/components/home/NotifHeroScene";
import heroNotifications from "@/assets/hero-notifications.jpg";
import messages from "@/assets/yankee/messages.png";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: MessageSquare,
    title: "real people first",
    text: "dms, replies and mentions from people you talk to always ring. no exceptions.",
  },
  {
    icon: Filter,
    title: "noise stays off",
    text: "streaks, re-engagement prompts and empty nudges are silent by default.",
  },
  {
    icon: Moon,
    title: "quiet when you need it",
    text: "quiet hours and a once-a-day digest. skim it in seconds and close the phone.",
  },
  {
    icon: BellOff,
    title: "you set the rules",
    text: "star people, mute a crowd, keep close friends loud. your signal list, your call.",
  },
];

const blocks = [
  {
    kicker: "signal, not spam",
    title: (
      <>
        only the pings <span className="font-serif-display italic font-medium">you asked for</span>
      </>
    ),
    body: "yankee does not invent urgency. if you did not choose it, it does not ring.",
    chat: [
      { from: "them" as const, text: "julia dm'd you about saturday." },
      { from: "you" as const, text: "good. mute the rest." },
    ],
  },
  {
    kicker: "one calm inbox",
    title: (
      <>
        batch the rest into <span className="font-serif-display italic font-medium">a digest</span>
      </>
    ),
    body: "non urgent updates wait for evening. one screen, no attention debt every three minutes.",
    chat: [
      { from: "them" as const, text: "digest ready · 2 messages, 1 mention." },
      { from: "you" as const, text: "that's all? perfect." },
    ],
  },
  {
    kicker: "context aware",
    title: (
      <>
        work, personal, crowds. <span className="font-serif-display italic font-medium">separate rules.</span>
      </>
    ),
    body: "switch profiles in one tap. each gets its own signal list and quiet schedule.",
    chat: [
      { from: "you" as const, text: "switch to personal" },
      { from: "them" as const, text: "done. work alerts muted until monday." },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "pick what can ring",
    d: "dms, mentions, close friends and crowd roles. everything else starts silent.",
  },
  {
    n: "02",
    t: "set quiet hours",
    d: "choose when yankee holds non urgent updates for a single evening digest.",
  },
  {
    n: "03",
    t: "open when you want",
    d: "skim the inbox, mark what matters, close the app. no phone begging for attention.",
  },
];

const allowList = [
  { icon: MessageSquare, label: "direct messages", note: "always on" },
  { icon: AtSign, label: "mentions", note: "crowds you joined" },
  { icon: Bell, label: "close friends", note: "people you starred" },
];

const faqs = [
  {
    q: "Will I miss messages from real people?",
    a: "No. Direct messages, mentions and replies from people you talk to always land. What stays silent are empty nudges, streak reminders and re-engagement prompts.",
  },
  {
    q: "Can I mute a Crowd without leaving it?",
    a: "Yes. Mute the Crowd's pings and keep reading the feed when you open it. You stay a member; the phone just stops tapping your shoulder.",
  },
  {
    q: "What is the daily digest?",
    a: "A single evening summary of non-urgent updates — soft replies, Crowd activity you did not ask to hear about live. Skim it once and you are done.",
  },
  {
    q: "Can I have different rules for work and personal?",
    a: "Yes. Profiles let you switch contexts in one tap. Work hours, community events and personal time each get their own signal list and quiet schedule.",
  },
  {
    q: "Where are my notification rules stored?",
    a: "On your device by default. If you enable sync, the ruleset is encrypted end-to-end. Yankee never sells your attention settings.",
  },
  {
    q: "Does Yankee send notifications from other apps?",
    a: "No. Notifications are for what happens inside Yankee — your people, your Crowds, your chats. Other networks stay outside.",
  },
];

const Notifications = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <NotifHeroScene />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <PromoPill tag="notifications" text="only pings you asked for" to="/features" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[12ch] mx-auto lg:mx-0"
            >
              all your pings,{" "}
              <span className="font-serif-display italic font-medium">one calm inbox.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              messages, mentions and updates in one place. yankee filters the noise and only rings for what you actually care about.
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
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">quiet by default · urgent when it matters</p>
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the rules</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            how the inbox <span className="font-serif-display italic font-medium">stays calm</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="yankee-surface h-full rounded-[1.5rem] bg-card p-6"
                >
                  <div className="w-10 h-10 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center mb-5">
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
            tune what{" "}
            <span className="font-serif-display italic font-medium">rings for you</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-4">
          {blocks.map((b, i) => (
            <AnimatedSection key={b.kicker} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="yankee-surface h-full rounded-[1.5rem] bg-card p-6 md:p-7 flex flex-col gap-5"
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
                        className={`yankee-surface inline-block max-w-[90%] px-3.5 py-2 text-[12.5px] md:text-[13px] leading-snug lowercase rounded-2xl ${ m.from === "you" ? "bg-folk-bubble text-white rounded-br-md " : "bg-folk-bubble-soft text-foreground rounded-bl-md " }`}
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

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">what lands</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              one screen,{" "}
              <span className="font-serif-display italic font-medium">only the signal.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              direct messages, mentions in crowds you chose, and the few people you starred. everything else is silent by default.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {allowList.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="yankee-surface flex items-center gap-3 rounded-[1.1rem] bg-card px-4 py-3"
                  >
                    <span className="w-9 h-9 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon size={15} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-semibold lowercase">{item.label}</p>
                      <p className="text-[12px] text-foreground/50 lowercase">{item.note}</p>
                    </div>
                    <span className="rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium lowercase">on</span>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.1}>
            <div className="relative mx-auto max-w-[320px]">
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="yankee-surface yankee-surface--media rounded-[1.75rem] bg-card p-3 overflow-hidden aspect-[9/17]"
              >
                <img
                  src={messages}
                  alt="Yankee notifications"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute -right-2 bottom-[18%] z-10 max-w-[70%]"
              >
                <div className="yankee-surface rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2.5 text-[12px] leading-snug text-folk-bubble-foreground lowercase">
                  47 nudges silenced today
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
            three steps. <span className="font-serif-display italic font-medium">then it stays quiet.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="yankee-surface h-full rounded-[1.5rem] bg-card p-6 flex flex-col"
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

    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            frequently <span className="font-serif-display italic font-medium">asked</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about digests, mutes and what always gets through.
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
                get pinged{" "}
                <span className="font-serif-display italic font-medium">on purpose.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                set the rules once, let yankee hold the line, and stop giving your attention away.
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
                  initial={{ opacity: 0, y: 28, rotate: 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12, ease }}
                  className="yankee-surface ml-auto w-[92%] rounded-[1.5rem] bg-card p-4"
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                    <img
                      src={heroNotifications}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">quiet hours · 10pm–8am</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      <BellOff size={10} /> on
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
                    digest at 8pm. nothing until then.
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

export default Notifications;
