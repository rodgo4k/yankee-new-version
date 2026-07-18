import { ArrowRight, ArrowUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import appsPreview from "@/assets/hero-crosspost.jpg";
const steps = [
    {
        step: "step 1",
        t: "write it once",
        d: "Open the composer, drop the copy, the photo, the video. Yankee holds the draft the same way it holds a note, quietly, on your device.",
    },
    {
        step: "step 2",
        t: "pick where it lands",
        d: "Toggle Instagram, X, TikTok, Threads. Yankee reformats the piece for each: threads become tweets, paragraphs become slides, video crops itself vertical.",
    },
    {
        step: "step 3",
        t: "ship it, or schedule it",
        d: "Send now, or queue for the golden hour. Yankee handles the API, the retries, and the confirmations. You just watch the posts go live.",
    },
];
const faqs = [
    {
        q: "Do I need a paid API plan on X?",
        a: "No. Yankee uses each platform's official publishing APIs and covers the access on our side. You connect your account once, we handle the rest, tokens, refreshes, quotas, and rate limits.",
    },
    {
        q: "Can I write different versions per platform?",
        a: "Yes. Start from one draft, then tweak the hook for X or swap the cover for TikTok without touching the Instagram version. The composer keeps every variant tied to the same piece.",
    },
    {
        q: "What if a platform is down when I hit publish?",
        a: "The post stays queued and retries automatically. You get a single, non noisy alert if it still can't publish after an hour, and Yankee never double posts on recovery.",
    },
    {
        q: "Does Yankee edit my media?",
        a: "Only what each platform strictly requires: aspect ratios, file size, bitrate. Originals stay in your memory, untouched, so you can repost or export any time.",
    },
    {
        q: "Where do I see how each post performed?",
        a: "Open the composer, tap any shipped piece and Yankee shows a per platform breakdown, views, likes, saves, comments, side by side. No vanity charts, no reshuffled numbers.",
    },
];
const CrossPosting = () => (<Layout>

    <section className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[13px] md:text-[14px] text-foreground/60">cross posting</p>
          <h1 className="mt-6 text-[46px] md:text-[92px] leading-[0.94] tracking-[-0.03em] text-foreground font-semibold max-w-4xl mx-auto">
            write once, <br className="hidden md:block"/>
            <span className="font-serif-display italic text-folk">post everywhere.</span>
          </h1>
          <p className="mt-8 text-[16px] md:text-[18px] text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            One draft, reformatted for Instagram, X, TikTok and Threads. Yankee handles the aspect ratios, the thread splitting, the schedule and the retries. You keep the words.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="mt-12 mx-auto max-w-[560px]">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-border bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <span className="w-9 h-9 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 text-[18px]">+</span>
              <input readOnly placeholder="post to instagram, x, tiktok, threads…" className="flex-1 bg-transparent outline-none text-[14.5px] text-foreground placeholder:text-foreground/40 px-2"/>
              <button className="w-9 h-9 shrink-0 rounded-full bg-folk text-folk-foreground flex items-center justify-center">
                <ArrowUp size={16}/>
              </button>
            </div>
            <p className="mt-4 text-[12.5px] text-foreground/60">free forever. no card needed.</p>

            <div className="mt-6 flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest text-foreground/50">
              <span>posts to</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">📷</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">𝕏</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">🎵</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">🧵</span>
            </div>
          </div>
        </AnimatedSection>
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
          {steps.map((s, i) => (<AnimatedSection key={s.step} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-8 flex flex-col gap-6">
                <span className="inline-flex self-start items-center px-3 py-1.5 rounded-full border border-border text-[11px] uppercase tracking-widest text-foreground/70">{s.step}</span>
                <h3 className="text-[26px] md:text-[28px] font-semibold text-foreground leading-[1.1] tracking-[-0.01em]">
                  <span className="font-serif-display italic">{s.t}</span>
                </h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] border border-border bg-card p-8 md:p-14 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-folk/10 via-transparent to-transparent"/>
            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 flex flex-col gap-6">
                <span className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border border-folk/40 text-folk text-[11px] uppercase tracking-widest">
                  <Sparkles size={12}/> the power poster perk
                </span>
                <h3 className="text-[38px] md:text-[52px] font-semibold text-foreground leading-[1.02] tracking-[-0.02em]">
                  ship 100 posts and <br />
                  <span className="font-serif-display italic">we buy the coffee.</span>
                </h3>
                <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-lg">
                  Cross post a hundred pieces in your first quarter and Yankee sends a $50 café credit, plus early access to the drafts editor. A small thanks for treating four apps like one.
                </p>
                <div>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
                    start posting <ArrowRight size={14}/>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative rounded-[1.75rem] overflow-hidden border border-border aspect-[4/5]">
                  <img src={appsPreview} alt="Post shipped across four apps" className="absolute inset-0 w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-background/90 text-foreground text-[11.5px]">📷 instagram · live</span>
                    <span className="px-2.5 py-1 rounded-full bg-background/90 text-foreground text-[11.5px]">𝕏 threaded · 4/4</span>
                    <span className="px-2.5 py-1 rounded-full bg-background/90 text-foreground text-[11.5px]">🎵 tiktok · scheduled</span>
                    <span className="px-2.5 py-1 rounded-full bg-background/90 text-foreground text-[11.5px]">🧵 threads · live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            <span className="font-serif-display italic">questions</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((f, i) => (<AnimatedSection key={i} delay={i * 0.03}>
              <details className="group rounded-[1.5rem] border border-border bg-card p-6 open:pb-7">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="text-[16px] md:text-[17px] font-medium text-foreground">{f.q}</span>
                  <span className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 group-open:rotate-45 transition-transform">+</span>
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
            ready to <span className="font-serif-display italic">post everywhere?</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            One draft, four apps, one calm queue. Yankee ships the piece, you get the afternoon back.
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
export default CrossPosting;
