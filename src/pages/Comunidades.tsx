import { ArrowRight, Users, MapPin, MessageSquare, Split } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import CrowdHeroScene from "@/components/home/CrowdHeroScene";
import CrowdsBento from "@/components/home/CrowdsBento";
import CrowdFeelScene from "@/components/home/CrowdFeelScene";
import CrowdIdeaScene from "@/components/home/CrowdIdeaScene";
import { CrowdStepsScene, CrowdInsideScene } from "@/components/home/CrowdFlowScenes";
import CrowdAppCard from "@/components/home/CrowdAppCard";
import cafeFriends from "@/assets/cafe-friends.jpg";
import { blockTone } from "@/lib/yankeeBlock";

const ease = [0.25, 0.4, 0.25, 1] as const;

const topics = [
  "photography",
  "running",
  "reading",
  "cooking",
  "gaming",
  "design",
  "music",
  "hiking",
  "film",
  "cycling",
];

const steps = [
  {
    n: "01",
    t: "pick a crowd",
    d: "search by interest or city. peek inside before you join. no lock in.",
  },
  {
    n: "02",
    t: "get the good threads",
    d: "yankee filters what your crowd is actually engaging with and mutes the noise.",
  },
  {
    n: "03",
    t: "show up in person",
    d: "meetups appear in the crowd feed. rsvp in one tap, get a nudge before it starts.",
  },
];

const principles = [
  {
    icon: Users,
    title: "capped on purpose",
    text: "when a crowd gets too big, it splits. conversations stay grounded.",
  },
  {
    icon: MessageSquare,
    title: "replies over karma",
    text: "signal comes from real replies, not scores or downvote piles.",
  },
  {
    icon: MapPin,
    title: "meetups built in",
    text: "invites, rsvps and reminders live right next to the thread.",
  },
  {
    icon: Split,
    title: "moderated by members",
    text: "volunteers from the crowd set the tone. yankee gives the tools.",
  },
];

const faqs = [
  {
    q: "What is a Crowd?",
    a: "A Crowd is Yankee's take on a community. Small, topical, capped in size, moderated by real humans and kept alive by regular meetups. Think group chat energy, structured like a magazine.",
  },
  {
    q: "How are Crowds different from a subreddit or a Discord server?",
    a: "Crowds are capped in size, chronological, and split when they get too big. There is no karma, no upvote ranking and no algorithmic resurfacing. Signal comes from replies, not scores.",
  },
  {
    q: "Can I create my own Crowd?",
    a: "Yes. Any member can propose a Crowd. If it hits a small threshold of active members in the first month, Yankee promotes it into the main directory.",
  },
  {
    q: "Are Crowds moderated?",
    a: "Every Crowd has volunteer moderators from its own members. Yankee provides the tooling, they set the tone. Reports are private and handled the same day.",
  },
  {
    q: "Do meetups cost anything?",
    a: "No. Yankee never charges to host or attend a meetup. Some Crowds may organise paid events (a dinner, a workshop) and those are always clearly labelled.",
  },
  {
    q: "Do my friends see the Crowds I join?",
    a: "Only if you want them to. Every Crowd membership is private by default. You can pin the ones you're proud of to your profile.",
  },
];

