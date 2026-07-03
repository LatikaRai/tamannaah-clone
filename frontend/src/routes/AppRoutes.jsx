import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import MainLayout from "../layout/MainLayout"
import Shop from "../components/Shop"
import AboutUs from "../components/AboutUs"
import Search from "../components/Search"
import ContactUs from "../pages/ContactUs"
import Account from "../pages/Account"
import Wishlist from "../pages/Wishlist"
import Cart from "../pages/Cart"
import Collections from "../pages/Collections"
import Tbars from "../pages/Tbars"
import ProductDetails from "../pages/ProductDetails"
import AllJewellery from "../pages/AllJewellery"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website */}
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/shop" element={<Shop/>}/>
        <Route path="/shop/t-bars" element={<Tbars/>}/>


        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/search" element={<Search/>}/>
        {/* <Route path="/contact-us" element={<ContactUs/>}/> */}
        <Route path="/account" element={<Account/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/collections/all-jewellery" element={<AllJewellery/>}/>

        <Route path="/product/:slug" element={<ProductDetails/>}/>

      </Route>

      {/* Authentication */}
      <Route>

      </Route>
    </Routes>
  )
}

export default AppRoutes
