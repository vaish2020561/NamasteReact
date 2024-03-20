import { CDN_URL } from "../Utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>
        ⭐{avgRating}.{sla?.slaString}
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

// Higher order card component
// input - resturant card => ResturantCardPromoted
export const withFreeDeliveryLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="opened-label">
          <strong>ONE</strong><i> Free Delivery</i>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
