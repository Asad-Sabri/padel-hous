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
          <h1 className="font-akira text-5xl md:text-6xl font-bold mb-4 text-[#012169]">
            Get in Touch
          </h1>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us for coaching sessions, corporate events, or any
            general enquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Content - WhatsApp Communities */}
          <motion.div
            className="flex flex-col gap-6 h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Section Header */}
            <div className="mb-0 sm:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#012169] mb-1 uppercase tracking-wide">
                PADEL FC WHATSAPP COMMUNITY
              </h2>
            </div>

            {/* Communities List - Picture Style */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {whatsappCommunities.map((community, index) => (
                <div key={index}>
                  {/* Heading above each card */}
                  <div className="mb-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-black uppercase group-hover:text-[#012169] transition-colors duration-300">
                        {community.name} Level
                      </h3>
                      <span className="text-base sm:text-lg font-bold text-black">
                        {community.skillLevel}
                      </span>
                    </div>
                  </div>

                  {/* Card - Fully Clickable */}
                  <motion.a
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-white/90 backdrop-blur-sm border border-slate-400 hover:border-[#FEDD00]/30 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden p-4 sm:p-6 flex flex-row items-center justify-between gap-4 sm:gap-6 cursor-pointer"
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
                    <div className={`relative z-10 flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 ${community.bgColor} rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <LogoImage
                        src={community.logo}
                        alt={`${community.name} Community Logo`}
                      />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* QR Code (No Border) */}
                    <div className="relative z-10 flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <QRCodeImage
                        src={community.qrCode}
                        alt={`${community.name} Level QR Code`}
                      />
                    </div>
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white border border-gray-200 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl lg:mt-0 lg:ml-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
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
                  Don’t fill this out if you're human:{" "}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#012169] focus:outline-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-full text-base font-semibold bg-[#FEDD00] text-black shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
