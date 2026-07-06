import { useSelector } from "react-redux";
import tbarDesktop from "../assets/images/tbar-desktop.jpg";
import ProductCard from "../components/ui/ProductCard";

const Tbars = () => {

  const {products} = useSelector(state => state.productReducer)
  const tBarProducts = products.filter((product) =>
    product.title.toLowerCase().includes("t-bar"),
  );

  return (
    <div>
      <div
      style={{backgroundImage: `url(${tbarDesktop})`}}
       className='w-full h-screen font-["ArboriaBook"] flex items-center justify-center bg-cover bg-center'>
        <h2 className="uppercase text-white text-[1.1rem] text-shadow-xs font-thin text-center">
          T-bar collection
        </h2>
      </div>
      <div className="w-full h-auto">
        <div className="w-full h-[48vh] flex items-center justify-between px-[2.5rem] ">
          <h1 className="text-[1.1em] uppercase font-['SaaSeries']">T-Bar</h1>
          <p className="w-[36%] text-[16.6px] font-['ArboriaBook'] leading-6 text-justify">
            Inspired by the iconic jewellery clasp, the T-Bar collection
            elevates a functional detail into a bold design statement. Across
            the collection, the signature silhouette is reinterpreted through
            gemstones, symbols, and sculptural forms, creating pieces that feel
            both familiar and unexpected. Designed to anchor a jewellery
            wardrobe, these are modern essentials that layer with ease and bring
            character, confidence, and versatility to everyday dressing.
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap items-center gap-[2.2em] px-[2.5rem]">
          {tBarProducts.map((product,idx) =>{
          return <ProductCard key={product.slug} product={product}/>
        })}
        </div>
      </div>
    </div>
  );
};

export default Tbars;
