import React from 'react';
import {
  FaReact, FaPython, FaRobot, FaCode,
} from 'react-icons/fa';
import { SiNextdotjs, SiC } from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const SkillSection = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20">
      <h2 className="text-purple-400 text-center uppercase tracking-wide text-sm mb-2">Skills</h2>
      <h1 className="text-4xl font-bold text-center mb-10">Professional & Academic Skills</h1>

      {/* Circular Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {coreSkills.map((skill, index) => (
          <div key={index} className="w-32 text-center">
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
          </div>
        ))}
      </div>

      {/* Other Course Skills */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-center">Other Academic Skills</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {otherSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#1f1f2e] border border-gray-700 hover:border-purple-500 px-4 py-2 rounded-full text-sm transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
