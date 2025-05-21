import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#191A32]">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.h2 className="text-3xl font-bold text-purple-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >Contact Me</motion.h2>
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <a href="https://github.com/nalabothuraghu" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-purple-400 transition" /></a>
          <a href="https://leetcode.com/u/nalabothu_raghu/" target="_blank" rel="noopener noreferrer"><FaCode className="hover:text-purple-400 transition" /></a>
          <a href="https://www.linkedin.com/in/raghu-nalabothu-b7b2b92b5/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-purple-400 transition" /></a>
          <a href="mailto:raghunalabothu3@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="hover:text-purple-400 transition" /></a>
        </div>
        <motion.form className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <input type="text" placeholder="Your Name" className="rounded-md p-3 bg-[#111324] text-gray-200 focus:outline-none" />
          <input type="email" placeholder="Your Email" className="rounded-md p-3 bg-[#111324] text-gray-200 focus:outline-none" />
          <textarea rows="4" placeholder="Your Message" className="rounded-md p-3 bg-[#111324] text-gray-200 focus:outline-none"></textarea>
          <button type="submit" className="bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-400 shadow transition">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}