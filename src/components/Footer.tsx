import { Link } from "react-router-dom";
import { Logo } from "./Logo";
const footerLinks = [
    {
        title: "Product",
        links: [
            { label: "Features", to: "/features" },
            { label: "The feed", to: "/feed" },
            { label: "Communities", to: "/communities" },
            { label: "Memory", to: "/memory" },
            { label: "Reach", to: "/reach" },
            { label: "Notifications", to: "/notifications" },
            { label: "Privacy", to: "/privacy-first" },
        ],
    },
    {
        title: "Solutions",
        links: [
            { label: "For creators", to: "/for-creators" },
            { label: "For friends and family", to: "/for-friends-family" },
            { label: "For small teams", to: "/for-small-teams" },
            { label: "For communities", to: "/for-communities" },
            { label: "For students", to: "/for-students" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Story", to: "/story" },
            { label: "Careers", to: "/careers" },
            { label: "Contact", to: "/contact" },
            { label: "Early access", to: "/download" },
        ],
    },
    {
        title: "Social",
        links: [
            { label: "Instagram", href: "https://instagram.com/yankeeapp" },
            { label: "X / Twitter", href: "https://x.com/yankeeapp" },
            { label: "TikTok", href: "https://tiktok.com/@yankeeapp" },
        ],
    },
];
const Footer = () => (<footer className="border-t border-border/40 bg-background">
    <div className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
            <Logo className="h-7 w-auto"/>
          </Link>
          <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[240px]">
            The social network with no hidden algorithm. Post once, reach everyone.
          </p>
        </div>

        {footerLinks.map((group) => (<div key={group.title}>
            <h4 className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-4">{group.title}</h4>
            <div className="flex flex-col gap-2.5">
              {group.links.map((link) => "to" in link ? (<Link key={link.label} to={link.to} className="text-[13px] text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>) : (<a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </a>))}
            </div>
          </div>))}
      </div>

      <div className="mt-16 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-muted-foreground">© 2026 Yankee LLC, a Foretheist product.</p>
        <div className="flex items-center gap-5">
          <Link to="/terms" className="text-[11px] text-muted-foreground hover:text-foreground">Terms</Link>
          <Link to="/privacy" className="text-[11px] text-muted-foreground hover:text-foreground">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>);
export default Footer;
