import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "motion/react";

const Navbar1 = ({
  wishlist,
  cart,
  activeTab,
  setActiveTab,
  showNav,
  scrollY,
}) => {
  const isScrolled = scrollY > 200;

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

  const location = useLocation();

  const isLightBg = isScrolled || lightBgPages.includes(location.pathname);

  const navColor = isLightBg ? "text-black" : "text-white";

  const navigate = useNavigate()

  return (
    <nav>
      {/* desktop */}
      <motion.div
        animate={{
          y: showNav ? 0 : "-100%",
          opacity: showNav ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={`${isLightBg ? "bg-white text-black" : "text-white"} ${isScrolled ? "shadow-sm shadow-gray-200/40" : ""} hidden fixed top-0 left-0 w-full cursor-pointer z-60 font-['ArboriaBook'] text-[0.9rem] py-[1em] px-[2.5em] lg:flex items-center justify-between`}
      >
        <div className="w-[30%] flex items-center justify-start gap-[2.6rem]">
          <div
            onClick={() => {
              setActiveTab("shop");
            }}
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
        {!isScrolled ? (
          <Link
            to={"/"}
            className="w-[30%] text-[2.7rem] tracking-wider font-medium absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[3.4rem] flex items-center justify-center"
          >
            <Logo />
          </Link>
        ) : (
          <Link
            to={"/"}
            className="w-[30%] tracking-[0.2rem] font-medium text-[1.2rem]"
          >
            <Logo />
          </Link>
        )}
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
          <div
            onClick={() => setActiveTab("cart")}
            className={activeTab === "cart" ? "text-black" : navColor}
          >
            Cart({cart.length})
          </div>
        </div>
      </motion.div>

      {/* mobile */}
      <motion.div
      animate={{
          y: showNav ? 0 : "-100%",
          opacity: showNav ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={`${isLightBg ? "bg-white text-black" : "text-white"} ${isScrolled ? "shadow-sm shadow-gray-200/40" : ""} lg:hidden fixed top-0 left-0 w-full cursor-pointer z-60 font-['ArboriaBook'] py-[0.4rem] px-[1.1rem] flex items-center justify-between`}
        >
          <div className="w-[10%] flex items-center text-[1rem] gap-[1.2rem]">
            <i onClick={() => {
              setActiveTab("shop");
            }} className="ri-menu-line"></i>
            <i onClick={()=>{
              setActiveTab('search')
            }} className="ri-search-line"></i>
          </div>

           {!isScrolled ? (
          <Link
            to={"/"}
            className="w-[28%] text-[1.7rem] tracking-wider font-medium absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[3.1rem] flex items-center justify-center"
          >
            <Logo />
          </Link>
        ) : (
          <Link
            to={"/"}
            className="w-[28%] tracking-[0.2rem] font-medium text-[1.2rem]"
          >
            <Logo />
          </Link>
        )}
          <div className="w-[10%] flex items-center text-[1.05rem] mr-[0.9rem] gap-[1.2rem]">
            <i onClick={()=> {
              navigate('/wishlist')
              window.scrollTo(0,0)
              }} className="ri-poker-hearts-line"></i>
            <i className="ri-shopping-bag-line"></i>
          </div>
      </motion.div>
    </nav>
  );
};

export default Navbar1;
