import { useLocation } from 'react-router-dom'
import Navbar1 from './Navbar1'
import Navbar2 from './Navbar2'

const Navbar = ({activeTab,setActiveTab}) => {
    const {pathname} = useLocation()

    const navbarOneRoutes = [
        '/',
        '/shop/t-bars',
        '/shop/trending',
        '/collections/all-jewellery',
        '/shop/tamannah-favourite'
    ]

    const showNavbarOne = navbarOneRoutes.includes(pathname)
  return (
    <div>
      {showNavbarOne ? <Navbar1 activeTab={activeTab} setActiveTab={setActiveTab}/> : <Navbar2 activeTab={activeTab} setActiveTab={setActiveTab}/>}
    </div>
  )
}

export default Navbar
