import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { motion } from "motion/react";

const Navbar2 = ({ wishlist, cart, activeTab, setActiveTab, showNav }) => {
  // to change the text color of nav in some pages
  const location = useLocation();

  const isLightBg = ["/account/login","/account/register","/wishlist","/policies/shipping-policy","/policies/terms-of-service", "/policies/refund-policy","/blogs/news/akshaya-tritiya","/policies/privacy-policy"].includes(location.pathname) || location.pathname.startsWith("/product/");

  const navColor = isLightBg ? "text-black bg-white" : "text-white";

  const navigate = useNavigate()
  return (
    <>
    {/* mobile */}
    <motion.nav
    animate={{
      y : showNav ? 0 : '-100%' ,
      opacity : showNav ? 1 : 0
    }}
    transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`lg:hidden fixed top-0 left-0 z-60 w-full h-[7vh] cursor-pointer shadow-sm shadow-gray-200/60 font-['ArboriaBook'] text-[0.9rem] px-[0.9rem] flex items-center justify-between ${navColor}`}
    >
      <div className=" w-[10%] flex items-center text-[1rem] gap-[1.2rem]">
            <i onClick={() => {
              setActiveTab("shop");
            }} className="ri-menu-line"></i>
            <i onClick={()=>{
              setActiveTab('search')
            }} className="ri-search-line"></i>
          </div>
      <Link to={"/"} className="absolute left-1/2 -translate-x-1/2 text-center tracking-[0.1rem] font-medium text-[1.1rem]">
        <Logo />
      </Link>
      <div className="w-[10%] flex items-center text-[1.05rem] mr-[0.9rem] gap-[1.2rem]">
            <i onClick={ () => {              
              navigate('/wishlist')
              window.scrollTo(0,0)
              }} className="ri-poker-hearts-line"></i>
            <i onClick={() => setActiveTab("cart")} className="ri-shopping-bag-line"></i>
      </div>
    </motion.nav>
    
    {/* desktop */}
    <motion.nav
    animate={{
      y : showNav ? 0 : '-100%' ,
      opacity : showNav ? 1 : 0
    }}
    transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`hidden fixed top-0 left-0 z-60 w-full h-[8vh] cursor-pointer shadow-sm shadow-gray-200/60 font-['ArboriaBook'] text-[0.9rem] py-[1.3em] px-[2.5em] lg:flex items-center justify-between ${navColor}`}
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
          Wishlist({wishlist.length})
        </NavLink>
        <div
          onClick={() => setActiveTab("cart")}
          className={activeTab === "cart" ? "text-black" : navColor}
        >
          Cart({cart.length})
        </div>
        
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar2;
