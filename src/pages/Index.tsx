import { ArrowRight, Clock, Users, BellOff, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import HeroStage from "@/components/home/HeroStage";
import IntroVideoSection from "@/components/home/IntroVideoSection";
import DotRevealSection from "@/components/home/DotRevealSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import ChatSequence from "@/components/home/ChatSequence";
import OrbitNodes from "@/components/home/OrbitNodes";
import ReachScene, { FeedStatusPill } from "@/components/home/ReachScene";
import { Logo } from "@/components/Logo";
import PrismGrid from "@/components/home/PrismGrid";
import { surface } from "@/lib/yankeeSurface";
import { blockCard } from "@/lib/yankeeBlock";
import heroParty from "@/assets/hero-party.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import studentsHero from "@/assets/students-hero.jpg";
import communityShot from "@/assets/yankee/community.png";
import homeFeed from "@/assets/yankee/home-feed.png";
import chat from "@/assets/yankee/chat.png";
import videoCall from "@/assets/yankee/video-call.png";
import dotRevealImg from "@/assets/yankee/dot-reveal.png";
import heroFolkMountains from "@/assets/hero-folk-mountains.jpg";

const faqItems = [
  {
    q: "What is Yankee?",
    a: "A social network with no hidden algorithm: a chronological feed, no shadow bans, native communities (Crowds), chat, calls and integrated AI, all in a single app.",
  },
  {
    q: "How does it work without an algorithm?",
    a: "Your feed shows posts from the people you follow in reverse chronological order. No 'suggested', no reordering. Who you follow is who you see.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Everything is encrypted, we never sell your data and we never train AI on your posts. You can delete your account at any time.",
  },
];

const featureCards = [
  {
    icon: Clock,
    title: "chronological order",
    text: "your feed is reverse chronological, always. the latest post is at the top. no opaque ranking.",
  },
  {
    icon: Users,
    title: "complete reach",
    text: "every post you publish reaches every person who follows you. no hidden suppression, ever.",
  },
  {
    icon: BellOff,
    title: "no suggested noise",
    text: "only the people and crowds you follow. no 'recommended for you' pulling you away from friends.",
  },
  {
    icon: ShieldCheck,
    title: "your crowd, your rules",
    text: "communities are small, self moderated and built around what you actually care about.",
  },
];

const Index = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 min-h-[100svh] overflow-x-hidden bg-card flex flex-col">
      <PrismGrid
        className="pointer-events-auto z-0"
        backgroundColor="hsl(40 30% 97%)"
        boxSize={48}
        borderWidth={1}
        borderColor="rgba(30, 20, 10, 0.07)"
        rotate={{ x: 0, y: 0 }}
        idle
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-card/30 via-transparent to-background/80 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[920px] mx-auto px-5 md:px-6 py-10 md:py-12 text-center">
        <div className="mt-6 md:mt-0 md:translate-y-12 lg:translate-y-14">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center"
          >
            <Logo className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto text-foreground" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-6 md:mt-7 mx-auto max-w-[20ch] sm:max-w-[24ch] font-display lowercase text-foreground text-[1.45rem] sm:text-[1.7rem] md:text-[1.95rem] font-medium leading-[1.2] tracking-[-0.03em]"
          >
            <span className="block">the social layer</span>
            <span className="block text-foreground/70 font-normal tracking-[-0.02em]">
              the real world was missing
            </span>
          </motion.p>
        </div>

        <div className="w-full mt-8 sm:mt-9 md:mt-10 relative z-10">
          <HeroStage />
        </div>
      </div>
    </section>

    <IntroVideoSection />

    <section className="relative py-20 md:py-28 dotted-bg overflow-visible">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6 overflow-visible">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              it fights for your feed
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] text-muted-foreground leading-relaxed lowercase">
              yankee shows you every post from the people you follow, in the order they shared it. no hidden algorithm,
              no shadow bans, no suggested content you never asked for.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 overflow-visible">
          {featureCards.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.06} className="overflow-visible">
              <div
                className={blockCard(
                  i,
                  "group p-6 md:p-7 text-center sm:text-left flex flex-col items-center sm:items-start",
                )}
              >
                <div className="yankee-block__icon mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-[2px]">
                  <c.icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="text-[17px] md:text-[18px] font-semibold tracking-tight lowercase">
                  {c.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed lowercase yankee-block__muted">{c.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 md:mt-12 text-center">
            <p className="text-[13px] text-muted-foreground lowercase">
              no algorithmic feed · your attention isn&apos;t the product
            </p>
            <Link
              to="/feed"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              see how the feed works <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <DotRevealSection image={dotRevealImg} />

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection>
            <OrbitNodes />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              always on, all yours
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              feed, chat, calls, crowds and yankee ai live in one place, private by design, connected only to the people
              and rooms you choose.
            </p>
            <Link
              to="/features"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              learn more <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              it keeps you locked in
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              post once and it keeps going. notifications you asked for, a feed that stays honest, and chats that pick up
              exactly where you left them.
            </p>
            <Link
              to="/notifications"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              learn more <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ChatSequence />
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            people who let yankee run their social life
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase max-w-lg mx-auto">
            real ways people are already posting, chatting and staying close without the noise.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <TestimonialCarousel />
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <AnimatedSection className="text-center md:text-left flex flex-col items-center md:items-start">
          <FeedStatusPill />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
            Post once, <span className="font-serif-display italic">it reaches everyone.</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-md lowercase">
            no opaque ranking. every post you publish reaches every person who follows you, in the order you posted.
          </p>
          <Link
            to="/feed"
            className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
          >
            learn more <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ReachScene />
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className={surface("lg", "relative overflow-hidden aspect-[16/11] md:aspect-[21/9]")}>
            <img
              src={heroParty}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-[50%_55%] scale-[1.15] md:scale-[1.2]"
              loading="lazy"
            />
            <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-8 text-center gap-5 md:gap-6">
              <SpeechBubble tail="none" size="sm">
                <PillTag>text it once</PillTag>
                it keeps going
              </SpeechBubble>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[0.98] max-w-3xl">
                Your feed should show <br className="hidden md:block" />
                <span className="font-serif-display italic">your friends.</span>
              </h2>
              <p className="max-w-md text-[14px] md:text-[16px] text-white/80 leading-relaxed">
                We just went back to doing the basics well.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">a closer look</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight max-w-2xl mx-auto leading-[1.02]">
            Feed. Chat. <span className="font-serif-display italic">Calls.</span> All in one calm place.
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-4">
          {[
            { src: homeFeed, title: "Your feed", text: "Reverse-chronological. Nothing else.", rotate: "md:-rotate-2" },
            { src: chat, title: "Real chat", text: "Text, voice notes, groups. No strange limits.", rotate: "md:rotate-1" },
            { src: videoCall, title: "Clear calls", text: "Voice and video, right in the app.", rotate: "md:-rotate-1" },
          ].map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <div className={`transition-transform hover:rotate-0 hover:scale-[1.02] duration-500 ${c.rotate}`}>
                <div className="aspect-[9/17] max-w-[280px] mx-auto md:max-w-none rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 bg-card">
                  <img src={c.src} alt={c.title} className="w-full h-full object-cover object-top" loading="lazy" />
                </div>
                <div className="mt-6 px-2 text-center md:text-left">
                  <h3 className="text-[18px] font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1.5 text-[14px] text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif-display italic text-[1.25rem] md:text-[1.45rem] text-foreground/50 lowercase"
          >
            crowds
          </motion.p>
          <h2 className="mt-3 text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.98]">
            Find your people.
            <br />
            <span className="font-serif-display italic font-medium">Keep them close.</span>
          </h2>
          <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase">
            small, self moderated communities around what you actually care about. no endless feeds of strangers.
          </p>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          <AnimatedSection delay={0.05} className="col-span-1 md:col-span-2">
            <div className={blockCard(0, "min-h-[160px] md:min-h-[200px] p-5 flex flex-col justify-between")}>
              <div className="yankee-block__icon inline-flex w-12 h-12 items-center justify-center rounded-full font-serif-display text-xl italic">
                H
              </div>
              <div>
                <p className="text-[15px] font-semibold lowercase">harvard</p>
                <p className="mt-1 text-[12px] yankee-block__muted lowercase">campus crowd</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="col-span-1 md:col-span-2">
            <div className={blockCard(1, "min-h-[160px] md:min-h-[200px] p-5 flex flex-col justify-between")}>
              <div className="yankee-block__icon inline-flex w-12 h-12 items-center justify-center rounded-full font-semibold text-sm tracking-tight">
                S
              </div>
              <div>
                <p className="text-[15px] font-semibold lowercase">stanford</p>
                <p className="mt-1 text-[12px] yankee-block__muted lowercase">alumni room</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="col-span-2 md:col-span-2 md:row-span-2">
            <motion.div
              whileHover={{ y: -3 }}
              className={surface(
                "interactive",
                "relative h-full min-h-[220px] md:min-h-full overflow-hidden",
              )}
            >
              <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif-display italic text-[1.35rem] md:text-[1.6rem] text-white leading-none">
                  slow coffee club
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-folk-success px-2.5 py-1 text-[11px] font-medium text-folk-success-foreground lowercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  1,219 online
                </span>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.18} className="col-span-2 md:col-span-4">
            <motion.div
              whileHover={{ y: -3 }}
              className={surface(
                "interactive",
                "relative h-full min-h-[180px] md:min-h-[210px] overflow-hidden",
              )}
            >
              <img
                src={studentsHero}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-5 md:p-6 max-w-md">
                <p className="text-[13px] uppercase tracking-widest text-foreground/50">this week</p>
                <p className="mt-2 text-[18px] md:text-[22px] font-semibold tracking-tight lowercase leading-snug">
                  film night in the backyard crowd
                </p>
                <p className="mt-2 text-[13px] text-foreground/60 lowercase">self moderated · capped · yours</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.22} className="col-span-1 md:col-span-3">
            <motion.div
              whileHover={{ y: -3 }}
              className={surface("interactive", "h-full min-h-[140px] p-4 flex gap-4 items-center")}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-foreground/10 shrink-0 shadow-[0_6px_16px_-8px_rgba(0,0,0,0.2)]">
                <img src={communityShot} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
              <div>
                <p className="text-[15px] font-semibold lowercase">running club</p>
                <p className="mt-1 text-[12px] text-muted-foreground lowercase leading-relaxed">
                  meetups, routes, no noisy threads.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.26} className="col-span-1 md:col-span-3">
            <Link to="/communities" className="block h-full">
              <motion.div
                whileHover={{ y: -3 }}
                className={surface(
                  "interactive",
                  "h-full min-h-[140px] bg-folk-bubble p-5 flex flex-col justify-between text-folk-bubble-foreground border-transparent",
                )}
              >
                <div className="w-10 h-10 rounded-full border border-white/35 flex items-center justify-center bg-white/10">
                  <ArrowRight size={16} />
                </div>
                <div>
                  <p className="text-[16px] md:text-[18px] font-semibold lowercase leading-snug">
                    explore new crowds
                  </p>
                  <p className="mt-1 text-[12px] text-white/75 lowercase">find a room that fits</p>
                </div>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/communities"
              className={surface("control", "gap-2 px-7 py-3.5 text-[14px] font-medium text-foreground lowercase")}
            >
              browse crowds <ArrowRight size={14} />
            </Link>
            <p className="text-[12px] text-foreground/45 lowercase">small by design · moderated by people</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            your data stays yours
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase">
            yankee remembers things for you, not about you. private, encrypted, and wipeable whenever you want.
          </p>
        </AnimatedSection>
        <div className="mt-12 grid sm:grid-cols-3 gap-4 md:gap-5">
          {[
            { t: "yours alone", d: "never sold, never used to train ai. ever." },
            { t: "private + encrypted", d: "your stuff stays isolated and encrypted where we store it." },
            { t: "gone in seconds", d: "delete your account anytime and your data is destroyed for good." },
          ].map((c, i) => (
            <AnimatedSection key={c.t} delay={i * 0.06}>
              <div className={blockCard(i, "p-6 md:p-7 text-center sm:text-left")}>
                <h3 className="text-[17px] font-semibold lowercase">{c.t}</h3>
                <p className="mt-3 text-[13px] leading-relaxed lowercase yankee-block__muted">{c.d}</p>
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
            the things people ask before downloading yankee
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about what yankee can do and how your data stays yours.
          </p>
        </AnimatedSection>
        <div className="mt-10 md:mt-12">
          <FAQ items={faqItems} />
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-serif-display italic text-[1.35rem] md:text-[1.6rem] text-foreground/55 lowercase leading-none"
              >
                yankee
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                className="mt-4 md:mt-5 text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.35rem] font-semibold text-foreground tracking-tight leading-[0.95] max-w-[11ch]"
              >
                Less algorithm.
                <br />
                <span className="font-serif-display italic font-medium">More people.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 md:mt-7 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                see the people who actually matter to you again. chronological, private, no algorithm.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-[14px] md:text-[15px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                >
                  get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/features"
                  className={surface("control", "gap-1.5 px-5 py-3.5 text-[14px] font-medium text-foreground lowercase")}
                >
                  see the product
                </Link>
              </motion.div>

              <p className="mt-5 text-[12px] md:text-[13px] text-foreground/45 lowercase">
                chronological · free · no switching
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none lg:min-h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 28, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                  className={surface("lg", "relative z-0 ml-auto w-[92%] p-4")}
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                    <img
                      src={heroFolkMountains}
                      alt=""
                      className="w-full h-full object-cover object-[50%_45%]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">trail photos · just now</span>
                    <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      seen by all
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -18, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.28 }}
                  className="relative z-10 -mt-6 mr-auto max-w-[85%] lg:absolute lg:left-0 lg:top-[44%] lg:mt-0 lg:max-w-[78%]"
                >
                  <div className={surface("sm", "rounded-2xl rounded-bl-md bg-folk-bubble-soft px-4 py-3 text-[13px] leading-snug lowercase")}>
                    <span className="font-semibold">maya</span> everyone actually saw this?
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 18, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                  className="relative z-10 mt-3 ml-auto max-w-[80%] lg:absolute lg:right-2 lg:bottom-0 lg:mt-0 lg:max-w-[72%]"
                >
                  <div className="rounded-2xl rounded-br-md bg-folk-bubble px-4 py-3 text-[13px] leading-snug text-folk-bubble-foreground lowercase shadow-[0_10px_28px_-12px_rgba(37,99,235,0.55)]">
                    yeah. no ranking. every friend.
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

export default Index;
