import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.252318221261632&lng=75.70347367317582&restaurantId=590350&submitAction=ENTER'
    );
    const json = await res.json();
    console.log(json);
    setResInfo(json?.data);
  };

  // ⛔ Prevent error BEFORE accessing nested properties


  // Now it's safe to extract name
  const {name,cuisines,costForTwoMessage}= resInfo?.cards?.[2]?.card?.card?.info || {};

  return(resInfo===null)?<Shimmer/>: (
    <div>
      <h2>{name}</h2>
      <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
      <h3></h3>
      <ul>
        <li>h</li>
        <li>h</li>
        <li>h</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
