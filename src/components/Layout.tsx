import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export type SiteTheme = "folk-dark" | "folk-light";

type LayoutProps = {
  children: ReactNode;
  /** Defaults to dark Folk site-wide. Pass folk-light for the cream theme. */
  theme?: SiteTheme;
};

const Layout = ({ children, theme = "folk-dark" }: LayoutProps) => (
  <div
    className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300"
    data-theme={theme === "folk-dark" ? undefined : theme}
  >
    <Navbar />
    <main className="flex-1 pt-24">{children}</main>
    <Footer />
  </div>
);

export default Layout;
