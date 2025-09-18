import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import SearchFilter from '../components/SearchFilter';


function DataCard({ ele }) {

  return (
    <div className="w-full sm:w-80 h-75 bg-gray-800 text-white p-5 rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 inline-block">
      {/* Flag */}
      <div className="flex justify-center mb-3">
        <img
          src={ele.flags.png}
          alt={ele.flags.alt}
          className="w-28 h-16 object-cover rounded shadow-md"
        />
      </div>

      {/* Country Name */}
      <h1 className="text-xl font-bold mb-1 tracking-wide font-serif italic">
        {ele.name.common}
      </h1>

      {/* Population */}
      <h4 className="text-base font-semibold">
        Population:{" "}
        <span className="font-medium italic text-gray-300">
          {ele.population.toLocaleString()}
        </span>
      </h4>

      {/* Region */}
      <h4 className="text-base font-semibold">
        Region:{" "}
        <span className="font-medium italic text-gray-300">{ele.region}</span>
      </h4>

      {/* Capital */}
      <h4 className="text-base font-semibold">
        Capital:{" "}
        <span className="font-medium italic text-gray-300">
          {ele.capital ? ele.capital.join(", ") : "N/A"}
        </span>
      </h4>
      <div className="flex items-center justify-center mt-4">
        <Link to={`/country/${ele.name.common}`}>
          <button className="px-5 py-1 border border-white rounded-xl hover:bg-green-300 hover:text-red-800">
            <div className="flex items-center justify-between">
              Read More
              <div className="pt-1 pl-2">
                <FaLongArrowAltRight />
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}




const Country = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
        const data = await response.json();
        setIsLoading(false);
        setCountryData(data);
      }
      catch(err) {

      }
    }

    fun();
  },[]);

  function check(country) {
    if(country.name.common.toLowerCase().includes(search.toLowerCase()) && (country.region.toLowerCase() === filter.toLowerCase() || filter === "All")) return true;
    else return false;
  }

  const filteredData = countryData.filter((country) => (check(country)));

  const handleSortIncrease = () => {
    const sorted = [...countryData].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCountryData(sorted);
  }

  const handleSortDecrease = () => {
    const sorted = [...countryData].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
    setCountryData(sorted);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="bg-gray-900 rounded-2xl p-5 m-3 ">
            <SearchFilter
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
              handleSortIncrease={handleSortIncrease}
              handleSortDecrease={handleSortDecrease}
            />
            {filteredData.length === 0 ? (
              <div className='flex items-center justify-center pt-5'>
                <h1 className='text-3xl font-bold font-serif'>No Country Exist.</h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pl-5 pt-5">
                {filteredData.map((ele, index) => (
                  <DataCard key={index} ele={ele} />
                ))}
              </div>
            )}
          </div>

          <Footer />
        </div>
      )}
    </div>
  );

}

export default Country