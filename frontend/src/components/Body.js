import React, { useState, useEffect , useContext, use } from "react";
import { RestaurantCard, withVegLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
import '../index.css';
const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);

  const {setUserName, userName}= useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025"
      );

      if (!response.ok) {
        throw new Error(
          `Network response was not ok: ${response.status} ${response.statusText}`
        );
      }

      const json = await response.json();

      const cards = json?.data?.cards || [];
      let restaurants = [];

      cards.forEach((card) => {
        const arr =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(arr) && arr.length) restaurants.push(...arr);

        const innerCards = card?.card?.card?.cards;
        if (Array.isArray(innerCards)) {
          innerCards.forEach((inner) => {
            const arr2 =
              inner?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (Array.isArray(arr2) && arr2.length)
              restaurants.push(...arr2);
          });
        }
      });

      restaurants = restaurants.filter(Boolean);
      const seen = new Set();
      const unique = [];

      restaurants.forEach((r) => {
        const id = r?.info?.id;
        if (id && !seen.has(id)) {
          seen.add(id);
          unique.push(r);
        }
      });

      setListofRestaurants(unique);
      setFilteredRestaurants(unique);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const filterRestaurants = () => {
    const filteredList = listofRestaurants.filter(
      (res) => (res.info?.name || res.resName).length > 15
    );
    setFilteredRestaurants(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listofRestaurants.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1 className="text-center text-red-500 font-semibold mt-10">
        🔴 You are offline! Please check your internet connection.
      </h1>
    );

  if (listofRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="min-h-screen bg-black text-gray-200 font-inter px-5 py-10">
      {/* Search Section */}
      <div className="max-w-[1200px] mx-auto mb-8 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {/* Search Input */}
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
            aria-label="Search restaurants"
            className="
              w-80 px-5 py-2.5 text-[15px] rounded-full
              bg-[#0b0b0b] text-gray-200 caret-white
              border border-white/10 outline-none
              shadow-inner shadow-black/60
              transition-all duration-150
              focus:border-blue-500/60
              focus:shadow-[0_4px_18px_rgba(30,136,229,0.08)]
            "
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            aria-label="Search"
            className="
              flex items-center gap-2
              px-4 py-2 text-[15px] font-semibold
              text-blue-200
              border border-white/10 rounded-lg
              transition-all duration-150
              hover:border-blue-500/40
              hover:bg-blue-500/5
            "
          >
            <span className="text-base">🔍</span>
            <span className="opacity-95">Search</span>
           
          </button>

          {/* Top Rated Button */}
          <button
            onClick={filterRestaurants}
            className="
              flex items-center gap-2
              px-5 py-2.5 text-[15px] font-bold
              text-yellow-400
              border border-yellow-400/20 rounded-full
              transition-all duration-150
              hover:bg-yellow-400/10
              hover:border-yellow-400/40
            "
          >
            <span className="text-sm">⭐</span>
            Top Rated
          </button>
        </div>
      </div>
      <div  className="max-w-[1200px] mx-auto mb-8 text-center">
        <span className="mr-2">Test Input:</span>
        <input type="text" className=" rounded-lg text-black" placeholder=" Enter Name" onChange={(e) => setUserName(e.target.value)} value={userName} />
      </div>

      {/* Restaurant Grid */}
      <div
        className="
          max-w-[1400px] mx-auto px-2.5
          grid gap-5 justify-center
          grid-cols-[repeat(auto-fill,minmax(280px,300px))]
        "
      >
        {filteredRestaurants.map((resData) => (
          <Link
            to={`/restaurant/${resData.info?.id}`}
            key={resData.info?.id}
            className="no-underline"
          >
            {resData.info?.veg ? (
              <RestaurantCardWithVegLabel resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
