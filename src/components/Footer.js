import React, { useState, useEffect } from "react";
import Loader from "./Loader"; // Import the Loader component

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a content loading delay of 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 11000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <footer className="bg-black text-white p-4 text-center">
        <Loader />
      </footer>
    );
  }

  return (
    <footer className="bg-black text-white p-4 text-center">
      <p className="mb-4">&copy; 2024 [Anish Kumar]. All rights reserved.</p>
      <ul className="flex flex-wrap justify-center space-x-4 mt-4">
        <li>
          <a href="/about" className="hover:text-orange-500">
            About Us
          </a>
        </li>
        <li>
          <a href="/latest-news" className="hover:text-orange-500">
            Latest News
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
