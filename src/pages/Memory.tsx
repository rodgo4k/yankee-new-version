import { ArrowRight, Lock, Share2, Shield, Trash2, KeyRound, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import MemoryHeroScene from "@/components/home/MemoryHeroScene";
import rememberOffice from "@/assets/remember-office.jpg";
import tripPhotos from "@/assets/trip-photos.png";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Lock,
    title: "private by default",
    text: "everything you save stays on your phone first. backed up as ciphertext only.",
  },
  {
    icon: KeyRound,
    title: "your keys, not ours",
    text: "decryption keys live on your devices. we only ever hold encrypted blobs.",
  },
  {
    icon: Brain,
    title: "never trained on",
    text: "your writing, saves and notes are never used to train a model. not ours, not anyone else's.",
  },
  {
    icon: Trash2,
    title: "erase anything, anytime",
    text: "delete a memory and it is wiped from your device and our backups within 30 days.",
  },
];

const engines = [
  {
    badge: "on device · encrypted",
    icon: Lock,
    title: (
      <>
        your <span className="font-serif-display italic font-medium">private</span> memory
      </>
    ),
    body: "a draft, a bookmark, a preference, a voice note. yankee files it encrypted, tagged and searchable. only you can read it.",
    chips: ["a draft", "a bookmark", "a preference", "a voice note"],
    chat: [
      { from: "you" as const, text: "remember this draft for alex" },
      { from: "them" as const, text: "saved. private. ask me anytime." },
    ],
  },
  {
    badge: "shared · opt in",
    icon: Share2,
    title: (
      <>
        memory you <span className="font-serif-display italic font-medium">share</span>
      </>
    ),
    body: "hand a single memory to a crowd or a friend. they only see what you passed. revoke access and it goes dark on their side.",
    chips: ["a recipe", "a playlist", "a place", "a plan"],
    chat: [
      { from: "you" as const, text: "share the alfama dessert spot with kayla" },
      { from: "them" as const, text: "shared. she can open it, nothing else." },
    ],
  },
];

