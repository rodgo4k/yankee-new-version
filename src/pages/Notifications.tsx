import { ArrowRight, Bell, SlidersHorizontal, BellOff } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
const steps = [
    {
        n: "1",
        t: "connect your inboxes inside Yankee",
        d: "Link the accounts and communities you actually care about. Yankee only reads what you choose, and never touches your passwords or private messages.",
    },
    {
        n: "2",
        t: "set your signal rules",
        d: "Decide who and what deserves a ping. DMs, mentions, close friends and community roles can ring. Algorithmic nudges, streak reminders and re-engagement alerts stay silent.",
    },
    {
        n: "3",
        t: "review once a day",
        d: "Yankee batches the rest into a single digest. Skim it in seconds, mark anything urgent, and carry on without your phone begging for attention every three minutes.",
    },
    {
        n: "4",
        t: "let the noise stay outside",
        d: "With quiet mode and scheduled summaries, Yankee holds the line. The apps you use keep working, but your attention belongs to you again.",
    },
];
const faqs = [
    {
        q: "Does Yankee replace my Instagram or X notifications?",
        a: "No. Yankee is your own notification layer. You keep using the apps you like, but the pings pass through Yankee first, filtered and ranked by the rules you set.",
    },
    {
        q: "Will I miss messages from real people?",
        a: "Never. Direct messages, mentions and replies from people you have talked to always land. The ones that disappear are the algorithmic nudges, streak reminders and 'someone you follow just posted' prompts.",
    },
    {
        q: "Can I have different rules for work and personal?",
        a: "Yes. Profiles let you switch contexts in one tap. Work hours, community events and personal time each get their own signal list and quiet schedule.",
    },
    {
        q: "Where are my notification rules stored?",
        a: "On your device by default. If you enable sync, the ruleset is encrypted end-to-end. Yankee never reads the contents of your messages, only the metadata you choose to share.",
    },
];
const Notifications = () => (<Layout>

    <section className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[13px] md:text-[14px] text-foreground/60">notifications</p>
          <h1 className="mt-6 text-[46px] md:text-[92px] leading-[0.94] tracking-[-0.03em] text-foreground font-semibold max-w-4xl mx-auto">
            all your pings, <br className="hidden md:block"/>
            <span className="font-serif-display italic text-folk">one calm inbox.</span>
          </h1>
          <p className="mt-8 text-[16px] md:text-[18px] text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Yankee collects your messages, mentions and updates in one place, filters the noise, and only rings for what you actually care about. No imports, no switching apps, no attention debt.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
              build your signal list
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border/60 bg-card text-foreground text-[14px] font-medium hover:bg-card/80 transition-colors">
              see how it works
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="pb-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] border border-border bg-card p-8 md:p-14 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-folk/10 via-transparent to-transparent"/>
            <div className="relative grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-5 flex flex-col gap-6">
                <span className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border border-folk/40 text-folk text-[11px] uppercase tracking-widest">
                  your signal center
                </span>
                <h3 className="text-[34px] md:text-[46px] font-semibold text-foreground leading-[1.02] tracking-[-0.02em]">
                  tune what <br />
                  <span className="font-serif-display italic">rings for you.</span>
                </h3>
                <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-md">
                  Choose the people, communities and events that matter. Yankee turns dozens of scattered alerts into a single, ranked stream of what deserves your attention.
                </p>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-[1.75rem] border border-border bg-background/60 p-8 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-folk/15 text-folk flex items-center justify-center">
                      <Bell size={22}/>
                    </span>
                    <div className="flex-1">
                      <p className="text-[15px] font-medium text-foreground">direct messages</p>
                      <p className="text-[13px] text-muted-foreground">always ring, from people you talk to</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-folk/20 text-folk text-[11px] font-medium">on</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-foreground/5 text-foreground/60 flex items-center justify-center">
                      <SlidersHorizontal size={22}/>
                    </span>
                    <div className="flex-1">
                      <p className="text-[15px] font-medium text-foreground">algorithmic nudges</p>
                      <p className="text-[13px] text-muted-foreground">silenced by default</p>
                    </div>
                    <span className="px-3 py-1 rounded-full border border-border text-foreground/50 text-[11px] font-medium">off</span>
                  </div>
                  <div className="mt-2 rounded-2xl border border-dashed border-border/60 p-4 text-center text-[13px] text-muted-foreground">
                    47 attention-grabbing pings were kept out of your day.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1100px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02] max-w-3xl">
            how do I get <br />
            <span className="font-serif-display italic">a calm inbox?</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 flex flex-col">
          {steps.map((s, i) => (<AnimatedSection key={s.n} delay={i * 0.04}>
              <div className="grid grid-cols-[auto_1fr] md:grid-cols-[6rem_1fr] gap-6 md:gap-10 py-8 border-t border-border/40 first:border-t-0 last:border-b last:border-b-border/40">
                <div className="flex items-start">
                  <span className="text-[42px] md:text-[64px] font-serif-display italic text-folk leading-none">{s.n}</span>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="text-[22px] md:text-[28px] font-semibold text-foreground tracking-[-0.01em] leading-[1.15]">
                    {s.t}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-2xl">
                    {s.d}
                  </p>
                </div>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-[11px] uppercase tracking-widest text-foreground/70">
                what lands, what doesn't
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-foreground tracking-[-0.02em] leading-[1.05]">
                one screen, <br />
                <span className="font-serif-display italic">only the pings you asked for.</span>
              </h2>
              <p className="mt-6 text-[15.5px] md:text-[16px] text-muted-foreground leading-relaxed max-w-lg">
                Direct messages from real people, mentions in the communities you chose, and the few starred accounts you actually want to hear from. Everything else is silent by default.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["dms", "mentions", "starred people", "community roles"].map((t) => (<span key={t} className="px-3 py-1.5 rounded-full border border-border bg-card text-[12.5px] text-foreground/70">{t}</span>))}
              </div>
            </AnimatedSection>
          </div>

          <div className="md:col-span-6">
            <AnimatedSection delay={0.08}>
              <div className="relative mx-auto max-w-[360px] rounded-[2.25rem] border border-border bg-card p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-between text-[12px] text-foreground/50 px-1">
                  <span>9:41</span>
                  <span className="inline-flex items-center gap-1"><BellOff size={12}/> quiet mode</span>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  {[
        { app: "yankee", who: "julia · dm", msg: "still on for saturday?", when: "now" },
        { app: "yankee", who: "book club · mention", msg: "@you what did you think of ch. 4?", when: "12m" },
        { app: "yankee", who: "digest · 8pm", msg: "2 messages, 1 mention, 0 nudges", when: "1h" },
    ].map((n, i) => (<div key={i} className="rounded-2xl border border-border bg-background/60 p-4 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[11.5px] text-foreground/50">
                        <span className="uppercase tracking-widest">{n.app}</span>
                        <span>{n.when}</span>
                      </div>
                      <p className="text-[14px] text-foreground font-medium">{n.who}</p>
                      <p className="text-[13.5px] text-muted-foreground leading-snug">{n.msg}</p>
                    </div>))}
                  <div className="rounded-2xl border border-dashed border-border/60 p-4 text-center text-[12.5px] text-muted-foreground">
                    47 algorithmic pings were silenced today.
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
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
            get pinged <span className="font-serif-display italic">on purpose.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Set the rules once, let Yankee hold the line, and stop giving your attention away to apps that only want more of it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
              start with notifications <ArrowRight size={14}/>
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card text-foreground text-[14px] font-medium hover:bg-card/80 transition-colors">
              see all features
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default Notifications;
