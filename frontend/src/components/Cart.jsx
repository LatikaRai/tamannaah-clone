import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decQty, incQty, removeItem } from "../features/cart/cartSlice";

const Cart = ({ setActiveTab }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const { cart } = useSelector((state) => state.cartReducer);

//   increasing the qty
  const incItemQty = (product) => {
    dispatch(incQty(product))
  }

//   decreasing the qty
  const decItemQty = (product) => {
    dispatch(decQty(product))
  }

//   remove the item
const rmvItem = (product) => {
    dispatch(removeItem(product))
}

// price formatting
const priceFormat = (price,qty) => {
    const total = price * qty
    return total.toLocaleString("en-IN")
}

  return (
    <div className="w-full h-screen pr-[1.3rem] text-[0.9rem] overflow-y-auto">
      <div className="w-full flex items-center justify-between pb-[1.2rem] px-[1.4rem] border-b border-gray-300">
        <h1>My Bag</h1>
        <i onClick={() => setActiveTab("")} className="ri-close-line"></i>
      </div>
      <div className="py-[1.6rem] px-[1.4rem]">
        {cart.length === 0 ? (
          <div className="flex flex-col gap-[2.4rem] py-[1.1rem]">
            <span>Your cart is empty</span>
            <button
              onClick={() => navigate("/collections/all-jewellery")}
              className="w-full border border-black text-center text-[0.8rem] py-[0.6rem] font-semibold uppercase hover:bg-black hover:text-white transition-all"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <div className="w-full overflow-y-auto">
            {cart.map((product) => (
              <div key={product.id} className="flex items-start gap-[1.6rem] py-[1.2rem] border-b border-gray-300">
                <div className="w-[25%] h-[8.9rem]">
                  <img
                    src={product.thumbnail}
                    className="w-[6.6rem] h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="w-[70%] flex flex-col justify-between h-[8.9rem]">
                  <div className="flex flex-col gap-[0.8rem]">
                    <h2 className="font-semibold uppercase text-[0.8rem]">
                      {product.title}
                    </h2>
                    <div className="flex items-center gap-[0.8rem] border border-gray-300 w-fit py-[0.3rem] px-[0.9rem]">
                      <i onClick={()=>decItemQty(product)} className="ri-subtract-line"></i>
                      <span className="text-[0.84rem]">{product.quantity}</span>
                      <i onClick={()=>incItemQty(product)} className="ri-add-line"></i>
                    </div>
                  </div>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-[0.9rem]">₹{priceFormat(product.price, product.quantity)}</h2>
                      <span onClick={()=>rmvItem(product)} className="cursor-pointer underline text-[0.8rem]">Remove</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
