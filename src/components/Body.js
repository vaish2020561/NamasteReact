import RestaurantCard, { withFreeDeliveryLabel } from "./ResturantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import  UserContext  from "../Utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const ResturantCardFreeDelivery = withFreeDeliveryLabel(RestaurantCard);

  console.log(listOfRestaurants);
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.24271&lng=81.242934&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log(
      //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      // );
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  const  { loggedIn, setUserInfo} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <label>User Name :</label>
        <input className="input" value={loggedIn} onChange={(e) => setUserInfo(e.target.value)}/>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
            {
              /** if the resturant is promoted then addd a promoted label */
              restaurant.info.isOpen
              ? (
                <ResturantCardFreeDelivery resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
