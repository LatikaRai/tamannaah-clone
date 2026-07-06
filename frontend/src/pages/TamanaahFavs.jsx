import ProductCard from "../components/ui/ProductCard";
import tamanFavImg from "../assets/images/taman-fav.jpg";
import favourite from "../assets/videos/favourite.mp4";
import { useSelector } from "react-redux";
import CollectionLayout from "../components/ui/CollectionLayout";

const MostPopular = () => {
  const { products } = useSelector((state) => state.productReducer);
  const tamanaahFavs = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0,16);

  return (
    <div>
      <CollectionLayout
      heroImage={tamanFavImg}
      heroTitle={"Tamannaah's Favourites"}
      collectionTitle={"Tamanaah's go to pieces for every occasion"}
      description={`Curated from pieces she returns to again and again, this selection
            reflects Tamannaah's instinct for effortless glamour. Each favourite
            feels polished yet relaxed, layering beautifully from day to night.
            These jewels mirror her style—confident, feminine, quietly
            striking—designed to feel lived-in, not precious, in every moment.`}
      products={tamanaahFavs}
      />
      <div className="w-full h-auto">
        
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