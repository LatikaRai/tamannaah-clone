import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "motion/react";

const Navbar2 = ({ activeTab, setActiveTab, showNav }) => {
  // to change the text color of nav in some pages
  const location = useLocation();

  const isLightBg = ["/account/login","/account/register"].includes(location.pathname) || location.pathname.startsWith("/product/");

  const navColor = isLightBg ? "text-black bg-white" : "text-white";
  return (
    <motion.nav
    animate={{
      y : showNav ? 0 : '-100%' ,
      opacity : showNav ? 1 : 0
    }}
    transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`fixed top-0 left-0 z-90 w-full h-[8vh] cursor-pointer shadow-sm shadow-gray-200/60 font-['ArboriaBook'] text-[0.9rem] py-[1.3em] px-[2.5em] flex items-center justify-between ${navColor}`}
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
      <Link to={"/"} className="w-[30%] tracking-[0.2rem] font-medium text-[1.2rem]">
        <Logo />
      </Link>
      <div className={`w-[30%] flex items-center justify-end gap-[2.6rem]`}>
        <div
          onClick={() => setActiveTab("contact")}
          className={activeTab === "contact" ? "text-black" : navColor}
        >
          Contact Us
        </div>
        <NavLink onClick={() => setActiveTab(null)} to={"/account/login"}>
          Account
        </NavLink>
        <NavLink onClick={() => setActiveTab(null)} to={"/wishlist"}>
          Wishlist
        </NavLink>
        <div
          onClick={() => setActiveTab("cart")}
          className={activeTab === "cart" ? "text-black" : navColor}
        >
          Cart
        </div>
        
      </div>
    </motion.nav>
  );
};

export default Navbar2;
