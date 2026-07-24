import { ArrowRight, Bell, Filter, Sliders, Radio, Lock, Trash2, EyeOff, Calendar, FileText, PenLine, Compass, Plane } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import PromoPill from "@/components/home/PromoPill";
import homeFeed from "@/assets/yankee/home-feed.png";
import chatImg from "@/assets/yankee/chat.png";
import aiChat from "@/assets/yankee/ai-chat.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import messages from "@/assets/yankee/messages.png";
import videoCall from "@/assets/yankee/video-call.png";
import community from "@/assets/yankee/community.png";
import profileView from "@/assets/yankee/profile-view.png";
import searchImg from "@/assets/yankee/search.png";

const ease = [0.25, 0.4, 0.25, 1] as const;

const heroPhones = [
  { src: homeFeed, label: "feed", rotate: -8, x: "8%", z: 1, scale: 1 },
  { src: crowdsHome, label: "crowds", rotate: 0, x: "30%", z: 3, scale: 1.12 },
  { src: chatImg, label: "chat", rotate: 7, x: "56%", z: 2, scale: 1 },
];

const jumpLinks = [
  { label: "feed", href: "#feed" },
  { label: "memory", href: "#memory" },
  { label: "people", href: "#people" },
  { label: "privacy", href: "#privacy" },
];

const feedGuards = [
  {
    icon: Bell,
    title: "instant post alerts",
    text: "know the moment someone you care about posts, before anything gets buried.",
  },
  {
    icon: Filter,
    title: "follow cleanup",
    text: "yankee finds accounts you never engage with and quietly suggests you let them go.",
  },
  {
    icon: Sliders,
    title: "feeds that talk back",
    text: "set a rule once. yankee enforces it right in your chronological feed.",
  },
  {
    icon: Radio,
    title: "signals & mentions",
    text: "live pings when your name, your crowds or your work show up anywhere.",
  },
];

const chips = [
  { icon: PenLine, label: "caption drafts" },
  { icon: Calendar, label: "post scheduling" },
  { icon: Bell, label: "reminders" },
  { icon: FileText, label: "content briefs" },
  { icon: Compass, label: "trend research" },
  { icon: Plane, label: "travel posts" },
];

