/**
 * BACKUP da página Download (versão anterior ao hero estilo heyclicky).
 * Para restaurar: copie este arquivo sobre `Download.tsx`
 *   (ou troque o conteúdo) e remova o uso de DownloadDesktopHero.
 */
import { ArrowRight, Apple, Smartphone, QrCode, Shield, WifiOff, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import homeFeed from "@/assets/yankee/home-feed.png";
import cafeFriends from "@/assets/cafe-friends.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const stores = [
  {
    id: "ios",
    title: "iphone & ipad",
    subtitle: "app store",
    desc: "requires ios 16 or later.",
    href: "https://apps.apple.com/us/app/yankee/id6752715457",
    cta: "download for ios",
    icon: Apple,
    bubble: "available now",
  },
  {
    id: "android",
    title: "android",
    subtitle: "google play",
    desc: "requires android 10 or later. same yankee, same quiet feed.",
    href: "https://play.google.com",
    cta: "download for android",
    icon: Smartphone,
    bubble: "available now",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "private by default",
    desc: "your messages and memory stay encrypted on your device.",
  },
  {
    icon: WifiOff,
    title: "works offline",
    desc: "read your feed and drafts even when the signal drops.",
  },
  {
    icon: Sparkles,
    title: "no ads, ever",
    desc: "we don't sell attention. the app is the product.",
  },
];

const steps = [
  { n: "01", t: "pick your store", d: "ios or android. same app, same people." },
  { n: "02", t: "create your account", d: "phone or email. no algorithm profile to fill." },
  { n: "03", t: "invite your people", d: "start a small crowd or follow friends you actually know." },
];

const Download = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] gap-10 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="yankee-surface yankee-surface--control inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5 text-[12px] lowercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-folk-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-folk-success" />
                </span>
                available on ios & android
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.5rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[12ch] mx-auto lg:mx-0"
            >
              get{" "}
              <span className="font-serif-display italic font-medium">yankee</span>
              {" "}on your phone.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              the quieter social app. chronological feed, small crowds, private memory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3"
            >
              {stores.map((store) => {
                const Icon = store.icon;
                return (
                  <a
                    key={store.id}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yankee-surface group inline-flex items-center gap-3 px-5 py-3.5 rounded-[1.15rem] bg-primary text-primary-foreground lowercase hover:-translate-y-1 transition-all"
                  >
                    <Icon size={22} strokeWidth={1.75} />
                    <span className="text-left leading-tight">
                      <span className="block text-[10px] opacity-70">{store.subtitle}</span>
                      <span className="block text-[14px] font-semibold tracking-tight">{store.cta}</span>
                    </span>
                  </a>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-5 text-[13px] text-muted-foreground lowercase"
            >
              or{" "}
              <a href="#stores" className="underline underline-offset-4 decoration-2 text-foreground font-medium">
                compare platforms below
              </a>
            </motion.p>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[340px]">
            <motion.div
              initial={{ opacity: 0, y: 32, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 1.5 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="yankee-surface yankee-surface--media relative z-10 mx-auto w-[78%] rounded-[1.75rem] bg-card p-2.5 overflow-hidden aspect-[9/17]"
            >
              <img
                src={homeFeed}
                alt="Yankee app feed"
                className="w-full h-full object-cover object-top rounded-[1.25rem]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ duration: 0.65, delay: 0.4, ease }}
              className="yankee-surface absolute -left-2 md:-left-6 bottom-[12%] z-20 w-[38%] rounded-[1.1rem] bg-card p-1.5"
            >
              <div className="rounded-[0.75rem] overflow-hidden aspect-square bg-muted">
                <img src={cafeFriends} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute -right-1 md:-right-4 top-[18%] z-20 max-w-[58%]"
            >
              <div className="yankee-surface rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2.5 text-[12px] md:text-[13px] leading-snug text-folk-bubble-foreground lowercase">
                chronological · always
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section id="stores" className="relative py-20 md:py-28 dotted-bg scroll-mt-16">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">platforms</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            choose your{" "}
            <span className="font-serif-display italic font-medium">phone</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-[900px] mx-auto">
          {stores.map((store, i) => {
            const Icon = store.icon;
            return (
              <AnimatedSection key={store.id} delay={i * 0.08}>
                <motion.a
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="yankee-surface group h-full flex flex-col rounded-[1.5rem] bg-card p-6 md:p-7 hover:-translate-y-1 transition-all"
                >
                  <span className="yankee-surface inline-block self-start px-3.5 py-2 text-[13px] leading-snug lowercase rounded-2xl rounded-bl-md bg-folk-bubble text-white">
                    {store.bubble}
                  </span>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-[18px] font-semibold lowercase tracking-tight">{store.title}</h3>
                      <p className="text-[12px] text-muted-foreground lowercase">{store.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed lowercase flex-1">
                    {store.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold lowercase text-foreground">
                    {store.cta}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="yankee-surface rounded-[1.75rem] bg-card overflow-hidden">
            <div className="grid sm:grid-cols-12">
              <div className="sm:col-span-4 border-b-2 sm:border-b-0 sm:border-r-2 border-foreground bg-folk-panel p-7 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="yankee-surface w-28 h-28 rounded-[1.25rem] bg-card flex items-center justify-center">
                  <QrCode size={56} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="mt-4 text-[13px] font-medium lowercase text-foreground">scan on your phone</p>
                <p className="mt-1 text-[12px] text-muted-foreground lowercase">opens the right store</p>
              </div>
              <div className="sm:col-span-8 p-7 md:p-9 flex flex-col justify-center">
                <p className="font-serif-display italic text-[1.2rem] text-foreground/50 lowercase">on another device?</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-[1.05] lowercase">
                  send yourself the{" "}
                  <span className="font-serif-display italic font-medium">link</span>
                </h2>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase max-w-md">
                  email yankee@foretheist.com and we&apos;ll reply with the download links for ios and android.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:yankee@foretheist.com?subject=Send%20me%20the%20download%20link"
                    className="yankee-surface yankee-surface--control group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-folk-panel text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
                  >
                    email me the link <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">why yankee</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            worth putting on your{" "}
            <span className="font-serif-display italic font-medium">home screen</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimatedSection key={r.title} delay={i * 0.06}>
                <div className="yankee-surface h-full rounded-[1.5rem] bg-card p-6">
                  <div className="w-9 h-9 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-[16px] font-semibold lowercase tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{r.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">getting started</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps.{" "}
            <span className="font-serif-display italic font-medium">that&apos;s it.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {steps.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.06}>
              <div className="yankee-surface flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-[1.35rem] bg-card px-5 py-5 md:px-7 md:py-6">
                <span className="font-serif-display italic text-[1.5rem] text-foreground/40 shrink-0 w-12">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold lowercase tracking-tight">{s.t}</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground lowercase">{s.d}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            ready when you{" "}
            <span className="font-serif-display italic font-medium">are.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto">
            download yankee, invite a few people you like, and leave the noise behind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://apps.apple.com/us/app/yankee/id6752715457"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
            >
              <Apple size={16} /> app store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              <Smartphone size={15} /> google play
            </a>
            <Link
              to="/story"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-transparent text-[14px] font-medium text-foreground/70 lowercase hover:text-foreground hover:border-foreground/90 transition-colors"
            >
              read our story
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Download;
