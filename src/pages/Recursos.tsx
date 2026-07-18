import { ArrowRight, Bell, Filter, Sliders, Radio, Rss, Users, Video, Sparkles, Shield, Search, Lock, Trash2, EyeOff, Calendar, FileText, PenLine, Compass, Plane, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import heroMountain from "@/assets/hero-folk-mountains.jpg";
import homeFeed from "@/assets/yankee/home-feed.png";
import chatImg from "@/assets/yankee/chat.png";
import aiChat from "@/assets/yankee/ai-chat.png";
import aiHello from "@/assets/yankee/ai-hello.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import messages from "@/assets/yankee/messages.png";
import videoCall from "@/assets/yankee/video-call.png";
import voiceCall from "@/assets/yankee/voice-call.png";
import facetime from "@/assets/yankee/facetime.png";
import community from "@/assets/yankee/community.png";
import contacting from "@/assets/yankee/contacting.png";
import profileView from "@/assets/yankee/profile-view.png";
import profileEdit from "@/assets/yankee/profile-edit.png";
import searchImg from "@/assets/yankee/search.png";
import searchProfiles from "@/assets/yankee/search-profiles.png";
import searchTyping from "@/assets/yankee/search-typing.png";
const showcaseColumns = [
    [homeFeed, crowdsHome, chatImg, messages, aiHello],
    [profileView, aiChat, videoCall, community, searchImg],
    [contacting, facetime, profileEdit, searchProfiles, voiceCall],
    [messages, searchTyping, homeFeed, aiChat, chatImg],
];
const feedGuards = [
    { icon: Bell, title: "instant post alerts", text: "Know the moment someone you actually care about posts, before the algorithm buries it." },
    { icon: Filter, title: "follow cleanup", text: "Yankee finds every account you never engage with and quietly suggests you let them go." },
    { icon: Sliders, title: "feeds that talk back", text: "\"stop showing me hot takes.\" Set a rule, Yankee enforces it, right in your feed." },
    { icon: Radio, title: "signals & mentions", text: "Live pings when your name, your Crowds or your work show up anywhere on Yankee." },
];
const chips = [
    { icon: PenLine, label: "caption drafts" },
    { icon: Calendar, label: "post scheduling" },
    { icon: Bell, label: "reminders" },
    { icon: FileText, label: "content briefs" },
    { icon: Compass, label: "trend research" },
    { icon: Plane, label: "travel posts" },
    { icon: ImageIcon, label: "photo edits" },
];
const privacyCards = [
    { icon: Lock, title: "yours alone", text: "Never sold, never used to train AI. Ever." },
    { icon: EyeOff, title: "private + encrypted", text: "Your feed, memory and DMs live in your own space, encrypted where we store them." },
    { icon: Trash2, title: "gone in seconds", text: "Delete your account any time. Memory, messages and history are destroyed. For good." },
];
const memoryTags = [
    "kayla's birthday", "paris trip draft", "photo dump sunday", "reply to mom", "gym check in", "book club", "weekly recap", "sara wedding", "album cover", "nyc pins", "reels backlog", "podcast notes", "crowds digest", "dm from alex", "recipe idea", "concert alert", "interview prep", "late reply", "friend anniversary", "apartment tour", "festival lineup", "running route", "launch teaser", "screenshot to post"
];
const Features = () => (<Layout>

    <section className="relative -mt-24 pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMountain} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-background/30"/>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-background"/>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <SpeechBubble tail="none" className="text-[13px]">
          <PillTag>what</PillTag>
          it&apos;s the whole toolkit
        </SpeechBubble>

        <h1 className="mt-8 text-[46px] md:text-[80px] font-semibold text-foreground tracking-[-0.02em] leading-[0.98] max-w-4xl mx-auto">
          the app that puts <br className="hidden md:block"/>
          <span className="font-serif-display italic">attention and time</span> <br className="hidden md:block"/>
          back in your hands
        </h1>

        <p className="mt-8 text-[16px] md:text-[17px] text-foreground/70 max-w-xl mx-auto leading-relaxed">
          Yankee watches your feed, guards your notifications and keeps your people close. You come out ahead every week.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
            get the app <ArrowRight size={14}/>
          </Link>
          <Link to="/story" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card/60 backdrop-blur text-foreground text-[14px] font-medium hover:bg-card transition-colors">
            new to yankee?
          </Link>
        </div>

        <p className="mt-4 text-[12px] text-foreground/50">free forever. no card needed.</p>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 mt-16">
        <AnimatedSection>
          <div className="rounded-[2.5rem] border border-border bg-card p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)]">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#e9e2d3] aspect-[16/9]">

              <div className="absolute inset-0 flex gap-4 md:gap-6 px-4 md:px-8">
                {showcaseColumns.map((col, i) => {
        const up = i % 2 === 0;
        const duration = 95 + i * 12;
        const loop = [...col, ...col];
        return (<div key={i} className="flex-1 relative overflow-hidden">
                      <div className="flex flex-col gap-4 md:gap-6 will-change-transform" style={{
                animation: `${up ? "yankee-scroll-up" : "yankee-scroll-down"} ${duration}s linear infinite`,
            }}>
                        {loop.map((src, j) => (<div key={j} className="rounded-[1.25rem] overflow-hidden border border-border/40 bg-card shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] aspect-[9/19] shrink-0">
                            <img src={src} alt="" className="w-full h-full object-cover object-top" loading="lazy"/>
                          </div>))}
                      </div>
                    </div>);
    })}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-[#e9e2d3]/40 to-transparent z-10"/>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-[#e9e2d3]/40 to-transparent z-10"/>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">what it does</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            it fights <span className="font-serif-display italic">for your feed</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl">
            Connect your accounts once (read only). Yankee watches every post, flags the follows you forgot about, keeps you inside your limits, and pings you the second something matters.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {feedGuards.map((g, i) => {
        const Icon = g.icon;
        return (<AnimatedSection key={g.title} delay={i * 0.05}>
                <div className="h-full rounded-[2rem] border border-border bg-card p-7 flex flex-col gap-6">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Icon size={18} className="text-foreground/70"/>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-foreground">{g.title}</h3>
                    <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{g.text}</p>
                  </div>
                </div>
              </AnimatedSection>);
    })}
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
          <p className="text-[12.5px] text-muted-foreground">read only access · Yankee never posts without your ok</p>
          <Link to="/feed" className="inline-flex items-center gap-2 text-[13.5px] text-foreground hover:opacity-70 transition-opacity">
            see how Yankee handles your feed <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">
        <AnimatedSection className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">always on</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            always on, <span className="font-serif-display italic">only yours</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            The reason Yankee can fight for your feed and stay on your goals: it runs quietly in the background, connected to your Crowds, DMs, calendar and camera roll. You ask once, it keeps working while you live your life.
          </p>
          <Link to="/memory" className="mt-8 inline-flex items-center gap-2 text-[13.5px] text-foreground hover:opacity-70 transition-opacity">
            learn more <ArrowRight size={14}/>
          </Link>

          <div className="mt-10 flex items-center gap-3 flex-wrap">
            {["Feed", "Crowds", "Chat", "Calls", "Camera", "Notes", "Search"].map((t) => (<span key={t} className="px-3.5 py-1.5 rounded-full border border-border/60 bg-card text-[12.5px] text-foreground/80">{t}</span>))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-6" delay={0.1}>
          <div className="rounded-[2rem] border border-border bg-card p-4 max-w-[380px] aspect-[9/17] overflow-hidden mx-auto">
            <img src={chatImg} alt="Chat" className="w-full h-full object-cover object-top rounded-2xl"/>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">focus</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            it keeps you <span className="font-serif-display italic">present</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Nudges that follow up, drafts that get finished, plans it won&apos;t let you ghost. Ask once, Yankee stays on it and stays on you.
          </p>
          <Link to="/notifications" className="mt-8 inline-flex items-center gap-2 text-[13.5px] text-foreground hover:opacity-70 transition-opacity">
            learn more <ArrowRight size={14}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">
        <AnimatedSection className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">memory</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            remembers <span className="font-serif-display italic">everything, forever</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            Every message, every draft, every preference. Yankee remembers what you said you&apos;d post, and what you meant to delete. Months of context, and it picks up where you left off.
          </p>
          <ul className="mt-8 space-y-3 text-[14px] text-foreground/80">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/50"/> private memory · only you can read it</li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/50"/> encrypted at rest and end to end</li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/50"/> browse, edit or delete anything, any time</li>
          </ul>
          <Link to="/memory" className="mt-8 inline-flex items-center gap-2 text-[13.5px] text-foreground hover:opacity-70 transition-opacity">
            learn more <ArrowRight size={14}/>
          </Link>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-7" delay={0.1}>
          <div className="rounded-[2rem] border-2 border-border bg-card p-6 md:p-8 flex flex-col gap-3 max-w-[420px] mx-auto">
            {[
        { from: "you" as const, text: "what was the name of that cafe we loved in lisbon?" },
        { from: "them" as const, text: "the one you saved as 'tiny blue door near the tram stop'? manteigaria." },
        { from: "you" as const, text: "right. and the photo dump from last summer?" },
        { from: "them" as const, text: "album 'beach week' with 34 photos. july 14th." },
        { from: "you" as const, text: "perfect. thanks yankee." },
    ].map((m, i) => (<div key={i} className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}>
                <span className={`inline-block max-w-[85%] px-4 py-2.5 text-[14px] leading-snug rounded-[1.4rem] ${m.from === "you"
            ? "bg-folk text-folk-foreground rounded-br-md"
            : "bg-muted text-foreground rounded-bl-md"}`}>
                  {m.text}
                </span>
              </div>))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">the basics</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            and yes, <span className="font-serif-display italic">the basics too</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-lg">
            Caption drafts, scheduling, reminders, research. Yankee handles it without making it your whole personality.
          </p>
        </AnimatedSection>

        <div className="mt-12 flex flex-wrap gap-3">
          {chips.map((c, i) => {
        const Icon = c.icon;
        return (<AnimatedSection key={c.label} delay={i * 0.03}>
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border text-[14px] text-foreground/80">
                  <Icon size={15} className="text-foreground/60"/>
                  {c.label}
                </span>
              </AnimatedSection>);
    })}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">
        <AnimatedSection className="md:col-span-6" delay={0.05}>
          <div className="rounded-[2rem] border border-border bg-card p-4 max-w-[380px] aspect-[9/17] overflow-hidden mx-auto">
            <img src={messages} alt="Messages" className="w-full h-full object-cover object-top rounded-2xl"/>
          </div>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">your people</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            keeps your people <span className="font-serif-display italic">close</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            The friends you keep meaning to hear from? Yankee makes the thread, finds the moment and pulls the group together, so &ldquo;we should catch up&rdquo; actually happens.
          </p>
          <ul className="mt-8 space-y-3 text-[14px] text-foreground/80">
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/50"/> your data stays private · one way by design</li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/50"/> every request needs your ok · nothing automatic</li>
            <li className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/50"/> they only ever learn whether it got done</li>
          </ul>
          <Link to="/for-friends-family" className="mt-8 inline-flex items-center gap-2 text-[13.5px] text-foreground hover:opacity-70 transition-opacity">
            learn more <ArrowRight size={14}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">privacy</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            your data <span className="font-serif-display italic">stays yours</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-lg">
            Yankee remembers things for you, not about you. It&apos;s private, encrypted, and you can wipe all of it whenever you want.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {privacyCards.map((p, i) => {
        const Icon = p.icon;
        return (<AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-[2rem] border border-border bg-card p-8 flex flex-col gap-5">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Icon size={18} className="text-foreground/70"/>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </AnimatedSection>);
    })}
        </div>

        <div className="mt-8">
          <Link to="/privacy" className="inline-flex items-center gap-2 text-[13.5px] text-foreground hover:opacity-70 transition-opacity">
            read the privacy policy <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            one calm surface, <span className="font-serif-display italic">the whole feed</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Yankee replaces four or five apps with one place that respects your time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
              get the app <ArrowRight size={14}/>
            </Link>
            <Link to="/story" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card text-foreground text-[14px] font-medium hover:bg-card/80 transition-colors">
              read our story
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default Features;
