import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncAddToWishlist,
  asyncRemoveFromWishlist,
} from "../../actions/wishlistActions";

const ProductCardMobile = ({product, viewImagesMobile = "two"}) => {
    const dispatch = useDispatch();

  const [currentIdx, setCurrentIdx] = useState(0);

  const allImages = [...product.images];

  const navigate = useNavigate();

  // wishlist
  const { wishlist } = useSelector((state) => state.wishlistReducer);

  const wishlistItem = wishlist.find((item) => item.slug === product.slug);

  const wishlistHandler = () => {
    if (wishlistItem) {
      dispatch(asyncRemoveFromWishlist(wishlistItem));
    } else {
      dispatch(asyncAddToWishlist(product));
    }
  };
  return (
    <div
        onClick={() => {
          navigate(`/product/${product.slug}`);
          window.scrollTo(0, 0);
        }}
        className={`${viewImagesMobile === 'two' ? 'w-[48%] h-[45vh]' : 'w-full h-[60vh]'} snap-start shrink-0 lg:hidden`}
      >
        <div
          onMouseEnter={() => { 
            setCurrentIdx(1);
          }}
          onMouseLeave={() => {
            setCurrentIdx(0);
          }}
          className={`${viewImagesMobile === 'two' ? 'h-[84%]' : 'w-full h-[90%]'} w-full relative`}
        >
          <img
            className="w-full h-full object-cover"
            src={allImages[currentIdx]}
            alt=""
          />
          <>
            <i
              onClick={(e) => {
                e.stopPropagation();
                wishlistHandler();
              }}
              className={`${wishlistItem ? "ri-heart-fill" : "ri-heart-line"} absolute z-100 right-0 p-[1em] text-[1.1rem] text-gray-800 top-0`}
            ></i>
            <i
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx((prev) =>
                  prev === 0 ? allImages.length - 1 : prev - 1,
                );
              }}
              className="ri-arrow-left-s-line absolute px-[1em] text-[1.1rem] text-gray-700 top-1/2 left-0"
            ></i>
            <i
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx((prev) => (prev + 1) % allImages.length);
              }}
              className="ri-arrow-right-s-line absolute z-50 px-[1em] text-[1.1rem] text-gray-700 top-1/2 right-0"
            ></i>
          </>
        </div>
        <div
          className='text-[0.76rem] py-[0.7em]'
        >
          <h1 className="uppercase text-gray-800 font-thin tracking-tighter font-['SaaSeriesF'] cursor-pointer">
            {product.title}
          </h1>
          <h2 className="font-semibold text-gray-400">
            &#8377; {product.price.toLocaleString("en-IN")}
          </h2>
        </div>
      </div>
  )
}

export default ProductCardMobile
