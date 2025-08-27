import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import Loader from "./Loader";
import "./animations.css";

const skills = [
  { name: "HTML", level: 90, color: "#E44D26", icon: <FaHtml5 /> },
  { name: "CSS", level: 88, color: "#1572B6", icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 82, color: "#F7DF1E", icon: <FaJs /> },
  {
    name: "Tailwind CSS",
    level: 60,
    color: "#7952B3",
    icon: <SiTailwindcss />,
  },
  { name: "React JS", level: 80, color: "#61DAFB", icon: <FaReact /> },
  { name: "Node JS", level: 75, color: "#339933", icon: <FaNodeJs /> },
  { name: "Express JS", level: 72, color: "#6C757D", icon: <SiExpress /> },
  { name: "MongoDB", level: 72, color: "#47A248", icon: <SiMongodb /> },
  { name: "Java", level: 64, color: "#E76F00", icon: <FaJava /> },
  { name: "SQL", level: 60, color: "#00758F", icon: <SiMysql /> },
];

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map((skill) => ({ ...skill, currentLevel: 0 }))
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateLevels = () => {
      const totalSkills = animatedSkills.length;
      let completedSkills = 0;

      animatedSkills.forEach((skill, index) => {
        const interval = setInterval(() => {
          setAnimatedSkills((prevSkills) => {
            const updatedSkills = [...prevSkills];
            const currentSkill = updatedSkills[index];
            if (currentSkill.currentLevel < currentSkill.level) {
              currentSkill.currentLevel += 1;
              return updatedSkills;
            }
            clearInterval(interval);
            completedSkills += 1;
            if (completedSkills === totalSkills) {
              setLoading(false);
            }
            return updatedSkills;
          });
        }, 15); // smoother animation speed
      });
    };

    updateLevels();
  }, []);

  return (
    <section
      id="skills"
      className="p-10 bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-lg shadow-lg"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 fade-in-up">
          My Skills
        </h1>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {animatedSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center bg-gray-950/70 p-6 rounded-2xl shadow-xl hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300 ease-in-out"
              >
                <div className="w-28 h-28 mb-4">
                  <CircularProgressbar
                    value={skill.currentLevel}
                    text={`${skill.currentLevel}%`}
                    styles={buildStyles({
                      textColor: "#FFF",
                      pathColor: skill.color,
                      trailColor: "#1f2937",
                    })}
                  />
                </div>
                <div className="text-5xl mb-3 text-cyan-400">{skill.icon}</div>
                <span className="text-lg font-semibold tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
