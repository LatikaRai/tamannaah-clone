import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncLoadWishlist, asyncRemoveFromWishlist } from "../actions/wishlistActions";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate()

  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  // to remove an item
  const removeItemHandler = (product) => {
    dispatch(asyncRemoveFromWishlist(product))
  }

  useEffect(() => {
    dispatch(asyncLoadWishlist());
  }, [dispatch]);
  return (
    <>
      {wishlist.length === 0 ? 
      (
        <div className="w-full h-screen flex items-center justify-center font-['ArboriaBook']">
            <div className="flex flex-col gap-[1.2rem]">
              <span className="text-[1.1rem]">Your wishlist is empty</span>
            <button onClick={()=>navigate('/collections/all-jewellery')} className="bg-black text-white p-[0.6rem] cursor-pointer">Discover more</button>
            </div>
        </div>
      ) 
      : 
      (
        <div className="w-full mt-[8vh] py-[10vh] min-h-[92vh] flex items-center justify-center font-['ArboriaBook']">
          <div className="w-[78%] grid grid-cols-4 gap-4">
            {wishlist.map((item) => (
              <div key={item?.id} className=" h-[60vh]">
                <div
                  style={{
                    backgroundImage: `url(${item?.thumbnail})`,
                  }}
                  className="w-full h-[76%] bg-center bg-cover flex flex-row-reverse px-[0.9rem] py-[0.6rem]"
                >
                  <i
                    onClick={() => dispatch(removeItemHandler(item))}
                    className="ri-close-large-line text-gray-500 text-[1.3rem]"
                  ></i>
                </div>
                <div className="h-[24%] px-[0.7rem] py-[0.4rem] flex flex-col items-start justify-between">
                  <h1 className="text-[0.8rem] font-semibold uppercase">
                    {item?.title}
                  </h1>
                  <h2 className="text-[0.9rem]">
                    &#8377; {item?.price?.toLocaleString("en-IN")}
                  </h2>
                  <button className="uppercase cursor-pointer hover:bg-black hover:text-white transition-all delay-100 font-semibold text-center w-full border border-black text-[0.8rem] py-[0.4rem]">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
