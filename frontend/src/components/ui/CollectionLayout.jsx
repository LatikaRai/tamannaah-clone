import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

const CollectionLayout = ({heroImage, heroTitle,collectionTitle,description,products}) => {
    const {pathname} = useLocation()

    const heroTitlePositionChange = ['/shop/tamannah-favourite','/collections/high-jewelry','/collections/the-flick'].includes(pathname)

  return (
    <div>
      <div
      style={{backgroundImage: `url(${heroImage})`}}
       className={`w-full h-screen font-["ArboriaBook"] flex justify-center bg-cover bg-center ${heroTitlePositionChange ? 'items-end' : 'items-center'}`}>
        <h2 className={`uppercase text-white py-[1.3rem] text-shadow-sm text-center  ${heroTitlePositionChange ? 'font-semibold text-[1.05rem] tracking-wide' : 'font-thin text-[1.1rem]'}`}>
          {heroTitle}
        </h2>
      </div>
      <div className="w-full">
        <div className='w-full h-[50vh] lg:h-[48vh] flex flex-col justify-center gap-[2.6rem] lg:flex-row lg:items-center lg:justify-between px-[0.9rem] lg:px-[2.6rem]'>
          <h1 className="text-[0.9rem] lg:text-[1.05em] w-[60%] lg:w-full tracking-tighter uppercase font-['SaaSeries']">{collectionTitle}</h1>
          <p className="lg:w-[36%] text-[0.85rem] lg:text-[16.6px] font-['ArboriaBook'] leading-6 text-justify">
            {description}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-[0.9rem] lg:flex lg:flex-wrap items-center gap-[0.9rem] lg:gap-[2.2em] px-[0.9rem] lg:px-[2.6rem]">
          {products.map((product) =>{
          return <ProductCard key={product.id} product={product}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default CollectionLayout
