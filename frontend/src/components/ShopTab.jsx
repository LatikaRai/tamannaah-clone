import { useState } from "react"
import * as motion from "motion/react-client";
import jewellerryMenu from "../assets/images/jewellery-menu.jpg"
import highJewelry from "../assets/images/high-jewelry.jpg";
import { useNavigate } from "react-router-dom";

const ShopTab = ({ setActiveTab, setPendingRoute}) => {

    const [openCategory, setOpenCategory] = useState(null)

    const handleNavigate = (path) => {
        setPendingRoute(path)
        setActiveTab(null)
    }

    const navigate = useNavigate()

  return (
    <div className="text-[1.2rem]">
        {/* left menu */}
        <div className="w-[20vw] z-10 flex flex-col mt-[5.2rem] gap-[0.8rem] cursor-pointer">
            <div
            onClick={()=>handleNavigate('/shop/t-bars')}
            className={'hover:text-black text-gray-400'}
            >T-Bars</div>

            <div 
            onClick={()=>handleNavigate('/shop/trending')}
            className='text-gray-400 hover:text-black'
            to={'/shop/trending'}>Most Popular</div>

            <div 
            className={`cursor-pointer ${openCategory === "jewellery" ? "text-black" : "text-gray-400 hover:text-black"}`}

            onClick={()=>{
                setOpenCategory("jewellery")
                }} >Jewelry</div>

            <div 
            onClick={()=>{
                setOpenCategory("high-jewelry")
            }}
            className={`cursor-pointer ${openCategory === "high-jewelry" ? "text-black" : "text-gray-400 hover:text-black"}`}
            
            >High Jewelry</div>

            <div 
            onClick={()=>handleNavigate('/shop/tamannah-favourite')}
            className='text-gray-400 hover:text-black'
            >Tamannaah's Favourite</div>
        </div>
            {/* for jewellery */}
        {/* middle menu */}
        {openCategory === 'jewellery' && (
            <motion.div
            initial={{ opacity: 0, x: "0vw" }}
            animate={{ opacity: 1, x: "15vw" }}
            transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute top-0 bottom-0 z-10 w-[18vw] pt-[6.4rem] px-[2.3rem] text-gray-400 hover:text-black bg-white">
                <div className="flex flex-col text-[1.3rem] gap-[0.8rem]">
                    <div onClick={()=>handleNavigate('/collections/new')} className='text-gray-400 hover:text-black cursor-pointer'>New In</div>
                    <div onClick={()=>handleNavigate('/collections/t-bars')} className='text-gray-400 hover:text-black cursor-pointer'>T-Bars</div>
                    <div onClick={()=>handleNavigate('/collections/neclace-pendants')} className='text-gray-400 hover:text-black cursor-pointer'>Necklace & Pendants</div>
                    <div onClick={()=>handleNavigate('/collections/earrings')} className='text-gray-400 hover:text-black cursor-pointer'>Earrings</div>
                    <div onClick={()=>handleNavigate('/collections/rings')} className='text-gray-400 hover:text-black cursor-pointer'>Rings</div>
                    <div onClick={()=>handleNavigate('/collections/bracelets')} className='text-gray-400 hover:text-black cursor-pointer'>Bracelets</div>
                    <div onClick={()=>handleNavigate('/collections/all-jewellery')} className='text-gray-400 hover:text-black cursor-pointer'>All Jewelry</div>
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
            className="absolute top-0 bottom-0 z-10 w-[28vw] p-[0.9rem] bg-white">
                <img className="h-full w-full object-cover" src={jewellerryMenu} alt="" />
            </motion.div>
        )}

        {/* for high-jewelry */}
        {/* middle menu */}
        {openCategory === 'high-jewelry' && (
            <motion.div
            initial={{ opacity: 0, x: "0vw" }}
            animate={{ opacity: 1, x: "15vw" }}
            transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute top-0 bottom-0 z-10 w-[18vw] pt-[6.4rem] px-[2.3rem] text-gray-400 hover:text-black bg-white">
                <div className="flex flex-col text-[1.3rem] gap-[0.8rem]">
                    <div onClick={()=>handleNavigate('/collections/high-jewelry')} className='text-gray-400 cursor-pointer hover:text-black'>All High Jewelry</div>
                </div>
            </motion.div>
        )}
        {/* right menu */}
        {openCategory === 'high-jewelry' && (
            <motion.div
             initial={{ opacity: 0, x: "0vw" }}
            animate={{ opacity: 1, x: "32vw" }}
            transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute top-0 bottom-0 z-10 w-[28vw] p-[0.9rem] bg-white">
                <img className="h-full w-full object-cover" src={highJewelry} alt="" />
            </motion.div>
        )}
    </div>
  )
}

export default ShopTab
 