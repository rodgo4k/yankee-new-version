import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BeamPillButton from "@/components/home/BeamPillButton";

const VIDEO_SRC = "/videos/yankee-intro.mp4";
const POSTER_SRC = "/videos/yankee-intro-poster.jpg";

/**
 * Intro video embed with BeamPillButton play/pause controls
 * (same style as the hero download CTA).
 */
const IntroVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };
    const onEnded = () => {
      setPlaying(false);
      setHasPlayed(false);
      setProgress(0);
      video.currentTime = 0;
    };
    const onError = () => setLoadError(true);
    const onLoaded = () => setLoadError(false);

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    video.addEventListener("loadeddata", onLoaded);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, []);

  const play = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.error || loadError) {
      setLoadError(true);
      return;
    }

    try {
      if (video.readyState < 2) {
        video.load();
        await new Promise<void>((resolve, reject) => {
          const onReady = () => {
            cleanup();
            resolve();
          };
          const onFail = () => {
            cleanup();
            reject(new Error("video load failed"));
          };
          const cleanup = () => {
            video.removeEventListener("loadeddata", onReady);
            video.removeEventListener("canplay", onReady);
            video.removeEventListener("error", onFail);
          };
          video.addEventListener("loadeddata", onReady);
          video.addEventListener("canplay", onReady);
          video.addEventListener("error", onFail);
        });
      }

      if (!hasPlayed) video.currentTime = 0;
      video.muted = false;
      setMuted(false);
      await video.play();
      setPlaying(true);
      setHasPlayed(true);
      setLoadError(false);
    } catch {
      try {
        video.muted = true;
        setMuted(true);
        await video.play();
        setPlaying(true);
        setHasPlayed(true);
        video.muted = false;
        setMuted(false);
        setLoadError(false);
      } catch {
        setLoadError(true);
      }
    }
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setPlaying(false);
  };

  const togglePlay = () => {
    if (playing) pause();
    else void play();
  };

  const toggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
  };

  const seek = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
  };

  const controlsVisible = hasPlayed && (playing ? showControls : true);
  const showCenterControl = !playing || showControls;

  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 dotted-bg overflow-hidden">
      <div className="absolute inset-0 bg-background/75" />
      <div className="relative max-w-[920px] mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center max-w-xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-foreground tracking-tight leading-[1.02] lowercase">
            a quick look inside the app
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div
            className="relative mx-auto w-full max-w-[800px]"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <motion.div
              whileHover={{ scale: hasPlayed && !playing ? 1 : 1.005 }}
              transition={{ duration: 0.18 }}
              className="relative aspect-video rounded-[1.15rem] md:rounded-[1.35rem] overflow-hidden border-2 border-foreground bg-[#e9e8ea] shadow-[6px_6px_0_0_hsl(var(--foreground))]"
            >
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.75)]"
                aria-hidden
              />

              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={VIDEO_SRC}
                poster={POSTER_SRC}
                muted={muted}
                playsInline
                preload="auto"
                onClick={togglePlay}
                aria-label="Yankee app introduction video"
              />

              {!hasPlayed && (
                <img
                  src={POSTER_SRC}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover"
                />
              )}

              {loadError && (
                <div className="absolute z-30 inset-0 flex items-center justify-center bg-foreground/50 px-6">
                  <p className="text-center text-[14px] text-white lowercase max-w-xs">
                    couldn&apos;t load the video. try refreshing the page.
                  </p>
                </div>
              )}

              {/* Initial play CTA */}
              {!playing && !hasPlayed && !loadError && (
                <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BeamPillButton tone="glass" aria-label="play video" onClick={() => void play()}>
                    <Play size={18} className="fill-white text-white" />
                    play video
                  </BeamPillButton>
                </div>
              )}

              {/* Play again when paused */}
              {!playing && hasPlayed && (
                <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <BeamPillButton tone="glass" shape="round" aria-label="play" onClick={() => void play()}>
                    <Play size={22} className="fill-white text-white ml-0.5" />
                  </BeamPillButton>
                </div>
              )}

              {/* Pause control while playing (shows on hover) */}
              {playing && (
                <div
                  className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                    showCenterControl ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <BeamPillButton tone="glass" shape="round" aria-label="pause" onClick={pause}>
                    <Pause size={22} className="fill-white text-white" />
                  </BeamPillButton>
                </div>
              )}

              {hasPlayed && (
                <button
                  type="button"
                  aria-label={playing ? "pause video" : "play video"}
                  onClick={togglePlay}
                  className="absolute inset-0 z-[15] cursor-pointer bg-transparent"
                />
              )}

              <div
                className={`absolute inset-x-0 bottom-0 z-[16] h-12 pointer-events-none transition-opacity duration-200 ${
                  controlsVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  role="slider"
                  aria-label="video progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(progress)}
                  tabIndex={0}
                  onClick={seek}
                  className="pointer-events-auto absolute bottom-3 left-3 right-3 h-1.5 hover:h-2.5 transition-[height] cursor-pointer rounded-full bg-white/25 backdrop-blur-[2px]"
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {hasPlayed && (
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "unmute video" : "mute video"}
                  aria-pressed={muted}
                  className="absolute z-20 top-3 right-3 w-9 h-9 rounded-full border border-white/40 bg-black/25 backdrop-blur-[3px] text-white flex items-center justify-center hover:bg-black/40 transition-colors"
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              )}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IntroVideoSection;
