// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import court from "../assets/icons/court.svg";
import indoor from "../assets/icons/indoor.svg";
import location from "../assets/icons/location.svg";

const features = [
  {
    id: "01",
    icon: court,
    title: "Riverside Court",
    desc: "Play with water-side views on the banks of the Spree. A one-of-a-kind setting where sport meets atmosphere.",
  },
  {
    id: "02",
    icon: indoor,
    title: "Premium Indoor Courts",
    desc: "Year-round play in industrial-style indoor courts with pro lighting and ideal conditions.",
  },
  {
    id: "03",
    icon: location,
    title: "Perfect Location",
    desc: "5 mins from Berlin Ostkreuz. Soon: floating saunas & riverside gastronomy.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Cards() {
  return (
    <section id="about" className="w-full py-0 pb-20 pt-5 relative overflow-hidden bg-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Stylish Horizontal Rule */}
          <div className="flex mt-5 items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#012169] to-transparent"></div>
            <div className="mx-2 h-2 w-2 rounded-full bg-[#012169]"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#012169] to-transparent"></div>
          </div>
          
          <p className="cards-paragraph my-5 relative z-10">
            {/* Every detail of our club is designed to elevate your match day—from our thoughtfully designed courts to our vibrant community atmosphere. */}
            <b>PADELHAUS OFFERS PADEL WITHIN AN ELEVATED SPORTS ENVIRONMENT, ALONGSIDE BEACH VOLLEYBALL, PICKLEHAUS, FLOATING SAUNAS, AND MORE SPORTS CONCEPTS TO COME MAKING IT A VIBRANT SPORTS HUB.</b>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10 mt-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-[#FEDD00]/30 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FEDD00] via-blue-400 to-[#012169] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-gradient-to-br from-[#FEDD00]/20 via-blue-100/30 to-slate-100 group-hover:from-[#FEDD00]/30 group-hover:via-blue-200/40 transition-all duration-300 shadow-sm">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="h-8 w-8 text-slate-700 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="cards-paragraph text-slate-900 group-hover:text-[#012169] transition-colors duration-300 uppercase">
                  <b>{feature.title}</b>
                </h3>
                <p className="font-neutra-book text-base text-slate-600 leading-relaxed uppercase tracking-wide">
                  {feature.desc.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
