import { useDispatch, useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {

  const dispatch = useDispatch()

  const { slug } = useParams();

  const {setActiveTab} = useOutletContext()

  const { products } = useSelector((state) => state.productReducer);
  const product = products?.find((product) => product.slug === slug);

  // add to cart
  const addToCartHandler = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className="w-full font-['ArboriaBook']">
      <div className="w-full flex">
        <div className="w-1/2">
          {product.images.map((img) => (
            <img key={img} src={img} className="w-full  object-cover object-center" />
          ))}
        </div>
        <div className="w-1/2 py-[6.6rem] px-[8.6rem] sticky top-0 h-screen flex flex-col gap-[2.2rem]">
          <h1 className="uppercase font-semibold">{product.title}</h1>
          <h2>₹{product.price.toLocaleString("en-IN")}</h2>
          <img
            src={product.thumbnail}
            className="w-[6.6rem] object-cover object-center"
            alt=""
          />
          <p className="text-[0.9rem] text-justify font-light">
            {product.description}
          </p>
          <span className="italic text-[0.9rem]">Ready to ship</span>
          <div>
            <div onClick={()=>addToCartHandler(product)} className="w-full py-[0.6rem] bg-black text-[0.8rem] cursor-pointer text-white font-semibold text-center uppercase mb-[0.9rem]">
              Add to cart
            </div>
            <div onClick={()=>setActiveTab('contact')} className="w-full py-[0.6rem] border border-gray-800 hover:bg-black hover:text-white transition-all delay-75 text-[0.8rem] cursor-pointer font-semibold text-center uppercase">
              Enquire
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[6.6rem] px-[5.6rem]">
          <h1 className="font-semibold uppercase w-fit border-b border-black">Related Products</h1>
          <div className="w-full pt-[2.3rem] flex items-center justify-between">
            {
              products.filter(elem => elem.category === product.category && elem !== product).map((elem)=> (
               <ProductCard key={elem.id} product={elem}/>
              )).slice(0,4)
            }
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
