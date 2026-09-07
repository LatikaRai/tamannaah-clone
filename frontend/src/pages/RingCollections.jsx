import { useSelector } from "react-redux"
import ProductsListingLayout from "../components/ui/ProductsListingLayout"
import { useOutletContext } from "react-router-dom"

const RingCollections = () => {
  const {products} = useSelector(state => state.productReducer)
  const rings = [...products].filter((product)=>product.category === 'Ring')

  const {selectedStatus, 
        setSelectedStatus,
        selectedSort, 
        setSelectedSort} = useOutletContext()

  return (
    <ProductsListingLayout products={rings} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={'Ring'} setSelectedCtg={'Ring'} />
  )
}

export default RingCollections
