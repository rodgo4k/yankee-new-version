import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import studentsHero from "@/assets/students-hero.jpg";
import studentChat from "@/assets/yankee/chat.png";
const studentBlocks = [
    {
        kicker: "class first",
        title: (<>
        one room for each course,{" "}
        <span className="font-serif-display italic">not a noisy channel</span>
      </>),
        body: "Post notes, ask questions, share the recording link. Each class room is capped, chronological, and easy to find when you are cramming.",
        chat: [
            { from: "you" as const, text: "lecture recording is up" },
            { from: "them" as const, text: "saved to the psych 101 room" },
        ],
    },
    {
        kicker: "focus built in",
        title: (<>
        study mode on,{" "}
        <span className="font-serif-display italic">emergencies still through</span>
      </>),
        body: "Snooze the whole app for a set number of hours. Only urgent DMs and calls break through. Your focus belongs to you.",
        chat: [
            { from: "you" as const, text: "focus mode is on for 3 hours" },
            { from: "them" as const, text: "got it. emergency calls still come through" },
        ],
    },
    {
        kicker: "yours after graduation",
        title: (<>
        your notes,{" "}
        <span className="font-serif-display italic">always portable</span>
      </>),
        body: "Export every message, file and thread when you graduate. Nothing is trapped inside a platform you no longer use.",
        chat: [
            { from: "you" as const, text: "graduating next semester" },
            { from: "them" as const, text: "your archive is ready. download anytime." },
        ],
    },
];
const steps = [
    {
        n: "01",
        t: "verify with .edu",
        d: "Confirm your student email. Yankee is free while you are enrolled, no credit card needed.",
    },
    {
        n: "02",
        t: "join or start your rooms",
        d: "Create rooms for courses, clubs, or your crew. Invite people by link, phone, or email.",
    },
    {
        n: "03",
        t: "study, chat, plan",
        d: "Share notes, organize meetups, and turn on study mode when it is time to focus.",
    },
];
const faqs = [
    {
        q: "is Yankee really free for students?",
        a: "Yes. Verify with a .edu email and every feature is free while you are enrolled. Renewed each semester automatically.",
    },
    {
        q: "can I use it for group projects?",
        a: "Yes. Create encrypted group rooms for projects, share files, pin decisions, and search every message later.",
    },
    {
        q: "what happens when I graduate?",
        a: "You keep a full export of your messages, files and rooms. You can also switch to a personal plan at a graduate discount.",
    },
    {
        q: "does it work with my class schedule?",
        a: "Yes. Each room has a quiet calendar for deadlines, meetups and study sessions. Reminders go out before anything starts.",
    },
    {
        q: "is it private?",
        a: "Yes. Rooms are private by default. Messages and calls are end-to-end encrypted. We can not read the content.",
    },
    {
        q: "do I need to install an app?",
        a: "No. Yankee works in your browser. There is also a mobile app for iOS and Android if you prefer it.",
    },
];
const ForStudents = () => (<Layout>

    <section className="pt-28 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border">
            <img src={studentsHero} alt="" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-background/5"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/10 to-transparent"/>

            <div className="relative px-6 md:px-16 pt-20 md:pt-28 pb-10 md:pb-16 text-center">
              <h1 className="text-[42px] md:text-[72px] leading-[0.98] tracking-[-0.02em] text-foreground font-semibold max-w-4xl mx-auto">
                a campus feed that respects{" "}
                <br className="hidden md:block"/>
                <span className="font-serif-display italic">your focus</span>
              </h1>
              <p className="mt-6 text-[15px] md:text-[17px] text-foreground/75 max-w-xl mx-auto leading-relaxed">
                One calm place for classes, clubs and your crew. Study mode, group rooms, and free while you have an .edu.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
                  <MessageCircle size={16}/>
                  verify with .edu
                </Link>
              </div>
              <p className="mt-3 text-[12px] text-foreground/60">free while you are enrolled · no ads</p>

              <div className="mt-12 md:mt-16 flex justify-center">
                <div className="w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.2rem] border-[6px] border-foreground/85 bg-card overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]">
                  <img src={studentChat} alt="Yankee chat on iPhone" className="w-full h-full object-cover object-top"/>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex -space-x-2">
              {["🎓", "📚", "🧪", "🎨", "💻", "🌍"].map((e, i) => (<span key={i} className="w-9 h-9 rounded-full border-2 border-background bg-card flex items-center justify-center text-[16px]">
                  {e}
                </span>))}
            </div>
            <p className="text-[13px] text-muted-foreground">10,000+ students already studying calmer on Yankee</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            what Yankee does <br className="hidden md:block"/>
            <span className="font-serif-display italic">for students</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {studentBlocks.map((b, i) => (<AnimatedSection key={i} delay={i * 0.05}>
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
            ready to study <span className="font-serif-display italic">calmer?</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Free with a .edu email. No ads, no data resale, no distractions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
              verify with .edu <ArrowRight size={14}/>
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-card text-foreground text-[14px] font-medium hover:bg-card/80 transition-colors">
              see all features
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default ForStudents;
