import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
type SubLink = {
    label: string;
    path: string;
    desc?: string;
};
type NavItem = {
    label: string;
    path?: string;
    children?: SubLink[];
};
const navItems: NavItem[] = [
    {
        label: "Product",
        children: [
            { label: "Features", path: "/features", desc: "The full product tour" },
            { label: "The feed", path: "/feed", desc: "Chronological, finite, honest" },
            { label: "Communities", path: "/communities", desc: "Small rooms, on purpose" },
            { label: "Memory", path: "/memory", desc: "Private, encrypted library" },
            { label: "Reach", path: "/reach", desc: "Every follower, every time" },
            { label: "Notifications", path: "/notifications", desc: "Only pings you asked for" },
            { label: "Privacy", path: "/privacy-first", desc: "Private by design" },
        ],
    },
    {
        label: "Solutions",
        children: [
            { label: "For creators", path: "/for-creators", desc: "Reach every follower, every time" },
            { label: "For friends and family", path: "/for-friends-family", desc: "A feed of only your people" },
            { label: "For small teams", path: "/for-small-teams", desc: "Quieter than Slack, sharper than email" },
            { label: "For communities", path: "/for-communities", desc: "Human-scale rooms, by design" },
            { label: "For students", path: "/for-students", desc: "Free with a valid .edu" },
        ],
    },
    {
        label: "Company",
        children: [
            { label: "Story", path: "/story", desc: "What we're building, why" },
            { label: "Careers", path: "/careers", desc: "Come build with us" },
            { label: "Contact", path: "/contact", desc: "How to reach us" },
        ],
    },
];
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
    const location = useLocation();
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 10));
    useEffect(() => {
        setIsOpen(false);
        setOpenMenu(null);
    }, [location]);
    const isChildActive = (item: NavItem) => item.children?.some((c) => c.path === location.pathname) ?? false;
    return (<motion.nav initial={{ y: -12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3 md:px-6">
      <div className={`max-w-[1200px] mx-auto flex items-center justify-between h-14 pl-4 pr-2 rounded-full transition-all duration-300 ${isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-border/60 shadow-sm"
            : "bg-background/50 backdrop-blur-md border border-border/40"}`}>
        <Link to="/" className="flex items-center text-foreground hover:opacity-80 transition-opacity">
          <Logo className="h-6 w-auto"/>
        </Link>

        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" onMouseLeave={() => setOpenMenu(null)}>
          {navItems.map((item) => {
            const active = isChildActive(item);
            const open = openMenu === item.label;
            return (<div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
                <button className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${active || open
                    ? "bg-muted/70 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`}>
                  {item.label}
                  <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`}/>
                </button>

                <AnimatePresence>
                  {open && item.children && (<motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="w-[320px] rounded-3xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-lg p-2">
                        {item.children.map((c) => {
                        const isActive = location.pathname === c.path;
                        return (<Link key={c.path} to={c.path} className={`block px-4 py-3 rounded-2xl transition-colors ${isActive ? "bg-muted/70" : "hover:bg-muted/50"}`}>
                              <div className="text-[13.5px] font-medium text-foreground leading-tight">{c.label}</div>
                              {c.desc && (<div className="text-[12px] text-muted-foreground mt-0.5">{c.desc}</div>)}
                            </Link>);
                    })}
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>);
        })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact" className="px-4 py-1.5 rounded-full text-[13px] text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link to="/download" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-90 transition-opacity">
            Download
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
          {isOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (<motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }} className="md:hidden mt-2 max-w-[1200px] mx-auto rounded-3xl bg-background/95 backdrop-blur-xl border border-border/60 overflow-hidden">
            <div className="flex flex-col p-3">
              {navItems.map((item) => (<div key={item.label} className="flex flex-col">
                  <button onClick={() => setOpenMobileGroup(openMobileGroup === item.label ? null : item.label)} className="flex items-center justify-between px-4 py-3 text-[15px] font-medium text-foreground rounded-2xl hover:bg-muted/60">
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${openMobileGroup === item.label ? "rotate-180" : ""}`}/>
                  </button>
                  <AnimatePresence>
                    {openMobileGroup === item.label && item.children && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="pl-3 overflow-hidden">
                        {item.children.map((c) => (<Link key={c.path} to={c.path} className="block px-4 py-2.5 text-[14px] text-muted-foreground hover:text-foreground rounded-2xl hover:bg-muted/50">
                            {c.label}
                          </Link>))}
                      </motion.div>)}
                  </AnimatePresence>
                </div>))}
              <Link to="/download" className="mt-2 mx-2 py-3 rounded-full bg-primary text-primary-foreground text-[14px] font-medium text-center">
                Download
              </Link>
            </div>
          </motion.div>)}
      </AnimatePresence>
    </motion.nav>);
};
export default Navbar;
