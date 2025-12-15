import { useParams } from "react-router-dom";
import React,{useState} from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, PLACEHOLDER_IMG } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import '../index.css';

const RestaurantMenu = () => {
  const { resId } = useParams(); 
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
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
          <RestaurantCategory 
            key={index} 
            data={category?.card?.card} 
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
