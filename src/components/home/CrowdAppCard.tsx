type CrowdAppCardProps = {
  name: string;
  src: string;
  count: string;
  tags: string[];
  pos?: string;
  tall?: boolean;
  wide?: boolean;
  className?: string;
};

const CrowdAppCard = ({
  name,
  src,
  count,
  tags,
  pos = "50% 40%",
  tall,
  wide,
  className = "",
}: CrowdAppCardProps) => (
  <div
    className={`relative flex h-full w-full flex-col overflow-hidden rounded-[1.25rem] bg-foreground/10 ${
      tall
        ? "min-h-[280px] md:min-h-0"
        : wide
          ? "min-h-[160px] md:min-h-0"
          : "min-h-[180px] md:min-h-0"
    } ${className}`}
  >
    <img
      src={src}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: pos }}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/50" />

    <div className="relative z-10 flex min-h-0 flex-1 flex-col p-2.5 md:p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="inline-flex h-6 max-w-full items-center rounded-full bg-black/45 px-2.5 backdrop-blur-md">
            <p className="truncate text-[11px] font-medium leading-none tracking-tight text-white md:text-[12.5px]">{name}</p>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[9px] font-medium text-white/90 backdrop-blur-md md:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="inline-flex h-6 shrink-0 items-center rounded-full bg-black/45 px-2.5 backdrop-blur-md">
          <span className="text-[11px] font-medium leading-none tabular-nums text-[#8ec5ff] md:text-[12px]">{count}</span>
        </div>
      </div>

      <div className="mt-auto pt-3">
        <div
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/15 px-5 py-1.5 backdrop-blur-xl"
          aria-hidden
        >
          <span className="text-[12px] font-semibold text-[#3b82f6] md:text-[13px]">Join</span>
        </div>
      </div>
    </div>
  </div>
);

export default CrowdAppCard;
