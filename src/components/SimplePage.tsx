import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import FAQ, { FAQItem } from "@/components/FAQ";
export type ChatMsg = {
    from: "them" | "you";
    text: string;
};
export type Tint = "none" | "sand" | "sage" | "sky" | "blush" | "dark";
export interface Block {
    kicker?: string;
    title: ReactNode;
    body?: ReactNode;
    cards?: {
        t: string;
        d: string;
        n?: string;
    }[];
    pairs?: [
        string,
        string
    ][];
    quote?: string;
    chat?: ChatMsg[];
    chatLeft?: boolean;
    faqs?: FAQItem[];
    tint?: Tint;
    image?: string;
}
interface SimplePageProps {
    tag: string;
    eyebrow: string;
    title: ReactNode;
    subtitle: string;
    blocks: Block[];
    ctaTitle: ReactNode;
    ctaBody?: string;
    ctaLabel?: string;
    ctaTo?: string;
    heroVariant?: "minimal" | "panel" | "split" | "display";
    heroTint?: Exclude<Tint, "none">;
    hero?: string;
}
const tintBg: Record<Tint, string> = {
    none: "",
    sand: "bg-[#efe6d6]",
    sage: "bg-[#d9e2d1]",
    sky: "bg-[#d6e2ec]",
    blush: "bg-[#ecd8d3]",
    dark: "bg-[#1a1613] text-[#f2ebe0]",
};
const cardTintBg: Record<Tint, string> = {
    none: "bg-card",
    sand: "bg-[#f7efe0]",
    sage: "bg-[#e6ecdd]",
    sky: "bg-[#e2ecf4]",
    blush: "bg-[#f4e2dd]",
    dark: "bg-[#241d19] text-[#f2ebe0] border-[#3a2f28]",
};
const softRotation: Tint[] = ["sand", "sage", "sky", "blush"];
const variants = ["minimal", "panel", "split", "display"] as const;
const CTAButtons = ({ ctaTo, ctaLabel, align = "center", }: {
    ctaTo: string;
    ctaLabel: string;
    align?: "center" | "start";
}) => (<div className={`mt-10 flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
    <Link to={ctaTo} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-90 transition-opacity">
      {ctaLabel} <ArrowRight size={14}/>
    </Link>
    <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-foreground border border-border text-[13px] font-medium hover:bg-muted transition-colors">
      See how it works
    </Link>
  </div>);
const SimplePage = ({ tag, eyebrow, title, subtitle, blocks, ctaTitle, ctaBody = "Yankee is for the people who miss when their feed was just their friends.", ctaLabel = "Get the app", ctaTo = "/contact", heroVariant, heroTint, }: SimplePageProps) => {
    const seed = (tag.length * 7 + eyebrow.length) >>> 0;
    const variant = heroVariant ?? variants[seed % variants.length];
    const panelTint: Exclude<Tint, "none"> = heroTint ?? (softRotation[seed % softRotation.length] as Exclude<Tint, "none">);
    const Pill = (<SpeechBubble tail="none" className="text-[13px]">
      <PillTag>{tag}</PillTag>
      {eyebrow}
    </SpeechBubble>);
    return (<Layout>
      {variant === "minimal" && (<section className="pt-40 md:pt-52 pb-20 md:pb-28">
          <div className="max-w-[1000px] mx-auto px-6 text-center">
            {Pill}
            <h1 className="mt-10 text-5xl md:text-7xl lg:text-[5.5rem] font-semibold text-foreground tracking-tight leading-[0.98]">
              {title}
            </h1>
            <p className="mt-8 text-[17px] text-foreground/75 leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
            <CTAButtons ctaTo={ctaTo} ctaLabel={ctaLabel}/>
          </div>
        </section>)}

      {variant === "panel" && (<section className="pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className={`rounded-[2.5rem] ${tintBg[panelTint]} px-8 md:px-16 py-20 md:py-28 text-center`}>
              {Pill}
              <h1 className="mt-8 text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-[0.98]">
                {title}
              </h1>
              <p className="mt-6 text-[17px] text-foreground/75 leading-relaxed max-w-xl mx-auto">
                {subtitle}
              </p>
              <CTAButtons ctaTo={ctaTo} ctaLabel={ctaLabel}/>
            </div>
          </div>
        </section>)}

      {variant === "split" && (<section className="pt-40 md:pt-48 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[1.15fr_1fr] gap-14 md:gap-20 items-center">
            <div>
              {Pill}
              <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight leading-[1.0]">
                {title}
              </h1>
              <p className="mt-6 text-[16px] text-foreground/75 leading-relaxed max-w-lg">
                {subtitle}
              </p>
              <CTAButtons ctaTo={ctaTo} ctaLabel={ctaLabel} align="start"/>
            </div>
            <div className={`rounded-[2rem] ${tintBg[panelTint]} p-8 md:p-10 flex flex-col gap-3`}>
              <div className="flex justify-start">
                <span className="inline-block max-w-[85%] px-4 py-2.5 text-[14px] leading-snug rounded-[1.4rem] bg-background text-foreground rounded-bl-md border border-border">
                  {eyebrow}
                </span>
              </div>
              <div className="flex justify-end">
                <span className="inline-block max-w-[85%] px-4 py-2.5 text-[14px] leading-snug rounded-[1.4rem] bg-folk text-folk-foreground rounded-br-md">
                  tell me more.
                </span>

              </div>
              <div className="flex justify-start">
                <span className="inline-block max-w-[85%] px-4 py-2.5 text-[14px] leading-snug rounded-[1.4rem] bg-background text-foreground rounded-bl-md border border-border">
                  it&apos;s built exactly for that. keep reading.
                </span>
              </div>
            </div>
          </div>
        </section>)}

      {variant === "display" && (<section className="pt-40 md:pt-48 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            {Pill}
            <div className="mt-10 grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-end">
              <h1 className="text-6xl md:text-[6.5rem] lg:text-[8rem] font-semibold text-foreground tracking-[-0.02em] leading-[0.92]">
                {title}
              </h1>
              <div className="md:pb-4">
                <p className="text-[16px] text-foreground/75 leading-relaxed max-w-md">
                  {subtitle}
                </p>
                <CTAButtons ctaTo={ctaTo} ctaLabel={ctaLabel} align="start"/>
              </div>
            </div>
          </div>
        </section>)}

      {blocks.map((b, idx) => {
            const hasChat = b.chat && b.chat.length > 0;
            const tint: Tint = b.tint ?? "none";
            const isTinted = tint !== "none";
            const flip = idx % 2 === 1;
            return (<section key={idx} className={`${isTinted ? tintBg[tint] : ""} ${flip ? "py-24 md:py-32" : "py-28 md:py-36"} ${!isTinted ? "border-t border-border/40" : ""}`}>
            <div className="max-w-[1150px] mx-auto px-6">
              {hasChat ? (<div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${b.chatLeft ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <AnimatedSection>
                    <div className="max-w-md">
                      {b.kicker && (<p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                          {b.kicker}
                        </p>)}
                      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
                        {b.title}
                      </h2>
                      {b.body && (<p className="mt-6 text-[15px] leading-relaxed opacity-75">{b.body}</p>)}
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.1}>
                    <div className={`yankee-surface yankee-surface--lg rounded-[2rem] p-6 md:p-8 flex flex-col gap-3 ${isTinted ? "bg-background/70 backdrop-blur-sm" : "bg-card"}`}>
                      {b.chat!.map((m, i) => (<div key={i} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                          <span className={`inline-block max-w-[85%] px-4 py-2.5 text-[14px] leading-snug rounded-[1.4rem] ${m.from === "you" ? "bg-folk text-folk-foreground rounded-br-md" : "bg-muted text-foreground rounded-bl-md"}`}>
                            {m.text}
                          </span>
                        </div>))}
                    </div>
                  </AnimatedSection>
                </div>) : b.image ? (<div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <AnimatedSection>
                    <div className="max-w-md">
                      {b.kicker && (<p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                          {b.kicker}
                        </p>)}
                      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
                        {b.title}
                      </h2>
                      {b.body && (<p className="mt-6 text-[15px] leading-relaxed opacity-75">{b.body}</p>)}
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.1}>
                    <div className="yankee-surface yankee-surface--media rounded-[2rem] overflow-hidden">
                      <img src={b.image} alt="" className="w-full h-full object-cover"/>
                    </div>
                  </AnimatedSection>
                </div>) : (<AnimatedSection>
                  <div className="text-center max-w-2xl mx-auto">
                    {b.kicker && (<p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
                        {b.kicker}
                      </p>)}
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
                      {b.title}
                    </h2>
                    {b.body && (<p className="mt-6 text-[16px] leading-relaxed opacity-75">{b.body}</p>)}
                  </div>
                </AnimatedSection>)}

              {b.quote && (<AnimatedSection>
                  <p className="mt-14 max-w-[820px] mx-auto text-center text-2xl md:text-3xl font-serif-display italic leading-[1.35]">
                    &ldquo;{b.quote}&rdquo;
                  </p>
                </AnimatedSection>)}

              {b.cards && (<div className={`mt-14 grid gap-4 ${b.cards.length >= 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
                  {b.cards.map((c, i) => {
                        const cardTint: Tint = tint !== "none" ? "none" : softRotation[i % softRotation.length];
                        return (<AnimatedSection key={i} delay={i * 0.05}>
                        <div className={`h-full rounded-[2rem] border border-border/60 p-8 flex flex-col gap-4 ${cardTintBg[cardTint]}`}>
                          {c.n && (<span className="text-[12px] font-medium text-foreground/50 tracking-widest">
                              {c.n}
                            </span>)}
                          <h3 className="text-xl md:text-2xl font-semibold leading-tight">{c.t}</h3>
                          <p className="text-[13px] opacity-70 leading-relaxed">{c.d}</p>
                        </div>
                      </AnimatedSection>);
                    })}
                </div>)}

              {b.pairs && (<div className="mt-12 rounded-[2rem] border border-border bg-card divide-y divide-border overflow-hidden max-w-[900px] mx-auto">
                  {b.pairs.map(([l, r], i) => (<div key={i} className="grid md:grid-cols-2">
                      <div className="p-6 md:p-8 text-[14px] text-muted-foreground line-through decoration-muted-foreground/40">
                        {l}
                      </div>
                      <div className="p-6 md:p-8 text-[14px] text-foreground border-t md:border-t-0 md:border-l border-border">
                        {r}
                      </div>
                    </div>))}
                </div>)}

              {b.faqs && (<div className="mt-12 max-w-[820px] mx-auto">
                  <FAQ items={b.faqs}/>
                </div>)}
            </div>
          </section>);
        })}

      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className={`rounded-[2.5rem] ${tintBg[panelTint]} px-8 md:px-16 py-20 md:py-28 text-center`}>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
              {ctaTitle}
            </h2>
            <p className="mt-6 text-[16px] text-foreground/75 max-w-md mx-auto">{ctaBody}</p>
            <Link to={ctaTo} className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-90 transition-opacity">
              {ctaLabel} <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>
    </Layout>);
};
export default SimplePage;
