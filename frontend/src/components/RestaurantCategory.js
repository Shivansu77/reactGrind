import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      
      {/* Accordion Header */}
      <div
        className="flex cursor-pointer items-center justify-between bg-gray-50 px-5 py-4 transition hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold text-gray-800">
          {data.title} ({data.itemCards?.length})
        </span>

        <span className="text-xl font-bold text-gray-600">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="space-y-4 px-5 py-4">
          {data.itemCards?.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex gap-4 rounded-lg border border-gray-200 p-4 transition hover:shadow-md"
            >
              {/* Left Content */}
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
                  ₹
                  {(item?.card?.info?.price ??
                    item?.card?.info?.defaultPrice) / 100}
                </p>
              </div>

              {/* Image */}
              {item?.card?.info?.imageId && (
                <div className="relative">
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    alt={item.card.info.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 px-3 py-1 rounded text-sm font-medium hover:bg-gray-50">
                    ADD
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
