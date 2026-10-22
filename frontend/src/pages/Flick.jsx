import CollectionLayout from "../components/ui/CollectionLayout"
import flickImg1 from "../assets/images/flick1.jpg";
import flickImg2 from "../assets/images/flick2.jpg";
import flickImg3 from "../assets/images/flick3.jpg";
import flickVid from "../assets/videos/flick.mp4";
import { useSelector } from "react-redux";

const Flick = () => {
    const {products} = useSelector(state => state.productReducer)
    const flickProducts = products.filter(product => product.title.toLowerCase().includes('flick'))
  return (
    <>
    <CollectionLayout
        heroImage={flickImg1}
        heroTitle={'The Flick'}
        collectionTitle={'The Flick - Not just a link. A language.'}
        description={`Our Flick collection introduces a signature silhouette, distinguished by a subtle flick in its form — a soft rebellion against the ordinary. Designed to layer, loop, and live in, these pieces offer movement and presence in every glance.`}
        products={flickProducts}
    />
    <video muted loop autoPlay playsInline src={flickVid} className="w-full h-screen object-cover"></video>
    <div className="h-screen w-full lg:flex items-center my-[1.9rem]">
        <img src={flickImg2} className="w-full lg:w-1/2 h-full object-center object-cover" />
        <img src={flickImg3} className="w-full lg:w-1/2 h-full object-center object-cover" />
    </div>
    </>
  )
}

export default Flick
