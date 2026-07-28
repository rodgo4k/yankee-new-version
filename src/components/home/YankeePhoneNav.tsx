import type { ReactNode } from "react";
import { CopyPlus, MessagesSquare, Send, Users } from "lucide-react";

type Tab = "crowd" | "dm" | "create" | "ai" | "chat";

const IconAlien = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M11 17a2.5 2.5 0 0 0 2 0" />
    <path d="M12 3c-4.664 0-7.396 2.331-7.862 5.595a11.816 11.816 0 0 0 2 8.592 10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199-3.064 11.89 11.89 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3z" />
    <path d="M8 11l2 2" />
    <path d="M16 11l-2 2" />
  </svg>
);

const YankeePhoneNav = ({
  active = "crowd",
  badge = 1,
}: {
  active?: Tab | "discover" | "messages" | "home" | "profile" | "dm";
  badge?: number | null;
}) => {
  const normalized: Tab =
    active === "discover" || active === "crowd"
      ? "crowd"
      : active === "messages" || active === "dm"
        ? "dm"
        : active === "home" || active === "create"
          ? "create"
          : active === "ai"
            ? "ai"
            : active === "profile" || active === "chat"
              ? "chat"
              : "crowd";

  const items: { id: Tab; icon: ReactNode; create?: boolean }[] = [
    { id: "crowd", icon: <Users size={15} strokeWidth={1.75} /> },
    { id: "dm", icon: <Send size={14} strokeWidth={1.75} /> },
    { id: "create", icon: <CopyPlus size={14} strokeWidth={1.85} />, create: true },
    { id: "ai", icon: <IconAlien size={15} /> },
    { id: "chat", icon: <MessagesSquare size={14} strokeWidth={1.75} /> },
  ];

  return (
    <div className="absolute bottom-2.5 inset-x-3.5 z-20 pointer-events-none">
      <div className="rounded-full bg-[#2c2c2e]/95 border border-white/[0.1] px-2.5 py-[3px] flex items-center justify-between shadow-[0_10px_32px_-10px_rgba(0,0,0,0.75)]">
        {items.map((it) => {
          if (it.create) {
            return (
              <span
                key={it.id}
                className="w-[28px] h-[28px] rounded-full bg-white text-black flex items-center justify-center shrink-0"
              >
                {it.icon}
              </span>
            );
          }
          const on = it.id === normalized;
          return (
            <span
              key={it.id}
              className={`relative w-7 h-7 flex items-center justify-center shrink-0 ${
                on ? "text-white" : "text-white/50"
              }`}
            >
              {it.icon}
              {it.id === "chat" && badge != null && badge > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[13px] h-[13px] px-0.5 rounded-full bg-[#48484a] text-[7px] font-semibold text-white flex items-center justify-center leading-none">
                  {badge > 9 ? "9+" : badge}
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default YankeePhoneNav;
