import SimplePage from "@/components/SimplePage";
import codePreview from "@/assets/code-preview.jpg";
const Changelog = () => (<SimplePage tag="company" eyebrow="what shipped this month" hero={codePreview} title={<>Every release, <span className="font-serif-display italic">in plain words.</span></>} subtitle="No marketing gloss. Just what changed, what broke, and what we fixed." blocks={[
        {
            kicker: "2026 · Q3",
            title: <>Recent <span className="font-serif-display italic">releases.</span></>,
            cards: [
                { n: "3.4", t: "Cross posting to Threads", d: "Native Threads publishing, per platform edits, and scheduled queues. Delivery reports per destination." },
                { n: "3.3", t: "Quieter notifications", d: "New quiet hours engine, weekly digest option, and per community mute without leave." },
                { n: "3.2", t: "Private memory sync", d: "End to end encrypted sync of drafts, saved posts, and notes across devices." },
                { n: "3.1", t: "The finite feed", d: "Feed now ends when you're caught up. No 'you might have missed' backfill." },
            ],
        },
        {
            kicker: "earlier",
            title: <>Older <span className="font-serif-display italic">notes.</span></>,
            pairs: [
                ["3.0: Feed rewrite", "Ranking removed, chronological order made the only order"],
                ["2.6: Communities", "Small by default rooms with automatic split at 250 members"],
                ["2.4: DMs, encrypted", "End to end encryption for one to one and group threads"],
                ["2.1: Composer v2", "Per post drafts, autosave, and the multi platform export panel"],
            ],
        },
    ]} ctaTitle={<>See what <span className="font-serif-display italic">ships next.</span></>} ctaLabel="Follow updates"/>);
export default Changelog;
