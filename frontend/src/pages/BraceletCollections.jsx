import { useSelector } from "react-redux"
import ProductsListingLayout from "../components/ui/ProductsListingLayout"
import { useOutletContext } from "react-router-dom"

const BraceletCollections = () => {
   const {products} = useSelector(state => state.productReducer)
  const bracelets = [...products].filter((product)=>product.category === 'Bracelet')

  const {selectedStatus, 
        setSelectedStatus,
        selectedSort, 
        setSelectedSort} = useOutletContext()
  return (
    <ProductsListingLayout products={bracelets} selectedSort={selectedSort} setSelectedSort={setSelectedSort} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} selectedCtg={'Bracelet'} setSelectedCtg={'Bracelet  '} />
  )
}

export default BraceletCollections
