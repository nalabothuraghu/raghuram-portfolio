import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#191A32]">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2 className="text-3xl font-bold text-purple-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m a final-year B.Tech student majoring in Electronics and Communication Engineering at GRIET, Hyderabad. My passion is software development and problem-solving.
          I am proficient in Python, Data Structures, Algorithms, and always eager to learn and contribute to real-world solutions. I'm exploring opportunities in software development to grow and make an impact in the tech industry.
        </motion.p>
      </div>
    </section>
  );
}