import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import cafeFriends from "@/assets/cafe-friends.jpg";
import crowdsHome from "@/assets/yankee/crowds-home.png";
const communityBlocks = [
    {
        kicker: "capped by design",
        title: (<>
        rooms that stay at the{" "}
        <span className="font-serif-display italic">right size</span>
      </>),
        body: "Every Crowd caps at a number that keeps conversations real. When it fills, Yankee suggests a natural split so nobody gets lost.",
        chat: [
            { from: "you" as const, text: "the film crowd is getting big" },
            { from: "them" as const, text: "it split into film nyc and film london. pick your city." },
        ],
    },
    {
        kicker: "owned by members",
        title: (<>
        moderation by the{" "}
        <span className="font-serif-display italic">people who show up</span>
      </>),
        body: "Volunteer mods from the Crowd set the tone. Reports are private, handled fast, and never decided by a faceless policy team.",
        chat: [
            { from: "you" as const, text: "someone is off topic in the running crowd" },
            { from: "them" as const, text: "reported. a mod from the crowd replied in 12 minutes." },
        ],
    },
    {
        kicker: "from thread to table",
        title: (<>
        meetups that{" "}
        <span className="font-serif-display italic">actually happen</span>
      </>),
        body: "Every Crowd has a quiet calendar. Photo walks, book clubs, dinners, listening parties. One tap RSVP and a reminder before you leave.",
        chat: [
            { from: "them" as const, text: "photo walk saturday, golden hour. 12 going." },
            { from: "you" as const, text: "count me in, bringing the film camera" },
            { from: "them" as const, text: "saved. i will ping you 1h before." },
        ],
    },
];
const steps = [
    {
        n: "01",
        t: "start your Crowd",
        d: "Pick a topic, a city, or a vibe. Set the cap and the tone. Your room is private until you invite people.",
    },
    {
        n: "02",
        t: "invite your people",
        d: "Send a simple link. They join with their phone number, no public profile needed.",
    },
    {
        n: "03",
        t: "meet, chat, repeat",
        d: "Host threads and events. When the room grows, split it naturally so conversations stay close.",
    },
];
const faqs = [
    {
        q: "what is a Crowd?",
        a: "A Crowd is Yankee's take on a community. Small, topical, capped in size, moderated by its own members and kept alive by regular meetups.",
    },
    {
        q: "how is a Crowd different from a group chat?",
        a: "Crowds are structured around a topic, capped in size, and split when they grow. They include a calendar, threads, and discovery, without the noise of a chat that never ends.",
    },
    {
        q: "can anyone create a Crowd?",
        a: "Yes. Any member can start a Crowd. If it reaches a small threshold of active members in the first month, it gets promoted in the directory.",
    },
    {
        q: "are Crowds moderated?",
        a: "Yes. Every Crowd has volunteer moderators from its own members. Reports are private and handled the same day.",
    },
    {
        q: "do meetups cost anything?",
        a: "No. Meetups are free to host and attend. Paid events are always clearly labeled.",
    },
    {
        q: "will my friends see the Crowds I join?",
        a: "Only if you choose to show them. Membership is private by default.",
    },
];
const ForCommunities = () => (<Layout>

    <section className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border">
            <img src={cafeFriends} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-background/25"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-transparent"/>

            <div className="relative px-6 md:px-16 pt-20 md:pt-28 pb-10 md:pb-16 text-center">
              <h1 className="text-[42px] md:text-[72px] leading-[0.98] tracking-[-0.02em] text-foreground font-semibold max-w-4xl mx-auto">
                a space for your community{" "}
                <br className="hidden md:block"/>
                <span className="font-serif-display italic">that stays close</span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] text-foreground/75 max-w-xl mx-auto leading-relaxed">
                No infinite feeds, no public algorithms, no growth hacks. Just your people, your rituals, and one calm room.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
                  <MessageCircle size={16}/>
                  start your Crowd
                </Link>
              </div>
              <p className="mt-3 text-[12px] text-foreground/60">free for up to 250 members · no ads</p>

              <div className="mt-12 md:mt-16 flex justify-center">
                <div className="w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.2rem] border-[6px] border-foreground/85 bg-card overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
                  <img src={crowdsHome} alt="Yankee Crowds on iPhone" className="w-full h-full object-cover object-top"/>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex -space-x-2">
              {["👩🏻", "👨🏽", "👩🏼", "👨🏻", "👩🏾", "👨🏼"].map((e, i) => (<span key={i} className="w-9 h-9 rounded-full border-2 border-background bg-card flex items-center justify-center text-[16px]">
                  {e}
                </span>))}
            </div>
            <p className="text-[13px] text-muted-foreground">1,200+ communities already meeting up on Yankee</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            what Yankee does <br className="hidden md:block"/>
            <span className="font-serif-display italic">for your Crowd</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {communityBlocks.map((b, i) => (<AnimatedSection key={i} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-7 flex flex-col gap-6">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{b.kicker}</p>
                <h3 className="text-[26px] md:text-[28px] font-semibold text-foreground leading-[1.05] tracking-[-0.01em]">
                  {b.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{b.body}</p>

                <div className="mt-auto flex flex-col gap-2 pt-4">
                  {b.chat.map((m, j) => (<div key={j} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                      <span className={`inline-block max-w-[85%] px-3.5 py-2 text-[13.5px] leading-snug rounded-[1.2rem] ${m.from === "you"
                ? "bg-folk text-folk-foreground rounded-br-md"
                : "bg-muted text-foreground rounded-bl-md"}`}>
                        {m.text}
                      </span>
                    </div>))}
                </div>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            how it <span className="font-serif-display italic">works</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (<AnimatedSection key={s.n} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-8 flex flex-col gap-6">
                <span className="text-[13px] font-medium text-foreground/50">{s.n}</span>
                <h3 className="text-[22px] font-semibold text-foreground leading-tight">{s.t}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            frequently <span className="font-serif-display italic">asked</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((f, i) => (<AnimatedSection key={i} delay={i * 0.03}>
              <details className="group rounded-[1.5rem] border border-border bg-card p-6 open:pb-7">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="text-[16px] md:text-[17px] font-medium text-foreground">{f.q}</span>
                  <span className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14.5px] text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            ready to start <span className="font-serif-display italic">your Crowd?</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Free for up to 250 members. Yankee Pro at $8 per month for larger rooms, admin controls and analytics.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
              start your Crowd <ArrowRight size={14}/>
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card text-foreground text-[14px] font-medium hover:bg-card/80 transition-colors">
              see all features
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default ForCommunities;
