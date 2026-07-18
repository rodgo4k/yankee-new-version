import SimplePage from "@/components/SimplePage";
import skyWarm from "@/assets/sky-warm.jpg";
const Blog = () => (<SimplePage tag="company" eyebrow="notes from the team" hero={skyWarm} title={<>Long form, <span className="font-serif-display italic">only when it's worth it.</span></>} subtitle="No content calendar. No SEO farm. Just occasional essays about the internet we want to build." blocks={[
        {
            kicker: "latest",
            title: <>Recent <span className="font-serif-display italic">essays.</span></>,
            cards: [
                { n: "Jul 2026", t: "The feed does not owe you a signal", d: "On removing ranking, and what happens to a timeline when the clock is the only editor." },
                { n: "May 2026", t: "Small rooms, again", d: "Why we cap communities at 250 people and split them the moment they grow past it." },
                { n: "Mar 2026", t: "Notifications are not a business model", d: "A short case against re engagement pings, and what we built instead." },
            ],
        },
        {
            kicker: "series",
            title: <>Field notes, <span className="font-serif-display italic">by topic.</span></>,
            cards: [
                { t: "On feeds", d: "Six essays on ranking, reach, and what a chronological timeline actually feels like." },
                { t: "On communities", d: "How small groups behave differently, and why software rarely respects that." },
                { t: "On privacy", d: "Concrete pieces on E2EE, local first sync, and the things we deliberately don't collect." },
                { t: "On building", d: "How our small team scopes, ships and cools down between cycles." },
            ],
        },
    ]} ctaTitle={<>Read <span className="font-serif-display italic">what we're thinking.</span></>} ctaLabel="Subscribe by email"/>);
export default Blog;
