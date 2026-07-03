import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar1'
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { motion, AnimatePresence } from "motion/react";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState(null)
  
  useEffect(()=>{
    if(activeTab) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return ()=> {
      document.body.style.overflow = 'auto'
    }
  }, [activeTab])
  
  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>

      <AnimatePresence>
      {activeTab  && (
        <motion.div>
          <div className='fixed inset-0 bg-black/40 z-50'
          // when clicking on other than the side bars, the sidebar should disappear
          onClick={()=>setActiveTab(null)}>

          </div>
        
          <SideBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </motion.div>
      )}
      </AnimatePresence>

      <Outlet/>
    </div>
  )
}

export default MainLayout
