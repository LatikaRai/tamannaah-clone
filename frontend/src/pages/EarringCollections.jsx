import { useSelector } from "react-redux"
import ProductsListingLayout from "../components/ui/ProductsListingLayout"
import { useOutletContext } from "react-router-dom"

const EarringCollections = () => {
    const {products} = useSelector(state => state.productReducer)
    const earrings = [...products].filter((product)=>product.category === 'Earring')

    const {selectedStatus, 
        setSelectedStatus,
        selectedSort, 
        setSelectedSort} = useOutletContext()
  return (
    <ProductsListingLayout products={earrings} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={'Earring'} setSelectedCtg={'Earring'} />
  )
}

export default EarringCollections
