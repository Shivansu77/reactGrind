const React = require('react');

const RestaurantCard = ({ resData }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      height: '100%'
    }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div
        style={{
          width: '100%',
          height: '150px',
          overflow: 'hidden'
        }}
      >
        <img
          src={resData.info?.cloudinaryImageId ?
            `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}` :
            "./food.jpg"}
          alt="Food"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}>
        <h3 style={{
          margin: '0 0 5px 0',
          fontSize: '16px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {resData.info?.name || resData.resName}
        </h3>

        <p style={{
          margin: '0 0 10px 0',
          fontSize: '13px',
          color: '#666',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {resData.info?.cuisines?.join(', ') || 'Beverages, juice'}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#555' }}>
          <span style={{ fontWeight: 'bold', color: '#333' }}>★ {resData.info?.avgRating || '4.0'}</span>
          <span>{resData.info?.sla?.deliveryTime || '30'} min</span>
          <span>{resData.info?.costForTwo || '₹200'}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;