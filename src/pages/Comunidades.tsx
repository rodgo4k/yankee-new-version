import { ArrowRight, Users, MapPin, MessageSquare, Split } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import CrowdHeroScene from "@/components/home/CrowdHeroScene";
import cafeFriends from "@/assets/cafe-friends.jpg";
import studentsHero from "@/assets/students-hero.jpg";
import community from "@/assets/yankee/community.png";

const ease = [0.25, 0.4, 0.25, 1] as const;

const blocks = [
  {
    kicker: "small on purpose",
    title: (
      <>
        rooms that stay <span className="font-serif-display italic font-medium">human sized</span>
      </>
    ),
    body: "every crowd caps at a few thousand active members. when one grows too big, it splits by region or interest.",
    chat: [
      { from: "you" as const, text: "is the film crowd still open?" },
      {
        from: "them" as const,
        text: "just split into film · nyc and film · lisbon. want in?",
      },
    ],
  },
  {
    kicker: "signal, no karma",
    title: (
      <>
        threads that <span className="font-serif-display italic font-medium">actually reply</span>
      </>
    ),
    body: "no karma to farm, no downvote brigades. yankee surfaces what your crowd is actually talking about.",
    chat: [
      { from: "you" as const, text: "anything worth reading in #reading this week?" },
      {
        from: "them" as const,
        text: "three threads. a review, a poll, and a lisbon meetup.",
      },
    ],
  },
  {
    kicker: "leaves the screen",
    title: (
      <>
        meetups that <span className="font-serif-display italic font-medium">actually happen</span>
      </>
    ),
    body: "photo walks, book clubs, listening parties. yankee handles the invite, reminders and rsvp.",
    chat: [
      { from: "them" as const, text: "photo walk saturday, golden hour. 12 going." },
      { from: "you" as const, text: "count me in" },
      { from: "them" as const, text: "saved. i'll ping you 1h before." },
    ],
  },
];

const topics = [
  { name: "photography", members: "48k", tint: "bg-folk-surface-warm" },
  { name: "running", members: "22k", tint: "bg-folk-surface-mint" },
  { name: "reading", members: "17k", tint: "bg-folk-surface-cool" },
  { name: "cooking", members: "35k", tint: "bg-folk-panel" },
  { name: "gaming", members: "61k", tint: "bg-muted" },
  { name: "design", members: "29k", tint: "bg-card" },
  { name: "music", members: "44k", tint: "bg-folk-surface-mint" },
  { name: "hiking", members: "12k", tint: "bg-folk-surface-warm" },
  { name: "film", members: "26k", tint: "bg-folk-surface-cool" },
  { name: "cycling", members: "14k", tint: "bg-folk-panel" },
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
    a: "No. Yankee never charges to host or attend a meetup. Some Crowds organise paid events (a dinner, a workshop) and those are always clearly labelled.",
  },
  {
    q: "Will my friends see the Crowds I join?",
    a: "Only if you want them to. Every Crowd membership is private by default. You can pin the ones you're proud of to your profile.",
  },
];

const Communities = () => (
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
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
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
              see how it works
            </Link>
          </motion.div>
          <p className="mt-5 text-[12px] text-foreground/45 lowercase">
            340+ crowds meeting every week
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
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the idea</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            what makes a <span className="font-serif-display italic font-medium">crowd different</span>
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
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">the feel</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            what a crowd <br className="hidden md:block" />
            <span className="font-serif-display italic font-medium">actually feels like</span>
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
                            ? "bg-folk-bubble text-folk-bubble-foreground rounded-br-md shadow-[3px_3px_0_0_hsl(var(--foreground))]"
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

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-7">
            <motion.div
              whileHover={{ y: -2 }}
              className="relative rounded-[1.75rem] border-2 border-foreground overflow-hidden min-h-[360px] md:min-h-[440px] shadow-[6px_6px_0_0_hsl(var(--foreground))]"
            >
              <img src={cafeFriends} alt="A Crowd meetup" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2.5">
                <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md border-2 border-foreground bg-folk-bubble-soft px-3.5 py-2 text-[13px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                  who&apos;s in for saturday?
                </div>
                <div className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2 text-[13px] leading-snug text-folk-bubble-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                  count me in, bringing the film camera
                </div>
                <div className="self-start max-w-[85%] rounded-2xl rounded-bl-md border-2 border-foreground bg-card px-3.5 py-2 text-[13px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
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
          {topics.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.03}>
              <motion.span
                whileHover={{ y: -3, rotate: -2 }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-foreground ${t.tint} text-[13px] text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]`}
              >
                <span className="inline-flex items-center gap-1 text-foreground/55 text-[11px]">
                  <Users size={11} /> {t.members}
                </span>
                <span className="text-foreground/40">·</span>
                <span className="font-medium">#{t.name}</span>
              </motion.span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1100px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">how it works</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps. <span className="font-serif-display italic font-medium">then you&apos;re in.</span>
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

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[280px]">
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="rounded-[1.75rem] border-2 border-foreground bg-card p-3 shadow-[6px_6px_0_0_hsl(var(--foreground))] overflow-hidden aspect-[9/17]"
              >
                <img
                  src={community}
                  alt="Inside a Crowd"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7 order-1 lg:order-2" delay={0.08}>
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">inside a crowd</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[0.98] lowercase max-w-[14ch]">
              one room, <span className="font-serif-display italic font-medium">many rhythms.</span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              every crowd is a chronological thread, a small events board and a shared memory. no infinite scroll.
            </p>
            <Link
              to="/features"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
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
                  className="mr-auto w-[92%] rounded-[1.5rem] border-2 border-foreground bg-card p-4 shadow-[6px_6px_0_0_hsl(var(--foreground))]"
                >
                  <div className="rounded-[1.1rem] overflow-hidden aspect-[5/3] bg-muted">
                    <img
                      src={studentsHero}
                      alt=""
                      className="w-full h-full object-cover object-[50%_35%]"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">slow coffee club</span>
                    <span className="inline-flex items-center rounded-full bg-folk-success px-2.5 py-1 text-[11px] text-foreground lowercase">
                      1,219 online
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 18, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="relative z-10 -mt-5 ml-auto max-w-[85%]"
                >
                  <div className="rounded-2xl rounded-br-md bg-folk-bubble px-4 py-3 text-[13px] leading-snug text-folk-bubble-foreground lowercase shadow-[4px_4px_0_0_hsl(var(--foreground))]">
                    your people are already here.
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
