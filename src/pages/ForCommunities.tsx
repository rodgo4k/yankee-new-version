import { ArrowRight, Users, Split, MapPin, Shield, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import PromoPill from "@/components/home/PromoPill";
import CommunityOrgHeroScene from "@/components/home/CommunityOrgHeroScene";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import studentsHero from "@/assets/students-hero.jpg";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Users,
    title: "capped by design",
    text: "every crowd stays at a size that keeps conversations real. when it fills, yankee suggests a natural split.",
  },
  {
    icon: Shield,
    title: "owned by members",
    text: "volunteer mods from the crowd set the tone. reports are private and handled the same day.",
  },
  {
    icon: Calendar,
    title: "meetups built in",
    text: "photo walks, book clubs, dinners. one tap rsvp and a reminder before you leave.",
  },
  {
    icon: Split,
    title: "split, don't sprawl",
    text: "when a room grows, it becomes two rooms. nobody gets lost in a stadium chat.",
  },
];

const blocks = [
  {
    kicker: "capped by design",
    title: (
      <>
        rooms that stay at the{" "}
        <span className="font-serif-display italic font-medium">right size</span>
      </>
    ),
    body: "every crowd caps at a number that keeps conversations real. when it fills, yankee suggests a natural split.",
    chat: [
      { from: "you" as const, text: "the film crowd is getting big" },
      { from: "them" as const, text: "it split into film nyc and film london." },
    ],
  },
  {
    kicker: "owned by members",
    title: (
      <>
        moderation by the{" "}
        <span className="font-serif-display italic font-medium">people who show up</span>
      </>
    ),
    body: "volunteer mods from the crowd set the tone. reports are private, handled fast, never by a faceless policy team.",
    chat: [
      { from: "you" as const, text: "someone is off topic in running" },
      { from: "them" as const, text: "a mod from the crowd replied in 12m." },
    ],
  },
  {
    kicker: "from thread to table",
    title: (
      <>
        meetups that{" "}
        <span className="font-serif-display italic font-medium">actually happen</span>
      </>
    ),
    body: "every crowd has a quiet calendar. one tap rsvp and a reminder before you leave.",
    chat: [
      { from: "them" as const, text: "photo walk saturday. 12 going." },
      { from: "you" as const, text: "count me in" },
    ],
  },
];

const steps = [
  {
    n: "01",
    t: "start your crowd",
    d: "pick a topic, a city, or a vibe. set the cap and the tone. your room is private until you invite people.",
  },
  {
    n: "02",
    t: "invite your people",
    d: "send a simple link. they join with their phone number. no public profile needed.",
  },
  {
    n: "03",
    t: "meet, chat, repeat",
    d: "host threads and events. when the room grows, split it naturally so conversations stay close.",
  },
];

const faqs = [
  {
    q: "What is a Crowd?",
    a: "A Crowd is Yankee's take on a community. Small, topical, capped in size, moderated by its own members and kept alive by regular meetups.",
  },
  {
    q: "How is a Crowd different from a group chat?",
    a: "Crowds are structured around a topic, capped in size, and split when they grow. They include a calendar, threads and discovery, without the noise of a chat that never ends.",
  },
  {
    q: "Can anyone create a Crowd?",
    a: "Yes. Any member can start a Crowd. If it reaches a small threshold of active members in the first month, it gets promoted in the directory.",
  },
  {
    q: "Are Crowds moderated?",
    a: "Yes. Every Crowd has volunteer moderators from its own members. Reports are private and handled the same day.",
  },
  {
    q: "Do meetups cost anything?",
    a: "No. Meetups are free to host and attend. Paid events are always clearly labeled.",
  },
  {
    q: "Will my friends see the Crowds I join?",
    a: "Only if you choose to show them. Membership is private by default.",
  },
];

const ForCommunities = () => (
  <Layout>
    <section className="relative -mt-24 pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <CommunityOrgHeroScene />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <PromoPill tag="for communities" text="human-scale rooms, by design" to="/communities" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease }}
              className="mt-6 text-[2.4rem] sm:text-5xl md:text-[3.4rem] font-semibold text-foreground tracking-tight leading-[0.95] lowercase max-w-[13ch] mx-auto lg:mx-0"
            >
              a space for your community{" "}
              <span className="font-serif-display italic font-medium">that stays close.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto lg:mx-0"
            >
              no infinite feeds, no public algorithms, no growth hacks. just your people, your rituals, and one calm room.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white lowercase tracking-tight
                  bg-[radial-gradient(120%_120%_at_50%_20%,#7EB6FF_0%,#3B82F6_45%,#2563EB_100%)]
                  shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                  hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
              >
                start your crowd <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/communities"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
              >
                explore crowds
              </Link>
            </motion.div>
            <p className="mt-5 text-[12px] text-foreground/45 lowercase">free for up to 250 members · no ads</p>
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
            communities that{" "}
            <span className="font-serif-display italic font-medium">stay human</span>
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
            <span className="font-serif-display italic font-medium">for your crowd</span>
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

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-5">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">in person</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              from the thread{" "}
              <span className="font-serif-display italic font-medium">to the table</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md">
              every crowd has a quiet calendar. host a walk, a dinner, a listening party — without a messy group chat.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "rsvp in one tap",
                "reminders before the meetup",
                "private by default membership",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80 lowercase">
                  <MapPin size={14} className="mt-1 shrink-0 text-foreground/40" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/communities"
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              see how crowds work <ArrowRight size={14} />
            </Link>
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
                  src={crowdsHome}
                  alt="Yankee Crowds"
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
                <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-[#E8E6E1] px-3.5 py-2.5 text-[12px] leading-snug lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                  340+ crowds meeting this week
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
            three steps. <span className="font-serif-display italic font-medium">then you host.</span>
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
            short answers about crowds, mods, meetups and privacy.
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
                className="mt-4 md:mt-5 text-[2.4rem] sm:text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.95] max-w-[12ch]"
              >
                ready to start{" "}
                <span className="font-serif-display italic font-medium">your crowd?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="mt-6 max-w-md text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase"
              >
                free for up to 250 members. yankee pro at $8/month for larger rooms, admin controls and analytics.
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
                  start your crowd <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/communities"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                >
                  explore crowds
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
                      src={studentsHero}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[12px] lowercase text-foreground/70">listening party · friday</span>
                    <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[11px] text-background lowercase">
                      18 going
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
                  <div className="rounded-2xl rounded-bl-md border-2 border-foreground bg-[#E8E6E1] px-4 py-3 text-[13px] leading-snug lowercase shadow-[4px_4px_0_0_hsl(var(--foreground))]">
                    small on purpose. real in person.
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

export default ForCommunities;
