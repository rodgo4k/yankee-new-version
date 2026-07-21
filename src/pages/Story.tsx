import { ArrowRight, Clock, Eye, Users, Lock, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import rememberOffice from "@/assets/remember-office.jpg";
import heroMountain from "@/assets/hero-mountain.jpg";
import cafeFriends from "@/assets/cafe-friends.jpg";
import familyField from "@/assets/family-field.jpg";
import smallTeamCollab from "@/assets/small-team-collab.jpg";
import tripPhotos from "@/assets/trip-photos.png";
import studentsHero from "@/assets/students-hero.jpg";
import homeFeed from "@/assets/yankee/home-feed.png";

const ease = [0.25, 0.4, 0.25, 1] as const;

const principles = [
  {
    icon: Clock,
    title: "your feed, in order",
    desc: "chronological by default. no hidden reshuffling, no surprise resurfacing.",
    bubble: "newest first, always",
  },
  {
    icon: Eye,
    title: "every post reaches everyone",
    desc: "when you follow someone, you see every post. the follow button actually means something.",
    bubble: "no shadow banning",
  },
  {
    icon: Users,
    title: "crowds stay small",
    desc: "groups have a ceiling. when they get too big, they split before they become forums.",
    bubble: "capped by design",
  },
  {
    icon: Lock,
    title: "memory is private",
    desc: "your saved posts, notes and preferences are encrypted and never used to train models.",
    bubble: "encrypted, yours alone",
  },
  {
    icon: Bell,
    title: "notifications you control",
    desc: "no bait, no streaks, no alerts designed to pull you back in.",
    bubble: "only pings you asked for",
  },
];

const moments = [
  { src: rememberOffice, caption: "a group that actually shows up", rotate: -2 },
  { src: cafeFriends, caption: "a weekend with the people you choose", rotate: 1.5 },
  { src: familyField, caption: "time away from the timeline", rotate: -1 },
];

const howWeBuild = [
  { src: smallTeamCollab, caption: "a quiet office, a loud whiteboard", rotate: -1.5 },
  { src: tripPhotos, caption: "the details live on paper first", rotate: 2 },
  { src: studentsHero, caption: "everyone talks to users", rotate: -2 },
];

const teamRoles = ["design", "engineering", "privacy", "writing", "community"];

const milestones = [
  { year: "01", label: "the itch" },
  { year: "02", label: "first build" },
  { year: "03", label: "shipping quietly" },
];

const FolkPolaroid = ({
  src,
  caption,
  rotate = 0,
}: {
  src: string;
  caption: string;
  rotate?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4, rotate: 0 }}
    transition={{ duration: 0.35, ease }}
    style={{ rotate }}
    className="rounded-[1.35rem] border-2 border-foreground bg-card p-3 pb-5 shadow-[5px_5px_0_0_hsl(var(--foreground))]"
  >
    <div className="rounded-[1rem] overflow-hidden aspect-[4/3] bg-muted border-2 border-foreground/10">
      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <p className="mt-4 text-center text-[13px] text-foreground/70 lowercase font-medium">{caption}</p>
  </motion.div>
);

