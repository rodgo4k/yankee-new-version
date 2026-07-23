import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import DotImageReveal from "@/components/home/DotImageReveal";
import RandomLetterSwap from "@/components/home/RandomLetterSwap";

type DotRevealSectionProps = {
  image: string;
};

/**
 * Folk-styled section wrapping Dot Image Reveal (Origin Kit inspired).
 * Desktop: hover. Mobile: drag across the grid.
 */
const DotRevealSection = ({ image }: DotRevealSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const sync = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <section className="relative py-16 md:py-28 dotted-bg">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[980px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 lg:gap-12">
          <AnimatedSection className="flex-1 min-w-0 md:max-w-[22rem] lg:max-w-[26rem] text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
              posts, profiles, notions &amp; crowds
            </h2>
            <p className="mt-4 md:mt-5 text-[15px] md:text-[16px] text-muted-foreground leading-relaxed lowercase max-w-md">
              one place to find people and rooms you actually care about. filter by what you want.
              no suggested strangers filling the grid.
            </p>

            <div className="mt-5 md:mt-6">
              <RandomLetterSwap
                label="find anyone"
                mode="pingpong"
                staggerDuration={0.05}
                className="justify-center md:justify-start text-[1.65rem] sm:text-[1.9rem] md:text-[2.15rem] font-semibold text-foreground tracking-tight cursor-default outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 rounded-sm"
              />
            </div>

            <Link
              to="/features"
              className="mt-6 md:mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent hover:opacity-80 lowercase"
            >
              see how search works <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="shrink-0 mx-auto md:mx-0">
            <div className="relative w-[220px] sm:w-[240px] md:w-[260px] aspect-[9/19.5]">
              <DotImageReveal
                image={image}
                alt="yankee feed: post from wintur in los angeles"
                background="transparent"
                fit="contain"
                dots={isMobile ? 11 : 16}
                gap={isMobile ? 8 : 9}
                radius={isMobile ? 90 : 130}
                intensity={isMobile ? 12 : 10}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default DotRevealSection;
