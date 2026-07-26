import { ArrowRight } from "lucide-react";
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
import heroStrip1 from "@/assets/hero-strip-1.png";
import heroStrip2 from "@/assets/hero-strip-2.png";
import heroStrip3 from "@/assets/hero-strip-3.png";
import heroStrip4 from "@/assets/hero-strip-4.png";
import squadPhotos from "@/assets/squad-photos.png";
import dotRevealImg from "@/assets/yankee/dot-reveal.png";
import CrowdsBento from "@/components/home/CrowdsBento";
import PrivacyHeroScene from "@/components/home/PrivacyHeroScene";

const faqItems = [
  {
    q: "What's Yankee?",
    a: "Yankee is an AI-powered, AI-native social network that brings together the experiences people currently use multiple apps for — content, communities, messaging, discovery, networking, and AI — into one real-time software.",
  },
  {
    q: "How does the algorithm work?",
    a: "On Yankee creators have a realistic chance to build momentum and go viral in their own community. You can also jump to any city in the world to see what people are posting there in real time, or explore content through different areas.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Everything is encrypted, we never sell your data and we never train AI on your posts. You can delete your account at any time.",
  },
];

const Index = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 min-h-[100svh] overflow-x-clip bg-card flex flex-col">
      <PrismGrid
        className="pointer-events-auto z-0"
        backgroundColor="hsl(40 30% 97%)"
        boxSize={48}
        borderWidth={1}
        borderColor="rgba(30, 20, 10, 0.07)"
        rotate={{ x: 0, y: 0 }}
        idle
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-card/30 via-transparent via-55% to-background pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[920px] mx-auto px-5 md:px-6 py-10 md:py-12 text-center">
        <div className="mt-6 md:mt-0 md:translate-y-12 lg:translate-y-14">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center"
          >
            <Logo className="h-[4.25rem] md:h-14 lg:h-16 w-auto text-foreground" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-3 md:mt-7 mx-auto max-w-[20ch] sm:max-w-[24ch] font-display lowercase text-foreground text-[1.85rem] md:text-[1.95rem] font-medium leading-[1.15] md:leading-[1.2] tracking-[-0.03em]"
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
              all in one place, all yours
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
            how yankee fits into real social life
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase max-w-lg mx-auto">
            ways you can post, chat and stay close without the noise.
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
            <div className="absolute inset-0 grid grid-cols-4" aria-hidden>
              <img
                src={heroStrip1}
                alt=""
                className="h-full w-full object-cover object-[50%_82%]"
                loading="lazy"
              />
              <img
                src={heroStrip2}
                alt=""
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <img
                src={heroStrip3}
                alt=""
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              <img
                src={heroStrip4}
                alt=""
                className="h-full w-full object-cover object-[50%_78%]"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/40" aria-hidden />
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

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.98]">
            Find your people.
            <br />
            <span className="font-serif-display italic font-medium">Keep them close.</span>
          </h2>
          <p className="mt-5 md:mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase">
            small, self moderated communities around what you actually care about. no endless feeds of strangers.
          </p>
        </AnimatedSection>

        <div className="mt-12 md:mt-14">
          <CrowdsBento />
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            your data stays yours
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            no ad ids, no behavioral trackers, no third party sdks. what we do not collect cannot be leaked, sold or subpoenaed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          </div>
          <p className="mt-5 text-[12px] text-foreground/45 lowercase">encrypted · wipeable · never sold</p>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-12 md:mt-16">
          <PrivacyHeroScene />
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            the things people ask about yankee
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about what yankee offers and how your data stays yours.
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
              <div className="relative mx-auto max-w-md lg:max-w-none pb-2">
                <motion.div
                  initial={{ opacity: 0, y: 28, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                  className={surface("lg", "relative z-0 w-[92%] ml-auto p-4")}
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                      <img
                        src={squadPhotos}
                        alt=""
                        className="w-full h-full object-cover object-[50%_35%]"
                        loading="lazy"
                      />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">squad photos · just now</span>
                    <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      seen by all
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.28 }}
                  className="relative z-20 -mt-2 max-w-[88%] -translate-x-1 sm:-mt-2.5 sm:-translate-x-2"
                >
                  <div className="yankee-chat__bubble yankee-chat__bubble--them text-[13px] shadow-[0_10px_28px_-12px_rgba(0,0,0,0.35)]">
                    <span className="font-semibold">maya · </span>everyone actually saw this?
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                  className="relative z-20 mt-2.5 flex justify-end pr-1 sm:pr-2"
                >
                  <div className="yankee-chat__bubble yankee-chat__bubble--you max-w-[82%] text-[13px] shadow-[0_10px_28px_-12px_rgba(37,99,235,0.45)]">
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
