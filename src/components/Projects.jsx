import { motion } from "framer-motion";

const projects = [
  {
    title: "Xeno-Transplant Monitoring System",
    desc: "A scalable, AI-powered patient monitoring and outcome prediction system after xenotransplant surgeries.",
    stack: "React, Node.js, FastAPI, Firebase, Python, JavaScript",
  },
  {
    title: "Equipment Allocation System",
    desc: "Web application to manage and allocate equipment efficiently within organizations.",
    stack: "Python, JavaScript, SQL, HTML/CSS",
  },
  {
    title: "Student Result Management System",
    desc: "Secure portal for result upload and viewing by students using their IDs.",
    stack: "Python, HTML, CSS, JavaScript, SQL",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#191A32]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold text-purple-200 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >Projects</motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <motion.div key={idx}
              className="bg-[#232249] rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="font-semibold text-xl text-purple-200">{p.title}</div>
              <div className="mt-2 text-gray-300">{p.desc}</div>
              <div className="mt-4 text-purple-400 text-xs">{p.stack}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}