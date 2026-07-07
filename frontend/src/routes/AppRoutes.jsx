import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import MainLayout from "../layout/MainLayout"
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
import Register from "../components/Register"
import TamanaahFavs from "../pages/TamanaahFavs"
import ShopTab from "../components/ShopTab"
import MostPopular from "../pages/MostPopular"
import HighJewelry from "../pages/HighJewelry"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website */}
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/shop" element={<ShopTab/>}/>
        <Route path="/shop/t-bars" element={<Tbars/>}/>
        <Route path="/shop/trending" element={<MostPopular/>}/>
        <Route path="/shop/tamannah-favourite" element={<TamanaahFavs/>}/>


        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/account/login" element={<Account/>}/>
        <Route path="/account/register" element={<Register/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/collections/all-jewellery" element={<AllJewellery/>}/>
        <Route path="/collections/high-jewelry" element={<HighJewelry/>}/>

        <Route path="/product/:slug" element={<ProductDetails/>}/>

      </Route>

      {/* Authentication */}
      <Route>

      </Route>
    </Routes>
  )
}

export default AppRoutes
