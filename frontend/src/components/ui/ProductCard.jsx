import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product, viewImages='four'}) => {

    const [currentIdx, setCurrentIdx] = useState(0)
    const [isHovered, setIsHovered] = useState(false)


    const allImages = [...product.images]

    const navigate = useNavigate()

  return (
    <div onClick={()=>{
      navigate(`/product/${product.slug}`)
      window.scrollTo(0,0)
      }} className={`${viewImages === 'four' ? 'w-[23%] h-[65vh]' : 'w-[48%] h-[120vh]'} z-0 pb-[1em]`}>
      <div
      onMouseEnter={()=> {
            setCurrentIdx(1)
            setIsHovered(true)
        }}
          onMouseLeave={()=> {
            setCurrentIdx(0)
            setIsHovered(false)
        }} 
      className={`${viewImages === 'four' ? 'h-[57vh]' : 'h-[115vh]'} w-full relative cursor-pointer`}>
        <img
          
          className='w-full h-full object-cover'
          src={allImages[currentIdx]}
          alt=""
        />
        { isHovered &&(
            <>
            <i onClick={(e)=>{
              e.stopPropagation()
            }} className="ri-heart-line absolute z-100 right-0 p-[1em] text-[1.1rem] text-gray-800 top-0"></i>
            <i 
            onClick={(e)=>{
              e.stopPropagation()
              setCurrentIdx(prev => 
                prev === 0 ? allImages.length - 1 : prev - 1
              )}
            }
            className="ri-arrow-left-s-line absolute px-[1em] text-[1.1rem] text-gray-700 top-1/2 left-0"
            ></i>
            <i
            onClick={(e)=> {
              e.stopPropagation()
              setCurrentIdx(prev => 
              (prev + 1) % allImages.length
              )}
            } 
            className="ri-arrow-right-s-line absolute z-50 px-[1em] text-[1.1rem] text-gray-700 top-1/2 right-0"></i>
            </>
        )
        }
      </div>
      <div className={`${viewImages === 'four' ? 'text-[0.9rem]' : 'text-[1rem]'} py-[0.7em] leading-5`}>
        <h1 className="uppercase text-gray-800 font-thin tracking-tighter font-['SaaSeriesF'] cursor-pointer">
          {product.title}
        </h1>
        <h2 className="font-semibold text-gray-400">
          &#8377; {product.price.toLocaleString("en-IN")}
        </h2>
      </div>  
    </div>
  );
}; 

export default ProductCard;
