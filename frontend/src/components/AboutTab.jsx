import { NavLink } from "react-router-dom"

const AboutTab = () => {
  return (
    <div className="flex flex-col mt-[5.2rem] text-[1.2rem] text-gray-400 gap-[0.8rem] ">
        <NavLink to={'/about-us/meet-tamannaah'} className={'hover:text-black'}>Meet Tamannaah</NavLink>
        <NavLink to={'/about-us'} className={'hover:text-black'}>About Us</NavLink>
        <NavLink to={'/about-us/our-store'} className={'hover:text-black'}>Our Store</NavLink>
    </div>
  )
}

export default AboutTab
