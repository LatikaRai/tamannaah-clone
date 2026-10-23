import ShopTab from "./ShopTab"
import AboutTab from "./AboutTab"
import SearchTab from "./SearchTab"
import { motion } from "motion/react";
import ContactTab from "./ContactTab";
import Account from "../pages/Account";
import Cart from "./Cart";

const SideBar = ({activeTab, setActiveTab, setPendingRoute}) => {
  return (
    <div>
    {/* left sidebar */}
    <>
    {["shop", "about", "search"].includes(activeTab) &&
      <motion.div 
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: "0vw" }}
      transition={{
      duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
        }}
      exit={{opacity:1, x:"-300%"}}
      className={`${activeTab === 'search' ? 'w-full' : 'w-[85%]'} fixed h-screen lg:w-1/3 top-0 text-gray-800 bg-white z-150 p-[0.6rem] flex flex-col lg:flex-none lg:py-[1.4rem] lg:px-[2.3rem] font-["ArboriaBook"]`}
      >
        <div className={`${activeTab === "search" ? "hidden lg:flex" : "flex"} gap-[2.6rem] cursor-pointer text-[0.9rem]`}>
            <div
            onClick={()=>setActiveTab('shop')}
            className={`${activeTab === 'shop' ? 'text-gray-800' : 'text-gray-500'} text-[0.8rem] lg:text-[1rem]`}
            >Shop</div>
            <div
            onClick={()=>setActiveTab('about')}
            className={`${activeTab === 'about' ? 'text-gray-800' : 'text-gray-500'} text-[0.8rem] lg:text-[1rem]`}
            >About Us</div>
            <div
            onClick={()=>setActiveTab('search')}
            className={`${activeTab === 'search' ? 'text-gray-800' : 'text-gray-500'} hidden lg:block`}
            >Search</div>
        </div>  
        <div>
            {activeTab === 'shop' && <ShopTab setActiveTab={setActiveTab} setPendingRoute={setPendingRoute}/>}
            {activeTab === 'about' && <AboutTab setActiveTab={setActiveTab} setPendingRoute={setPendingRoute}/>}
            {activeTab === 'search' && <SearchTab setActiveTab={setActiveTab} setPendingRoute={setPendingRoute}/>}
        </div>
        <div className={`${activeTab === "search" ? "hidden" : "flex"} w-full text-[0.8rem] mt-auto items-center justify-between`}>
          <div onClick={()=>{
            setActiveTab('account')
          }}>Account</div>
          <div onClick={()=>{
            setActiveTab('contact')
          }}>Contact us</div>
        </div>
      </motion.div>
    }
    </>
    {/* right sidebar */}
    <>
    {['contact','cart'].includes(activeTab) &&
      <motion.div 
      initial={{ opacity: 0, x: '10vw' }}
              animate={{ opacity: 1, x: "0vw" }}
              transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
              }}
      exit={{ opacity: 1, x: '100%' }}
      className='hidden lg:block fixed h-screen w-[35%] top-0 right-0 bg-white z-150 text-gray-800 py-[1.4rem] font-["ArboriaBook"]'
      >
          <div className="flex gap-[2.6rem] cursor-pointer text-[0.9rem]">
          </div>
          <div>
              {activeTab === 'contact' && <ContactTab setActiveTab={setActiveTab} />}
              {activeTab === 'cart' && <Cart setActiveTab={setActiveTab} />}
          </div>
      </motion.div>
    }
    <div>
      {activeTab === 'account' && <Account/>}
    </div>
      </>

      {/* for mobile */}

      {/* right sidebar */}
    <>
    {['contact','cart'].includes(activeTab) &&
      <div
      className='lg:hidden fixed h-screen w-[85%] top-0 left-0 bg-white z-150 text-gray-800 font-["ArboriaBook"]'
      >
          <div className="flex gap-[2.6rem] cursor-pointer text-[0.9rem]">
          </div>
          <div>
              {activeTab === 'contact' && <ContactTab setActiveTab={setActiveTab} />}
              {activeTab === 'cart' && <Cart setActiveTab={setActiveTab} />}
          </div>
      </div>
    }
    <div>
      {activeTab === 'account' && <Account/>}
    </div>
      </>
  </div>
  )
}

export default SideBar