const Story = () => (
  <Layout>
    <section className="relative -mt-24 pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 dotted-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif-display italic text-[1.15rem] md:text-[1.35rem] text-foreground/45 lowercase"
          >
            company
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.06, ease }}
            className="mt-3 lowercase tracking-tight"
          >
            <span className="block font-serif-display italic font-medium text-[3.2rem] sm:text-6xl md:text-[5.25rem] leading-[0.9] text-foreground">
              yankee
            </span>
            <span className="mt-3 block text-[1.55rem] sm:text-3xl md:text-[2.35rem] font-semibold leading-[1.05] text-foreground/85 max-w-[18ch] mx-auto">
              built slowly, on purpose.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto"
          >
            a social network that treats people like people — chronological, finite, and private by default.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/careers"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                folk-cta
                shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
            >
              see open roles <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-card text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
            >
              just say hi
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease }}
          className="mt-12 md:mt-16"
        >
          <div className="rounded-[1.75rem] md:rounded-[2.25rem] border-2 border-foreground bg-card overflow-hidden shadow-[7px_7px_0_0_hsl(var(--foreground))]">
            <div className="relative aspect-[16/11] md:aspect-[21/9] overflow-hidden">
              <motion.img
                src={heroMountain}
                alt="Landscape — the pace we build at"
                className="absolute inset-0 w-full h-full object-cover object-[50%_48%]"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 md:px-8 py-4 md:py-5 border-t-2 border-foreground bg-folk-panel">
              <p className="text-[13px] md:text-[14px] font-medium text-foreground lowercase tracking-tight">
                not another feed. a quieter way to stay close.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {milestones.map((m, i) => (
                  <motion.span
                    key={m.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-card px-3 py-1 text-[11px] md:text-[12px] lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]"
                  >
                    <span className="font-serif-display italic text-foreground/50">{m.year}</span>
                    <span className="font-medium text-foreground">{m.label}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <AnimatedSection className="lg:col-span-6">
            <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">why we exist</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase max-w-[16ch]">
              we want a feed to feel like{" "}
              <span className="font-serif-display italic font-medium">friends</span>, not a product
            </h2>
            <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg">
              <p>
                most feeds today are built to keep you scrolling, not to keep you connected. they hide posts from the people you follow, surface stuff you never asked for, and call it engagement.
              </p>
              <p>
                we started yankee because we missed the early internet: a feed that was just your friends, in order, and a notification meant someone actually wanted to talk to you.
              </p>
              <p>
                so we are building the quietest social app we can. no algorithmic ranking. no infinite scroll. no growth hacking your attention. just a place to post and be seen.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-6" delay={0.1}>
            <div className="relative mx-auto max-w-[280px]">
              <motion.div
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="rounded-[1.75rem] border-2 border-foreground bg-card p-3 shadow-[6px_6px_0_0_hsl(var(--foreground))] overflow-hidden aspect-[9/17]"
              >
                <img
                  src={homeFeed}
                  alt="Yankee feed"
                  className="w-full h-full object-cover object-top rounded-[1.25rem]"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute -right-2 bottom-[20%] z-10 max-w-[75%]"
              >
                <div className="rounded-2xl rounded-br-md bg-folk-bubble px-3.5 py-2.5 text-[12px] leading-snug text-folk-bubble-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                  chronological · always
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">five things we won&apos;t compromise on</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            this is <span className="font-serif-display italic font-medium">yankee</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection
                key={p.title}
                delay={i * 0.06}
                className={i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  className="h-full rounded-[1.5rem] border-2 border-foreground bg-card p-6 flex flex-col gap-5 shadow-[4px_4px_0_0_hsl(var(--foreground))]"
                >
                  <div className="flex justify-start">
                    <span className="inline-block max-w-[95%] px-3.5 py-2 text-[13px] leading-snug lowercase rounded-2xl rounded-bl-md bg-folk-bubble text-white shadow-[3px_3px_0_0_hsl(var(--foreground))]">
                      {p.bubble}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="w-9 h-9 rounded-xl border-2 border-foreground bg-primary text-primary-foreground flex items-center justify-center mb-4">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-[16px] font-semibold lowercase tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed lowercase">{p.desc}</p>
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
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">who we build for</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            this <span className="font-serif-display italic font-medium">energy</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">people, not screens</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {moments.map((m) => (
            <FolkPolaroid key={m.caption} src={m.src} caption={m.caption} rotate={m.rotate} />
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">life at yankee</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            how we <span className="font-serif-display italic font-medium">build</span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground lowercase">small team, big opinions, shipped weekly.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {howWeBuild.map((m) => (
            <FolkPolaroid key={m.caption} src={m.src} caption={m.caption} rotate={m.rotate} />
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            the team behind <span className="font-serif-display italic font-medium">yankee</span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-lg mx-auto">
            a handful of designers, engineers and writers who think social software should feel social. remote first, small by choice, always hiring people who care about the same things.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {teamRoles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center px-4 py-1.5 rounded-full border-2 border-foreground bg-card text-[13px] font-medium text-foreground lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]"
              >
                {role}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="rounded-[1.75rem] border-2 border-foreground bg-card overflow-hidden shadow-[6px_6px_0_0_hsl(var(--foreground))]">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-center">
                <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">yankee</p>
                <h2 className="mt-3 text-[2rem] sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
                  want to build yankee{" "}
                  <span className="font-serif-display italic font-medium">with us?</span>
                </h2>
                <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-lg">
                  we are a small team who care a lot. if that sounds like you, come say hi.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/careers"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight
                      folk-cta
                      shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
                      hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
                  >
                    see open roles <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border-2 border-foreground/90 bg-background text-[14px] font-medium text-foreground lowercase shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
                  >
                    just say hi
                  </Link>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[13px] text-muted-foreground lowercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-folk-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-folk-success" />
                  </span>
                  yankee is online
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full border-t-2 lg:border-t-0 lg:border-l-2 border-foreground">
                <img
                  src={rememberOffice}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex rounded-full border-2 border-foreground bg-card px-3 py-1.5 text-[12px] lowercase shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                    remote first · small by choice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Story;
