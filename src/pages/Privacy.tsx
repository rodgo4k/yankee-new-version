import Layout from "@/components/Layout";
import { SpeechBubble, PillTag } from "@/components/Bubble";
import heroMountain from "@/assets/hero-mountain.jpg";
const sections = [
    { t: "The short version", p: "We collect only what we need to run Yankee. We never sell your data. We never train AI on your posts or messages. You can delete your account and all its data at any time." },
    { t: "What we collect", p: "Account information (email, username), content you post publicly, encrypted content you send in DMs, and standard technical logs required to keep the service running." },
    { t: "How we use it", p: "To deliver posts to your followers, to route messages and calls, to prevent abuse and to keep the platform stable. That is the entire list." },
    { t: "Third parties", p: "We use a small number of infrastructure providers (hosting, email delivery, crash reporting). We never share content or contact information with advertising networks or data brokers." },
    { t: "Your rights", p: "You can export your data at any time, correct or delete your profile, and revoke third party permissions from your account settings." },
    { t: "Contact", p: "Send privacy questions to privacy@yankee.app. We respond within 5 business days." },
];
const Privacy = () => (<Layout>
    <section className="relative -mt-24 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroMountain} alt="" className="w-full h-full object-cover object-bottom"/>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"/>
      </div>
      <div className="relative max-w-[900px] mx-auto px-6 text-center">
        <SpeechBubble tail="none" className="text-[13px]"><PillTag>legal</PillTag>privacy policy</SpeechBubble>
        <h1 className="mt-8 text-5xl md:text-6xl font-semibold text-foreground tracking-tight leading-[0.98]">
          Your data is <span className="font-serif-display italic">yours.</span>
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
export default Privacy;
