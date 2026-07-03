import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar2 = ({ activeTab, setActiveTab }) => {
  // to change the text color of nav in some pages
  const location = useLocation();

  const isLightBg = ["/collections/all-jewellery", "/account"].includes(
    location.pathname,
  );

  const navColor = isLightBg ? "text-black" : "text-white";
  return (
    <nav
      className={`w-full cursor-pointer absolute top-0 shadow-md shadow-gray-200/80  font-['ArboriaBook'] text-[0.9rem] py-[1.3em] px-[2.5em] flex items-center justify-between ${navColor}`}
    >
      <div className="w-[30%] flex items-center justify-start gap-[2.6rem]">
        <div
          onClick={() => setActiveTab("shop")}
          className={activeTab === "shop" ? "text-black" : navColor}
        >
          Shop
        </div>
        <div
          onClick={() => setActiveTab("about")}
          className={activeTab === "about" ? "text-black" : navColor}
        >
          About Us
        </div>
        <div
          onClick={() => setActiveTab("search")}
          className={activeTab === "search" ? "text-black" : navColor}
        >
          Search
        </div>
      </div>
      <Link to={"/"} className="w-[30%] tracking-[0.2rem] text-[1.2rem]">
        <Logo />
      </Link>
      <div className={`w-[30%] flex items-center justify-end gap-[2.6rem]`}>
        <div
          onClick={() => setActiveTab("contact")}
          className={activeTab === "contact" ? "text-black" : navColor}
        >
          Contact Us
        </div>
        <NavLink onClick={() => setActiveTab(null)} to={"/account"}>
          Account
        </NavLink>
        <NavLink onClick={() => setActiveTab(null)} to={"/wishlist"}>
          Wishlist
        </NavLink>
        <NavLink onClick={() => setActiveTab(null)} to={"/cart"}>
          Cart
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar2;
