import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { handleSmoothScroll } from "../utils/smoothScroll";
import desktopVideo from "../../public/videos/padelhaus-2-desktop.mp4";
import mobileVideo from "../../public/videos/padelhaus-2-mobile.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Detect mobile
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Dynamically load video source to prevent IDM detection
    // Video source is set programmatically after component mounts
    if (videoRef.current && !prefersReducedMotion && !videoError) {
      const video = videoRef.current;
      const videoSrc = isMobile ? mobileVideo : desktopVideo;
      
      // Set video source dynamically to prevent IDM from detecting it initially
      if (!video.src && videoSrc) {
        // Small delay to prevent immediate detection by download managers
        const timer = setTimeout(() => {
          video.src = videoSrc;
          video.load();
        }, 150);

        return () => clearTimeout(timer);
      }
    }
  }, [isMobile, prefersReducedMotion, videoError]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background - Source loaded dynamically to prevent IDM detection */}
      {!prefersReducedMotion && !videoError && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover overflow-hidden select-none"
          style={{ 
            objectPosition: "center 40%",
            userSelect: "none",
            WebkitUserSelect: "none",
            pointerEvents: "auto"
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          draggable="false"
          onError={() => setVideoError(true)}
          onLoadedData={(e) => {
            // Video loaded successfully
            e.target.play().catch(() => setVideoError(true));
          }}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      )}

      {/* Fallback background image */}
      {(prefersReducedMotion || videoError) && (
        <img
          src="https://images.unsplash.com/photo-1622278647429-71f511b0aaf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Padel Club Background"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto md:mt-28 lg:mt-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h1
          className="font-akira text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <span>Berlin ,</span>
          <br /> <span>Let's Padel</span>
        </motion.h1>

        <motion.p
          className="font-open-sans text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          EXPERIENCE BERLIN'S FIRST INDOOR PADEL CLUB! ENJOY PADEL ON AND OFF THE PITCH IN OUR NEW INDUSTRIAL LOCATION BY THE SPREE
        </motion.p>

        <motion.button
          className="font-open-sans px-10 py-3 sm:px-14 sm:py-3.5 rounded-lg text-base sm:text-lg font-bold bg-[#FEDD00] text-black shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            y: -2,
            backgroundColor: "#FFD700",
            shadow: "0 10px 20px rgba(0,0,0,0.2)",
            transition: { duration: 0.15 },
          }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => handleSmoothScroll(e, "#contact", 90)}
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  );
}
