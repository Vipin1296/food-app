import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const CartItems = (item) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="item-list">
      <ul>
        <li className="card-container md:w-2/4 px-[15px] mb-[5px] All drink sweet salad">
          <div className="dz-img-box5 flex lg:flex-row md:flex-col flex-row lg:items-start md:items-center items-start lg:text-left md:text-center text-start xl:py-5 xl:px-[25px] p-[10px] rounded-[10px] duration-500 relative z-[1]">
            <div className="dz-media lg:mr-3 md:mr-0 mr-3 lg:mb-0 md:mb-5 mb-0 min-w-[80px] w-[80px]">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                  item?.card?.info?.imageId
                }
                alt="/"
              />
            </div>
            <div className="dz-content w-full">
              <div className="dz-head flex justify-between items-center">
                <span className="header-text sm:text-lg text-base font-semibold leading-7">
                  <a
                    href="our-menu-1.html"
                    className="text-black2 max-w-[280px] text-ellipsis overflow-hidden block whitespace-nowrap hover:text-primary"
                  >
                    {item?.card?.info?.name}
                  </a>
                </span>
                <span className="img-line sm:block"></span>
                <span className="sm:block text-primary font-semibold text-xl leading-7">
                  ₹
                  {item?.card?.info?.defaultPrice / 100
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.finalPrice / 100
                    ? item?.card?.info?.finalPrice / 100
                    : item?.card?.info?.price / 100}
                </span>
                <button
                  className="p-2 m-4 "
                  onClick={() => handleRemoveItem(item)}
                >
                  <img
                    className="h-6 w-6"
                    src="https://img.icons8.com/?size=100&id=VjYhRgCvzsVg&format=png&color=000000"
                    title="Remove"
                    tooltip="Remove"
                  ></img>
                </button>
              </div>
              <p className="dz-body sm:text-[15px] text-sm text-bodycolor leading-[21px] font-normal">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
