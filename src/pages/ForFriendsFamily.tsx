import { ArrowRight, Heart, Phone, Moon, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import FamilyHeroScene from "@/components/home/FamilyHeroScene";
import videoCall from "@/assets/yankee/video-call.png";
import cafeFriends from "@/assets/cafe-friends.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Shield,
    title: "private by default",
    text: "profiles start closed. every follow and invite is approved by you. no strangers, no discovery feed.",
  },
  {
    icon: Heart,
    title: "only your people",
    text: "no public metrics, no like counts, no pressure to perform. just the people you actually love.",
  },
  {
    icon: Phone,
    title: "chat and calls together",
    text: "threads, albums, voice and video in one calm place. stop jumping between five apps.",
  },
  {
    icon: Moon,
    title: "quiet when you are",
    text: "quiet hours on by default. family can still reach you. everything else waits until morning.",
  },
];

const blocks = [
  {
    kicker: "only who you chose",
    title: (
      <>
        a private space for <span className="font-serif-display italic font-medium">your people</span>
      </>
    ),
    body: "no public feeds, no suggested accounts, no ads. every circle stays closed to everyone else.",
    chat: [
      { from: "you" as const, text: "did mom see the hike photos?" },
      { from: "them" as const, text: "yes. saved to the family album." },
    ],
  },
  {
    kicker: "real conversations",
    title: (
      <>
        groups and calls, <span className="font-serif-display italic font-medium">no performance</span>
      </>
    ),
    body: "one thread for each side of the family. voice and video built in. no streaks, no pressure to post.",
    chat: [
      { from: "them" as const, text: "cousins group call at 7?" },
      { from: "you" as const, text: "i'm in. bring the pizza story." },
    ],
  },
  {
    kicker: "quiet by design",
    title: (
      <>
        notifications that <span className="font-serif-display italic font-medium">know their place</span>
      </>
    ),
    body: "important people can still reach you. the rest waits for the morning digest.",
    chat: [
      { from: "them" as const, text: "quiet mode on. only family calls ring." },
      { from: "you" as const, text: "perfect. finally a real dinner." },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "create your circle",
    d: "start a private group for your family, your closest friends, or both. no one else can find it.",
  },
  {
    n: "02",
    t: "invite your people",
    d: "send a simple link. they join with their phone number. no public profile needed.",
  },
  {
    n: "03",
    t: "chat, share, call",
    d: "post updates, share albums, start a group call. everything stays inside your circle.",
  },
];

const faqs = [
  {
    q: "Do my family members need another app?",
    a: "Yes — but it is one app for everything. Chat, calls, photos and updates live together, so you stop jumping between five different apps.",
  },
  {
    q: "Is it safe for kids?",
    a: "Profiles are private by default. Parents approve contacts and group invites. There are no public metrics, no discovery algorithms and no strangers.",
  },
  {
    q: "Can we share photos privately?",
    a: "Yes. Every album lives inside a private circle and is only visible to members. Downloads are optional and you can revoke access any time.",
  },
  {
    q: "Are calls and messages encrypted?",
    a: "Yes. Group chats and calls are end-to-end encrypted. We cannot read the content of your conversations.",
  },
  {
    q: "Can I have separate circles for family and friends?",
    a: "Yes. Create as many circles as you want, each with its own members, albums and notification rules.",
  },
];

const ForFriendsFamily = () => (
  <Layout>
    <section className="relative -mt-24 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FamilyHeroScene />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <PromoPill tag="friends & family" text="a feed of only your people" to="/features" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[13ch] mx-auto lg:mx-0"
            >
              a space for the people{" "}
              <span className="font-serif-display italic font-medium">you actually love.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              no public feeds, no algorithms, no strangers. just your family and friends, in one calm place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                  folk-cta
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
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">private circles · shared albums · no ads</p>
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
            built for circles,{" "}
            <span className="font-serif-display italic font-medium">not audiences</span>
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
            <span className="font-serif-display italic font-medium">for your people</span>
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
                            ? "bg-folk-bubble text-white rounded-br-md shadow-[3px_3px_0_0_hsl(var(--foreground))]"
                            : "bg-folk-bubble-soft text-foreground rounded-bl-md border-2 border-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))]"
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

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">together</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              calls that feel{" "}
              <span className="font-serif-display italic font-medium">like home</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              start a group call from the same thread where the photos live. no new app, no meeting link chaos.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "voice and video built into the circle",
                "albums only members can see",
                "quiet hours that still let family through",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.1}>
            <div className="relative mx-auto max-w-[300px]">
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="rounded-[1.75rem] border-2 border-foreground bg-card p-3 shadow-[6px_6px_0_0_hsl(var(--foreground))] overflow-hidden aspect-[9/17]"
              >
                <img
                  src={videoCall}
                  alt="Yankee video call"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute -left-3 bottom-[18%] z-10 max-w-[70%]"
              >
                <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-folk-bubble-soft px-3.5 py-2.5 text-[12px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                  6 in the call · no strangers
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
            three steps. <span className="font-serif-display italic font-medium">then you&apos;re together.</span>
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

    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            frequently <span className="font-serif-display italic font-medium">asked</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about privacy, kids and albums.
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
                ready to bring your{" "}
                <span className="font-serif-display italic font-medium">people back?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                a private circle for the people who matter. shared albums, quiet chats, no algorithm.
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
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[14px] md:text-[15px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                    folk-cta
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
                  initial={{ opacity: 0, y: 28, rotate: 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12, ease }}
                  className="ml-auto w-[92%] rounded-[1.5rem] border-2 border-foreground bg-card p-4 shadow-[6px_6px_0_0_hsl(var(--foreground))]"
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                    <img
                      src={cafeFriends}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">saturday coffee · close friends</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      <Users size={10} /> 8
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
                  <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-folk-bubble-soft px-4 py-3 text-[13px] leading-snug lowercase shadow-[4px_4px_0_0_hsl(var(--foreground))]">
                    no strangers. just your people.
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

export default ForFriendsFamily;