const Communities = () => (
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
            <PromoPill tag="crowds" text="small rooms, real people" to="/features" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.6rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase"
          >
            the internet, back to{" "}
            <span className="font-serif-display italic font-medium">human scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto"
          >
            your crowd is a small, topical room, moderated by real people. threads, meetups and rsvps, without a messy group chat.
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
              get yankee <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/features"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              see how it works
            </Link>
          </motion.div>
          <p className="mt-5 text-[12px] text-foreground/45 lowercase">
            crowds meeting every week
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease }}
          className="mt-12 md:mt-16"
        >
          <CrowdHeroScene />
        </motion.div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-5 text-center lg:text-left">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              the idea
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              what makes a{" "}
              <span className="font-serif-display italic font-medium">crowd different</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0">
              voice replies, member moderation, capped rooms and live voice. screens from the app,
              animated.
            </p>
            <ul className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0 text-left">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-0.5 w-8 h-8 rounded-full bg-foreground/[0.06] flex items-center justify-center shrink-0 text-foreground/55">
                      <Icon size={14} />
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold lowercase tracking-tight">{p.title}</p>
                      <p className="mt-0.5 text-[13px] text-muted-foreground leading-relaxed lowercase">
                        {p.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-7 flex justify-center lg:justify-end shrink-0"
            delay={0.1}
          >
            <CrowdIdeaScene />
          </AnimatedSection>
        </div>
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
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-5 text-center lg:text-left">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              the feel
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              what a crowd{" "}
              <span className="font-serif-display italic font-medium">actually feels like</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0">
              explore crowds, drop into channels, then join voice. the same screens from the app,
              animated.
            </p>
            <ul className="mt-8 space-y-3 max-w-md mx-auto lg:mx-0 text-left">
              {[
                "swipe crowds · join or request access",
                "chat in channels with live member counts",
                "jump into voice with a floating pip",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-7 flex justify-center lg:justify-end shrink-0"
            delay={0.1}
          >
            <CrowdFeelScene />
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -2 }}
              className="yankee-surface relative rounded-[1.75rem] overflow-hidden min-h-[360px] md:min-h-[440px]"
            >
              <img src={cafeFriends} alt="A Crowd meetup" className="absolute inset-0 w-full h-full object-cover object-bottom" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col items-start gap-2.5">
                <div className="yankee-chat__bubble yankee-chat__bubble--them w-fit max-w-[85%] text-[13px]">
                  who&apos;s in for saturday?
                </div>
                <div className="yankee-chat__bubble yankee-chat__bubble--you w-fit max-w-[85%] text-[13px]">
                  count me in, bringing the film camera
                </div>
                <div className="yankee-surface w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-card px-3.5 py-2 text-[13px] leading-snug lowercase">
                  12 going · rsvp closes friday 8pm
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">from thread to table</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              a crowd is <span className="font-serif-display italic font-medium">a place, not a feed.</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              every crowd runs its own quiet calendar. yankee sends the invite, tracks the rsvps and reminds you before you leave.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "one tap rsvp, no third party links",
                "location shared only with people going",
                "a soft reminder one hour before start",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">directory</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            a crowd for every <span className="font-serif-display italic font-medium">obsession</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            a snapshot of what people are meeting up around this month.
          </p>
        </AnimatedSection>

        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3">
          {topics.map((name, i) => (
            <AnimatedSection key={name} delay={i * 0.03}>
              <motion.span
                whileHover={{ y: -3, rotate: -2 }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] lowercase ${blockTone(i)}`}
              >
                <Users size={11} className="opacity-70" />
                <span className="font-medium">#{name}</span>
              </motion.span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-5 text-center lg:text-left">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              how it works
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              three steps.{" "}
              <span className="font-serif-display italic font-medium">then you&apos;re in.</span>
            </h2>
            <ul className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0 text-left">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-3">
                  <span className="font-serif-display italic text-[1.25rem] text-foreground/30 leading-none shrink-0 w-8">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold lowercase tracking-tight">{s.t}</p>
                    <p className="mt-0.5 text-[13px] text-muted-foreground leading-relaxed lowercase">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            className="lg:col-span-7 flex justify-center lg:justify-end shrink-0"
            delay={0.1}
          >
            <CrowdStepsScene />
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <AnimatedSection className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
            <CrowdInsideScene />
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-6 order-1 lg:order-2" delay={0.08}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">
              inside a crowd
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[0.98] lowercase max-w-[14ch]">
              one room,{" "}
              <span className="font-serif-display italic font-medium">many rhythms.</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              every crowd is a chronological thread, a small events board and a shared memory. no
              infinite scroll.
            </p>
            <Link
              to="/features"
              className="yankee-surface yankee-surface--control mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
            >
              explore the product <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight lowercase">
            crowds, <span className="font-serif-display italic font-medium">explained.</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">
            short answers about size, moderation, meetups and privacy.
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
                className="mt-4 md:mt-5 text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.95] max-w-[10ch]"
              >
                find your <span className="font-serif-display italic font-medium">crowd.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                join crowds, host meetups, keep rooms human-scale. chronological and private by default.
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
                  className="mr-auto w-[92%] aspect-[4/5]"
                >
                  <CrowdAppCard
                    name="Coffee Club"
                    src={cafeFriends}
                    count="2.104"
                    tags={["#coffee", "#friends"]}
                    pos="50% 100%"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 18, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="relative z-10 -mt-5 ml-auto max-w-[85%]"
                >
                  <div className="yankee-chat__bubble yankee-chat__bubble--you text-[13px] md:text-[14px]">
                    your people gather here.
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

export default Communities;
