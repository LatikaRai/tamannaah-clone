import { useLocation } from 'react-router-dom'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'
import { useEffect, useRef, useState } from 'react'

const Navbar = ({activeTab,setActiveTab}) => {

    const {pathname} = useLocation()

    const navbarOneRoutes = [
        '/',
        '/shop/t-bars',
        '/shop/trending',
        '/collections/all-jewellery',
        '/collections/high-jewelry',
        '/collections/t-bars',
        '/collections/neclace-pendants',
        '/collections/earrings',
        '/collections/rings',
        '/collections/bracelets',
        '/collections/all-jewellery',
        '/collections/new',
        '/shop/tamannah-favourite',
        '/about-us/meet-tamannaah',
        '/about-us',
        '/about-us/our-store'
    ]

    const showNavbarOne = navbarOneRoutes.includes(pathname)

    // scrollbar functionality
    const [showNav, setShowNav] = useState(true)
    const [scrollY, setScrollY] = useState(0)
    const lastScrollY = useRef(0)

    useEffect(()=>{
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        if(currentScrollY === 0) setShowNav(true)

          setScrollY(currentScrollY)

        // ignore tiny movements
        if(Math.abs(currentScrollY - lastScrollY.current) < 10 ) return

        // scroll down
        if(currentScrollY > lastScrollY.current) setShowNav(false)

        // scroll up
        if(currentScrollY < lastScrollY.current) setShowNav(true)

        lastScrollY.current = currentScrollY
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },[])

  return (
    <div>
      {showNavbarOne ? <Navbar1 activeTab={activeTab} setActiveTab={setActiveTab} showNav={showNav} scrollY={scrollY} /> : <Navbar2 activeTab={activeTab} setActiveTab={setActiveTab} showNav={showNav}/>}
    </div>
  )
}

export default Navbar