import { Link, NavLink, useLocation } from "react-router-dom"
import Logo from "./ui/Logo"


const Navbar = ({ activeTab, setActiveTab }) => {
  // const leftNavColor = activeTab ? "text-black" : "text-white";

  // to change the text color of nav in some pages
  const location = useLocation()

  const isLightBg = [
    '/collections/all-jewellery'
  ].includes(location.pathname)

  const navColor = isLightBg ? 'text-black' : 'text-white'

  return (
    <nav className={`w-full cursor-pointer absolute z-60 font-['ArboriaBook'] text-[0.9rem] py-[0.8rem] px-[2.3rem] flex items-center justify-between ${navColor}`}>
        <div className="w-[30%] flex items-center justify-start gap-[2.6rem]">
            <div 
            onClick={()=>setActiveTab("shop")}
            className={activeTab === "shop" ? "text-black" : 'text-white'}
            >Shop</div>
            <div 
            onClick={()=>setActiveTab("about")}
            className={activeTab === "about" ? "text-black" : 'text-white'}
            >About Us</div>
            <div 
            onClick={()=>setActiveTab("search")}
            className={activeTab === "search" ? "text-black" : 'text-white'}
            >Search</div>
        </div>
        <Link to={'/'} className="w-[30%] absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[3.4rem] flex items-center justify-center"><Logo/></Link>
        <div className={`w-[30%] flex items-center justify-end gap-[2.6rem]`}>
            {/* <NavLink to={'/'}>Home</NavLink> */}
            <NavLink to={'/contact-us'}>Contact Us</NavLink>
            <NavLink to={'/account'}>Account</NavLink>
            <NavLink to={'/wishlist'}>Wishlist</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
