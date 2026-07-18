import { ArrowRight, Clock, Users, BellOff, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import { FolkBubble } from "@/components/FolkBubble";
import heroMeadow from "@/assets/hero-meadow.jpg";
import heroMountain from "@/assets/hero-mountain.jpg";
import heroFolkMountains from "@/assets/hero-folk-mountains.jpg";
import rememberOffice from "@/assets/remember-office.jpg";
import heroParty from "@/assets/hero-party.jpg";
import mockupScene from "@/assets/yankee-scene.jpg";
import homeFeed from "@/assets/yankee/home-feed.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
import chat from "@/assets/yankee/chat.png";
import videoCall from "@/assets/yankee/video-call.png";
import aiHello from "@/assets/yankee/ai-hello.png";
import profileView from "@/assets/yankee/profile-view.png";
const faqItems = [
    {
        q: "What is Yankee?",
        a: "A social network with no hidden algorithm: a chronological feed, no shadow bans, native communities (Crowds), chat, calls and integrated AI, all in a single app.",
    },
    {
        q: "Is it free?",
        a: "Yes. Yankee is free for everyone: post, chat, join Crowds and use Yankee AI without ever paying. No tiers, no locked features.",
    },
    {
        q: "How does it work without an algorithm?",
        a: "Your feed shows posts from the people you follow in reverse chronological order. No 'suggested', no reordering. Who you follow is who you see.",
    },
    {
        q: "Is my data safe?",
        a: "Yes. Everything is encrypted, we never sell your data and we never train AI on your posts. You can delete your account at any time.",
    },
];
const Index = () => (<Layout>

    <section className="relative -mt-24 min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroFolkMountains} alt="" className="w-full h-full object-cover object-center" width={1920} height={1200}/>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"/>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <SpeechBubble tail="none" size="sm">
            <PillTag>new</PillTag>
            <span className="text-foreground/80">a social feed you actually control</span>
            <ArrowRight size={13} className="text-muted-foreground"/>
          </SpeechBubble>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }} className="mt-10 text-5xl md:text-7xl lg:text-[5.75rem] font-semibold text-foreground leading-[1.02] tracking-tight">
          Yankee wants you to
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }} className="mt-8 flex justify-center">
          <FolkBubble>
            <span className="font-semibold tracking-tight text-3xl md:text-5xl lg:text-6xl">
              post again
            </span>
          </FolkBubble>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="mt-10 max-w-xl mx-auto text-[17px] md:text-[19px] text-foreground/70 leading-relaxed">
          The social network where a post reaches all of your friends. No hidden algorithm, no shadow bans, just Crowds,
          chat and calls in one calm app.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-[15px] font-medium hover:opacity-90 transition-opacity shadow-lg">
            Get the app <ArrowRight size={16}/>
          </Link>
          <p className="mt-4 text-[13px] text-foreground/60">Free forever. No card needed.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
              it fights for your feed
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
              Yankee shows you every post from the people you follow, in the order they shared it. No hidden algorithm,
              no shadow bans, no suggested content you never asked for.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
        {
            icon: Clock,
            title: "chronological order",
            text: "Your feed is reverse chronological, always. The latest post is at the top. No opaque ranking.",
        },
        {
            icon: Users,
            title: "complete reach",
            text: "Every post you publish reaches every person who follows you. No hidden suppression, ever.",
        },
        {
            icon: BellOff,
            title: "no suggested noise",
            text: "Only the people and Crowds you follow. No 'recommended for you' pulling you away from friends.",
        },
        {
            icon: ShieldCheck,
            title: "your Crowd, your rules",
            text: "Communities are small, self moderated and built around what you actually care about.",
        },
    ].map((c, i) => (<AnimatedSection key={c.title} delay={i * 0.06}>
              <div className="h-full rounded-[2rem] border-2 border-border bg-card p-7 hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-border flex items-center justify-center mb-5">
                  <c.icon size={18} className="text-foreground"/>
                </div>
                <h3 className="text-[16px] font-semibold text-foreground tracking-tight">{c.title}</h3>
                <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </AnimatedSection>))}
        </div>

        <AnimatedSection delay={0.25}>
          <div className="mt-12 text-center">
            <p className="text-[13px] text-muted-foreground">no algorithmic feed · your attention isn't the product</p>
            <Link to="/features" className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80">
              See how the feed works <ArrowRight size={14}/>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="relative py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <SpeechBubble tail="none" size="sm" className="mb-6">
            <PillTag>the feed</PillTag>
            chronological, always
          </SpeechBubble>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
            Post once, <span className="font-serif-display italic">it reaches everyone.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            No opaque ranking. Every post you publish reaches every person who follows you, in the order you posted. The
            way a feed was always meant to work.
          </p>
          <Link to="/features" className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80">
            Learn more <ArrowRight size={14}/>
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
            <img src={mockupScene} alt="" className="w-full h-full object-cover object-bottom" loading="lazy"/>
            <div className="absolute top-6 left-6">
              <SpeechBubble variant="dark" tail="bl" size="sm">
                just posted 📷
              </SpeechBubble>
            </div>
            <div className="absolute bottom-8 right-6">
              <SpeechBubble tail="br" size="sm">
                seen by <span className="font-semibold">all 812</span> friends
              </SpeechBubble>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="left">
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-muted border-2 border-border">
            
            <img src={rememberOffice} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy"/>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"/>

            
            <div className="absolute inset-0 p-6 md:p-8">
              <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }} animate={{ y: [0, -6, 0] }} className="absolute top-4 left-4 md:top-12 md:left-10">
                <SpeechBubble tail="bl" size="sm" variant="dark" className="shadow-[0_8px_24px_-6px_rgba(0,0,0,0.22)] scale-[0.92] md:scale-100">
                  nailed the deck today 🎯
                </SpeechBubble>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }} animate={{ y: [0, -8, 0] }} className="absolute top-[28%] right-4 md:top-[40%] md:right-10">
                <SpeechBubble tail="br" size="sm" variant="dark" className="shadow-[0_8px_24px_-6px_rgba(0,0,0,0.22)] scale-[0.92] md:scale-100">
                  still planning this?
                </SpeechBubble>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }} animate={{ y: [0, -5, 0] }} className="absolute bottom-[28%] left-4 md:bottom-[45%] md:left-1/2 md:-translate-x-1/2">
                <SpeechBubble tail="bl" size="sm" variant="dark" className="shadow-[0_8px_24px_-6px_rgba(0,0,0,0.22)] scale-[0.92] md:scale-100">
                  right where you left it.
                </SpeechBubble>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
            Everything stays <br />
            <span className="font-serif-display italic">within reach.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            Conversations, plans, photos. Yankee keeps your social history in one place, always private and always yours.
            Pick up any thread exactly where you left it, even months later.
          </p>

          <ul className="mt-8 space-y-3 max-w-md">
            {[
        "private by default · only you hold the keys",
        "encrypted at rest and in transit",
        "find, edit, or remove anything instantly",
    ].map((item) => (<li key={item} className="flex items-start gap-3 text-[14px] text-foreground/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0"/>
                {item}
              </li>))}
          </ul>

          <Link to="/story" className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80">
            Learn more <ArrowRight size={14}/>
          </Link>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] md:aspect-[21/9]">
            <img src={heroParty} alt="" className="absolute inset-0 w-full h-full object-cover object-[50%_55%] scale-[1.20]" loading="lazy"/>
            
            <div className="relative h-full flex flex-col items-center justify-center px-8 text-center gap-6">
              <SpeechBubble tail="none" size="sm">
                <PillTag>text it once</PillTag>
                it keeps going
              </SpeechBubble>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[0.98] max-w-3xl">
                Your feed should show <br className="hidden md:block"/>
                <span className="font-serif-display italic">your friends.</span>
              </h2>
              <p className="max-w-md text-[15px] md:text-[16px] text-white/80 leading-relaxed">
                We just went back to doing the basics well.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection className="text-center">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">a closer look</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight max-w-2xl mx-auto leading-[1.02]">
            Feed. Chat. <span className="font-serif-display italic">Calls.</span> All in one calm place.
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-4">
          {[
        { src: homeFeed, title: "Your feed", text: "Reverse-chronological. Nothing else.", rotate: "md:-rotate-2" },
        {
            src: chat,
            title: "Real chat",
            text: "Text, voice notes, groups. No strange limits.",
            rotate: "md:rotate-1",
        },
        {
            src: videoCall,
            title: "Clear calls",
            text: "Voice and video, right in the app.",
            rotate: "md:-rotate-1",
        },
    ].map((c, i) => (<AnimatedSection key={c.title} delay={i * 0.08}>
              <div className={`transition-transform hover:rotate-0 hover:scale-[1.02] duration-500 ${c.rotate}`}>
                <div className="aspect-[9/17] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 bg-card">
                  <img src={c.src} alt={c.title} className="w-full h-full object-cover object-top" loading="lazy"/>
                </div>
                <div className="mt-6 px-2">
                  <h3 className="text-[18px] font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1.5 text-[14px] text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </div>
            </AnimatedSection>))}
        </div>
      </div>
    </section>

    
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground">
          <div className="grid md:grid-cols-2 items-center gap-0">
            <div className="p-10 md:p-16 lg:p-20">
              <AnimatedSection>
                <SpeechBubble variant="light" tail="none" size="sm" className="mb-6 !bg-primary-foreground/10 !text-primary-foreground !border-primary-foreground/20 !shadow-none">
                  <PillTag variant="light" className="!bg-primary-foreground !text-primary">
                    crowds
                  </PillTag>
                  communities that stay yours
                </SpeechBubble>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02]">
                  Find your people. <br />
                  <span className="font-serif-display italic opacity-80">Keep them close.</span>
                </h2>
                <p className="mt-6 text-[16px] opacity-70 leading-relaxed max-w-md">
                  Crowds are small, self moderated communities around what you actually care about. No trending page
                  pulling you into fights you never signed up for.
                </p>
                <Link to="/communities" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-primary text-[14px] font-medium hover:opacity-90 transition-opacity">
                  Browse Crowds <ArrowRight size={14}/>
                </Link>
              </AnimatedSection>
            </div>
            <div className="relative min-h-[420px] md:min-h-[560px]">
              <img src={crowdsHome} alt="Crowds" className="absolute inset-0 w-full h-full object-cover object-top md:object-center opacity-95" loading="lazy"/>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/80 md:to-primary/40"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-muted">
            <img src={aiHello} alt="Yankee AI" className="w-full h-full object-cover object-top" loading="lazy"/>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <SpeechBubble tail="none" size="sm" className="mb-6">
            <PillTag>yankee ai</PillTag>
            inline, never in the way
          </SpeechBubble>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
            Ask it once. <span className="font-serif-display italic">It follows through.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            Translate a thread. Summarize a long DM. Draft a caption. Generate an image. Yankee AI lives inside the chat
            you already use, never a separate app.
          </p>
          <div className="mt-8 flex flex-col gap-2 max-w-sm">
            <SpeechBubble variant="dark" tail="none" size="sm" className="self-end">
              summarize the last 30 messages
            </SpeechBubble>
            <SpeechBubble tail="none" size="sm" className="self-start">
              <PillTag>done</PillTag>
              dinner moved to friday · 8pm
            </SpeechBubble>
          </div>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <SpeechBubble tail="none" size="sm" className="mb-6">
            <PillTag>you</PillTag>a profile that feels like you
          </SpeechBubble>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.02]">
            Yourself, <span className="font-serif-display italic">on the internet.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-md">
            Custom bios, pinned moments, private highlights. No follower counts as vanity metrics. Just a page that
            shows who you actually are online.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] max-h-[600px] mx-auto max-w-sm shadow-2xl border border-border/50">
            <img src={profileView} alt="Profile" className="w-full h-full object-cover object-top" loading="lazy"/>
          </div>
        </AnimatedSection>
      </div>
    </section>

    
    <section className="py-24 md:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        <AnimatedSection className="text-center">
          <SpeechBubble tail="none" size="sm" className="mb-6">
            <PillTag>faq</PillTag>
            common questions
          </SpeechBubble>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Frequently <span className="font-serif-display italic">asked.</span>
          </h2>
        </AnimatedSection>
        <div className="mt-12">
          <FAQ items={faqItems}/>
        </div>
      </div>
    </section>

    
    <section className="relative pt-24 md:pt-32 pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] md:aspect-[16/8]">
            <img src={heroMountain} alt="" className="absolute inset-0 w-full h-full object-cover object-bottom" loading="lazy"/>

            <div className="relative h-full flex flex-col items-center justify-center gap-6 text-center px-6">
              <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-[0.98] max-w-3xl">
                Less algorithm. <br />
                <span className="font-serif-display italic">More people.</span>
              </h2>
              <p className="max-w-md text-[16px] text-foreground/75 leading-relaxed">
                Download Yankee and see the people who actually matter to you again.
              </p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-[15px] font-medium hover:opacity-90 transition-opacity shadow-lg">
                Get the app <ArrowRight size={16}/>
              </Link>
              <p className="text-[13px] text-foreground/60">Free forever. No card needed.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default Index;
