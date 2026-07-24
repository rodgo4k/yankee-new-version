import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export type SiteTheme = "folk-dark" | "folk-light";

type LayoutProps = {
  children: ReactNode;
  /** Defaults to light Folk site-wide. Pass folk-dark for the dark theme. */
  theme?: SiteTheme;
};

const Layout = ({ children, theme = "folk-light" }: LayoutProps) => (
  <div
    className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300"
    data-theme={theme === "folk-light" ? undefined : theme}
  >
    <Navbar />
    <main className="flex-1 pt-12 md:pt-14">{children}</main>
    <Footer />
  </div>
);

export default Layout;
