import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

const CountryDetails = () => {
  const param = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const fun = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${param.name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,area,maps,latlng`
      );
      const data = await response.json();
      setDetails(data[0]);
      console.log(data[0]);
      setIsLoading(false);
    };
    fun();
  }, [param.name]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex flex-col md:flex-row items-center justify-around bg-gray-900 rounded-2xl p-8 m-3 shadow-lg">
            {/* Flag + Map */}
            <div className="flex flex-col items-center space-y-6">
              {/* Flag */}
              <div className="flex-shrink-0">
                <img
                  src={details.flags.png}
                  alt={details.flags.alt}
                  className="w-56 h-36 object-cover rounded-lg shadow-lg border border-gray-700"
                />
              </div>

              {/* Map */}
              <div className="w-full">
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  Location Map
                </h3>
                {details.latlng && (
                  <a
                    href={details.maps.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-80 h-52 rounded-lg overflow-hidden shadow-md border border-gray-700 hover:scale-105 transition-transform duration-200"
                  >
                    <iframe
                      title="country-map"
                      src={`https://www.google.com/maps?q=${details.latlng[0]},${details.latlng[1]}&z=4&output=embed`}
                      className="w-full h-full"
                      loading="lazy"
                    ></iframe>
                  </a>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="mt-8 md:mt-0 md:ml-10 text-white space-y-3">
              <h1 className="text-3xl font-extrabold tracking-wide font-serif italic mb-4">
                {details.name.common}
              </h1>

              <h2 className="text-lg font-semibold">
                Official Name:{" "}
                <span className="font-medium italic text-gray-300">
                  {details.name.official}
                </span>
              </h2>

              <h3 className="text-base font-semibold">
                Capital:{" "}
                <span className="font-medium italic text-gray-300">
                  {details.capital?.join(", ")}
                </span>
              </h3>

              <h3 className="text-base font-semibold">
                Region:{" "}
                <span className="font-medium italic text-gray-300">
                  {details.region}
                </span>
              </h3>

              <h3 className="text-base font-semibold">
                Subregion:{" "}
                <span className="font-medium italic text-gray-300">
                  {details.subregion}
                </span>
              </h3>

              <h3 className="text-base font-semibold">
                Population:{" "}
                <span className="font-medium italic text-gray-300">
                  {details.population.toLocaleString()}
                </span>
              </h3>

              {Object.values(details.currencies).map((currency, idx) => (
                <h3 key={idx} className="text-base font-semibold">
                  Currency:{" "}
                  <span className="font-medium italic text-gray-300">
                    {currency.name} ({currency.symbol})
                  </span>
                </h3>
              ))}

              <h3 className="text-base font-semibold">
                Area:{" "}
                <span className="font-medium italic text-gray-300">
                  {details.area.toLocaleString()} sq km
                </span>
              </h3>

              {/* Wiki Button */}
              <div className="pt-4">
                <a
                  href={`https://en.wikipedia.org/wiki/${details.name.common}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
                >
                  Learn More on Wikipedia
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
