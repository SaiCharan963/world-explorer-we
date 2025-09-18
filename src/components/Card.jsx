import React from "react";

const Card = ({ ele }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg min-h-[15rem] bg-gray-800 text-white p-5 rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 inline-block">
      {/* Country Name */}
      <h1 className="text-2xl font-extrabold mb-2 tracking-wide font-serif italic">
        {ele.countryName}
      </h1>

      {/* Capital */}
      <h4 className="text-lg font-semibold">
        Capital:{" "}
        <span className="font-medium italic text-gray-300">{ele.capital}</span>
      </h4>

      {/* Population */}
      <h4 className="text-lg font-semibold">
        Population:{" "}
        <span className="font-medium italic text-gray-300">
          {ele.population}
        </span>
      </h4>

      {/* Fact */}
      <h5 className="mt-3 text-sm leading-snug font-light italic text-gray-400">
        Interesting Fact:{" "}
        <span className="not-italic text-gray-200">{ele.interestingFact}</span>
      </h5>
    </div>
  );
};

export default Card;
