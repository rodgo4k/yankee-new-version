import type { ReactNode } from "react";

type Tab = "crowd" | "dm" | "create" | "ai" | "chat";

const IconCrowd = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M16.2 8.2a2.35 2.35 0 1 1-4.7 0 2.35 2.35 0 0 1 4.7 0Z"
      stroke="currentColor"
      strokeWidth="1.55"
    />
    <path
      d="M19.6 17.8c-.25-2.35-1.95-3.7-3.95-3.7s-3.7 1.35-3.95 3.7"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
    />
    <path
      d="M12.4 7.6a2.15 2.15 0 1 0-4.2-.15"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
    />
    <path
      d="M8.3 14.2c-2.05.15-3.7 1.55-4 3.6"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
    />
    <path
      d="M17.7 7.35a2 2 0 1 1 1.55 3.55"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
    />
  </svg>
);

const IconPlane = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M21.4 3.2 2.8 11.1c-.55.24-.52.99.05 1.18l7.55 2.55 2.55 7.55c.19.57.94.6 1.18.05L21.9 3.8c.22-.52-.28-1.02-.8-.8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="m10.4 14.85 3.55-3.55"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconCreate = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="2.75" y="7.25" width="11.5" height="11.5" rx="2.4" stroke="currentColor" strokeWidth="1.65" />
    <rect x="9.75" y="3.25" width="11.5" height="11.5" rx="2.4" stroke="currentColor" strokeWidth="1.65" />
    <path d="M15.5 6.6v4.9M13.05 9.05h4.9" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
  </svg>
);

const IconAlien = ({ size = 19 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3.2c-3.85 0-7 3.35-7 7.5 0 2.85 1.45 5.25 3.55 6.55L7.2 20.8h9.6l-1.35-3.55c2.1-1.3 3.55-3.7 3.55-6.55 0-4.15-3.15-7.5-7-7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M8.2 2.6 10 5.1M15.8 2.6 14 5.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="9.1" cy="11.1" rx="1.55" ry="2.15" fill="currentColor" />
    <ellipse cx="14.9" cy="11.1" rx="1.55" ry="2.15" fill="currentColor" />
  </svg>
);

const IconChats = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M8 14.8H6.4A3.4 3.4 0 0 1 3 11.4V7.4A3.4 3.4 0 0 1 6.4 4h7.7A3.4 3.4 0 0 1 17.5 7.4v.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 10.2h9.2A2.8 2.8 0 0 1 21.2 13v4.1a2.8 2.8 0 0 1-2.8 2.8h-2.1l-2.9 2.2v-2.2H12a2.8 2.8 0 0 1-2.8-2.8v-6.9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
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
    { id: "crowd", icon: <IconCrowd /> },
    { id: "dm", icon: <IconPlane /> },
    { id: "create", icon: <IconCreate />, create: true },
    { id: "ai", icon: <IconAlien /> },
    { id: "chat", icon: <IconChats /> },
  ];

  return (
    <div className="absolute bottom-5 inset-x-3 z-30 pointer-events-none">
      <div className="rounded-full bg-[#2c2c2e]/95 border border-white/[0.1] px-3.5 py-[7px] flex items-center justify-between shadow-[0_10px_32px_-10px_rgba(0,0,0,0.75)]">
        {items.map((it) => {
          if (it.create) {
            return (
              <span
                key={it.id}
                className="w-[38px] h-[38px] rounded-full bg-white text-black flex items-center justify-center shrink-0"
              >
                {it.icon}
              </span>
            );
          }
          const on = it.id === normalized;
          return (
            <span
              key={it.id}
              className={`relative w-9 h-9 flex items-center justify-center shrink-0 ${
                on ? "text-white" : "text-white/50"
              }`}
            >
              {it.icon}
              {it.id === "chat" && badge != null && badge > 0 && (
                <span className="absolute top-0 right-0 min-w-[15px] h-[15px] px-0.5 rounded-full bg-[#48484a] text-[8px] font-semibold text-white flex items-center justify-center leading-none">
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
