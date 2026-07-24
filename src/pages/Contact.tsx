import { ArrowRight, ArrowUpRight, Mail, Instagram, Twitter, Music2, Handshake, Newspaper, LifeBuoy, Briefcase, Globe2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import friendsVideoCall from "@/assets/friends-video-call.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import smallTeamCollab from "@/assets/small-team-collab.jpg";
import rememberOffice from "@/assets/remember-office.jpg";
import { YANKEE_EMAIL, YANKEE_MAILTO } from "@/lib/email";

const ease = [0.25, 0.4, 0.25, 1] as const;

const channels = [
  { name: "general", handle: YANKEE_EMAIL, href: YANKEE_MAILTO, icon: Mail, kind: "email" as const },
  { name: "press", handle: YANKEE_EMAIL, href: YANKEE_MAILTO, icon: Mail, kind: "email" as const },
  { name: "partnerships", handle: YANKEE_EMAIL, href: YANKEE_MAILTO, icon: Mail, kind: "email" as const },
  { name: "jobs", handle: YANKEE_EMAIL, href: YANKEE_MAILTO, icon: Mail, kind: "email" as const },
  { name: "instagram", handle: "@yankeeapp", href: "https://instagram.com/yankeeapp", icon: Instagram, kind: "social" as const },
  { name: "x / twitter", handle: "@yankeeapp", href: "https://x.com/yankeeapp", icon: Twitter, kind: "social" as const },
  { name: "tiktok", handle: "@yankeeapp", href: "https://tiktok.com/@yankeeapp", icon: Music2, kind: "social" as const },
];

const helps = [
  {
    icon: Handshake,
    bubble: "collabs welcome",
    t: "partnerships",
    d: "brands, creators or crowds interested in collaborating with us.",
  },
  {
    icon: Newspaper,
    bubble: "we reply fast",
    t: "press",
    d: "interviews, coverage requests or background on the company.",
  },
  {
    icon: LifeBuoy,
    bubble: "real humans",
    t: "support",
    d: "trouble with your account, a bug, or a moderation question.",
  },
  {
    icon: Briefcase,
    bubble: "we're hiring",
    t: "careers",
    d: "engineering, design and community roles. come build with us.",
  },
];

const inboxPreview = [
  { id: "general", from: YANKEE_EMAIL, subject: "say anything", rotate: -2.5, z: 10 },
  { id: "press", from: YANKEE_EMAIL, subject: "for journalists", rotate: 1.5, z: 20 },
  { id: "jobs", from: YANKEE_EMAIL, subject: "open roles", rotate: -1, z: 30 },
];

const heroPhotos = [
  { src: friendsVideoCall, rotate: -3 },
  { src: cafeFriends, rotate: 2 },
  { src: smallTeamCollab, rotate: -1.5 },
  { src: rememberOffice, rotate: 2.5 },
];

const Contact = () => (
  <Layout>
    <section className="relative -mt-12 md:-mt-14 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-8 lg:gap-6 xl:gap-8 items-center">
          <div className="text-center lg:text-left lg:pr-2">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="yankee-surface inline-flex rounded-2xl rounded-bl-md bg-folk-bubble px-3.5 py-2 text-[13px] leading-snug text-folk-bubble-foreground lowercase">
                we read everything
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.5rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[12ch] mx-auto lg:mx-0"
            >
              get in touch.{" "}
              <span className="font-serif-display italic font-medium">directly.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              no forms, no ticket queues. every email below reaches a real person on the yankee team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={YANKEE_MAILTO}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
              >
                email yankee@ <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#channels"
                className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
              >
                all channels
              </a>
            </motion.div>
          </div>

          <div className="w-full max-w-[520px] mx-auto lg:max-w-none lg:mx-0">
            <div className="relative w-full">
              <div className="relative h-[200px] md:h-[230px]">
                {inboxPreview.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 28, rotate: card.rotate + 4 }}
                    animate={{ opacity: 1, y: i * 18, rotate: card.rotate }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
                    whileHover={{ y: i * 18 - 10, scale: 1.02, zIndex: 40 }}
                    className="yankee-surface absolute left-0 right-0 rounded-[1.35rem] bg-card p-5 cursor-default"
                    style={{ zIndex: card.z, top: 8 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-9 h-9 shrink-0 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center">
                          <Mail size={15} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold lowercase truncate">{card.from}</p>
                          <p className="text-[12px] text-muted-foreground lowercase truncate">{card.subject}</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-muted-foreground lowercase shrink-0">inbox</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative z-40 mt-1 flex items-end justify-between gap-2 md:gap-3">
                {heroPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20, rotate: photo.rotate + 3 }}
                    animate={{ opacity: 1, y: 0, rotate: photo.rotate }}
                    transition={{ duration: 0.55, delay: 0.45 + i * 0.08, ease }}
                    whileHover={{ y: -8, rotate: 0, scale: 1.05, zIndex: 50 }}
                    className="yankee-surface flex-1 rounded-[1rem] bg-card p-1.5 cursor-pointer"
                  >
                    <div className="rounded-[0.7rem] overflow-hidden aspect-square bg-muted">
                      <img src={photo.src} alt="" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="channels" className="relative py-20 md:py-28 dotted-bg scroll-mt-16">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">our channels</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            pick a line.{" "}
            <span className="font-serif-display italic font-medium">we answer.</span>
          </h2>
        </AnimatedSection>

        <div className="yankee-surface rounded-[1.75rem] bg-card overflow-hidden">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimatedSection key={c.name} delay={i * 0.03}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center justify-between gap-4 p-5 md:p-6 hover:bg-folk-panel transition-colors ${ i < channels.length - 1 ? "border-b-2 border-foreground" : "" }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="yankee-surface w-10 h-10 shrink-0 rounded-xl bg-background flex items-center justify-center">
                      <Icon size={16} className="text-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[15px] font-semibold text-foreground lowercase">{c.name}</p>
                        <span className="inline-flex rounded-full border border-foreground/20 px-2 py-0.5 text-[10px] lowercase text-muted-foreground">
                          {c.kind}
                        </span>
                      </div>
                      <p className="text-[13px] text-muted-foreground lowercase truncate">{c.handle}</p>
                    </div>
                  </div>
                  <span className="yankee-surface yankee-surface--control inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-primary text-primary-foreground group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform">
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how we can help</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            reach the right{" "}
            <span className="font-serif-display italic font-medium">team</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {helps.map((h, i) => {
            const Icon = h.icon;
            return (
              <AnimatedSection key={h.t} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="yankee-surface h-full rounded-[1.5rem] bg-card p-6 flex flex-col gap-5"
                >
                  <span className="yankee-surface inline-block self-start px-3.5 py-2 text-[13px] leading-snug lowercase rounded-2xl rounded-bl-md bg-folk-bubble text-white">
                    {h.bubble}
                  </span>
                  <div className="mt-auto">
                    <div className="w-9 h-9 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-[16px] font-semibold lowercase tracking-tight">{h.t}</h3>
                    <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{h.d}</p>
                  </div>
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
        <div className="grid md:grid-cols-2 gap-4">
          <AnimatedSection>
            <div className="yankee-surface h-full rounded-[1.5rem] bg-card p-7 md:p-8">
              <div className="w-9 h-9 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <Globe2 size={16} />
              </div>
              <p className="font-serif-display italic text-[1.1rem] text-foreground/50 lowercase">office</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground lowercase tracking-tight">
                global · remote-first
              </h3>
              <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase">
                the yankee team is distributed across three continents. we publish our current locations in the careers listings.
              </p>
              <Link
                to="/careers"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium lowercase text-foreground underline underline-offset-4 decoration-2"
              >
                see careers <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="yankee-surface h-full rounded-[1.5rem] bg-card p-7 md:p-8">
              <div className="w-9 h-9 rounded-xl border border-foreground/15 bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <Clock size={16} />
              </div>
              <p className="font-serif-display italic text-[1.1rem] text-foreground/50 lowercase">response time</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-foreground lowercase tracking-tight">
                under 48 hours
              </h3>
              <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase">
                every email is triaged the same day it arrives. if it&apos;s urgent — a moderation issue or a security report — we escalate immediately.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            still unsure{" "}
            <span className="font-serif-display italic font-medium">where to write?</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto">
            start with yankee@. we&apos;ll route it to the right person.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={YANKEE_MAILTO}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
            >
              yankee@foretheist.com <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/story"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              read our story
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Contact;
