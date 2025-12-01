import React, {useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
      try {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260&lng=75.5762');
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
 
    if(listofRestaurants.length === 0) {
        return <Shimmer />;
    }

  return (
  <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
    <div style={{ marginBottom: '30px' }}>
      <input 
        onChange={(e) => setSearchText(e.target.value)} 
        value={searchText} 
        placeholder="Search restaurants..."
        style={{
          padding: '10px 15px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginRight: '10px',
          width: '300px',
          outline: 'none'
        }}
      />
      <button 
        onClick={handleSearch} 
        style={{
          backgroundColor: '#007bff', 
          color: 'white', 
          padding: '10px 20px', 
          fontSize: '16px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Search
      </button>

      <button 
        style={{ 
          marginLeft: '20px', 
          padding: '10px 20px', 
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }} 
        onClick={filterRestaurants}
        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
      >
        Filter Top Rated
      </button>
    </div>

    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(7, 1fr)', 
      gap: '15px',
      justifyContent: 'center' 
    }}>
      {filteredRestaurants.map((resData) => (
        <RestaurantCard key={resData.info?.id} resData={resData} />
      ))}
    </div>
  </div>
);
};

export default Body;