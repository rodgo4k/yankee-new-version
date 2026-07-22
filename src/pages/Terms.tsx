import Layout from "@/components/Layout";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import heroMountain from "@/assets/hero-mountain.jpg";
const sections = [
    { t: "1. Acceptance", p: "By using Yankee you agree to these terms. If you disagree, please stop using the service. It&apos;s that simple." },
    { t: "2. Your account", p: "You&apos;re responsible for the activity on your account. Keep your login safe and let us know immediately if you suspect unauthorized access." },
    { t: "3. Content you post", p: "You keep all rights to what you post. You grant Yankee the limited rights necessary to distribute your content to the people you&apos;ve chosen to share it with." },
    { t: "4. Acceptable use", p: "Don&apos;t post illegal content. Don&apos;t harass other members. Don&apos;t scrape, spam or automate the service without written permission." },
    { t: "5. Suspension and termination", p: "We may suspend or terminate accounts that violate these terms. You can also delete your account at any time from settings." },
    { t: "6. No charges", p: "There are no paid plans, subscriptions or in-app charges for the core product. Yankee does not sell access to features behind a paywall." },
    { t: "7. Changes", p: "We may update these terms as the product evolves. We&apos;ll notify you in app before material changes take effect." },
    { t: "8. Contact", p: "Questions about these terms? Email legal@yankee.app." },
];
const Terms = () => (<Layout>
    <section className="relative -mt-24 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMountain} alt="" className="w-full h-full object-cover object-bottom"/>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"/>
      </div>
      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        <SpeechBubble tail="none" className="text-[13px]"><PillTag>legal</PillTag>terms of service</SpeechBubble>
        <h1 className="mt-8 text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.98]">
          The <span className="font-serif-display italic">house rules.</span>
        </h1>
        <p className="mt-6 text-[15px] text-muted-foreground">Last updated · January 2026</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6 space-y-4">
        {sections.map((s) => (<div key={s.t} className="rounded-[2rem] border border-border bg-card p-8">
            <h2 className="text-2xl font-semibold text-foreground">{s.t}</h2>
            <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">{s.p}</p>
          </div>))}
      </div>
    </section>
  </Layout>);
export default Terms;
