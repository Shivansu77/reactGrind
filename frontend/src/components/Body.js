import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260&lng=75.5762'
      );
      const json = await data.json();

      const restaurantCard = json?.data?.cards?.find(card =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      if (restaurantCard) {
        const restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
        setListofRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      }
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
    }
  }

  const filterRestaurants = () => {
    const filteredList = listofRestaurants.filter(res =>
      (res.info?.name || res.resName).length > 15
    );
    setFilteredRestaurants(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listofRestaurants.filter(res =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  if (listofRestaurants.length === 0) return <Shimmer />;

  return (
    <div style={{
      padding: '40px 20px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search restaurants..."
            style={{
              padding: '10px 18px',
              fontSize: '15px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              width: '300px',
              outline: 'none',
              boxShadow: 'none',
              transition: 'all 0.2s ease'
            }}
          />

          <button
            onClick={handleSearch}
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              padding: '10px 22px',
              fontSize: '15px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: '0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
          >
            🔍 Search
          </button>

          <button
            onClick={filterRestaurants}
            style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              padding: '10px 22px',
              fontSize: '15px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: '0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
          >
            ⭐ Top Rated
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 300px))',
        gap: '20px',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 10px',
        justifyContent: 'center'
      }}>
        {filteredRestaurants.map((resData) => (
          <Link
            to={`/restaurant/${resData.info?.id}`}
            key={resData.info?.id}
            style={{ textDecoration: 'none' }}
          >
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
