import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

const CollectionLayout = ({heroImage, heroTitle,collectionTitle,description,products}) => {
    const {pathname} = useLocation()

    const heroTitlePositionChange = ['/shop/tamannah-favourite'].includes(pathname)

  return (
    <div>
      <div
      style={{backgroundImage: `url(${heroImage})`}}
       className={`w-full h-screen font-["ArboriaBook"] flex justify-center bg-cover bg-center ${heroTitlePositionChange ? 'items-end' : 'items-center'}`}>
        <h2 className="uppercase text-white text-[1.1rem] py-[1.3rem] text-shadow-sm font-thin text-center">
          {heroTitle}
        </h2>
      </div>
      <div className="w-full h-auto">
        <div className='w-full h-[48vh] flex items-center justify-between px-[2.5rem]'>
          <h1 className="text-[1.1em] uppercase font-['SaaSeries']">{collectionTitle}</h1>
          <p className="w-[36%] text-[16.6px] font-['ArboriaBook'] leading-6 text-justify">
            {description}
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap items-center gap-[2.2em] px-[2.5rem]">
          {products.map((product,idx) =>{
          return <ProductCard key={product.slug} product={product}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default CollectionLayout
