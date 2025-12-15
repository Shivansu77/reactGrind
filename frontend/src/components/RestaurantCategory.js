import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
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
      {isOpen && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
