import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
      name: "Gold Group",
      description: "Join our premium Gold community",
      link: "https://chat.whatsapp.com/FLPQmBVB2HZ0qZXbIKVaZC",
      icon: "🥇",
    },
    {
      name: "Silver Group",
      description: "Join our Silver community",
      link: "https://chat.whatsapp.com/Ck5FqVwO6PE2z9t7lcLZIn",
      icon: "🥈",
    },
    {
      name: "Bronze Group",
      description: "Join our Bronze community",
      link: "https://chat.whatsapp.com/GazMoGBueHZHuToAi8moEH",
      icon: "🥉",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* Left Content - WhatsApp Communities */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Section Header */}
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-[#012169] mb-2 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                WhatsApp Communities
              </h2>
              <p className="text-sm text-gray-600">
                Join our communities to stay connected with updates, events, and exclusive offers.
              </p>
            </div>

            {/* Communities List */}
            <div className="flex flex-col gap-4">
              {whatsappCommunities.map((community, index) => (
                <motion.a
                  key={index}
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-xl bg-green-50 border-2 border-green-200 hover:border-green-400 hover:bg-green-100 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-2xl group-hover:bg-green-300 transition-colors">
                    {community.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                      {community.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                      {community.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 text-green-600 group-hover:text-green-700 group-hover:translate-x-1 transition-all">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white border border-gray-200 p-10 rounded-2xl shadow-xl"
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
