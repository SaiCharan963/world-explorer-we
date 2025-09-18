import React from 'react'

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  handleSortIncrease,
  handleSortDecrease,
}) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-4 rounded-xl shadow-md space-y-3 md:space-y-0 md:space-x-4">
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="w-full sm:w-auto text-black pl-3 pr-2 h-9 rounded-lg font-medium border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          className="w-full sm:w-auto text-black pl-2 pr-8 h-9 rounded-lg font-medium border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          onClick={handleSortIncrease}
        >
          Sort A → Z
        </button>
        <button
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          onClick={handleSortDecrease}
        >
          Sort Z → A
        </button>
      </div>
    </div>
  );
};

export default SearchFilter