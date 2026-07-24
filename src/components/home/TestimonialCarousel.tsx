import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { surface } from "@/lib/yankeeSurface";

const testimonials = [
  {
    quote:
      "you'll finally see every post from your friends again. no more wondering if anyone saw what you shared.",
    name: "maya r.",
    role: "designer · são paulo",
    initials: "MR",
  },
  {
    quote:
      "crowds will feel like the group chats we always wanted: small, calm, and actually about something we care about.",
    name: "leo k.",
    role: "founder · berlin",
    initials: "LK",
  },
  {
    quote:
      "chat, calls and the feed in one place. your family won't need five apps just to stay in touch.",
    name: "jisoo p.",
    role: "nurse · seoul",
    initials: "JP",
  },
  {
    quote:
      "post once and it will reach everyone who follows you. that alone is why yankee is worth waiting for.",
    name: "andré s.",
    role: "creator · lisbon",
    initials: "AS",
  },
  {
    quote:
      "a chronological feed again. social media before everything got loud, built the way it should be.",
    name: "nina t.",
    role: "student · montreal",
    initials: "NT",
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

      <div className="relative min-h-[200px] md:min-h-[180px]">
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
