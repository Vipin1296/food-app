import { useEffect, useState } from "react";
import { RES_TMG_URL } from "../Constants";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import DEFAULT_IMAGE from "../assets/images/default_image.png";
import ShimmerList from "./ShimmerList";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, resmenu } = useRestaurant(resId);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };
  return restaurant === null ? (
    <ShimmerList />
  ) : (
    <>
      <div className="p-4 m-4">
        <div className="flex flex-wrap justify-center  rounded-md">
          <img
            className="h-40 w-40 py-2 rounded-full"
            src={RES_TMG_URL + restaurant?.cloudinaryImageId}
            alt="logo"
          ></img>
          <h1 className="p-4 m-4 text-3xl font-extrabold text-indigo-950">
            {restaurant?.name}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <table>
            <thead>
              <tr>
                <th className=""></th>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {resmenu?.map((item) => (
                <tr
                  className=" md:w-2/4 px-[15px] mb-[5px]"
                  key={item.card.info.id}
                >
                  <td className="m-4 p-4">
                    <img
                      className="h-40 w-40 py-2 rounded-full"
                      src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                        item?.card?.info?.imageId
                      }
                      alt="No image"
                      onError={(e) => {
                        e.currentTarget.src = DEFAULT_IMAGE; // some replacement image
                      }}
                    />
                  </td>
                  <td className="m-4 p-4 w-20">
                    <span className="header-text sm:text-lg text-base font-semibold leading-7">
                      <a
                        href="our-menu-1.html"
                        className="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap hover:text-primary"
                        title={item?.card?.info?.name}
                      >
                        {item?.card?.info?.name}
                      </a>
                    </span>
                    <p className="dz-body sm:text-[15px] text-sm text-bodycolor leading-[21px] font-normal">
                      {item?.card?.info?.description}
                    </p>
                  </td>
                  <td className="m-4 p-4">
                    <span className="sm:block text-primary font-semibold text-xl leading-7">
                      ₹
                      {item?.card?.info?.defaultPrice / 100
                        ? item?.card?.info?.defaultPrice / 100
                        : item?.card?.info?.finalPrice / 100
                        ? item?.card?.info?.finalPrice / 100
                        : item?.card?.info?.price / 100}
                    </span>
                  </td>
                  <td className="m-4 p-4">
                    <button
                      className="p-2 ml-4 font-bold bg-blue-300 rounded-[100px]"
                      onClick={() => handleAddItem(item)}
                    >
                      +Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
