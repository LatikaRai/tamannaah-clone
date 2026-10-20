import { NavLink } from "react-router-dom"

const AboutTab = () => {
  return (
    <div className="flex flex-col mt-[5.2rem] text-[1.05rem] lg:text-[1.2rem] lg:text-gray-400 gap-[1.1rem] lg:gap-[0.8rem] ">
        <NavLink to={'/about-us/meet-tamannaah'} className={'hover:lg:text-black'}>Meet Tamannaah</NavLink>
        <NavLink to={'/about-us'} className={'hover:lg:text-black'}>About Us</NavLink>
        <NavLink to={'/about-us/our-store'} className={'hover:lg:text-black'}>Our Store</NavLink>
    </div>
  )
}

export default AboutTab
