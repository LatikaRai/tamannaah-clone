import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "motion/react";

const Navbar1 = ({ wishlist, activeTab, setActiveTab, showNav, scrollY }) => {

  const isScrolled = scrollY > 200

  const lightBgPages = [
  "/collections/all-jewellery",
  "/shop/trending",
  "/collections/t-bars",
  "/collections/neclace-pendants",
  "/collections/earrings",
  "/collections/rings",
  "/collections/bracelets",
  "/collections/new",
  "/about-us/our-store",
];

const location = useLocation()

const isLightBg = isScrolled || lightBgPages.includes(location.pathname)

  const navColor = isLightBg ? "text-black" : "text-white";

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
      className={`${isLightBg ? 'bg-white text-black': 'text-white'} ${isScrolled? 'shadow-sm shadow-gray-200/40' : ''} fixed top-0 left-0 w-full cursor-pointer z-60 font-['ArboriaBook'] text-[0.9rem] py-[1em] px-[2.5em] flex items-center justify-between`}
    >
      <div className="w-[30%] flex items-center justify-start gap-[2.6rem]">
        <div
          onClick={() => {
            setActiveTab("shop")}}
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
      {
        !isScrolled ? <Link
        to={"/"}
        className="w-[30%] text-[2.7rem] tracking-wider font-medium absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[3.4rem] flex items-center justify-center"
      >
        <Logo />
      </Link> :
      <Link to={"/"} className="w-[30%] tracking-[0.2rem] font-medium text-[1.2rem]">
        <Logo />
      </Link>
      }
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
          Wishlist({wishlist.length})
        </NavLink>
        <div onClick={() => setActiveTab('cart')} className={activeTab === "cart" ? "text-black" : navColor}>
          Cart
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar1;
