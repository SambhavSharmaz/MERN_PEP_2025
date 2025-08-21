import React, { useState } from "react";

const Header = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 

  const YoutubeSearchApiCall = async (searchQuery) => {
    if (!searchQuery) return; 
    try {
      const response = await fetch(
        `https://youtube138.p.rapidapi.com/search/?q=${encodeURIComponent(
          searchQuery
        )}&hl=en&gl=US`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
            "x-rapidapi-key": "03b8091b43msh923e43b1c789f69p170609jsncd6c44c42923",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setResults(data.contents || []);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    YoutubeSearchApiCall(query);
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">YouTube Clone</h1>

        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="p-2 rounded-l bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 bg-blue-500 rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map(
          (item, idx) =>
            item.video && (
              <div
                key={idx}
                className="bg-gray-900 p-2 rounded-lg shadow hover:scale-105 transition"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="rounded-lg mb-2"
                />
                <p className="text-sm font-semibold line-clamp-2">
                  {item.video.title}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export { Header };
