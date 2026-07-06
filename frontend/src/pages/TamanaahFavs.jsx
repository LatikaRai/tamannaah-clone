import ProductCard from "../components/ui/ProductCard";
import tamanFavImg from "../assets/images/taman-fav.jpg";
import favourite from "../assets/videos/favourite.mp4";
import { useSelector } from "react-redux";

const MostPopular = () => {
  const { products } = useSelector((state) => state.productReducer);
  const tamanaahFavs = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0,16);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${tamanFavImg})`,
        }}
        className='w-full h-screen bg-cover bg-center flex items-end justify-center font-["ArboriaBook"]'
      >
        <h2 className="uppercase text-white text-[1rem] text-shadow-md pb-[1.1rem] font-semibold text-center ">
          Tamannaah's Favourites
        </h2>
      </div>
      <div className="w-full h-auto">
        <div className="w-full h-[38vh] flex items-center justify-between px-[2.5rem] ">
          <h1 className="text-[1.05rem] uppercase font-['SaaSeries'] tracking-tighter">
            Tamanaah's go to pieces for every occasion
          </h1>
          <p className="w-[36%] text-[16.6px] font-['ArboriaBook'] leading-6 text-justify">
            Curated from pieces she returns to again and again, this selection
            reflects Tamannaah's instinct for effortless glamour. Each favourite
            feels polished yet relaxed, layering beautifully from day to night.
            These jewels mirror her style—confident, feminine, quietly
            striking—designed to feel lived-in, not precious, in every moment.
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap items-center gap-[2.2em] pb-[2.3rem] px-[2.5rem]">
          {tamanaahFavs.map((product, idx) => {
            return <ProductCard key={product.slug} product={product} />;
          })}
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-screen object-cover"
          src={favourite}
        ></video>
      </div>
    </div>
  );
};

export default MostPopular;