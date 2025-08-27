import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "./Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (9 seconds for now)
    const timer = setTimeout(() => setLoading(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section
        id="contact"
        className="p-8 bg-black text-white min-h-screen flex items-center justify-center"
      >
        <Loader />
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="p-10 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-orange-400">Contact Me</h1>
        <p className="text-lg text-gray-300 mb-8">
          I am a MERN Stack Developer with over 1 year of hands-on experience in
          building responsive and scalable web applications. Passionate about
          crafting clean, user-friendly interfaces and solving real-world
          problems through technology. Let’s connect and create something
          amazing!
        </p>

        {/* Contact Form */}
        <div className="bg-gray-950 bg-opacity-70 p-8 rounded-2xl shadow-lg backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-6 text-orange-400">
            Get in Touch
          </h2>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-orange-500/40"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <p className="text-gray-400 mb-4">Follow me on</p>
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/Anishkumar1235"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anish-kumar-9749bb262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invites/contact/?igsh=1ckqu5x7bygh4&utm_content=4k7cun0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
