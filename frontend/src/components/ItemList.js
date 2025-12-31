import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const HandleAddItem = () => {
    //dispatch an action to add item to cart
    dispatch(addItem("pizza") );

  }
  return (
    <div className="space-y-4 px-5 py-4">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex gap-4 rounded-lg border border-gray-200 p-4 transition hover:shadow-md"
        >
          <div className="flex-1">
            <h4 className="text-base font-medium text-gray-900">
              {item?.card?.info?.name}
            </h4>

            {item?.card?.info?.description && (
              <p className="mt-1 text-sm text-gray-600">
                {item?.card?.info?.description}
              </p>
            )}

            <p className="mt-2 font-semibold text-gray-900">
              ₹{(item?.card?.info?.price ?? item?.card?.info?.defaultPrice) / 100}
            </p>
          </div>

          {item?.card?.info?.imageId && (
            <div className="relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 px-3 py-1 rounded text-sm font-medium hover:bg-gray-50" onClick={HandleAddItem}>
                ADD
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;