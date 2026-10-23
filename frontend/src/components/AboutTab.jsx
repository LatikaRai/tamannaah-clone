const AboutTab = ({setActiveTab,setPendingRoute}) => {
  const handleNavigate = (path) => {
    setPendingRoute(path)
    setActiveTab(null)
    window.scrollTo(0,0)
  }
  return (
    <div className="flex flex-col mt-[5.2rem] text-[1.05rem] lg:text-[1.2rem] lg:text-gray-400 gap-[1.1rem] lg:gap-[0.8rem] ">
        <div onClick={()=>handleNavigate('/about-us/meet-tamannaah')} className={'hover:lg:text-black'}>Meet Tamannaah</div>
        <div onClick={()=>handleNavigate('/about-us')} className={'hover:lg:text-black'}>About Us</div>
        <div onClick={()=>handleNavigate('/about-us/our-store')} className={'hover:lg:text-black'}>Our Store</div>
    </div>
  )
}

export default AboutTab
