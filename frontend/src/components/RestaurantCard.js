const React = require('react');

const RestaurantCard = ({ resData }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      border: 'none',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      height: '320px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      position: 'relative'
    }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
      }}
    >
      <div
        style={{
          width: '100%',
          height: '200px',
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

      <div style={{ padding: '16px', width: '100%', boxSizing: 'border-box' }}>
        <h3 style={{
          margin: '0 0 8px 0',
          fontSize: '18px',
          fontWeight: '700',
          color: '#2c3e50',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {resData.info?.name || resData.resName}
        </h3>

        <p style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          color: '#7f8c8d',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {resData.info?.cuisines?.join(', ') || 'Beverages, juice'}
        </p>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          fontSize: '13px',
          marginTop: 'auto'
        }}>
          <span style={{ 
            fontWeight: '600', 
            color: '#27ae60',
            backgroundColor: '#e8f5e8',
            padding: '4px 8px',
            borderRadius: '12px'
          }}>⭐ {resData.info?.avgRating || '4.0'}</span>
          <span style={{ color: '#e67e22', fontWeight: '600' }}>{resData.info?.sla?.deliveryTime || '30'} min</span>
          <span style={{ color: '#2c3e50', fontWeight: '700' }}>{resData.info?.costForTwo || '₹200'}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;