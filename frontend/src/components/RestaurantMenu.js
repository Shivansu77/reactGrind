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
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#000', minHeight: '100vh' }}>
      
      {/* Restaurant Info */}
      <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '20px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '730', color: '#e6e6e6', margin: '0 0 10px 0' }}>{name}</h2>
        <p style={{ fontSize: '16px', color: '#cfcfcf', margin: 0 }}>
          {cuisines?.join(', ')} - {costForTwoMessage}
        </p>
      </div>
      <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#e6e6e6', marginBottom: '25px', textAlign: 'center' }}>Menu</h3>

      {/* Menu Categories */}
      {menuCards.map((category, idx) => (
        <div key={idx} style={{ backgroundColor: '#111', borderRadius: '16px', padding: '25px', marginBottom: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#e6e6e6', marginBottom: '20px', borderBottom: '2px solid rgba(255,255,255,0.04)', paddingBottom: '10px' }}>
            {category?.card?.card?.title}
          </h4>

          {category?.card?.card?.itemCards?.map((item) => (
            <div key={item?.card?.info?.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', margin: '15px 0', backgroundColor: '#111', borderRadius: '12px', transition: 'background-color 0.2s ease', cursor: 'pointer' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#111'; }}
            >
              <div style={{ flex: 1 }}>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600', color: '#e6e6e6' }}>{item?.card?.info?.name}</h5>
                <p style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#ff6b6b' }}>
                  ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </p>
                {item?.card?.info?.description && (
                  <p style={{ margin: 0, fontSize: '14px', color: '#cfcfcf', lineHeight: '1.5' }}>{item?.card?.info?.description}</p>
                )}
              </div>
              {item?.card?.info?.imageId && (
                <img
                  src={`${CDN_URL}w_208,h_208,c_fit/${item?.card?.info?.imageId}`}
                  alt={item?.card?.info?.name}
                  onError={(e) => (e.target.src = PLACEHOLDER_IMG)}
                  style={{ width: '130px', height: '120px', objectFit: 'cover', borderRadius: '12px', marginLeft: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
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
