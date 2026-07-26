import AnimatedSection from "@/components/AnimatedSection";
import CrowdAppCard from "@/components/home/CrowdAppCard";
import cafeFriends from "@/assets/cafe-friends.jpg";
import harvardHall from "@/assets/harvard-hall.png";
import stanfordHall from "@/assets/stanford-hall.png";
import filmNight from "@/assets/film-night.png";
import liveThread from "@/assets/live-thread.png";
import heroStrip3 from "@/assets/hero-strip-3.png";
import dormLore from "@/assets/dorm-lore.png";

type CrowdCard = {
  name: string;
  src: string;
  count: string;
  pos: string;
  span: string;
  tags: string[];
  tall?: boolean;
  wide?: boolean;
};

export const crowdCards: CrowdCard[] = [
  {
    name: "Harvard University",
    src: harvardHall,
    count: "8.543",
    pos: "50% 35%",
    span: "col-span-1 md:col-span-2",
    tags: ["#harvard", "#campus", "#ivy"],
  },
  {
    name: "Stanford University",
    src: stanfordHall,
    count: "6.210",
    pos: "50% 40%",
    span: "col-span-1 md:col-span-2",
    tags: ["#stanford", "#campus"],
  },
  {
    name: "Coffee Club",
    src: cafeFriends,
    count: "2.104",
    pos: "50% 40%",
    span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    tall: true,
    tags: ["#coffee", "#friends", "#hangout"],
  },
  {
    name: "Movie Dump",
    src: filmNight,
    count: "3.891",
    pos: "50% 35%",
    span: "col-span-1 md:col-span-4",
    wide: true,
    tags: ["#movies", "#cinema", "#nightin"],
  },
  {
    name: "Link Up",
    src: heroStrip3,
    count: "1.219",
    pos: "50% 45%",
    span: "col-span-1 md:col-span-4",
    wide: true,
    tags: ["#party", "#friends", "#nightout"],
  },
  {
    name: "Locked In",
    src: liveThread,
    count: "5.879",
    pos: "50% 35%",
    span: "col-span-1 md:col-span-1",
    tags: ["#music", "#studio"],
  },
  {
    name: "Dorm Lore",
    src: dormLore,
    count: "4.320",
    pos: "50% 45%",
    span: "col-span-1 md:col-span-1",
    tags: ["#campus", "#students"],
  },
];

type CrowdsBentoProps = {
  className?: string;
};

const CrowdsBento = ({ className = "" }: CrowdsBentoProps) => (
  <div
    className={`grid grid-cols-2 md:grid-cols-6 auto-rows-[190px] md:auto-rows-[210px] gap-3 md:gap-4 ${className}`}
  >
    {crowdCards.map((crowd, i) => (
      <AnimatedSection key={crowd.name} delay={0.04 + i * 0.03} className={`${crowd.span} h-full min-h-0`}>
        <CrowdAppCard
          name={crowd.name}
          src={crowd.src}
          count={crowd.count}
          pos={crowd.pos}
          tags={crowd.tags}
          tall={crowd.tall}
          wide={crowd.wide}
        />
      </AnimatedSection>
    ))}
  </div>
);

export default CrowdsBento;
