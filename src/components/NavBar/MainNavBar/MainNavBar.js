import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
export const MainNavBar = () => {
  return (
    <div className="main_navbar">
      <Link
        to="/"
        className="logo_container flex justify-between"
      >
        <h3>LOGO</h3>
      </Link>
      <div className="main_menu">
        <NavLink
          to={`/category/samsung`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <span className="text-gray-700 hover:text-blue-500 hover:font-semibold cursor-pointer m-2">
            Samsung
          </span>
        </NavLink>
        <NavLink
          to={`/category/iphone`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <span className="text-gray-700 hover:text-blue-500 hover:font-semibold cursor-pointer m-2">
            Iphone
          </span>
        </NavLink>
        <NavLink
          to={`/category/xiaomi`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          <span className="text-gray-700 hover:text-blue-500 hover:font-semibold cursor-pointer m-2">
            Xiaomi
          </span>
        </NavLink>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
