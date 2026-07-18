import { ReactNode } from "react";
interface FolkBubbleProps {
    children: ReactNode;
    className?: string;
}
export const FolkBubble = ({ children, className = "" }: FolkBubbleProps) => {
    return (<span className={`relative inline-flex flex-col items-center transition-transform duration-500 hover:scale-105 ${className}`}>

      <span className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 translate-y-8 scale-90" aria-hidden/>

      <span className="relative z-10 inline-flex items-center justify-center px-8 sm:px-10 md:px-14 py-5 sm:py-6 md:py-7 rounded-[2.25rem] sm:rounded-[3rem] md:rounded-[3.5rem] leading-none bg-primary text-primary-foreground shadow-[0_30px_60px_-15px_hsl(var(--primary)/0.25)]">
        {children}
      </span>

      <span className="-mt-2 relative z-0" aria-hidden>
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-3 sm:w-8 sm:h-4 md:w-11 md:h-5 text-primary fill-current">
          <path d="M24 24C24 24 21.5 0 0 0H48C26.5 0 24 24 24 24Z"/>
        </svg>
      </span>
    </span>);
};
export default FolkBubble;
