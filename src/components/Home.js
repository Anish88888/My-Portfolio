import React from "react";
import studentImage from "../assets/Anii.jpg"; // Ensure path is correct
import cvFile from "../assets/Anish.jpg"; // Ensure path is correct
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Home = () => {
  // Variants for typing animation
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.1 }, // delay for each character
    }),
  };

  const name = "Anish Kumar";

  return (
    <section
      id="home"
      className="relative text-center p-8 bg-black text-white h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/bg.jpg')`, // Background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Background Glow Animation */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse -z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 container mx-auto flex flex-col items-center p-6 rounded-lg"
      >
        {/* Profile Image */}
        <motion.img
          src={studentImage}
          alt="Anish Kumar"
          className="w-44 h-44 rounded-full mx-auto mb-6 border-4 border-orange-500 shadow-[0_0_30px_rgba(255,165,0,0.6)]"
          whileHover={{ scale: 1.15, rotate: 2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-3"
        >
          Hi, I’m{" "}
          <span className="text-orange-500 drop-shadow-md">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subheading with Marquee */}
        <Marquee
          gradient={false}
          speed={80}
          className="text-xl md:text-2xl font-semibold text-orange-400 mb-6"
        >
          Looking for Frontend Developer ⚡ Frontend Engineer ⚡ Problem Solver
          ⚡ Open Source Enthusiast ⚡
        </Marquee>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300 leading-relaxed"
        >
          A passionate Computer Science student specializing in building
          responsive and user-friendly web applications with{" "}
          <span className="text-orange-400 font-semibold">
            React.js, Tailwind CSS, Node.js, Express.js, and MongoDB
          </span>
          . I love solving problems, creating innovative solutions, and
          delivering seamless digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href={cvFile}
            download="Anish.jpg"
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.8)]"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.8)]"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
