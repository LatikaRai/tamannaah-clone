import CollectionLayout from "../components/ui/CollectionLayout"
import canvasImg from "../assets/images/canvas.jpg";
import canvasImg2 from "../assets/images/canvas2.jpg";
import canvasImg3 from "../assets/images/canvas3.jpg";
import canvasVid from "../assets/videos/canvas.mp4";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Canvas = () => {
    const [canvasCollection, setCanvasCollection] = useState([])

    const {products} = useSelector(state => state.productReducer)

    useEffect(()=>{
        if(products.length<0) return
        setCanvasCollection([...products].sort(() => Math.random() - 0.5).slice(0,12))
    },[products])
  return (
    <div>
      <CollectionLayout
        heroImage={canvasImg}
        heroTitle={'Canvas'}
        collectionTitle={'Canvas - The quiet power of classics.'}
        description={`Canvas is our foundation collection - clean, versatile, and timeless. These are your forever pieces: pared-back silhouettes with an edge, designed to be the first layer of your jewellery wardrobe.From hoops to huggies, chains to studs, these are the pieces you'll reach for every day - and still be wearing ten years from now.`}
        products={canvasCollection}
      />
      <video muted loop autoPlay playsInline src={canvasVid} className="w-full h-screen object-cover"></video>
          <div className="h-screen w-full lg:flex items-center my-[1.9rem]">
              <img src={canvasImg2} className="w-full lg:w-1/2 h-full object-center object-cover" />
              <img src={canvasImg3} className="w-full lg:w-1/2 h-full object-center object-cover" />
          </div>
    </div>
  )
}

export default Canvas
