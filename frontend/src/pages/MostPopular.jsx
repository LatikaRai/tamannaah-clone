
import { useSelector } from 'react-redux'
import ProductsListingLayout from '../components/ui/ProductsListingLayout';

const MostPopular = () => {
  const {products} = useSelector(state => state.productReducer)
    const popularProducts = [...products]
    .filter((product) => product.rating > 4.5)
    .sort((a, b) => b.rating - a.rating);

    
  return (
    <ProductsListingLayout products={popularProducts}/>
  )
}

export default MostPopular
