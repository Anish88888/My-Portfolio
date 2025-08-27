import React, { useState, useEffect, useRef } from "react";
import projectImage1 from "../assets/Ecommerce jewellery website.png";
import projectImage2 from "../assets/Library Management system.png";
import projectImage3 from "../assets/Simon says Game.png";
import projectImage4 from "../assets/Todo List.png";
import Loader from "./Loader"; // Import the Loader component

const projects = [
  {
    id: 1,
    title: "Ecommerce Jewellery Website",
    description:
      "A full-featured ecommerce platform for jewellery shopping built with React.js & Tailwind CSS.",
    image: projectImage1,
    link: "https://github.com/Anish88888?tab=repositories",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A MERN stack application to manage books, users, and transactions in a digital library.",
    image: projectImage2,
    link: "https://github.com/Anish88888?tab=repositories",
  },
  {
    id: 3,
    title: "Simon Says Game",
    description:
      "A fun memory-based game created with JavaScript and interactive UI animations.",
    image: projectImage3,
    link: "https://github.com/Anish88888?tab=repositories",
  },
  {
    id: 4,
    title: "Todo List",
    description:
      "A productivity app to track tasks, manage priorities, and boost daily efficiency.",
    image: projectImage4,
    link: "https://github.com/Anish88888?tab=repositories",
  },
];

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced to 2 seconds for better UX

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 text-center">
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Section Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-orange-400 drop-shadow-lg">
              My Projects
            </h1>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
             transform hover:scale-110 transition-transform duration-500 
             border-4 border-transparent hover:border-orange-500 
             shadow-[0_0_20px_rgba(255,165,0,0.3)] hover:shadow-[0_0_30px_rgba(255,165,0,0.6)]"
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover hover:opacity-90 transition-all duration-300"
                  />

                  {/* Card Content */}
                  <div className="p-6 text-left">
                    <h2 className="text-2xl font-semibold text-white mb-3 hover:text-orange-400 transition-all duration-300">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-orange-500/50"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
