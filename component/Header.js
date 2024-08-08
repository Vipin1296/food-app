import { useState, useContext } from "react";
import { IMG_CDN_URL } from "../Constants";
import Logo from "../assets/images/logo.png";
import Cart_Icon from "../assets/images/icons8-cart-96.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/" className="">
      <img
        className="h-20 w-25 py-1"
        alt="logo"
        src="https://img.freepik.com/premium-photo/delivery-man-riding-scooter-illustration_181203-20188.jpg?w=740"
      ></img>
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row bg-sky-900">
        <div className="relative flex flex-col md:flex-row">
          <Title />
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 border-cyan-400">
            <Link to={"/"}>
              <a className="mr-5 font-medium leading-6 text-white hover:text-gray-900">
                Home
              </a>
            </Link>
            <Link to={"/about"}>
              <a className="mr-5 font-medium leading-6 text-white hover:text-gray-900">
                About Us
              </a>
            </Link>
            <Link to={"/contact"}>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-white hover:text-gray-900"
              >
                Contact Us
              </a>
            </Link>
          </nav>
        </div>
        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <Link to={"/cart"}>
            <a
              href="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <img className="h-10 w-15" alt="logo" src={Cart_Icon}></img>
              <i className="text-blue-500 tracking-[2px] border-blue-500 border-r-blue-300  rounded-[360px] total-count">
                {cartItems.length}
              </i>
            </a>
          </Link>
          {isLoggedIn ? (
            <button
              className="text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
          <Link to={"/signUp"}>
            <a
              href=""
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