const BasicsChips = () => {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!entered) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % chips.length);
    }, 1800);
    return () => clearInterval(id);
  }, [entered]);

  return (
    <motion.div
      className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      onAnimationComplete={() => setEntered(true)}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
      }}
    >
      {chips.map((c, i) => {
        const Icon = c.icon;
        const isActive = entered && active === i;
        return (
          <motion.span
            key={c.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 48,
                x: i % 2 === 0 ? -28 : 28,
                rotate: i % 2 === 0 ? -12 : 12,
                scale: 0.72,
              },
              show: {
                opacity: 1,
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 320, damping: 18 },
              },
            }}
            animate={
              isActive
                ? { y: -8, scale: 1.08, rotate: i % 2 === 0 ? -2 : 2 }
                : { y: 0, scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.45, ease }}
            whileHover={{ y: -6, scale: 1.05, rotate: -3 }}
            className={`yankee-surface yankee-surface--control inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] lowercase cursor-default select-none transition-colors duration-300 ${ isActive ? "bg-folk-bubble text-folk-bubble-foreground" : "bg-card text-foreground" }`}
          >
            <motion.span
              animate={isActive ? { rotate: [0, -12, 12, 0] } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <Icon size={15} />
            </motion.span>
            {c.label}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

const privacyCards = [
  { icon: Lock, title: "yours alone", text: "never sold, never used to train ai. ever." },
  {
    icon: EyeOff,
    title: "private + encrypted",
    text: "your feed, memory and dms live in your space, encrypted where we store them.",
  },
  {
    icon: Trash2,
    title: "gone in seconds",
    text: "delete your account any time. memory, messages and history are destroyed for good.",
  },
];

const memoryChat = [
  { from: "you" as const, text: "what was the name of that cafe we loved in lisbon?" },
  { from: "them" as const, text: "the one you saved as 'tiny blue door near the tram stop'? manteigaria." },
  { from: "you" as const, text: "right. and the photo dump from last summer?" },
  { from: "them" as const, text: "album 'beach week' with 34 photos. july 14th." },
  { from: "you" as const, text: "perfect. thanks yankee." },
];

const Features = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif-display italic text-[1.35rem] md:text-[1.55rem] text-foreground/50 lowercase leading-none"
            >
              product
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease }}
              className="mt-4 text-[2.4rem] sm:text-5xl md:text-[3.4rem] lg:text-[3.75rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[11ch] mx-auto lg:mx-0"
            >
              attention and time,{" "}
              <span className="font-serif-display italic font-medium">back in your hands.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              feed, crowds, chat, calls and yankee ai in one calm toolkit. no algorithm fighting for your attention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
              >
                get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/story"
                className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
              >
                new to yankee?
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {jumpLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="yankee-surface yankee-surface--control px-3.5 py-1.5 rounded-full bg-card text-[12px] lowercase text-foreground hover:-translate-y-1 transition-all"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[440px] md:h-[500px] w-full">
              {heroPhones.map((phone, i) => (
                <motion.div
                  key={phone.label}
                  initial={{ opacity: 0, y: 40, rotate: phone.rotate, scale: phone.scale }}
                  animate={{ opacity: 1, y: 0, rotate: phone.rotate, scale: phone.scale }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease }}
                  className="absolute bottom-0 w-[42%] max-w-[220px] origin-bottom"
                  style={{
                    left: phone.x,
                    zIndex: phone.z,
                  }}
                >
                  <div className="yankee-surface yankee-surface--media rounded-[1.4rem] bg-card p-2 overflow-hidden aspect-[9/17]">
                    <img
                      src={phone.src}
                      alt=""
                      className="w-full h-full object-cover object-top rounded-[1rem]"
                      loading="eager"
                    />
                  </div>
                  <span className="mt-2 block text-center text-[11px] lowercase text-foreground/55">
                    {phone.label}
                  </span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute top-4 right-2 md:top-8 md:right-6 z-20"
              >
                <PromoPill tag="live" text="feed · chat · crowds" to="/feed" />
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="yankee-surface mt-14 md:mt-16 overflow-hidden rounded-[1.5rem] bg-card">
            <div className="flex gap-3 md:gap-4 p-3 md:p-4 animate-[yankee-marquee_40s_linear_infinite] w-max">
              {[homeFeed, messages, videoCall, community, aiChat, profileView, searchImg, chatImg, crowdsHome, homeFeed, messages, videoCall].map(
                (src, i) => (
                  <div
                    key={i}
                    className="yankee-surface yankee-surface--media w-[110px] md:w-[140px] shrink-0 rounded-[1rem] overflow-hidden aspect-[9/17] bg-muted"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
                  </div>
                ),
              )}
            </div>
          </div>
          <p className="mt-4 text-center text-[12px] text-foreground/45 lowercase">
            chronological · private · the whole product surface
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section id="feed" className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">what it does</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            it fights <span className="font-serif-display italic font-medium">for your feed</span>
          </h2>
          <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto lowercase">
            connect once. yankee watches every post, flags forgotten follows, keeps you inside your limits, and pings you the second something matters.
          </p>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {feedGuards.map((g, i) => {
            const Icon = g.icon;
            return (
              <AnimatedSection key={g.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="yankee-surface h-full rounded-[1.5rem] bg-card p-6"
                >
                  <div className="w-10 h-10 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center mb-5">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-foreground tracking-tight lowercase">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed lowercase">{g.text}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[13px] text-muted-foreground lowercase">
              read only access · yankee never posts without your ok
            </p>
            <Link
              to="/feed"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              see how the feed works <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">always on</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            always on, <span className="font-serif-display italic font-medium">only yours</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            feed, chat, calls, crowds and yankee ai live in one place. connected only to the people and rooms you choose.
          </p>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "feed",
              text: "chronological, always. only people you follow.",
              src: homeFeed,
              tint: "bg-folk-surface-warm",
            },
            {
              title: "chat",
              text: "threads that pick up exactly where you left them.",
              src: chatImg,
              tint: "bg-folk-surface-cool",
            },
            {
              title: "calls",
              text: "voice and video, right inside the same calm app.",
              src: videoCall,
              tint: "bg-folk-surface-mint",
            },
            {
              title: "crowds",
              text: "small rooms around what you actually care about.",
              src: crowdsHome,
              tint: "bg-folk-panel",
            },
            {
              title: "yankee ai",
              text: "drafts, reminders and follow-ups that stay private.",
              src: aiChat,
              tint: "bg-muted",
            },
            {
              title: "search",
              text: "find people, posts and rooms without the noise.",
              src: searchImg,
              tint: "bg-card",
            },
          ].map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                className={`yankee-surface h-full rounded-[1.5rem] ${card.tint} p-4 flex flex-col gap-4`}
              >
                <div className="yankee-surface yankee-surface--media rounded-[1.1rem] overflow-hidden aspect-[4/3] bg-card">
                  <img src={card.src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold lowercase tracking-tight">{card.title}</h3>
                  <p className="mt-1.5 text-[13px] text-foreground/65 leading-relaxed lowercase">{card.text}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.25}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[13px] text-muted-foreground lowercase">
              one surface · private by design · always in sync
            </p>
            <Link
              to="/memory"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              learn more <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">focus</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            it keeps you <span className="font-serif-display italic font-medium">present</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            nudges that follow up, drafts that get finished, plans it won&apos;t let you ghost. ask once, yankee stays on it.
          </p>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4">
          {[
            {
              step: "01",
              icon: PenLine,
              title: "you ask once",
              text: "finish the caption. remind me about saturday. keep that draft warm.",
              note: "said once",
            },
            {
              step: "02",
              icon: Bell,
              title: "yankee stays on it",
              text: "quiet nudges at the right moment, without hijacking your whole day.",
              note: "follows up",
            },
            {
              step: "03",
              icon: Calendar,
              title: "it actually lands",
              text: "the post goes out, the plan happens, the thread gets answered.",
              note: "done",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.step} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="yankee-surface relative h-full rounded-[1.5rem] bg-card p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-serif-display italic text-[1.5rem] text-foreground/35 leading-none">
                      {item.step}
                    </span>
                    <span className="yankee-surface yankee-surface--control inline-flex items-center rounded-full px-2.5 py-1 text-[11px] lowercase">
                      {item.note}
                    </span>
                  </div>
                  <div className="yankee-surface mt-6 w-11 h-11 rounded-xl bg-folk-bubble text-white flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold lowercase tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase flex-1">
                    {item.text}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.28}>
          <div className="mt-10 flex justify-center">
            <Link
              to="/notifications"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              learn more <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section id="memory" className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">memory</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              remembers <span className="font-serif-display italic font-medium">everything</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              every message, draft and preference. months of context, and it picks up where you left off.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "private memory · only you can read it",
                "encrypted at rest and end to end",
                "browse, edit or delete anything, any time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/memory"
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              learn more <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.1}>
            <div className="yankee-surface rounded-[1.75rem] bg-card p-5 md:p-7 flex flex-col gap-3 max-w-[440px] mx-auto">
              {memoryChat.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i, ease }}
                  className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`yankee-surface inline-block max-w-[88%] px-4 py-2.5 text-[13px] md:text-[14px] leading-snug lowercase rounded-2xl ${ m.from === "you" ? "bg-folk-bubble text-white rounded-br-md " : "bg-folk-bubble-soft text-foreground rounded-bl-md " }`}
                  >
                    {m.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the basics</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            and yes, <span className="font-serif-display italic font-medium">the basics too</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            caption drafts, scheduling, reminders, research. yankee handles it without making it your whole personality.
          </p>
        </AnimatedSection>

        <BasicsChips />
      </div>
    </section>

    <section id="people" className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[280px]">
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="yankee-surface yankee-surface--media rounded-[1.75rem] bg-card p-3 overflow-hidden aspect-[9/17]"
              >
                <img src={messages} alt="Messages" className="w-full h-full object-cover object-top rounded-[1.25rem]" loading="lazy" />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7 order-1 lg:order-2" delay={0.08}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">your people</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground tracking-tight leading-[0.98] lowercase max-w-[14ch]">
              keeps your people <span className="font-serif-display italic font-medium">close</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              the friends you keep meaning to hear from? yankee makes the thread, finds the moment and pulls the group together.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "your data stays private · one way by design",
                "every request needs your ok · nothing automatic",
                "they only ever learn whether it got done",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/for-friends-family"
              className="yankee-surface yankee-surface--control mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              learn more <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section id="privacy" className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">privacy</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            your data <span className="font-serif-display italic font-medium">stays yours</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase">
            yankee remembers things for you, not about you. private, encrypted, and wipeable whenever you want.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {privacyCards.map((p, i) => {
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
                  <h3 className="text-[16px] font-semibold lowercase">{p.title}</h3>
                  <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed lowercase">{p.text}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              read the privacy policy <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
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
                one calm surface.
                <br />
                <span className="font-serif-display italic font-medium">the whole feed.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                yankee replaces four or five apps with one place that respects your time.
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
                  to="/story"
                  className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
                >
                  read our story
                </Link>
              </motion.div>
              <p className="mt-5 text-[12px] md:text-[13px] text-foreground/45 lowercase">
                chronological · free · no switching
              </p>
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
                      src={homeFeed}
                      alt=""
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">your feed · chronological</span>
                    <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      friends first
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
                    <span className="font-semibold">you</span> finally. one app for all of it.
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

export default Features;
