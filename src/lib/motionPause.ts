type PauseListener = (paused: boolean) => void;

let navOpen = false;
let docHidden =
  typeof document !== "undefined" ? document.visibilityState === "hidden" : false;

const listeners = new Set<PauseListener>();

const emit = () => {
  const paused = navOpen || docHidden;
  listeners.forEach((listener) => listener(paused));
};

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    docHidden = document.visibilityState === "hidden";
    emit();
  });
}

export const isMotionPaused = () => navOpen || docHidden;

export const setNavMotionPaused = (open: boolean) => {
  if (navOpen === open) return;
  navOpen = open;
  emit();
};

export const subscribeMotionPause = (listener: PauseListener) => {
  listeners.add(listener);
  listener(isMotionPaused());
  return () => {
    listeners.delete(listener);
  };
};

export const observeInView = (
  el: Element,
  onChange: (inView: boolean) => void,
  options?: IntersectionObserverInit,
) => {
  const io = new IntersectionObserver(([entry]) => {
    onChange(entry?.isIntersecting ?? false);
  }, {
    root: null,
    rootMargin: "80px 0px",
    threshold: 0.01,
    ...options,
  });
  io.observe(el);
  return () => io.disconnect();
};
