import React from "react";
import { motion } from "framer-motion";
import { handleSmoothScroll } from "../utils/smoothScroll";
// Note: Agar video public folder mein hai, to path "/videos/..." kafi hota hai
import desktopVideo from "../../public/videos/padelhaus-2-desktop.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fixed Video Background */}
      <video
        src={desktopVideo}
        className="absolute inset-0 w-full h-full object-cover overflow-hidden select-none"
        style={{
          objectPosition: "center 40%",
          userSelect: "none",
          WebkitUserSelect: "none",
          pointerEvents: "none", // Isko 'none' rakhein taaki clicks button par jayein
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
      />

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
          className="hero-heading font-akira text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <b>
          Berlin,<br /> Let's Padel  
          </b>
          
        </motion.h1>

        <motion.p
          className="hero-paragraph text-white uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          EXPERIENCE BERLIN'S <b>FIRST INDOOR PADEL CLUB!</b><br /> ENJOY <b>PADEL</b> ON AND OFF THE PITCH IN OUR NEW <br /> INDUSTRIAL LOCATION BY THE <b>SPREE</b>
        </motion.p>

        <motion.button
          className="book-now-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => handleSmoothScroll(e, "#contact", 90)}
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  );
}