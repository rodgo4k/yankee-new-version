import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
    label: "product",
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
    label: "solutions",
    children: [
      { label: "For creators", path: "/for-creators", desc: "Reach every follower, every time" },
      { label: "For friends and family", path: "/for-friends-family", desc: "A feed of only your people" },
      { label: "For small teams", path: "/for-small-teams", desc: "Quieter than Slack, sharper than email" },
      { label: "For communities", path: "/for-communities", desc: "Human-scale rooms, by design" },
      { label: "For students", path: "/for-students", desc: "Study mode & campus rooms" },
    ],
  },
  {
    label: "company",
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
  const [clock, setClock] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
    setOpenMobileGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const date = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      setClock(`${date}  ${time}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const isChildActive = (item: NavItem) =>
    item.children?.some((c) => c.path === location.pathname) ?? false;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        isScrolled || isOpen
          ? "bg-card/95 border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-12 md:h-14 w-full px-4 md:px-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <Link
            to="/"
            className="flex items-center text-foreground hover:opacity-70 transition-opacity shrink-0"
            aria-label="Yankee home"
          >
            <Logo className="h-[18px] md:h-5 w-auto" />
          </Link>

          <div
            className="hidden md:flex items-center gap-1"
            onMouseLeave={() => setOpenMenu(null)}
          >
            {navItems.map((item) => {
              const active = isChildActive(item);
              const open = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 px-2.5 py-1 text-[13px] lowercase tracking-tight transition-colors ${
                      active || open
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={11}
                      strokeWidth={2.2}
                      className={`opacity-60 transition-transform duration-100 ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  {item.children && (
                    <div
                      className={`absolute top-full left-0 pt-2 ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      <div className="yankee-surface yankee-surface--sm w-[300px] rounded-2xl bg-card p-1.5">
                        {item.children.map((c) => {
                          const isActive = location.pathname === c.path;
                          return (
                            <Link
                              key={c.path}
                              to={c.path}
                              className={`block px-3.5 py-2.5 rounded-xl transition-colors ${
                                isActive ? "bg-muted/80" : "hover:bg-muted/60"
                              }`}
                            >
                              <div className="text-[13px] font-medium text-foreground leading-tight lowercase">
                                {c.label}
                              </div>
                              {c.desc && (
                                <div className="text-[12px] text-muted-foreground mt-0.5">
                                  {c.desc}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <span className="text-[12px] tabular-nums text-foreground/45 select-none">
            {clock}
          </span>
          <Link
            to="/contact"
            className="text-[13px] lowercase text-foreground/70 hover:text-foreground transition-colors px-1"
          >
            contact
          </Link>
          <Link
            to="/download"
            className="inline-flex items-center text-[13px] font-medium lowercase text-primary hover:opacity-80 transition-opacity"
          >
            early access
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-foreground p-1.5 -mr-1"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-card">
          <div className="flex flex-col px-3 py-2 pb-4">
            {navItems.map((item) => {
              const groupOpen = openMobileGroup === item.label;
              return (
                <div key={item.label} className="flex flex-col">
                  <button
                    type="button"
                    aria-expanded={groupOpen}
                    onClick={() =>
                      setOpenMobileGroup(groupOpen ? null : item.label)
                    }
                    className="flex items-center justify-between px-3 py-3 text-[15px] font-medium text-foreground lowercase rounded-xl hover:bg-muted/60"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-100 ${
                        groupOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {groupOpen && item.children && (
                    <div className="pl-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.path}
                          to={c.path}
                          className="block px-3 py-2.5 text-[14px] text-muted-foreground hover:text-foreground lowercase rounded-xl hover:bg-muted/50"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/contact"
              className="mt-1 mx-1 px-3 py-3 text-[15px] text-foreground/80 lowercase rounded-xl hover:bg-muted/60"
            >
              contact
            </Link>
            <Link
              to="/download"
              className="mt-1 mx-1 inline-flex items-center justify-center py-3 rounded-full text-[14px] font-medium lowercase text-primary-foreground bg-primary"
            >
              early access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
