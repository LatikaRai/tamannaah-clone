import { useDispatch, useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
import { asyncAddToCart } from "../actions/cartActions";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { slug } = useParams();

  const { setActiveTab } = useOutletContext();

  const { products } = useSelector((state) => state.productReducer);
  const product = products?.find((product) => product.slug === slug);

  // add to cart
  const addToCartHandler = (item) => {
    dispatch(asyncAddToCart(item));
  };

  // loading guard
  if (!product)
    return (
      <div className="w-full h-screen flex items-center justify-center uppercase font-semibold font-['ArboriaBook']">
        Loading...
      </div>
    );

  return (
    <div className="w-full p-[0.9rem] lg:p-0 font-['ArboriaBook']">
      <div className="w-full lg:flex">
        <div className="w-full h-[80vh] flex gap-[0.6rem] overflow-x-auto scrollbar-none snap-x snap-mandatory lg:h-auto lg:w-1/2 lg:block lg:overflow-visible lg:snap-none">
          {product?.images?.map((img) => (
            <img
              key={img}
              src={img}
              className="w-full h-[90%] object-cover object-center shrink-0 snap-start lg:h-auto lg:w-full"
            />
          ))}
        </div>
        <div className="w-full gap-[0.9rem] lg:w-1/2 lg:py-[6.6rem] lg:px-[8.6rem] lg:sticky lg:top-0 lg:h-screen flex flex-col lg:gap-[2.2rem]">
          <div>
            <div>
            <h1 className="uppercase font-semibold">{product?.title}</h1>
          <h2 className="text-[0.8rem] lg:text-[1rem]">₹{product?.price.toLocaleString("en-IN")}</h2>
          </div>
          </div>
          <img
            src={product?.thumbnail}
            className="hidden lg:block w-[6.6rem] object-cover object-center"
            alt=""
          />
          <p className="text-[0.8rem] lg:text-[0.9rem] text-justify font-light">
            {product?.description}
          </p>
          <span className="italic text-[0.75rem] lg:text-[0.9rem]">Ready to ship</span>
          <div>
            <div
              onClick={() => addToCartHandler(product)}
              className="w-full py-[0.6rem] bg-black text-[0.8rem] cursor-pointer text-white font-semibold text-center uppercase mb-[0.9rem]" 
            >
              Add to cart
            </div>
            <div
              onClick={() => setActiveTab("contact")}
              className="w-full py-[0.6rem] border border-gray-800 hover:bg-black hover:text-white transition-all delay-75 text-[0.8rem] cursor-pointer font-semibold text-center uppercase"
            >
              Enquire
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[0.9rem] py-[3.6rem] lg:py-[6.6rem] lg:px-[5.6rem]">
        <h1 className="text-[0.8rem] lg:text-[1rem] font-semibold uppercase w-fit border-b border-black">
          Related Products
        </h1>
        <div className="w-full pt-[2.3rem] flex flex-nowrap items-center justify-between gap-[0.8rem] lg:gap-0 overflow-x-auto scrollbar-none snap-x snap-mandatory lg:snap-none">
          {products
            ?.filter(
              (elem) => elem.category === product.category && elem !== product,
            )
            .map((elem) => <ProductCard key={elem.id} product={elem} />)
            .slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
