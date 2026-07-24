import { ArrowRight, Lock, EyeOff, Trash2, Shield, KeyRound, MapPin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import PrivacyHeroScene from "@/components/home/PrivacyHeroScene";
import heroMountain from "@/assets/hero-mountain.jpg";
import rememberOffice from "@/assets/remember-office.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Lock,
    title: "yours alone",
    text: "never sold, never used to train ai. your writing stays your writing.",
  },
  {
    icon: EyeOff,
    title: "private + encrypted",
    text: "feed, memory and dms live encrypted. plaintext stays on your devices.",
  },
  {
    icon: KeyRound,
    title: "your keys, not ours",
    text: "decryption keys live with you. even we only hold ciphertext blobs.",
  },
  {
    icon: Trash2,
    title: "gone when you say so",
    text: "delete your account any time. memory, messages and history are wiped.",
  },
];

const blocks = [
  {
    kicker: "end to end",
    title: (
      <>
        scrambled on your phone. <span className="font-serif-display italic font-medium">readable only there.</span>
      </>
    ),
    body: "messages and calls are encrypted on your device and only decrypted on the recipient's. yankee cannot read them, even if asked.",
    chat: [
      { from: "you" as const, text: "can yankee read my dms?" },
      { from: "them" as const, text: "no. ciphertext only on our side." },
    ],
  },
  {
    kicker: "zero trackers",
    title: (
      <>
        no ad sdks. <span className="font-serif-display italic font-medium">no session replay.</span>
      </>
    ),
    body: "if we do not ship a tracker, we cannot leak it. yankee is funded by people, not by selling attention.",
    chat: [
      { from: "them" as const, text: "third party analytics: none." },
      { from: "you" as const, text: "good. keep it that way." },
    ],
  },
  {
    kicker: "local first",
    title: (
      <>
        your device holds the <span className="font-serif-display italic font-medium">primary copy.</span>
      </>
    ),
    body: "the cloud is an encrypted backup you can pause or turn off. nothing trains a model on your posts.",
    chat: [
      { from: "you" as const, text: "pause cloud backup" },
      { from: "them" as const, text: "paused. everything stays on device." },
    ],
  },
];

