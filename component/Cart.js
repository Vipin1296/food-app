import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "../assets/images/cart_is_empty.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {cartItems.length == 0 ? (
        <div className="flex items-center justify-center">
          <img src={EmptyCart} alt="empty" />
          <Link to={"/"}>Go to home</Link>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center">
            <h1 className="p-4 m-5 text-3xl">
              You have added {cartItems.length} items to your cart
            </h1>
            <button
              className="p-4 m-5 float-right"
              onClick={() => handleClearCart()}
            >
              <img
                className="h-10 w-10 "
                src="https://img.icons8.com/?size=100&id=VjYhRgCvzsVg&format=png&color=000000"
                title="Clear cart"
                tooltip="Clear cart"
              ></img>
            </button>
          </div>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </>
      )}
    </>
  );
};
export default Cart;
