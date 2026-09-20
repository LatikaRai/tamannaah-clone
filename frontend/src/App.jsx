import { useDispatch, useSelector } from 'react-redux'
import AppRoutes from "./routes/AppRoutes"
import { useEffect } from 'react'
import { asyncLoadProducts } from './actions/productActions'
import { asyncLoadWishlist } from './actions/wishlistActions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncLoadProducts())
    dispatch(asyncLoadWishlist())
  },[dispatch])
  return <AppRoutes/>
}

export default App
