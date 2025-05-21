import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.nav className="fixed w-full z-50 py-6 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-6">
        <span className="font-bold text-xl text-purple-300 tracking-widest">Raghuram</span>
        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-purple-300 transition">About</a>
          <a href="#skills" className="hover:text-purple-300 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-300 transition">Projects</a>
          <a href="#education" className="hover:text-purple-300 transition">Education</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}