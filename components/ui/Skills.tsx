"use client";
import React from 'react';
import {
  FaReact, FaPython, FaRobot, FaCode,
} from 'react-icons/fa';
import { SiNextdotjs, SiC } from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const coreSkills = [
  { name: 'React.js', icon: <FaReact />, percent: 92, color: '#10B981' },
  { name: 'Next.js', icon: <SiNextdotjs />, percent: 88, color: '#10B981' },
  { name: 'Python', icon: <FaPython />, percent: 90, color: '#10B981' },
  { name: 'C Programming', icon: <SiC />, percent: 85, color: '#F97316' },
  { name: 'Machine Learning', icon: <FaRobot />, percent: 55, color: '#FBBF24' },
  { name: 'DSA', icon: <FaCode />, percent: 90, color: '#10B981' },
];

const otherSkills = [
  'System Design',
  'DBMS',
  'Computer Networking',
  'AI',
  'Image Processing',
  'Data Analytics',
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const SkillSection = () => {
  return (
    <motion.section
      id="skills"
      className="text-white py-16 px-6 md:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-purple-400 text-center uppercase tracking-wide text-sm mb-2"
        variants={itemVariants}
      >
        Skills
      </motion.h2>

      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        variants={itemVariants}
      >
        Professional & Academic Skills
      </motion.h1>

      {/* Animated Circular Skills */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
        variants={containerVariants}
      >
        {coreSkills.map((skill, index) => (
          <motion.div key={index} className="w-32 text-center" variants={itemVariants}>
            <CircularProgressbar
              value={skill.percent}
              text={`${skill.percent}%`}
              styles={buildStyles({
                pathColor: skill.color,
                textColor: '#fff',
                trailColor: '#2d2d4a',
              })}
            />
            <div className="mt-2 text-sm flex items-center justify-center gap-2">
              <span className="text-lg">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Other Skills */}
      <motion.div className="mt-16" variants={itemVariants}>
        <motion.h3
          className="text-xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Other Academic Skills
        </motion.h3>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {otherSkills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-[#1f1f2e] border border-gray-700 hover:border-purple-500 px-4 py-2 rounded-full text-sm transition"
              variants={itemVariants}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillSection;
