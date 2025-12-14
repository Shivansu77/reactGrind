import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, PLACEHOLDER_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import '../index.css';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [openCategory, setOpenCategory] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
  
  const menuCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c?.card?.card?.itemCards
    ) || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600">{cuisines?.join(", ")}</p>
        <p className="text-lg font-semibold">{costForTwoMessage}</p>
      </div>
      
      <div className="space-y-4">
        {menuCards.map((category, index) => (
          <div key={index} className="border rounded-lg">
            <button 
              onClick={() => setOpenCategory(openCategory === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                {category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})
              </h3>
              <span className="text-2xl">
                {openCategory === index ? '−' : '+'}
              </span>
            </button>
            {openCategory === index && (
              <div className="px-4 pb-4 space-y-3">
                {category?.card?.card?.itemCards?.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{item?.card?.info?.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item?.card?.info?.description}</p>
                      <p className="font-semibold mt-2">₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</p>
                    </div>
                    {item?.card?.info?.imageId && (
                      <img 
                        src={CDN_URL + item?.card?.info?.imageId} 
                        alt={item?.card?.info?.name}
                        className="w-20 h-20 object-cover rounded-lg ml-4"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
