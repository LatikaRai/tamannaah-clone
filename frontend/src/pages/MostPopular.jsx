
import { useSelector } from 'react-redux'
import ProductsListingLayout from '../components/ui/ProductsListingLayout';
import { useOutletContext } from 'react-router-dom';

const MostPopular = () => {
  const {products} = useSelector(state => state.productReducer)
    const popularProducts = [...products]
    .filter((product) => product.rating > 4);

    const {selectedStatus, 
        setSelectedStatus,
        selectedCtg, 
        setSelectedCtg,
        selectedSort, 
        setSelectedSort} = useOutletContext()
    
  return (
    <ProductsListingLayout products={popularProducts} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={selectedCtg} setSelectedCtg={setSelectedCtg}/>
  )
}

export default MostPopular
