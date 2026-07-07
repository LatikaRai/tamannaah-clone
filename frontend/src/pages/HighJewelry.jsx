import { use } from "react";
import highJewelryImg from "../assets/images/high-jewelry-img.jpg";
import CollectionLayout from '../components/ui/CollectionLayout'
import { useSelector } from "react-redux";

const HighJewelry = () => {
    const {products} = useSelector(state => state.productReducer)
    const expensiveProducts = [...products].sort((a,b)=> b.price - a.price).slice(0,10)
  return (
    <CollectionLayout
    heroImage={highJewelryImg}
    heroTitle={'High Jewellery'}
    collectionTitle={'HIGH JEWELS DESIGNED TO LIVE ANYWHERE'}
    description={`Tamannaah's high jewellery begins with remarkable stones, shaped with restraint so the gem and the woman both remain centre stage. Each piece carries the quiet strength of true high craft, yet feels neutral and adaptable — created to move effortlessly across the globe, no matter the occasion.`}
    products={expensiveProducts}
    />
  )
}

export default HighJewelry