const glossary = [
  {
    name: "concepts",
    items: [
      {
        term: "end to end encryption",
        def: "messages and calls are scrambled on your device and only unscrambled on the recipient's. yankee cannot read them.",
      },
      {
        term: "zero trackers",
        def: "no third party analytics, ad sdks or session replay tools ship inside the app.",
      },
      {
        term: "data minimization",
        def: "yankee asks for the smallest amount of information needed. extra data is never collected just in case.",
      },
      {
        term: "local first sync",
        def: "your device holds the primary copy. the cloud is an encrypted backup you can pause or turn off.",
      },
    ],
  },
  {
    name: "controls",
    items: [
      {
        term: "right to deletion",
        def: "export everything in one tap and delete your account. servers wipe within 30 days.",
      },
      {
        term: "region pinning",
        def: "pick where your encrypted backup lives, eu or us. change it once a year if you need to.",
      },
      {
        term: "quiet permissions",
        def: "location, contacts, camera and microphone are off by default until a feature needs them.",
      },
      {
        term: "transparency report",
        def: "we publish what we receive, what we can hand over, and what we cannot. usually almost nothing.",
      },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "encrypt on device",
    d: "drafts, dms and memory are locked before they leave your phone.",
  },
  {
    n: "02",
    t: "store only ciphertext",
    d: "if you enable backup, yankee servers hold blobs we cannot read.",
  },
  {
    n: "03",
    t: "delete for real",
    d: "when you wipe an account, plaintext and backups expire. no hidden copies.",
  },
];

const faqs = [
  {
    q: "Can Yankee read my DMs?",
    a: "No. Direct messages and calls are end-to-end encrypted. Keys live on your devices. Even under a subpoena, we can only hand over ciphertext blobs.",
  },
  {
    q: "Do you sell my data or train AI on it?",
    a: "Never. We do not sell your data and we do not run ads against it. Your posts, messages and notes are not sold to advertisers and are not used to train a model.",
  },
  {
    q: "What happens when I delete my account?",
    a: "You can export first, then delete. Active servers are wiped within 30 days and encrypted backups expire naturally. No hidden copies.",
  },
  {
    q: "Where does my encrypted backup live?",
    a: "You choose EU or US region pinning. You can change it once a year. The backup is ciphertext only.",
  },
  {
    q: "Are there third-party trackers in the app?",
    a: "No ad SDKs, no session replay, no behavioral analytics sold to anyone. We use a small set of infrastructure providers for hosting and crash reporting only.",
  },
  {
    q: "Where is the legal privacy policy?",
    a: "The full legal policy lives at /privacy. This page explains how Yankee is built private by design, in plain words.",
  },
];

const PrivacyFirst = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <PromoPill tag="privacy" text="private by design · not by promise" to="/privacy" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.6rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase"
          >
            private by design,{" "}
            <span className="font-serif-display italic font-medium">not by promise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto"
          >
            no ad ids, no behavioral trackers, no third party sdks. what we do not collect cannot be leaked, sold or subpoenaed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
            >
              ask us anything <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/privacy"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              read the policy
            </Link>
          </motion.div>
          <p className="mt-5 text-[12px] text-foreground/45 lowercase">encrypted · wipeable · never sold</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease }}
          className="mt-12 md:mt-16"
        >
          <PrivacyHeroScene />
        </motion.div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the stance</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            how yankee stays <span className="font-serif-display italic font-medium">private</span>
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
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">what it means</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            privacy in{" "}
            <span className="font-serif-display italic font-medium">plain words</span>
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

    <section id="glossary" className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">glossary</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            the privacy <span className="font-serif-display italic font-medium">words we use</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            plain english definitions of how yankee is built. what they mean, and why they matter.
          </p>
        </AnimatedSection>

        {glossary.map((cat, ci) => (
          <div key={cat.name} className={ci === 0 ? "mt-12 md:mt-14" : "mt-14 md:mt-16"}>
            <AnimatedSection>
              <p className="text-[13px] font-serif-display italic text-foreground/45 lowercase mb-4">{cat.name}</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map((item, i) => (
                <AnimatedSection key={item.term} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="yankee-surface h-full rounded-[1.5rem] bg-card p-5 md:p-6 flex flex-col"
                  >
                    <h3 className="text-[15px] font-semibold lowercase tracking-tight leading-snug">{item.term}</h3>
                    <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed lowercase flex-1">{item.def}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three layers. <span className="font-serif-display italic font-medium">no loopholes.</span>
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

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="yankee-surface rounded-[1.75rem] bg-card overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-center">
                <span className="yankee-surface yankee-surface--control inline-flex self-start items-center gap-2 rounded-full px-3 py-1.5 text-[11px] lowercase">
                  <Shield size={12} />
                  transparency
                </span>
                <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
                  the things we do not collect{" "}
                  <span className="font-serif-display italic font-medium">cannot be leaked.</span>
                </h2>
                <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg">
                  region pinning, quiet permissions, a public transparency report. privacy is architecture, not a marketing page.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    { icon: MapPin, label: "region pinning" },
                    { icon: FileText, label: "transparency report" },
                    { icon: Trash2, label: "real deletion" },
                  ].map((chip) => {
                    const Icon = chip.icon;
                    return (
                      <span
                        key={chip.label}
                        className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-[12px] lowercase"
                      >
                        <Icon size={12} />
                        {chip.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full border-t-2 lg:border-t-0 lg:border-l-2 border-foreground">
                <img
                  src={heroMountain}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="yankee-surface yankee-surface--control inline-flex rounded-full bg-card px-3 py-1.5 text-[12px] lowercase">
                    encrypted backup · eu or us
                  </span>
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
            short answers about encryption, deletion and what yankee can never see.
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
                your data stays{" "}
                <span className="font-serif-display italic font-medium">yours.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                encrypted where it matters, wipeable whenever you want, never sold and never trained on.
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
                  ask us anything <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/privacy"
                  className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
                >
                  privacy policy
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
                      src={rememberOffice}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">memory · encrypted at rest</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      <Lock size={10} /> private
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
                    keys on your phone. blobs on ours.
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

export default PrivacyFirst;
