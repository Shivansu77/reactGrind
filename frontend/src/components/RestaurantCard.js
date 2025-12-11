import React from 'react';

const RestaurantCard = ({ resData }) => {
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '300px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
      }}
    >
      <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
        <img
          src={resData.info?.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`
            : "./food.jpg"}
          alt="Restaurant"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '12px', flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            margin: '0 0 6px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#333',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {resData.info?.name || resData.resName}
        </h3>

        <p
          style={{
            margin: '0 0 10px 0',
            fontSize: '13px',
            color: '#777',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {resData.info?.cuisines?.join(', ') || 'Beverages, juice'}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            marginTop: 'auto'
          }}
        >
          <span
            style={{
              fontWeight: '500',
              color: '#2ecc71',
              backgroundColor: '#eafaf1',
              padding: '3px 7px',
              borderRadius: '10px'
            }}
          >
            ⭐ {resData.info?.avgRating || '4.0'}
          </span>
          <span style={{ color: '#f39c12', fontWeight: '500' }}>
            {resData.info?.sla?.deliveryTime || '30'} min
          </span>
          <span style={{ color: '#333', fontWeight: '600' }}>
            {resData.info?.costForTwo || '₹200'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
