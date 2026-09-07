import { useSelector } from "react-redux"
import ProductsListingLayout from "../components/ui/ProductsListingLayout"
import { useOutletContext } from "react-router-dom"

const NecklaceCollections = () => {
  const {products} = useSelector(state => state.productReducer)
    const necklaces = [...products].filter((product)=>product.category === 'Necklace')

    const {selectedStatus, 
        setSelectedStatus,
        selectedSort, 
        setSelectedSort} = useOutletContext()
  return (
    <ProductsListingLayout products={necklaces} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={'Necklace'} setSelectedCtg={'Necklace'} />
  )
}

export default NecklaceCollections
