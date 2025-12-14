import React from 'react';
import { CDN_URL, PLACEHOLDER_IMG } from '../utils/constants';

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
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
      }}
    >
      <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
        <img
          src={resData?.info?.cloudinaryImageId
            ? `${CDN_URL}fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`
            : PLACEHOLDER_IMG}
          alt={resData?.info?.name || 'Restaurant'}
          onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
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
          {resData?.info?.name || resData?.resName}
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
          {resData?.info?.cuisines?.join(', ') || 'Beverages, juice'}
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
            ⭐ {resData?.info?.avgRating || '4.0'}
          </span>
          <span style={{ color: '#f39c12', fontWeight: '500' }}>
            {resData?.info?.sla?.deliveryTime || '30'} min
          </span>
          <span style={{ color: '#333', fontWeight: '600' }}>
            {resData?.info?.costForTwo || '₹200'}
          </span>
        </div>
      </div>
    </div>
  );
};

const withVegLabel = (WrappedCard) => {
  return (props) => {
    return (
      <div style={{ position: 'relative', display: 'block', width: '100%' }}>
        <WrappedCard {...props} />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: '#27ae60',
          color: '#fff',
          padding: '6px 10px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: '700',
          lineHeight: '1',
        }}>
          VEG
        </div>
      </div>
    );
  };
};

export { RestaurantCard, withVegLabel };
