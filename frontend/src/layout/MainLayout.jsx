import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import SideBar from '../components/SideBar';

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState(null)
  
  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>

      
      {activeTab && (
        <>
          <div className='fixed inset-0 bg-black/40 z-50'
          onClick={()=>setActiveTab(null)}>

          </div>
        
          <SideBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </>
      )}

      <Outlet/>
    </div>
  )
}

export default MainLayout
