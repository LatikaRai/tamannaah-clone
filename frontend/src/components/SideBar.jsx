import ShopTab from "./ShopTab"
import AboutTab from "./AboutTab"
import SearchTab from "./SearchTab"
import { motion } from "motion/react";
import ContactTab from "./ContactTab";
import Account from "../pages/Account";

const SideBar = ({activeTab, setActiveTab}) => {
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
      exit={{opacity:1, x:"-100%"}}
      className='absolute h-screen w-1/3 bg-white z-100 text-gray-800 py-[1.4rem] px-[2.3rem] font-["ArboriaBook"]'
      >
        <div className="flex gap-[2.6rem] cursor-pointer text-[0.9rem]">
            <div
            onClick={()=>setActiveTab('shop')}
            className={activeTab === 'shop' ? 'text-gray-800' : 'text-gray-500'}
            >Shop</div>
            <div
            onClick={()=>setActiveTab('about')}
            className={activeTab === 'about' ? 'text-gray-800' : 'text-gray-500'}
            >About Us</div>
            <div
            onClick={()=>setActiveTab('search')}
            className={activeTab === 'search' ? 'text-gray-800' : 'text-gray-500'}
            >Search</div>
        </div>
        <div>
            {activeTab === 'shop' && <ShopTab/>}
            {activeTab === 'about' && <AboutTab/>}
            {activeTab === 'search' && <SearchTab/>}
        </div>
      </motion.div>
    }
    </>
    {/* right sidebar */}
    <>
    {['contact'].includes(activeTab) &&
      <motion.div 
      initial={{ opacity: 0, x: '10vw' }}
              animate={{ opacity: 1, x: "0vw" }}
              transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
              }}
      exit={{ opacity: 1, x: '100%' }}
      className='fixed h-screen w-[35%] right-0 bg-white z-100 text-gray-800 py-[1.4rem] font-["ArboriaBook"]'
      >
          <div className="flex gap-[2.6rem] cursor-pointer text-[0.9rem]">
          </div>
          <div>
              {activeTab === 'contact' && <ContactTab activeTab={activeTab} setActiveTab={setActiveTab} />}
          </div>
      </motion.div>
    }
    <div>
      {activeTab === 'account' && <Account/>}
    </div>
      </>
  </div>
  )
}

export default SideBar
