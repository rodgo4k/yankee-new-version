import SimplePage from "@/components/SimplePage";
import heroPainterly from "@/assets/hero-painterly.jpg";
const Press = () => (<SimplePage tag="company" eyebrow="press & media" hero={heroPainterly} title={<>Yankee, <span className="font-serif-display italic">on the record.</span></>} subtitle="Interviews, quotes, coverage, and everything a journalist needs to write about us accurately." blocks={[
        {
            kicker: "quick facts",
            title: <>The essentials, <span className="font-serif-display italic">no fluff.</span></>,
            cards: [
                { t: "Founded", d: "2025. A product of Foretheist, an infrastructure studio for calmer software." },
                { t: "Headquarters", d: "Distributed. Legal home in the US, engineering across three continents." },
                { t: "Team size", d: "A deliberately small team. Under 25 people through the current cycle." },
                { t: "Funding", d: "Privately backed. We are not currently raising or making a raise announcement." },
            ],
        },
        {
            kicker: "brand assets",
            title: <>Logos, screenshots, <span className="font-serif-display italic">and product shots.</span></>,
            body: "Everything is available in the brand kit. Please avoid recoloring the logo or placing it on busy backgrounds.",
        },
        {
            kicker: "contact",
            title: <>Talk to <span className="font-serif-display italic">our press desk.</span></>,
            body: "We respond within one business day. Priority for on record interviews and product reviews.",
        },
    ]} ctaTitle={<>Write about <span className="font-serif-display italic">what we're doing.</span></>} ctaLabel="Contact press"/>);
export default Press;
