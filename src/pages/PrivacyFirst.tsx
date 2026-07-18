import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
const categories = [
    {
        name: "concepts",
        items: [
            {
                term: "End to end encryption",
                def: "Messages and calls are scrambled on your device and only unscrambled on the recipient's device. Yankee cannot read them, even if asked.",
            },
            {
                term: "Zero trackers",
                def: "No third party analytics, ad SDKs or session replay tools are shipped inside the app. If we do not run it, we cannot leak it.",
            },
            {
                term: "Data minimization",
                def: "Yankee asks for the smallest amount of information needed to make the app work. Extra data is never collected just in case.",
            },
            {
                term: "Local first sync",
                def: "Your device holds the primary copy of your posts and messages. The cloud is an encrypted backup you can pause or turn off.",
            },
        ],
    },
    {
        name: "controls",
        items: [
            {
                term: "Right to deletion",
                def: "You can export everything in one tap and delete your account. Servers are wiped within 30 days and backups expire naturally.",
            },
            {
                term: "Region pinning",
                def: "Pick where your encrypted backup lives, EU or US. You can change it once a year to match where you are or what you prefer.",
            },
            {
                term: "Quiet permissions",
                def: "Location, contacts, camera and microphone are off by default. You turn them on only when a feature actually needs them.",
            },
            {
                term: "Transparency report",
                def: "We publish what we receive, what we can hand over, and what we cannot. Most of the time the answer is almost nothing.",
            },
        ],
    },
    {
        name: "technology",
        items: [
            {
                term: "Encrypted at rest",
                def: "Every draft, saved post and note is encrypted before it touches our servers. Keys are tied to your account, not to our infrastructure.",
            },
            {
                term: "On device moderation",
                def: "Public posts are checked by open classifiers that run locally. We do not scan your content on our servers to enforce rules.",
            },
            {
                term: "No ads, no models",
                def: "Yankee is funded by subscriptions. Your posts are never used to train AI models and your behavior is never sold to advertisers.",
            },
        ],
    },
];
const PrivacyFirst = () => (<Layout>

    <section className="pt-24 md:pt-32 pb-16">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[13px] md:text-[14px] text-foreground/60">privacy first</p>
          <h1 className="mt-6 text-[46px] md:text-[92px] leading-[0.94] tracking-[-0.03em] text-foreground font-semibold max-w-4xl mx-auto">
            the privacy <br className="hidden md:block"/>
            <span className="font-serif-display italic text-folk">glossary.</span>
          </h1>
          <p className="mt-8 text-[16px] md:text-[18px] text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Plain English definitions of the terms behind Yankee privacy. What they mean, how they work, and why we built the app this way.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {categories.map((cat, ci) => (<section key={cat.name} className={ci === 0 ? "pb-16" : "py-24 md:py-32 border-t border-border/40"}>
        <div className="max-w-[1100px] mx-auto px-6">
          <AnimatedSection>
            <p className="text-[13px] md:text-[14px] text-foreground/60 uppercase tracking-widest">{cat.name}</p>
          </AnimatedSection>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cat.items.map((item, i) => (<AnimatedSection key={item.term} delay={i * 0.04}>
                <div className="group h-full rounded-[1.5rem] border border-border bg-card p-6 flex flex-col gap-3 hover:border-folk/40 transition-colors">
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-foreground leading-[1.2] tracking-[-0.01em]">
                    {item.term}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
                    {item.def}
                  </p>
                  <span className="text-[13px] text-folk font-medium inline-flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                    read definition <ArrowRight size={14}/>
                  </span>
                </div>
              </AnimatedSection>))}
          </div>
        </div>
      </section>))}

    <section className="py-24 md:py-32 border-t border-border/40">
      <div className="max-w-[1100px] mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-[2.5rem] border border-border bg-card p-8 md:p-14 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-folk/10 via-transparent to-transparent"/>
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-5">
                <h2 className="text-[34px] md:text-[50px] font-semibold text-foreground leading-[1.02] tracking-[-0.02em]">
                  Private by design, <br />
                  <span className="font-serif-display italic">not by promise.</span>
                </h2>
                <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed max-w-md">
                  No ad IDs, no behavioral trackers, no third party SDKs. The things we do not collect cannot be leaked, sold or subpoenaed.
                </p>
              </div>
              <div className="flex flex-wrap md:justify-end gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity">
                  ask us anything <ArrowRight size={14}/>
                </Link>
                <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/60 bg-background text-foreground text-[14px] font-medium hover:bg-background/80 transition-colors">
                  explore features
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>);
export default PrivacyFirst;
