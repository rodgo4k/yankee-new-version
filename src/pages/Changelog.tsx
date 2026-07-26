import SimplePage from "@/components/SimplePage";
import homeFeed from "@/assets/yankee/home-feed.png";
const Changelog = () => (<SimplePage tag="company" eyebrow="what we ship" hero={homeFeed} title={<>What's live, <span className="font-serif-display italic">in plain words.</span></>} subtitle="Yankee is live. Here's what the product is built around today." blocks={[
        {
            kicker: "2026 · live",
            title: <>Core <span className="font-serif-display italic">pillars.</span></>,
            cards: [
                { n: "01", t: "Complete reach", d: "Every post reaches every follower, with clear audiences for close friends and Crowds. No ranking, no quiet demotion." },
                { n: "02", t: "Quieter notifications", d: "Quiet hours, a weekly digest option, and per community mute without leave." },
                { n: "03", t: "Private memory sync", d: "End to end encrypted sync of drafts, saved posts, and notes across devices." },
                { n: "04", t: "The finite feed", d: "The feed ends when you're caught up. No 'you might have missed' backfill." },
            ],
        },
        {
            kicker: "also live",
            title: <>More in the <span className="font-serif-display italic">app.</span></>,
            pairs: [
                ["Chronological feed", "Ranking out; chronological order as the only order"],
                ["Communities", "Small by default rooms with automatic split at 250 members"],
                ["Encrypted DMs", "End to end encryption for one to one and group threads"],
                ["Composer", "Per post drafts, autosave, and a multi platform export panel"],
            ],
        },
    ]} ctaTitle={<>Stay close as we <span className="font-serif-display italic">ship.</span></>} ctaLabel="Follow updates"/>);
export default Changelog;
