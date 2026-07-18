import { ArrowRight, ArrowUp, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import homeFeed from "@/assets/yankee/home-feed.png";
const steps = [
    {
        n: "1",
        t: "text yankee",
        d: "No new app to learn. Yankee sits inside the threads you already use, ready to hold anything you toss its way.",
    },
    {
        n: "2",
        t: "save the moment",
        d: "A link, a voice note, an idea, a preference. Say “remember this” and Yankee files it, encrypted, tagged, searchable.",
    },
    {
        n: "3",
        t: "recall it later",
        d: "Ask in plain words, months later. Yankee returns the exact quote, link, or draft, in the same context it was saved.",
    },
];
const engines = [
    {
        badge: "on device · encrypted",
        title: "your private memory.",
        body: "Everything you save lives on your phone first. Backed up as ciphertext only. Your keys, not ours. Nothing feeds a model, nothing trains an AI, nothing gets sold.",
        chips: ["a draft", "a bookmark", "a preference", "a voice note"],
    },
    {
        badge: "shared · opt in per person",
        title: "memory you share.",
        body: "Hand a single memory to a Crowd or a friend. They only see what you passed, nothing else. Revoke access at any time and the memory goes dark on their side.",
        chips: ["a recipe", "a playlist", "a place", "a plan"],
    },
];
type Memory = {
    emoji: string;
    chip: string;
    kind: "private" | "shared";
    title: string;
    rows: {
        label: string;
        value: string;
    }[];
    meta: string;
};
const memories: Memory[] = [
    {
        emoji: "📎",
        chip: "link · june",
        kind: "private",
        title: "The article Maria sent me",
        rows: [
            { label: "slow web design", value: "read later" },
            { label: "12 min read", value: "unopened" },
        ],
        meta: "3 saves this month · private",
    },
    {
        emoji: "🎧",
        chip: "playlist · shared",
        kind: "shared",
        title: "Kitchen playlist for the dinner",
        rows: [
            { label: "shared with", value: "the roommates" },
            { label: "42 tracks", value: "auto updated" },
        ],
        meta: "3 friends listening · shared",
    },
    {
        emoji: "📝",
        chip: "draft · today",
        kind: "private",
        title: "Reply to Alex about the Berlin trip",
        rows: [
            { label: "hotel option", value: "still open" },
            { label: "cafe list", value: "3 saved" },
        ],
        meta: "started on the train · private",
    },
    {
        emoji: "📍",
        chip: "place · lisbon",
        kind: "shared",
        title: "Dessert spot in Alfama",
        rows: [
            { label: "shared by", value: "kayla" },
            { label: "opens at", value: "5pm daily" },
        ],
        meta: "pinned to trip: lisbon · shared",
    },
    {
        emoji: "🎙️",
        chip: "voice · 44s",
        kind: "private",
        title: "Idea for the newsletter intro",
        rows: [
            { label: "transcript", value: "auto, on device" },
            { label: "tags", value: "writing, drafts" },
        ],
        meta: "1 idea today · private",
    },
    {
        emoji: "🔕",
        chip: "preference",
        kind: "private",
        title: "Muted topics · quiet hours",
        rows: [
            { label: "quiet", value: "10pm → 8am" },
            { label: "muted", value: "sports, ads" },
        ],
        meta: "synced across devices · private",
    },
];
const safety = [
    { t: "end to end encrypted", d: "Decryption keys live on your devices. Even under a subpoena, we can only hand over ciphertext blobs." },
    { t: "your keys, not ours", d: "Yankee servers hold an encrypted backup so you can restore on a new phone. Plaintext never leaves your device." },
    { t: "never trained on", d: "Your writing, your saves and your notes are never used to train an AI model. Not ours, not anyone else's." },
    { t: "erase anything, anytime", d: "Delete a memory and it is wiped from your device and our backups within 30 days. No hidden copies." },
];
const Memory = () => (<Layout>

    <section className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[13px] md:text-[14px] text-foreground/60">
            private by default · yours to keep or share
          </p>
          <h1 className="mt-6 text-[46px] md:text-[92px] leading-[0.94] tracking-[-0.03em] text-foreground font-semibold max-w-4xl mx-auto">
            make a memory <br className="hidden md:block"/>
            <span className="font-serif-display italic text-folk">of anything.</span>
          </h1>
          <p className="mt-8 text-[16px] md:text-[18px] text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Yankee turns any thread into a place to remember. A draft, a link, a voice note, a plan. Encrypted on your phone, recallable in plain words, shared only when you say so.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="mt-12 mx-auto max-w-[560px]">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-border bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <span className="w-9 h-9 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 text-[18px]">+</span>
              <input readOnly placeholder="remember this for me…" className="flex-1 bg-transparent outline-none text-[14.5px] text-foreground placeholder:text-foreground/40 px-2"/>
              <button className="w-9 h-9 shrink-0 rounded-full bg-folk text-folk-foreground flex items-center justify-center">
                <ArrowUp size={16}/>
              </button>
            </div>
            <p className="mt-4 text-[12.5px] text-foreground/60">free forever. no card needed.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mt-20 mx-auto max-w-[900px]">
            <div className="absolute inset-x-0 bottom-0 h-[70%] rounded-[3rem] bg-gradient-to-b from-folk/15 via-folk/5 to-transparent"/>
            <div className="relative flex justify-center pt-8">
              <div className="w-[280px] md:w-[340px] aspect-[9/19] rounded-[2.4rem] border-[8px] border-foreground/90 bg-card overflow-hidden shadow-[0_60px_120px_-40px_rgba(0,0,0,0.45)]">
                <img src={homeFeed} alt="Yankee memory on iPhone" className="w-full h-full object-cover object-top"/>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground mb-6">how it works</p>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            text yankee. save the moment. <br className="hidden md:block"/>
            <span className="font-serif-display italic">recall it later.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (<AnimatedSection key={s.n} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-8 flex flex-col gap-5">
                <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[13px] font-medium text-foreground/70">{s.n}</span>
                <h3 className="text-[22px] font-semibold text-foreground leading-tight">{s.t}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground mb-6">two engines</p>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            two kinds of memory. <br className="hidden md:block"/>
            <span className="font-serif-display italic">one calm app.</span>
          </h2>
          <p className="mt-6 text-center text-[15px] md:text-[16px] text-muted-foreground max-w-2xl mx-auto">
            Keep it entirely to yourself, or hand a single piece to a person or a Crowd. Yankee runs both, so you never lose the thread.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {engines.map((e, i) => (<AnimatedSection key={e.title} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-8 md:p-10 flex flex-col gap-6">
                <span className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full border border-border text-[11px] uppercase tracking-widest text-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-folk"/>
                  {e.badge}
                </span>
                <h3 className="text-[32px] md:text-[36px] font-semibold text-foreground leading-[1.05] tracking-[-0.02em]">
                  <span className="font-serif-display italic">{e.title}</span>
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{e.body}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {e.chips.map((c) => (<span key={c} className="px-3 py-1.5 rounded-full border border-border bg-background text-[12.5px] text-foreground/80">{c}</span>))}
                </div>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground mb-6">memories</p>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            if it matters, <span className="font-serif-display italic">it's a memory.</span>
          </h2>
          <p className="mt-6 text-center text-[15px] text-muted-foreground max-w-xl mx-auto">
            From a half finished draft to a place you loved, just tell yankee to hold it, or hand it to the group.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {memories.map((m, i) => (<AnimatedSection key={m.title} delay={i * 0.04}>
              <div className="h-full rounded-[1.75rem] border border-border bg-card p-6 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[13px] text-foreground/70">
                    <span className="text-[16px]">{m.emoji}</span> {m.chip}
                  </span>
                  <span className={`text-[10.5px] uppercase tracking-widest px-2 py-1 rounded-full border ${m.kind === "shared" ? "border-folk/40 text-folk" : "border-border text-muted-foreground"}`}>
                    {m.kind}
                  </span>
                </div>

                <h3 className="text-[19px] font-semibold text-foreground leading-snug">{m.title}</h3>

                <div className="flex flex-col divide-y divide-border/60 border-t border-b border-border/60">
                  {m.rows.map((r) => (<div key={r.label} className="flex items-center justify-between py-2.5 text-[13.5px]">
                      <span className="text-foreground/80">{r.label}</span>
                      <span className="text-muted-foreground">{r.value}</span>
                    </div>))}
                </div>

                <p className="text-[12px] text-muted-foreground">{m.meta}</p>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    
    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground mb-6">safety</p>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            private, <span className="font-serif-display italic">not fragile.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-[900px] mx-auto">
          {safety.map((s, i) => (<AnimatedSection key={s.t} delay={i * 0.04}>
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-folk/15 text-folk flex items-center justify-center">
                  <Check size={15}/>
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    
    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-6">for memory</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            save the first thing <span className="font-serif-display italic">worth keeping.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Text yankee, hand it a draft, a link, a voice note, and watch it come back exactly when you need it.
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
export default Memory;
