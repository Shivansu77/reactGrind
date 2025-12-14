import React from 'react';
import { CDN_URL, PLACEHOLDER_IMG } from '../utils/constants';
import '../index.css';
const RestaurantCard = ({ resData }) => {
  return (
    <div className="group flex flex-col rounded-lg overflow-hidden cursor-pointer h-72 bg-gray-900 border border-white/5 transition-colors duration-200 hover:bg-sky-900/6 hover:border-sky-500/30">
      <div className="w-full h-44 overflow-hidden">
        <img
          src={resData?.info?.cloudinaryImageId
            ? `${CDN_URL}fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`
            : PLACEHOLDER_IMG}
          alt={resData?.info?.name || 'Restaurant'}
          onError={(e) => { e.currentTarget.src = PLACEHOLDER_IMG; }}
          className="w-full h-full object-cover rounded-lg group-hover:rounded-none transition-all duration-150"
        />
      </div>

      <div className="p-3 flex-1 flex flex-col bg-transparent group-hover:bg-sky-900/20 transition-colors">
        <h3 className="m-0 text-base font-semibold text-gray-100 truncate">{resData?.info?.name || resData?.resName}</h3>

        <p className="m-0 text-sm text-gray-300 truncate mt-1">{resData?.info?.cuisines?.join(', ') || 'Beverages, juice'}</p>

        <div className="flex justify-between text-sm mt-auto items-center">
          <span className="font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full text-sm">⭐ {resData?.info?.avgRating || '4.0'}</span>
          <span className="text-amber-400 font-medium">{resData?.info?.sla?.deliveryTime || '30'} min</span>
          <span className="text-gray-300 font-semibold">{resData?.info?.costForTwo || '₹200'}</span>
        </div>
      </div>
    </div>
  );
};

const withVegLabel = (WrappedCard) => {
  return (props) => {
    return (
      <div className="relative block w-full">
        <WrappedCard {...props} />
        <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">VEG</div>
      </div>
    );
  };
};

export { RestaurantCard, withVegLabel };
