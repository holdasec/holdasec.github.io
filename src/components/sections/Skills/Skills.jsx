import { motion } from 'framer-motion';
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Vue', icon: <FaVuejs />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
    { name: 'Python', icon: <FaPython />, level: 70 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Figma', icon: <FaFigma />, level: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          技能专长
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
