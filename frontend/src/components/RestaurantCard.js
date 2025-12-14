import React, { useState } from 'react';
import { CDN_URL, PLACEHOLDER_IMG } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  
  const [imageRounded, setImageRounded] = useState(true);

  const [hovered, setHovered] = useState(false);
  const [bgFill] = useState('rgba(30,136,229,0.06)');

  return (
    <div
      onMouseEnter={() => { setImageRounded(false); setHovered(true); }}
      onMouseLeave={() => { setImageRounded(true); setHovered(false); }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: hovered ? bgFill : '#111',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '300px',
        transition: 'background-color 200ms ease, border-color 200ms ease',
        border: hovered ? '1px solid rgba(30,136,229,0.18)' : '1px solid rgba(255,255,255,0.04)'
      }}
    >
      <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
        <img
          src={resData?.info?.cloudinaryImageId
            ? `${CDN_URL}fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`
            : PLACEHOLDER_IMG}
          alt={resData?.info?.name || 'Restaurant'}
          onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: imageRounded ? '13px' : '0',
            transition: 'border-radius 160ms ease',
            cursor: 'pointer'
          }}
        />
      </div>

      <div style={{ padding: '12px', flex: '1 1 auto', display: 'flex', flexDirection: 'column', backgroundColor: hovered ? 'rgba(30,136,229,0.02)' : 'transparent', transition: 'background-color 200ms ease' }}>
        <h3
          style={{
            margin: '0 0 6px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#e6e6e6',
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
            color: '#cfcfcf',
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
