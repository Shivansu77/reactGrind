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
      backgroundColor: '#000',
      color: '#e6e6e6',
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
            aria-label="Search restaurants"
            style={{
              padding: '10px 18px',
              fontSize: '15px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.06)',
              width: '320px',
              outline: 'none',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.6)',
              backgroundColor: '#0b0b0b',
              color: '#e6e6e6',
              caretColor: '#fff',
              transition: 'box-shadow 0.15s ease, border-color 0.15s ease'
            }}
            onFocus={(e) => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(30,136,229,0.08)'; e.currentTarget.style.borderColor = 'rgba(30,136,229,0.5)'; }}
            onBlur={(e) => { e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
          />

          <button
            onClick={handleSearch}
            aria-label="Search"
            style={{
              backgroundColor: 'transparent',
              color: '#cfe9ff',
              padding: '8px 14px',
              fontSize: '15px',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'border-color 120ms ease, background-color 120ms ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(30,136,229,0.36)'; e.currentTarget.style.backgroundColor = 'rgba(30,136,229,0.04)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <span style={{fontSize: '16px'}}>🔍</span>
            <span style={{opacity: 0.95}}>Search</span>
          </button>

          <button
            onClick={filterRestaurants}
            style={{
              backgroundColor: 'transparent',
              color: '#ffd54f',
              padding: '10px 20px',
              fontSize: '15px',
              border: '1px solid rgba(255,213,79,0.12)',
              borderRadius: '999px',
              cursor: 'pointer',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background-color 140ms ease, border-color 140ms ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,213,79,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,213,79,0.28)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,213,79,0.12)'; }}
          >
            <span style={{fontSize: '14px'}}>⭐</span>
            Top Rated
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
