import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import images
import goldLogo from "../../public/images/1.png";
import silverLogo from "../../public/images/3.png";
import bronzeLogo from "../../public/images/2.png";
import goldQRCode from "../../public/images/gold-community-barcode.png";
import silverQRCode from "../../public/images/silver-community-barcode.png";
import bronzeQRCode from "../../public/images/bronze-community-barcode.png";



// Component for Logo Image with fallback
function LogoImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 p-2">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
        <span className="text-[8px] mt-1 text-center">Logo</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain rounded-full"
      onError={() => setImageError(true)}
    />
  );
}

// Component for QR Code with fallback
function QRCodeImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-gray-400 ">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
        </svg>
        <span className="text-[8px] mt-1 text-center">QR Code</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain p-1"
      onError={() => setImageError(true)}
    />
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // WhatsApp Communities
  const whatsappCommunities = [
    {
      name: "Gold",
      skillLevel: "3.5+",
      description: "Gold Level",
      link: "https://chat.whatsapp.com/FLPQmBVB2HZ0qZXbIKVaZC",
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-900",
      logo: goldLogo,
      qrCode: goldQRCode,
    },
    {
      name: "Silver",
      skillLevel: "2.0 - 3.5",
      description: "Silver Level",
      link: "https://chat.whatsapp.com/Ck5FqVwO6PE2z9t7lcLZIn",
      bgColor: "bg-gray-300",
      borderColor: "border-gray-400",
      textColor: "text-gray-900",
      logo: silverLogo,
      qrCode: silverQRCode,
    },
    {
      name: "Bronze",
      skillLevel: "0.5 - 2.0",
      description: "Bronze Level",
      link: "https://chat.whatsapp.com/GazMoGBueHZHuToAi8moEH",
      bgColor: "bg-amber-700",
      borderColor: "border-amber-800",
      textColor: "text-amber-50",
      logo: bronzeLogo,
      qrCode: bronzeQRCode,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - Top Center */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-neutra-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-[#012169] uppercase tracking-tight">
            Get in Touch
          </h1>
          <p className="font-neutra-book text-lg text-gray-600 max-w-2xl mx-auto font-bold uppercase tracking-wide">
            REACH OUT TO US FOR COACHING SESSIONS, CORPORATE EVENTS, OR ANY
            GENERAL ENQUIRIES.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Form - Order 2 on small/medium, Order 1 on large */}
          <motion.div
            className="bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl lg:mt-0 lg:ml-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4 sm:mb-6">
                <h3 className="font-neutra-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#012169] mb-1 uppercase tracking-wide">
                  Contact Us
                </h3>
              </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  onChange={handleChange}
                  required
                  className="font-neutra-book w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div> */}

              <div>
                <label className="font-neutra-book block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  onChange={handleChange}
                  required
                  className="font-neutra-book w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="font-neutra-book block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    className="font-neutra-book w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-neutra-book block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    required
                    className="font-neutra-book w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-neutra-book block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  onChange={handleChange}
                  className="font-neutra-book w-full px-4 py-7 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div>

              <motion.button
                type="submit"
                className="font-neutra-book w-full py-4 rounded-full text-base font-black bg-[#FEDD00] text-black shadow-lg uppercase tracking-wide"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Content - WhatsApp Communities - Order 1 on small/medium, Order 2 on large */}
          <motion.div
            className="h-full order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Outer Card Wrapper */}
            <div className="bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
              {/* Section Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="font-neutra-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#012169] mb-1 uppercase tracking-wide">
                  PADEL FC WHATSAPP COMMUNITY
                </h3>
              </div>

              {/* Communities List - Picture Style */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {whatsappCommunities.map((community, index) => (
                  <div key={index}>
                    {/* Heading above each card */}
                    <div className="mb-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-neutra-book text-sm sm:text-base font-black text-black uppercase group-hover:text-[#012169] transition-colors duration-300 tracking-wide">
                          {community.name} Level
                        </h3>
                        <span className="font-neutra-book text-sm sm:text-base font-black text-black">
                          {community.skillLevel}
                        </span>
                      </div>
                    </div>

                    {/* Card - Fully Clickable */}
                    <motion.a
                      href={community.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block bg-white/90 backdrop-blur-sm border border-slate-400 hover:border-[#FEDD00]/30 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-3 sm:p-4 flex flex-row items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      title={`Click to join ${community.name} WhatsApp group`}
                    >
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FEDD00] via-blue-400 to-[#012169] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      
                      {/* Badge Circle - Logo Image (No Border) */}
                      <div className={`relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 ${community.bgColor} rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <LogoImage
                          src={community.logo}
                          alt={`${community.name} Community Logo`}
                        />
                      </div>

                      {/* Spacer */}
                      <div className="flex-1"></div>

                      {/* QR Code (No Border) */}
                      <div className="relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <QRCodeImage
                          src={community.qrCode}
                          alt={`${community.name} Level QR Code`}
                        />
                      </div>
                    </motion.a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
