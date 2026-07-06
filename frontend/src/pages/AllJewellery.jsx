import { useSelector } from 'react-redux'
import ProductsListingLayout from '../components/ui/ProductsListingLayout'

const AllJewellery = () => {
  const {products} = useSelector(state => state.productReducer)
    const allProducts = [...products]

  return (
    <ProductsListingLayout products={allProducts}/>
  )
}

export default AllJewellery
