import { useState } from "react"
import { NavLink } from "react-router-dom"
import * as motion from "motion/react-client";
import jewellerryMenu from "../assets/images/jewellery-menu.jpg"

const ShopTab = () => {

    const [openCategory, setOpenCategory] = useState(null)

  return (
    <div className="text-[1.2rem]">
        {/* left menu */}
        <div className="w-[20vw] z-10 flex flex-col mt-[5.2rem] gap-[0.8rem] cursor-pointer">
            <NavLink
            className='text-gray-400 hover:text-black'
            to={'/shop/t-bars'}>T-Bars</NavLink>

            <NavLink 
            className='text-gray-400 hover:text-black'
            to={'/shop/trending'}>Most Popular</NavLink>

            <div 
            className={`cursor-pointer ${openCategory === "jewellery" ? "text-black" : "text-gray-400 hover:text-black"}`}
            onClick={()=>{
                setOpenCategory("jewellery")
                }} >Jewelry</div>

            <NavLink 
            className='text-gray-400 hover:text-black'
            to={'/shop/high-jewelry'}>High Jewelry</NavLink>

            <NavLink 
            className='text-gray-400 hover:text-black'
            to={'/shop/tamannah-favourite'}>Tamannaah's Favourite</NavLink>
        </div>

        {/* middle menu */}
        {openCategory === 'jewellery' && (
            <motion.div
            initial={{ opacity: 0, x: "0vw" }}
            animate={{ opacity: 1, x: "15vw" }}
            transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute top-0 bottom-0 z-10 w-[18vw] pt-[6.4rem] px-[2.3rem] bg-white">
                <div className="flex flex-col text-[1.3rem] gap-[0.8rem]">
                    <NavLink to={'/collections/new'}>New In</NavLink>
                    <NavLink to={'/collections/t-bars'}>T-Bars</NavLink>
                    <NavLink to={'/collections/neclace-pendants'}>Necklace & Pendants</NavLink>
                    <NavLink to={'/collections/earrings'}>Earrings</NavLink>
                    <NavLink to={'/collections/rings'}>Rings</NavLink>
                    <NavLink to={'/collections/bracelets'}>Bracelets</NavLink>
                    <NavLink to={'/collections/all-jewellery'}>All Jewelry</NavLink>
                </div>
            </motion.div>
        )}
        {/* right menu */}
        {openCategory === 'jewellery' && (
            <motion.div
             initial={{ opacity: 0, x: "0vw" }}
            animate={{ opacity: 1, x: "32vw" }}
            transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute top-0 bottom-0 z-10 w-[33vw] p-[0.9rem] bg-white">
                <img className="h-full w-full object-cover" src={jewellerryMenu} alt="" />
            </motion.div>
        )}
    </div>
  )
}

export default ShopTab
 