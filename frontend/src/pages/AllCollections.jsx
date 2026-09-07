import { useSelector } from "react-redux"
import ProductsListingLayout from "../components/ui/ProductsListingLayout"
import { useOutletContext } from "react-router-dom"

const AllCollections = () => {
  const {products} = useSelector(state => state.productReducer)

  const {selectedStatus, 
        setSelectedStatus,
        selectedCtg,
        setSelectedCtg,
        selectedSort, 
        setSelectedSort} = useOutletContext()
  return (
    <ProductsListingLayout products={products} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={selectedCtg} setSelectedCtg={setSelectedCtg} />
  )
}

export default AllCollections
