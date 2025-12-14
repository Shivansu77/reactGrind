import React, { useState, useEffect } from 'react';
import { RestaurantCard, withVegLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithVegLabel = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260&lng=75.5762'
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      console.log('Fetched restaurant data:', json);

      // Collect restaurants from any card that has them (some responses split lists)
      const cards = json?.data?.cards || [];
      let restaurants = [];

      cards.forEach((card) => {
        const arr = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(arr) && arr.length) restaurants.push(...arr);

        // sometimes restaurants are nested deeper inside card.card.cards
        const innerCards = card?.card?.card?.cards;
        if (Array.isArray(innerCards)) {
          innerCards.forEach((inner) => {
            const arr2 = inner?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (Array.isArray(arr2) && arr2.length) restaurants.push(...arr2);
          });
        }
      });

      // remove falsy and deduplicate by id
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

      if (unique.length > 0) {
        console.log(`Found ${unique.length} restaurants across cards`);
        setListofRestaurants(unique);
        setFilteredRestaurants(unique);
        return;
      }

      console.warn('Restaurants payload not found in API response.');
      return;
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      return;
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
  console.log("Body Rendered", listofRestaurants);
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
            {/** if the restaurant is veg then add a veg label to it */
            
              resData.info?.veg ? (
                <RestaurantCardWithVegLabel resData={resData} />
              ) : (
                <RestaurantCard resData={resData} />
              )
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
