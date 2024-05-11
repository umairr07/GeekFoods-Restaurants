import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa6";

export const Restaurants = ({
  resName,
  rating,
  address,
  outcode,
  postcode,
  typeOfFoods,
  visitMenu,
}) => {
  const star = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  const starCount = Math.floor(rating);

  let starArr = [];
  for (let i = 0; i < starCount; i++) {
    starArr.push(star[i]);
  }

  return (
    <div className="w-[450px] rounded-lg shadow-lg flex flex-col justify-between gap-10">
      <div className="p-3">
        <div className="flex items-center">
          <p className="text-xl font-semibold">{resName}</p>
          <p className="text-xl pl-2">{starArr}</p>
        </div>

        <div className="text-[#8a8b8d] font-normal">
          <div className="flex items-center gap-2 ">
            <FaLocationDot />
            <p>{address}</p>
          </div>
          <p className="">
            {outcode},{postcode}
          </p>
        </div>
      </div>

      <div className="p-3 bg-[#F3F4F6] font-semibold">
        <div className="flex items-center gap-2 pt-2 text-[#22C55E]">
          <FaUtensils />
          <p>{typeOfFoods}</p>
        </div>
        <a href={visitMenu} className="text-[#71B2F6]">
          Vist Menu
        </a>
      </div>
    </div>
  );
};
