import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroFeed from "@/assets/hero-feed.jpg";
import homeFeed from "@/assets/yankee/home-feed.png";
const feedBlocks = [
    {
        kicker: "shows what actually matters",
        title: (<>
        surfaces the <span className="font-serif-display italic">right posts</span>
      </>),
        body: "Yankee reads through every account you follow, learns who you truly care about, and puts their posts first, no ranking games.",
        chat: [
            { from: "you" as const, text: "what did I miss from last night?" },
            { from: "them" as const, text: "42 posts. 6 from close friends, kayla shared album covers, alex posted a run." },
        ],
    },
    {
        kicker: "keeps the feed finite",
        title: (<>
        tells you when <span className="font-serif-display italic">you're done</span>
      </>),
        body: "No infinite scroll. Yankee marks the bottom of your feed and steps back, so you can close the app without guilt.",
        chat: [
            { from: "them" as const, text: "you're all caught up. next new post in about 3h." },
            { from: "you" as const, text: "wait that's it?" },
            { from: "them" as const, text: "that's it. see you later." },
        ],
    },
    {
        kicker: "remembers what you like",
        title: (<>
        learns your <span className="font-serif-display italic">taste, quietly</span>
      </>),
        body: "Yankee keeps a private memory of the posts you save, the friends you reply to, and the topics you skip. Every week, it gets sharper.",
        chat: [
            { from: "you" as const, text: "any new photo dumps from the paris crew?" },
            { from: "them" as const, text: "sara posted 12 photos this morning. saved to your paris folder." },
        ],
    },
];
const steps = [
    {
        n: "01",
        t: "connect your accounts",
        d: "Link Yankee to the feeds you already have. Read only, no reposting, no scraping.",
    },
    {
        n: "02",
        t: "yankee sorts the noise",
        d: "It reads every new post, filters ads and dead accounts, and keeps only the people you actually follow.",
    },
    {
        n: "03",
        t: "open, scroll, close",
        d: "Your feed is chronological, finite and honest. When it ends, Yankee tells you and lets you go.",
    },
];
const faqs = [
    {
        q: "how does Yankee decide the order of my feed?",
        a: "By the clock, nothing else. Newest post at the top, oldest unseen at the bottom. No engagement ranking, no reshuffling, no surprise resurfacing.",
    },
    {
        q: "will I miss posts if I don't check often?",
        a: "No. Yankee keeps every unseen post from the people you follow until you open the app. When you come back, they are all there in order, without duplicates.",
    },
    {
        q: "does Yankee show suggested accounts?",
        a: "Never in the feed. Your feed only shows people you chose to follow. Discovery lives in its own space and never leaks into your scroll.",
    },
    {
        q: "are there ads inside the feed?",
        a: "No. Yankee is subscription funded. Your feed is not for sale and never will be.",
    },
    {
        q: "can I switch to a ranked feed?",
        a: "No. A ranked feed is the problem we set out to remove. Yankee is chronological, always.",
    },
    {
        q: "how much does Yankee cost?",
        a: "Free forever for the basic feed. Yankee Pro is $8/month, with memory, close friends, and unlimited crowds. Cancel any time.",
    },
];
const Feed = () => (<Layout>
    
    <section className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-border">
            
            <img src={heroFeed} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-background/25"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-transparent"/>

            
            <div className="relative px-6 md:px-16 pt-20 md:pt-28 pb-10 md:pb-16 text-center">
              <h1 className="text-[42px] md:text-[72px] leading-[0.98] tracking-[-0.02em] text-foreground font-semibold max-w-4xl mx-auto">
                a feed that <br className="hidden md:block"/>
                <span className="font-serif-display italic">respects your time</span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] text-foreground/75 max-w-xl mx-auto leading-relaxed">
                Yankee sorts your feed from start to finish, right inside one calm app.
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
                  <img src={homeFeed} alt="Yankee feed" className="w-full h-full object-cover object-top"/>
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
            <p className="text-[13px] text-muted-foreground">1,000+ already reading their feed with Yankee</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            what Yankee does <br className="hidden md:block"/>
            <span className="font-serif-display italic">for your feed</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {feedBlocks.map((b, i) => (<AnimatedSection key={i} delay={i * 0.05}>
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
            ready for a <span className="font-serif-display italic">quieter feed?</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Free forever for the basics. Pro at $8/month. Cancel any time.
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
export default Feed;
