import { motion } from "framer-motion";

const skills = [
  { title: "Python", level: "Advanced" },
  { title: "Data Structures & Algorithms", level: "Advanced" },
  { title: "DBMS", level: "Intermediate" },
  { title: "OOP", level: "Intermediate" },
  { title: "Linux", level: "Intermediate" },
  { title: "SQL", level: "Intermediate" },
  { title: "Git", level: "Intermediate" },
  { title: "Jupyter Notebook", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#111324]">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold text-purple-200 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >Skills</motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, idx) => (
            <motion.div key={idx}
              className="bg-[#191A32] rounded-xl px-8 py-6 shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="font-semibold text-purple-100">{skill.title}</div>
              <div className="text-purple-400 mt-2">{skill.level}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}