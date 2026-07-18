import SimplePage from "@/components/SimplePage";
import paperTexture from "@/assets/paper-texture.jpg";
const Brand = () => (<SimplePage tag="company" eyebrow="brand & guidelines" hero={paperTexture} title={<>How to talk <span className="font-serif-display italic">about Yankee.</span></>} subtitle="A short reference for anyone writing about the product, using the wordmark, or partnering with us." blocks={[
        {
            kicker: "the wordmark",
            title: <>One logo, <span className="font-serif-display italic">two treatments.</span></>,
            cards: [
                { t: "Yankee monogram", d: "The Y icon. Use on square avatars, favicons and app icons. Never rotated." },
                { t: "Yankee wordmark", d: "The full logotype. Use in press, decks, and formal partner materials." },
                { t: "Clear space", d: "Leave at least the height of the Y in empty space around any mark." },
            ],
        },
        {
            kicker: "voice",
            title: <>How we <span className="font-serif-display italic">sound.</span></>,
            pairs: [
                ["Marketing superlatives", "Plain, specific claims we can defend"],
                ["Growth-hacky urgency", "Calm, patient invitations"],
                ["Vague 'community' talk", "Concrete words about small groups of people"],
                ["Startup jargon", "Words a friend would actually use"],
            ],
        },
        {
            kicker: "colors",
            title: <>Two <span className="font-serif-display italic">core colors.</span></>,
            body: "Deep warm black and warm cream. Amber only as an accent, never as a background wash. Never recolor the logo.",
        },
    ]} ctaTitle={<>Need the <span className="font-serif-display italic">full kit?</span></>} ctaLabel="Request assets"/>);
export default Brand;
