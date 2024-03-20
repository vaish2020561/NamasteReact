import { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data

  useEffect(() => {
    console.log("Fetching menu...");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.24271&lng=81.242934&restaurantId=" +
          resId
      );
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useResturantMenu;
