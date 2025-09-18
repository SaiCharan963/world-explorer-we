import React from 'react'
import Card from '../components/Card';
import data from '../data/countryData.json';

const About = () => {

  return (
    <div className="flex flex-col bg-gray-900 rounded-2xl p-5 m-3">
      <div className="text-center mt-5 mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide font-serif italic">
          Here are the Interesting Facts
        </h1>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide font-serif italic">
          of our World...
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pl-5">
        {data.map((ele) => (
          <div key={ele.id} className="mb-4">
            <Card ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About