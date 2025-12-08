import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CDN_URL, PLACEHOLDER_IMG } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
 

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const menuCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c?.card?.card?.itemCards
    ) || [];

  if (!resInfo) return <Shimmer />;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Restaurant Info */}
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#2c3e50', margin: '0 0 10px 0' }}>{name}</h2>
        <p style={{ fontSize: '16px', color: '#7f8c8d', margin: 0 }}>
          {cuisines?.join(', ')} - {costForTwoMessage}
        </p>
      </div>

      <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#2c3e50', marginBottom: '25px', textAlign: 'center' }}>Menu</h3>

      {/* Menu Categories */}
      {menuCards.map((category, idx) => (
        <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#2c3e50', marginBottom: '20px', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>
            {category?.card?.card?.title}
          </h4>

          {category?.card?.card?.itemCards?.map((item) => (
            <div key={item?.card?.info?.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', margin: '15px 0', backgroundColor: '#f8f9fa', borderRadius: '12px', transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#e8f4fd'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#f8f9fa'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ flex: 1 }}>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600', color: '#2c3e50' }}>{item?.card?.info?.name}</h5>
                <p style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#e74c3c' }}>
                  ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </p>
                {item?.card?.info?.description && (
                  <p style={{ margin: 0, fontSize: '14px', color: '#7f8c8d', lineHeight: '1.5' }}>{item?.card?.info?.description}</p>
                )}
              </div>
              {item?.card?.info?.imageId && (
                <img
                  src={`${CDN_URL}w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                  alt={item?.card?.info?.name}
                  onError={(e) => (e.target.src = PLACEHOLDER_IMG)}
                  style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', marginLeft: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
