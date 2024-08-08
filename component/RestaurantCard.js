const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <>
      <div className="h-80 w-60  bg-blue-50  shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="h-40 w-60 object-cover rounded-t-xl"
        ></img>
        <h2 className="p-1 m-1 font-semibold">{name}</h2>
        <h3 className="p-1 m-1 font-semibold">{cuisines.join(", ")}</h3>
        <h4 className="p-1 m-1 font-semibold">{avgRating} ⭐</h4>
      </div>
    </>
  );
};

export default RestaurantCard;

