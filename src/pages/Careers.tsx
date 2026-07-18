import SimplePage from "@/components/SimplePage";
import teamHero from "@/assets/team-hero.jpg";
const Careers = () => (<SimplePage tag="company" eyebrow="we're building the quieter internet" hero={teamHero} title={<>Come build <span className="font-serif-display italic">what you wish existed.</span></>} subtitle="A small, remote first team from a handful of time zones. We ship carefully, argue kindly, and take Fridays seriously." blocks={[
        {
            kicker: "how we work",
            title: <>Four <span className="font-serif-display italic">non-negotiables.</span></>,
            cards: [
                { t: "Remote, async first", d: "Deep work over meetings. One synchronous hour a day, at most." },
                { t: "Small teams, big scope", d: "You'll own product areas end-to-end, from spec to on-call." },
                { t: "Ship in six weeks", d: "Cycles, not sprints. Everyone gets a real cooldown between them." },
                { t: "Compensation is public", d: "Salary bands are transparent inside and outside the company." },
            ],
        },
        {
            kicker: "open roles",
            title: <>Currently <span className="font-serif-display italic">hiring.</span></>,
            cards: [
                { t: "Senior iOS Engineer", d: "Swift, SwiftUI, deep experience with real time and offline sync." },
                { t: "Product Designer", d: "Systems, motion, taste. You draw on paper before you draw in Figma." },
                { t: "Backend Engineer, Feed", d: "Go / Rust. You've built ranking free timelines at scale before." },
            ],
        },
        {
            kicker: "not now",
            title: <>Nothing here <span className="font-serif-display italic">for you today?</span></>,
            body: "Write us anyway. We keep a shortlist and reach out first when a role opens.",
        },
    ]} ctaTitle={<>Apply, <span className="font-serif-display italic">or say hello.</span></>} ctaLabel="Get in touch"/>);
export default Careers;
