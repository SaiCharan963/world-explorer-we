import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around bg-gray-900 rounded-2xl p-5 m-3">
        <div className="pl-5 text-center md:text-left">
          {/* Heading */}
          <h1 className="pl-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide font-serif italic transition-transform duration-200 hover:scale-110 inline-block">
            Know the World, One Country at a Time.
          </h1>

          {/* Paragraph */}
          <p className="font-semibold italic pt-5 pb-5 text-gray-300 max-w-md mx-auto md:mx-0">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>

          {/* Button */}
          <Link to={"/country"}>
            <button className="px-6 sm:px-8 py-3 border border-white rounded-xl hover:bg-gray-500 transform transition duration-200 hover:scale-110 inline-block font-semibold tracking-wide">
              <div className="flex items-center justify-center md:justify-between">
                Start Exploring
                <div className="pt-1 pl-2">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </button>
          </Link>
        </div>

        <div className="mt-6 md:mt-0">
          <Profile />
        </div>
      </div>

      <About />
      <Contact />
    </div>
  );
};

export default Home;
