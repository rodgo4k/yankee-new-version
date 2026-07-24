import { ArrowRight, Apple, QrCode, Shield, WifiOff, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import DownloadDesktopHero from "@/components/home/DownloadDesktopHero";
import { APP_STORE_URL } from "@/lib/appStore";
import { YANKEE_EMAIL, YANKEE_MAILTO } from "@/lib/email";
import { blockCard } from "@/lib/yankeeBlock";

const reasons = [
  {
    icon: Shield,
    title: "private by default",
    desc: "your messages and memory will stay encrypted on your device.",
  },
  {
    icon: WifiOff,
    title: "works offline",
    desc: "you'll be able to read your feed and drafts even when the signal drops.",
  },
  {
    icon: Sparkles,
    title: "no ads, ever",
    desc: "we won't sell attention. the app is the product.",
  },
];

const steps = [
  { n: "01", t: "get notified for ios", d: "we'll share the app store link when yankee launches." },
  { n: "02", t: "create your account", d: "phone or email. no algorithm profile to fill." },
  { n: "03", t: "invite your people", d: "start a small crowd or follow friends you actually know." },
];

const Download = () => (
  <Layout>
    <DownloadDesktopHero iosHref={APP_STORE_URL} />

    <section id="stores" className="relative py-20 md:py-28 dotted-bg scroll-mt-16">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[560px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">coming soon</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            launching on{" "}
            <span className="font-serif-display italic font-medium">iphone &amp; ipad</span>
          </h2>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
          >
            <Apple size={16} /> notify me for ios
          </a>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection>
          <div className="yankee-surface rounded-[1.75rem] bg-card overflow-hidden">
            <div className="grid sm:grid-cols-12">
              <div className="sm:col-span-4 border-b sm:border-b-0 sm:border-r border-border bg-folk-panel p-7 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="yankee-surface w-28 h-28 rounded-[1.25rem] bg-card flex items-center justify-center">
                  <QrCode size={56} strokeWidth={1.5} className="text-foreground" />
                </div>
                <p className="mt-4 text-[13px] font-medium lowercase text-foreground">scan at launch</p>
                <p className="mt-1 text-[12px] text-muted-foreground lowercase">we'll send the link at launch</p>
              </div>
              <div className="sm:col-span-8 p-7 md:p-9 flex flex-col justify-center">
                <p className="font-serif-display italic text-[1.2rem] text-foreground/50 lowercase">want a heads up?</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-[1.05] lowercase">
                  join the{" "}
                  <span className="font-serif-display italic font-medium">launch list</span>
                </h2>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed lowercase max-w-md">
                  email {YANKEE_EMAIL} and we&apos;ll notify you when yankee is ready for ios.
                </p>
                <div className="mt-6">
                  <a
                    href={`${YANKEE_MAILTO}?subject=Notify%20me%20when%20Yankee%20launches`}
                    className="yankee-surface yankee-surface--control group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-folk-panel text-[14px] font-medium text-foreground lowercase hover:-translate-y-1 transition-all"
                  >
                    email me at launch <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[1200px] mx-auto px-5 md:px-6">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-12 md:mb-14">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">why yankee</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            worth putting on your{" "}
            <span className="font-serif-display italic font-medium">home screen</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <AnimatedSection key={r.title} delay={i * 0.06}>
                <div className={blockCard(i, "p-6")}>
                  <div className="yankee-block__icon w-9 h-9 rounded-full flex items-center justify-center mb-4">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-[16px] font-semibold lowercase tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-[13px] yankee-block__muted leading-relaxed lowercase">{r.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="font-serif-display italic text-[1.25rem] text-foreground/50 lowercase">getting started</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            three steps.{" "}
            <span className="font-serif-display italic font-medium">that&apos;s it.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {steps.map((s, i) => (
            <AnimatedSection key={s.n} delay={i * 0.06}>
              <div className="yankee-surface flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-[1.35rem] bg-card px-5 py-5 md:px-7 md:py-6">
                <span className="font-serif-display italic text-[1.5rem] text-foreground/40 shrink-0 w-12">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold lowercase tracking-tight">{s.t}</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground lowercase">{s.d}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 md:py-28 overflow-hidden dotted-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative max-w-[900px] mx-auto px-5 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            ready when we{" "}
            <span className="font-serif-display italic font-medium">launch.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed lowercase max-w-md mx-auto">
            when yankee launches, invite a few people you like and leave the noise behind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-folk-bubble-foreground lowercase tracking-tight folk-cta shadow-[0_14px_40px_-10px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-105 transition-[filter,transform] active:scale-[0.98]"
            >
              <Apple size={16} /> notify me for ios
            </a>
            <Link
              to="/story"
              className="yankee-surface yankee-surface--control inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full bg-transparent text-[14px] font-medium text-foreground/70 lowercase hover:text-foreground hover:border-foreground/90 transition-colors"
            >
              read our story
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Download;
