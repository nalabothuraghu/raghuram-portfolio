import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#111324]">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.h2 className="text-3xl font-bold text-purple-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >Education</motion.h2>
        <motion.div className="bg-[#191A32] rounded-xl shadow-lg px-8 py-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="font-semibold text-purple-100 text-xl">B.Tech in Electronics and Communication Engineering</div>
          <div className="text-gray-300 mt-2">Gokaraju Rangaraju Institute of Engineering and Technology</div>
          <div className="text-purple-400 mt-1">2022 – 2026</div>
        </motion.div>
      </div>
    </section>
  );
}