import { useSelector } from "react-redux"
import CollectionLayout from "../components/ui/CollectionLayout"
import plumptiousImg from "../assets/images/plumptious.jpg";
import plumptiousMobileImg from "../assets/images/plumptiousMobile.jpg";
import plumptiousVid from "../assets/videos/plumptious.mp4";

const Plumptious = () => {
    const {products} = useSelector(state => state.productReducer)
    const plumpProductus = products.filter(product => product.title.toLowerCase().includes('curve'))
  return (
    <div>
      <CollectionLayout
        heroImage={plumptiousImg}
        mobileHeroImage={plumptiousMobileImg}
        heroTitle={'The Flick'}
        collectionTitle={'Plumptious - Bold, bulbous, and joyfully voluminous.'}
        description={`Plumptious is our most sculptural collection — featuring inflated forms, generous curves, and rounded silhouettes that exude softness with strength. These are pieces designed to be seen, felt, and remembered.`}
        products={plumpProductus}
    />
    <video muted loop autoPlay playsInline src={plumptiousVid} className="w-full h-screen object-cover"></video>
    </div>
  )
}

export default Plumptious
