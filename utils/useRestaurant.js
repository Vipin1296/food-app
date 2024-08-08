import { useEffect, useState } from "react";
// import { FETCH_MENU_URL1, FETCH_MENU_URL2 } from "../Constants";

const useRestaurant = function (resId) {
  const [restaurant, setRestaurant] = useState(null);
  const [resmenu, setResMenu] = useState(null);

  useEffect(() => {
    resMenu();
  }, []);

  async function resMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const resData = json.data.cards[2].card.card.info;
    setRestaurant(resData);
    // console.log(json);
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  return { restaurant, resmenu };
};

export default useRestaurant;
