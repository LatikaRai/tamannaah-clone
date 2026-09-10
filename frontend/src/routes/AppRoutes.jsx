import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import MainLayout from "../layout/MainLayout"
import Search from "../components/Search"
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
import MeetTamannah from "../pages/MeetTamannah"
import EarringCollections from "../pages/EarringCollections"
import RingCollections from "../pages/RingCollections"
import BraceletCollections from "../pages/BraceletCollections"
import AllCollections from "../pages/AllCollections"
import NeclaceCollections from "../pages/NecklaceCollections"
import NewCollections from "../pages/NewCollections"
import AboutUs from "../pages/AboutUs"
import OurStore from "../pages/OurStore"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website */}
      <Route element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>}/>

        {/* shop tab */}
        <Route path="/shop" element={<ShopTab/>}/>
        <Route path="/shop/t-bars" element={<Tbars/>}/>
        <Route path="/shop/trending" element={<MostPopular/>}/>
        <Route path="/shop/tamannah-favourite" element={<TamanaahFavs/>}/>

        {/* collections */}
        <Route path="/collections/t-bars" element={<Tbars/>}/>
        <Route path="/collections/neclace-pendants" element={<NeclaceCollections />}/>
        <Route path="/collections/earrings" element={<EarringCollections />}/>
        <Route path="/collections/rings" element={<RingCollections />}/>
        <Route path="/collections/bracelets" element={<BraceletCollections />}/>
        <Route path="/collections/all-jewellery" element={<AllCollections />}/>
        <Route path="/collections/new" element={<NewCollections />}/>


        {/* about tab */}
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/about-us/meet-tamannaah" element={<MeetTamannah/>} />
        <Route path="/about-us/our-store" element={<OurStore />} />


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
