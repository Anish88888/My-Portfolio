import React, { useState, useEffect } from "react";
import studentImage from "../assets/Anish.jpg";
import Loader from "./Loader";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <Loader />
      </section>
    );
  }

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto text-center">
        {/* Profile Image */}
        <img
          src={studentImage}
          alt="Anish Kumar"
          className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-orange-500 shadow-[0_0_30px_rgba(255,165,0,0.6)] transform hover:scale-110 transition-transform duration-500"
        />

        {/* Intro */}
        <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
          Hi, I am Anish Kumar
        </h1>
        <h2 className="text-xl text-gray-300 mb-12 tracking-wide">
          🚀 MERN Stack Developer | 💻 Frontend Engineer
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[
            {
              title: "Who I Am",
              desc: "I am a passionate Computer Science and Engineering student from Trident Academy of Technology, Odisha. I specialize in building responsive, scalable, and user-friendly web applications using the MERN stack.",
            },
            {
              title: "My Experience",
              desc: (
                <>
                  Completed a{" "}
                  <span className="font-semibold text-orange-400">
                    9-month Internship
                  </span>{" "}
                  as a{" "}
                  <span className="font-semibold">MERN Stack Developer</span> at{" "}
                  <span className="font-semibold">TetraTrion Technologies</span>
                  , where I worked on designing and developing responsive web
                  applications using{" "}
                  <span className="font-semibold">React.js</span> and{" "}
                  <span className="font-semibold">Tailwind CSS</span>. I also
                  gained practical experience in building full-stack solutions
                  with{" "}
                  <span className="font-semibold">
                    MongoDB, Express.js, React.js, and Node.js
                  </span>
                  , contributing to scalable and efficient project delivery.
                </>
              ),
            },

            {
              title: "My Education",
              desc: (
                <>
                  🎓 <b>B-Tech in Computer Science & Engineering</b> <br />
                  <span className="text-sm text-gray-400">
                    Trident Academy of Technology, Odisha (2021–2025) – 7.35
                    CGPA
                  </span>
                  <br />
                  📘 Senior Secondary – BDA Inter College, Bokaro (65%)
                  <br />
                  📗 Secondary – Madhusthali Vidyapeeth, Madhupur (62%)
                </>
              ),
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex-1 max-w-sm p-8 bg-gray-950/70 shadow-lg rounded-2xl border border-gray-800 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] transition duration-500 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                {card.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
