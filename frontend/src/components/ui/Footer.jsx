import { useLocation } from "react-router-dom"
import MainFooter from "./MainFooter"
import HomeFooter from "./HomeFooter"

const Footer = ({setActiveTab}) => {

    const { pathname } = useLocation()

    const isHomePage = pathname === '/'
  return (
     isHomePage ? <HomeFooter setActiveTab={setActiveTab} /> : <MainFooter setActiveTab={setActiveTab} /> 
  )
}

export default Footer
