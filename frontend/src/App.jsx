import { useDispatch, useSelector } from 'react-redux'
import AppRoutes from "./routes/AppRoutes"
import { useEffect } from 'react'
import { asyncLoadProducts } from './actions/productActions'

const App = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.productReducer)

  useEffect(()=>{
    dispatch(asyncLoadProducts())
    console.log(products)
  },[])
  return <AppRoutes/>
}

export default App
