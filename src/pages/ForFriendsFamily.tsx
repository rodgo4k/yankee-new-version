import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import familyField from "@/assets/family-field.jpg";
import videoCall from "@/assets/yankee/video-call.png";
const familyBlocks = [
    {
        kicker: "only the people you chose",
        title: (<>
        a private space for <span className="font-serif-display italic">your people</span>
      </>),
        body: "No public feeds, no suggested accounts, no ads. Profiles start closed and every follow is approved by you.",
        chat: [
            { from: "you" as const, text: "did mom see the photos from the hike?" },
            { from: "them" as const, text: "yes, she saved them to the family album. dad left a voice note too." },
        ],
    },
    {
        kicker: "built for real conversations",
        title: (<>
        groups, calls, <span className="font-serif-display italic">no performance</span>
      </>),
        body: "One thread for each side of the family. Voice and video calls built in. No like counts, no streaks, no pressure to post.",
        chat: [
            { from: "them" as const, text: "cousins group call at 7?" },
            { from: "you" as const, text: "i'm in. bring the pizza story." },
        ],
    },
    {
        kicker: "quiet when you are",
        title: (<>
        notifications that <span className="font-serif-display italic">know their place</span>
      </>),
        body: "Quiet hours are on by default. Important people can still reach you. Everything else waits until morning.",
        chat: [
            { from: "them" as const, text: "quiet mode is on. only family calls will ring." },
            { from: "you" as const, text: "perfect. finally a real dinner." },
        ],
    },
];
const steps = [
    {
        n: "01",
        t: "create your circle",
        d: "Start a private group for your family, your closest friends, or both. No one else can find it.",
    },
    {
        n: "02",
        t: "invite your people",
        d: "Send a simple link. They join with their phone number, no public profile needed.",
    },
    {
        n: "03",
        t: "chat, share, call",
        d: "Post updates, share albums, start a group call. Everything stays inside your circle.",
    },
];
const faqs = [
    {
        q: "do my family members need another app?",
        a: "Yes, but it is one app for everything. Chat, calls, photos and updates all live together, so you stop jumping between five different apps.",
    },
    {
        q: "is it safe for kids?",
        a: "Profiles are private by default. Parents approve contacts and group invites. There are no public metrics, no discovery algorithms and no strangers.",
    },
    {
        q: "can we share photos privately?",
        a: "Yes. Every album lives inside a private circle and is only visible to members. Downloads are optional and you can revoke access at any time.",
    },
    {
        q: "are calls and messages encrypted?",
        a: "Yes. Group chats and calls are end-to-end encrypted. We can not read the content of your conversations, ever.",
    },
    {
        q: "does it cost money?",
        a: "Free for groups up to 12 people. Yankee Family Pro is $8/month for unlimited members, shared albums and admin controls.",
    },
    {
        q: "can i have separate circles for family and friends?",
        a: "Yes. You can create as many circles as you want, each with its own members, albums and notification rules.",
    },
];
const ForFriendsFamily = () => (<Layout>

    <section className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border">
            <img src={familyField} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-background/25"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-transparent"/>

            <div className="relative px-6 md:px-16 pt-20 md:pt-28 pb-10 md:pb-16 text-center">
              <h1 className="text-[42px] md:text-[72px] leading-[0.98] tracking-[-0.02em] text-foreground font-semibold max-w-4xl mx-auto">
                a space for the people <br className="hidden md:block"/>
                <span className="font-serif-display italic">you actually love</span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] text-foreground/75 max-w-xl mx-auto leading-relaxed">
                No public feeds, no algorithms, no strangers. Just your family and friends, in one calm place.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
                  <MessageCircle size={16}/>
                  start your free trial
                </Link>
              </div>
              <p className="mt-3 text-[12px] text-foreground/60">free for up to 12 people · no ads</p>

              <div className="mt-12 md:mt-16 flex justify-center">
                <div className="w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.2rem] border-[6px] border-foreground/85 bg-card overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
                  <img src={videoCall} alt="Yankee video call" className="w-full h-full object-cover object-top"/>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex -space-x-2">
              {["👵🏻", "👴🏽", "👩🏼", "👨🏻", "👧🏾", "👦🏼"].map((e, i) => (<span key={i} className="w-9 h-9 rounded-full border-2 border-background bg-card flex items-center justify-center text-[16px]">
                  {e}
                </span>))}
            </div>
            <p className="text-[13px] text-muted-foreground">2,000+ families already sharing life on Yankee</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            what Yankee does <br className="hidden md:block"/>
            <span className="font-serif-display italic">for your people</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {familyBlocks.map((b, i) => (<AnimatedSection key={i} delay={i * 0.05}>
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
            ready to bring your <span className="font-serif-display italic">people back?</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Free for groups up to 12 people. Family Pro at $8/month. Cancel any time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
              get the app <ArrowRight size={14}/>
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card text-foreground text-[14px] font-medium hover:bg-card/80 transition-colors">
              see all features
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default ForFriendsFamily;
