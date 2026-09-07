import { useSelector } from "react-redux"
import ProductsListingLayout from "../components/ui/ProductsListingLayout"
import { useOutletContext } from "react-router-dom"

const NewCollections = () => {
    const {products} = useSelector(state => state.productReducer)
    const newCollection = [...products].sort(()=>Math.random() - 0.5).slice(0,9)

    const {selectedStatus, 
        setSelectedStatus,
        selectedCtg,
        setSelectedCtg,
        selectedSort, 
        setSelectedSort} = useOutletContext()
  return (
    <ProductsListingLayout products={newCollection} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={selectedCtg} setSelectedCtg={setSelectedCtg} />
  )
}

export default NewCollections
