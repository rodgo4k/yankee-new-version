import { ArrowRight, ArrowUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import cafeFriends from "@/assets/cafe-friends.jpg";
import community from "@/assets/yankee/community.png";
import crowdsHome from "@/assets/yankee/crowds-home.png";
const blocks = [
    {
        kicker: "small on purpose",
        title: (<>
        rooms that stay <span className="font-serif-display italic">human sized</span>
      </>),
        body: "Every Crowd caps at a few thousand active members. When one grows too big, it splits by region or interest, so conversations stay grounded and moderation stays possible.",
        chat: [
            { from: "you" as const, text: "is the film crowd still open?" },
            { from: "them" as const, text: "just split into film · nyc and film · lisbon. you're a fit for both, want in?" },
        ],
    },
    {
        kicker: "signal, no karma",
        title: (<>
        threads that <span className="font-serif-display italic">actually reply</span>
      </>),
        body: "No karma to farm, no downvote brigades, no viral outrage. Yankee surfaces the posts your Crowd is actually replying to, and lets the rest go quiet.",
        chat: [
            { from: "you" as const, text: "anything worth reading in #reading this week?" },
            { from: "them" as const, text: "three threads. one review of intermezzo, a poll on next month's pick, and a lisbon meetup." },
        ],
    },
    {
        kicker: "leaves the screen",
        title: (<>
        meetups that <span className="font-serif-display italic">actually happen</span>
      </>),
        body: "Crowds host their own events: photo walks, book clubs, listening parties. Yankee handles the invite, the reminders and the low friction RSVP.",
        chat: [
            { from: "them" as const, text: "photo walk saturday, golden hour, williamsburg bridge. 12 going." },
            { from: "you" as const, text: "count me in" },
            { from: "them" as const, text: "saved. i'll ping you 1h before." },
        ],
    },
];
const topics = [
    { name: "photography", members: "48k" },
    { name: "running", members: "22k" },
    { name: "reading", members: "17k" },
    { name: "cooking", members: "35k" },
    { name: "gaming", members: "61k" },
    { name: "design", members: "29k" },
    { name: "music", members: "44k" },
    { name: "hiking", members: "12k" },
    { name: "film", members: "26k" },
    { name: "cycling", members: "14k" },
];
const steps = [
    {
        n: "01",
        t: "pick a Crowd",
        d: "Search by interest or by city. Peek inside before you join, no lock in, no invisible rules.",
    },
    {
        n: "02",
        t: "get the good threads only",
        d: "Yankee filters what your Crowd is actually engaging with, mutes the noise and keeps discovery private.",
    },
    {
        n: "03",
        t: "show up in person",
        d: "Meetups appear right in the Crowd feed. RSVP in one tap, get a nudge before it starts, meet the humans behind the handles.",
    },
];
const faqs = [
    {
        q: "what is a Crowd?",
        a: "A Crowd is Yankee's take on a community. Small, topical, capped in size, moderated by real humans and kept alive by regular meetups. Think group chat energy, structured like a magazine.",
    },
    {
        q: "how are Crowds different from a subreddit or a discord server?",
        a: "Crowds are capped in size, chronological, and split when they get too big. There is no karma, no upvote ranking and no algorithmic resurfacing. Signal comes from replies, not scores.",
    },
    {
        q: "can I create my own Crowd?",
        a: "Yes. Any member can propose a Crowd. If it hits a small threshold of active members in the first month, Yankee promotes it into the main directory.",
    },
    {
        q: "are Crowds moderated?",
        a: "Every Crowd has volunteer moderators from its own members. Yankee provides the tooling, they set the tone. Reports are private and handled the same day.",
    },
    {
        q: "do meetups cost anything?",
        a: "No. Meetups are free to host and free to attend. Some Crowds organise paid events (a dinner, a workshop) and those are always clearly labelled.",
    },
    {
        q: "will my friends see the Crowds I join?",
        a: "Only if you want them to. Every Crowd membership is private by default. You can pin the ones you're proud of to your profile.",
    },
];
const Communities = () => (<Layout>

    <section className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card text-[11.5px] uppercase tracking-widest text-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-folk"/>
            new · yankee crowds
          </span>

          <h1 className="mt-8 text-[46px] md:text-[88px] leading-[0.95] tracking-[-0.03em] text-foreground font-semibold max-w-4xl mx-auto">
            the internet, back to{" "}
            <span className="font-serif-display italic text-folk">human scale</span>
          </h1>

          <p className="mt-8 text-[16px] md:text-[18px] text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            your Crowd is a small, topical room, moderated by real people. Yankee coordinates the threads, the meetups and the RSVPs, all without a group chat.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="mt-12 mx-auto max-w-[560px]">
            <div className="flex items-center gap-2 px-2 py-2 rounded-full border border-border bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <span className="w-9 h-9 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 text-[18px]">+</span>
              <input readOnly placeholder="text your Crowd, or ask Yankee" className="flex-1 bg-transparent outline-none text-[14.5px] text-foreground placeholder:text-foreground/40 px-2"/>
              <button className="w-9 h-9 shrink-0 rounded-full bg-folk text-folk-foreground flex items-center justify-center">
                <ArrowUp size={16}/>
              </button>
            </div>

            <p className="mt-4 text-[12.5px] text-foreground/60">free forever. no card needed.</p>

            <div className="mt-6 flex items-center justify-center gap-5 text-[11px] uppercase tracking-widest text-foreground/50">
              <span>lives inside</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">💬</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">✈️</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">🎧</span>
              <span className="w-8 h-8 rounded-[10px] border border-border bg-card flex items-center justify-center text-[15px]">🟢</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative mt-20 mx-auto max-w-[900px]">
            <div className="absolute inset-x-0 bottom-0 h-[70%] rounded-[3rem] bg-gradient-to-b from-folk/15 via-folk/5 to-transparent"/>
            <div className="relative flex justify-center pt-8">
              <div className="w-[280px] md:w-[340px] aspect-[9/19] rounded-[2.4rem] border-[8px] border-foreground/90 bg-card overflow-hidden shadow-[0_60px_120px_-40px_rgba(0,0,0,0.45)]">
                <img src={crowdsHome} alt="Yankee Crowds on iPhone" className="w-full h-full object-cover object-top"/>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <div className="flex -space-x-2">
              {["👩🏻", "👨🏽", "👩🏼", "👨🏻", "👩🏾", "👨🏼", "👩🏽"].map((e, i) => (<span key={i} className="w-9 h-9 rounded-full border-2 border-background bg-card flex items-center justify-center text-[16px]">{e}</span>))}
            </div>
            <p className="text-[13px] text-muted-foreground">340+ Crowds already meeting up every week</p>
            <Link to="/features" className="text-[13px] text-foreground/70 hover:text-foreground underline underline-offset-4">
              new to yankee? see how it works
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            what a Crowd <br className="hidden md:block"/>
            <span className="font-serif-display italic">actually feels like</span>
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {blocks.map((b, i) => (<AnimatedSection key={i} delay={i * 0.05}>
              <div className="h-full rounded-[2rem] border border-border bg-card p-7 flex flex-col gap-6">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{b.kicker}</p>
                <h3 className="text-[26px] md:text-[28px] font-semibold text-foreground leading-[1.05] tracking-[-0.01em]">{b.title}</h3>
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
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-10 items-stretch">
        <AnimatedSection className="md:col-span-7">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-border h-full min-h-[440px]">
            <img src={cafeFriends} alt="A Crowd meetup" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"/>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
              <div className="flex">
                <span className="inline-block max-w-[85%] px-3.5 py-2 text-[13.5px] leading-snug rounded-[1.2rem] bg-muted text-foreground rounded-bl-md">
                  who&apos;s in for saturday? 📷
                </span>
              </div>
              <div className="flex justify-end">
                <span className="inline-block max-w-[85%] px-3.5 py-2 text-[13.5px] leading-snug rounded-[1.2rem] bg-folk text-folk-foreground rounded-br-md">
                  count me in, bringing the film camera
                </span>
              </div>
              <div className="flex">
                <span className="inline-block max-w-[85%] px-3.5 py-2 text-[13.5px] leading-snug rounded-[1.2rem] bg-muted text-foreground rounded-bl-md">
                  12 going · rsvp closes friday 8pm
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="md:col-span-5 flex flex-col justify-center" delay={0.1}>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">from thread to table</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            a Crowd is <span className="font-serif-display italic">a place, not a feed.</span>
          </h2>
          <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed max-w-md">
            Every Crowd runs its own quiet calendar. Photo walks, book clubs, dinners, listening parties. Yankee sends the invite, tracks the RSVPs and reminds you before you leave the house.
          </p>
          <ul className="mt-6 space-y-3 text-[14px] text-foreground/80">
            <li className="flex gap-3"><span className="text-muted-foreground">·</span> one tap RSVP, no third party links</li>
            <li className="flex gap-3"><span className="text-muted-foreground">·</span> location shared only with people going</li>
            <li className="flex gap-3"><span className="text-muted-foreground">·</span> a soft reminder one hour before start</li>
          </ul>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            a Crowd for every <span className="font-serif-display italic">obsession</span>
          </h2>
          <p className="mt-6 text-center text-[15px] text-muted-foreground max-w-xl mx-auto">
            A snapshot of what people are meeting up around this month.
          </p>
        </AnimatedSection>
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {topics.map((t, i) => (<AnimatedSection key={t.name} delay={i * 0.02}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-[13.5px] text-foreground">
                <span className="inline-flex items-center gap-1 text-muted-foreground text-[11px] uppercase tracking-widest">
                  <Users size={11}/> {t.members}
                </span>
                <span className="text-foreground/80">·</span>
                <span>#{t.name}</span>
              </span>
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
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">
        <AnimatedSection className="md:col-span-6 md:order-2">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">inside a Crowd</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            one room, <span className="font-serif-display italic">many rhythms.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-md">
            Every Crowd is a chronological thread, a small events board and a shared memory. No infinite scroll, no tabs to lose yourself in.
          </p>
        </AnimatedSection>
        <AnimatedSection className="md:col-span-6 md:order-1" delay={0.1}>
          <div className="rounded-[2rem] border border-border bg-card p-4 max-w-sm mx-auto aspect-[9/17] overflow-hidden">
            <img src={community} alt="Inside a Crowd" className="w-full h-full object-cover object-top rounded-2xl"/>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground tracking-[-0.02em] leading-[1.02]">
            Crowds, <span className="font-serif-display italic">explained.</span>
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
            find your <span className="font-serif-display italic">Crowd.</span>
          </h2>
          <p className="mt-6 text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Free forever for the basics. Yankee Pro unlocks unlimited Crowds and private meetups.
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
export default Communities;
