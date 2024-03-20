import { LOGO_URL } from "../Utils/contants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedIn } = useContext(UserContext);
  console.log(loggedIn);

  //selector - selector is a hook in react

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  //useEffect will be called everytime the component render => np dependency array

  // id dependency array is empty useeffect is called on initial render just once
  //  if depnedency is btnname react changes useEffecyt will called
  useEffect(() => {
    console.log("useEffect called ");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="header-items">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "✔" : "⛔"}</li>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart({cartItems.length} - items)</Link>
            </li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
            <li>{loggedIn}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
