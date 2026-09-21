import { useDispatch, useSelector } from 'react-redux'
import AppRoutes from "./routes/AppRoutes"
import { useEffect } from 'react'
import { asyncLoadProducts } from './actions/productActions'
import { asyncLoadWishlist } from './actions/wishlistActions'
import { asyncLoadCart } from './actions/cartActions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncLoadProducts())
    dispatch(asyncLoadWishlist())
    dispatch(asyncLoadCart())
  },[dispatch])
  return <AppRoutes/>
}

export default App
