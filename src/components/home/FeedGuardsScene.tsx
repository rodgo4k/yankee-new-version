import PrintPhoneCycle from "@/components/home/PrintPhoneCycle";
import homeFeed from "@/assets/yankee/home-feed.png";
import messages from "@/assets/yankee/messages.png";
import searchImg from "@/assets/yankee/search.png";

const FeedGuardsScene = ({ className = "" }: { className?: string }) => (
  <PrintPhoneCycle
    className={className}
    rotate={-1.5}
    slides={[
      { src: homeFeed, label: "your chronological feed", holdMs: 5200 },
      { src: messages, label: "alerts when people post", holdMs: 4800 },
      { src: searchImg, label: "signals across the surface", holdMs: 4800 },
    ]}
  />
);

export default FeedGuardsScene;