const blocks = [
  {
    kicker: "save in one line",
    title: (
      <>
        text yankee. <span className="font-serif-display italic font-medium">hold this.</span>
      </>
    ),
    body: "no new app to learn. drop a link, a voice note or an idea into the thread and yankee files it.",
    chat: [
      { from: "you" as const, text: "remember this for me" },
      { from: "them" as const, text: "got it. encrypted and tagged." },
    ],
  },
  {
    kicker: "recall in plain words",
    title: (
      <>
        ask months later. <span className="font-serif-display italic font-medium">get the exact thing.</span>
      </>
    ),
    body: "yankee returns the quote, link or draft in the same context it was saved. no digging through chats.",
    chat: [
      { from: "you" as const, text: "what cafe did we love in lisbon?" },
      { from: "them" as const, text: "manteigaria. tiny blue door near the tram." },
    ],
  },
  {
    kicker: "share on purpose",
    title: (
      <>
        pass one piece. <span className="font-serif-display italic font-medium">keep the rest.</span>
      </>
    ),
    body: "hand a playlist, a place or a plan to someone. revoke it anytime and their copy goes dark.",
    chat: [
      { from: "them" as const, text: "kayla opened your alfama pin." },
      { from: "you" as const, text: "good. revoke after the trip." },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "text yankee",
    d: "yankee sits inside the threads you already use, ready to hold anything you toss its way.",
  },
  {
    n: "02",
    t: "save the moment",
    d: "say “remember this” and yankee files it, encrypted, tagged and searchable.",
  },
  {
    n: "03",
    t: "recall it later",
    d: "ask in plain words, months later. yankee returns the exact quote, link or draft.",
  },
];

const faqs = [
  {
    q: "Where does my memory live?",
    a: "On your device first. Yankee keeps an encrypted backup so you can restore on a new phone. Plaintext never leaves your devices.",
  },
  {
    q: "Can Yankee read what I save?",
    a: "No. Decryption keys live on your devices. Even under a subpoena, we can only hand over ciphertext blobs.",
  },
  {
    q: "Is my memory used to train AI?",
    a: "Never. Your writing, saves and notes are not used to train a model — not ours, not anyone else's.",
  },
  {
    q: "What can I share with someone else?",
    a: "A single memory at a time — a playlist, a place, a plan, a recipe. They only see what you passed. You can revoke access any time.",
  },
  {
    q: "What happens when I delete a memory?",
    a: "It is wiped from your device and our encrypted backups within 30 days. No hidden copies.",
  },
  {
    q: "Is Memory included in the free plan?",
    a: "Basic save and recall are free. Yankee Pro ($8/month) unlocks unlimited memory, shared handoffs and cross-device sync. Cancel any time.",
  },
];

const Memory = () => (
  <Layout>
    <section className="relative -mt-24 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <PromoPill tag="memory" text="private by default · yours to keep or share" to="/features" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.6rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase"
          >
            make a memory{" "}
            <span className="font-serif-display italic font-medium">of anything.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto"
          >
            a draft, a link, a voice note, a plan. encrypted on your phone, recallable in plain words, shared only when you say so.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
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

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease }}
          className="mt-12 md:mt-16"
        >
          <MemoryHeroScene />
        </motion.div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">safety</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            private, <span className="font-serif-display italic font-medium">not fragile</span>
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
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">two engines</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            two kinds of memory.{" "}
            <span className="font-serif-display italic font-medium">one calm app.</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-xl mx-auto">
            keep it entirely to yourself, or hand a single piece to a person or a crowd. yankee runs both.
          </p>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-4">
          {engines.map((e, i) => {
            const Icon = e.icon;
            return (
              <AnimatedSection key={e.badge} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full rounded-[1.5rem] border-2 border-foreground bg-card p-6 md:p-8 flex flex-col gap-5 shadow-[5px_5px_0_0_hsl(var(--foreground))]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-3 py-1 text-[11px] lowercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B9CFF]" />
                      {e.badge}
                    </span>
                    <span className="w-9 h-9 rounded-xl border-2 border-foreground bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon size={16} />
                    </span>
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-semibold text-foreground leading-[1.08] tracking-tight lowercase">
                    {e.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed lowercase">{e.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {e.chips.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1.5 rounded-full border-2 border-foreground/80 bg-background text-[12px] text-foreground/80 lowercase"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-2.5 pt-2">
                    {e.chat.map((m, j) => (
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
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">what it does</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            if it matters,{" "}
            <span className="font-serif-display italic font-medium">it&apos;s a memory</span>
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
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps. <span className="font-serif-display italic font-medium">then it sticks.</span>
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
            short answers about privacy, sharing and what memory actually keeps.
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
                save the first thing{" "}
                <span className="font-serif-display italic font-medium">worth keeping.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                text yankee, hand it a draft, a link, a voice note, and watch it come back exactly when you need it.
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
                      src={rememberOffice}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">draft · berlin trip</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      <Shield size={10} /> private
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -18, y: 12, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.28 }}
                  className="relative z-10 -mt-8 mr-auto w-[78%] rounded-[1.25rem] border-2 border-foreground bg-card p-3 shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                >
                  <div className="rounded-[0.9rem] overflow-hidden aspect-[16/10] bg-muted">
                    <img src={tripPhotos} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="mt-2 text-[12px] lowercase text-foreground/70">album · beach week · 34 photos</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                  className="relative z-20 -mt-3 ml-auto max-w-[85%]"
                >
                  <div className="rounded-2xl rounded-br-md bg-[#5B9CFF] px-4 py-3 text-[13px] leading-snug text-white lowercase shadow-[4px_4px_0_0_hsl(var(--foreground))]">
                    still got it. encrypted on your phone.
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

export default Memory;
