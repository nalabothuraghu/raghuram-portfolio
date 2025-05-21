import { motion } from "framer-motion";
import Avatar from "./Avatar"; // Import SVG Avatar

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center" style={{background: 'linear-gradient(135deg, #232249 40%, #A892FF 100%)'}}>
      <motion.div
        initial={{ scale: 0.7, y: 60, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <Avatar />
      </motion.div>
      <motion.h1 className="mt-8 text-3xl md:text-5xl font-extrabold text-purple-100 tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Hi, I'm <span className="text-purple-300">Raghuram Nalabothula</span>
      </motion.h1>
      <motion.h2 className="mt-4 text-xl md:text-2xl text-purple-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Aspiring Software Developer | Passionate About Turning Ideas Into Scalable Code
      </motion.h2>
      <div className="mt-8 flex gap-4">
        <a href="#contact" className="bg-purple-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-purple-400 shadow transition">Contact Me</a>
        <a href="#about" className="border border-purple-500 px-6 py-2 rounded-xl font-semibold text-purple-200 hover:bg-purple-700 transition">About</a>
      </div>
    </section>
  );
}