import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import rememberOffice from "@/assets/remember-office.jpg";
import profileView from "@/assets/yankee/profile-view.png";
const creatorBlocks = [
    {
        kicker: "shows up everywhere",
        title: (<>
        publish once, <span className="font-serif-display italic">reach every channel</span>
      </>),
        body: "Yankee posts to Instagram, X, TikTok and Threads from one calm composer. No more copy, paste, reformat, repeat.",
        chat: [
            { from: "you" as const, text: "new drop is live everywhere" },
            { from: "them" as const, text: "posted to 4 channels. 12.4k unique followers reached." },
        ],
    },
    {
        kicker: "keeps your audience close",
        title: (<>
        no algorithm <span className="font-serif-display italic">between you and them</span>
      </>),
        body: "Your followers chose to follow you. Yankee makes sure they see what you make, without ad auctions or engagement games hiding it.",
        chat: [
            { from: "them" as const, text: "your last post reached 98% of your followers." },
            { from: "you" as const, text: "that feels like the old internet." },
        ],
    },
    {
        kicker: "you own the work",
        title: (<>
        your archive, <span className="font-serif-display italic">always portable</span>
      </>),
        body: "Export every post, metric and reply any time. Your content is yours, not locked inside a platform that can change the rules overnight.",
        chat: [
            { from: "you" as const, text: "can I download everything?" },
            { from: "them" as const, text: "yes. full export ready in markdown, csv or media zip." },
        ],
    },
];
const steps = [
    {
        n: "01",
        t: "connect your channels",
        d: "Link the accounts you already use. Yankee only posts what you ask, never scraping or DMing without permission.",
    },
    {
        n: "02",
        t: "write once, tweak per platform",
        d: "Compose in one place, then add platform-specific captions, crops or hashtags without juggling five tabs.",
    },
    {
        n: "03",
        t: "publish and watch real reach",
        d: "See honest views, saves and replies across every channel. No vanity score, no hidden ranking.",
    },
];
const faqs = [
    {
        q: "do I still need the native apps?",
        a: "For publishing, no. Yankee can post to each platform. For platform-only features like Stories with stickers, you can still use the native app and let Yankee handle the rest.",
    },
    {
        q: "will my followers actually see my posts?",
        a: "Yes. Yankee posts directly to each platform's chronological feed and surfaces every post to followers who opted in. No algorithmic reshuffling, no surprise shadow throttling.",
    },
    {
        q: "can I schedule posts?",
        a: "Yes. Set the date, time and timezone. Yankee drafts it, queues it, and publishes it for you.",
    },
    {
        q: "what analytics does Yankee show?",
        a: "Views, saves, replies, shares and click-throughs. Simple, honest numbers without engagement scores or dopamine graphs.",
    },
    {
        q: "is there a free plan?",
        a: "Yes. Free forever for one channel and basic analytics. Yankee Pro is $8/month for unlimited channels, scheduling, memory and audience exports.",
    },
    {
        q: "who owns my content?",
        a: "You do. Yankee stores your library so you can export or leave any time. We do not train models on your posts or sell your audience data.",
    },
];
const ForCreators = () => (<Layout>

    <section className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border">

            <img src={rememberOffice} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-background/25"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-transparent"/>

            <div className="relative px-6 md:px-16 pt-20 md:pt-28 pb-10 md:pb-16 text-center">
              <h1 className="text-[42px] md:text-[72px] leading-[0.98] tracking-[-0.02em] text-foreground font-semibold max-w-4xl mx-auto">
                reach your audience, <br className="hidden md:block"/>
                <span className="font-serif-display italic">without the algorithm tax</span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] text-foreground/75 max-w-xl mx-auto leading-relaxed">
                Yankee helps creators publish once and reach every follower across every platform.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
                  <MessageCircle size={16}/>
                  start your free trial
                </Link>
              </div>
              <p className="mt-3 text-[12px] text-foreground/60">free · no app to install</p>

              <div className="mt-12 md:mt-16 flex justify-center">
                <div className="w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.2rem] border-[6px] border-foreground/85 bg-card overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
                  <img src={profileView} alt="Yankee creator profile" className="w-full h-full object-cover object-top"/>
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
            <p className="text-[13px] text-muted-foreground">1,000+ creators already reaching their audience with Yankee</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            what Yankee does <br className="hidden md:block"/>
            <span className="font-serif-display italic">for creators</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {creatorBlocks.map((b, i) => (<AnimatedSection key={i} delay={i * 0.05}>
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
            ready to own <span className="font-serif-display italic">your audience?</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Free forever for one channel. Pro at $8/month. Cancel any time.
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
export default ForCreators;
