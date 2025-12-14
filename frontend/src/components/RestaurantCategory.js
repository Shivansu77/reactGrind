import React from "react";
import '../index.css';
const RestaurantCategory = ({data}) => {
return(
    <div>
        {/**Accordian header */}
        <div className="w-6/12 bg-gray-800 p-4 rounded-lg flex justify-between items-center cursor-pointer m-auto">
            <span>{data.title}</span>
            <span>{isOpen ? "▲" : "▼"}</span>
        </div>
        {/**Accordian body */}
    </div>
)
}

export default RestaurantCategory;