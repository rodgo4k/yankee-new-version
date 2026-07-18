import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { SpeechBubble, PillTag } from "@/components/Bubble";
const NotFound = () => (<Layout>
    <section className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <div>
        <SpeechBubble tail="none" className="text-[13px]"><PillTag>404</PillTag>page not found</SpeechBubble>
        <h1 className="mt-8 text-6xl md:text-8xl font-semibold text-foreground tracking-tight">
          Nothing <span className="font-serif-display italic">here.</span>
        </h1>
        <p className="mt-6 text-[15px] text-muted-foreground max-w-md mx-auto">
          The link you followed doesn&apos;t point anywhere. Head back to the home page and try again.
        </p>
        <Link to="/" className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-90 transition-opacity">
          Back home
        </Link>
      </div>
    </section>
  </Layout>);
export default NotFound;
