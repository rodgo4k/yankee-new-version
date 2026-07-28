import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { surface } from "@/lib/yankeeSurface";

const testimonials = [
  {
    quote:
      "lowkey forgot algorithms could be this bad 😭 now i actually see everyone's posts again. notions + the map got me finding people i would've never met.",
    name: "ava m.",
    role: "student · boston",
    initials: "AM",
  },
  {
    quote:
      "our crowd is literally active 24/7 😭 we plan everything there instead of juggling different apps. it's giving organized chaos.",
    name: "jayden t.",
    role: "content creator · chicago",
    initials: "JT",
  },
  {
    quote:
      "spin is actually crazy!! matched with people that are deadass into the same niche as me. instant vibes.",
    name: "noah l.",
    role: "software engineer · austin",
    initials: "NL",
  },
  {
    quote:
      "made my profile look exactly how i wanted instead of everyone having the same boring page 🥳",
    name: "zoe k.",
    role: "graphic designer · los angeles",
    initials: "ZK",
  },
  {
    quote:
      "never thought i'd actually want ai inside a social app, but planning projects with my crowd, getting code help, and creating stuff without leaving the app is kinda insane.",
    name: "ethan c.",
    role: "full-stack developer · san francisco",
    initials: "EC",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-end gap-2 mb-4">
        <button
          type="button"
          onClick={prev}
          aria-label="previous testimonials"
          className={surface("control", "w-10 h-10")}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="next testimonials"
          className={surface("control", "w-10 h-10")}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="relative min-h-[240px] md:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className={surface("lg", "p-6 md:p-8")}
          >
            <p className="text-[16px] md:text-[18px] text-foreground leading-relaxed lowercase">
              “ {t.quote} ”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className={surface("icon", "w-10 h-10 rounded-full bg-secondary text-[12px] font-semibold")}>
                {t.initials}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-foreground lowercase">{t.name}</p>
                <p className="text-[12px] text-muted-foreground lowercase">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full border border-foreground/70 transition-colors ${ i === index ? "bg-foreground" : "bg-transparent" }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
