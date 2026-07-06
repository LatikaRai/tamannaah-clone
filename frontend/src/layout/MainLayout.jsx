import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [pendingRoute, setPendingRoute] = useState(null);

  const navigate = useNavigate();
  
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

      <AnimatePresence
      onExitComplete={()=>{
        if(pendingRoute){
          navigate(pendingRoute)
          setPendingRoute(null)
        }
      }}
      >
      {activeTab  && (
        <motion.div>
          <div className='fixed inset-0 bg-black/40 z-50'
          // when clicking on other than the side bars, the sidebar should disappear
          onClick={()=>setActiveTab(null)}>

          </div>
        
          <SideBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setPendingRoute={setPendingRoute}
          />
        </motion.div>
      )}
      </AnimatePresence>

      <Outlet/>
    </div>
  )
}

export default MainLayout
