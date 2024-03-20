import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";
import useResturantMenu from "../Utils/useResturantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  // Check if resInfo is null or undefined
  if (!resInfo) {
    return <Shimmer />;
  }

  // Destructure nested properties safely
  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      {/**accordian  */}
      {categories.map((category,index) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ?  true : false }
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
