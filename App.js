import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./component/ContactUs";
import ErrorPage from "./component/ErrorPage";
import RestaurantMenu from "./component/RestaurantMenu";
import Cart from "./component/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import SignUp from "./component/SignUp";

const AboutUs = lazy(() => import("./component/AboutUs"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "foodie-foster",
    email: "vipinpandey1296@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
