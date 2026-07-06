import { useSelector } from "react-redux";
import tbarDesktop from "../assets/images/tbar-desktop.jpg";
import ProductCard from "../components/ui/ProductCard";
import CollectionLayout from "../components/ui/CollectionLayout";

const Tbars = () => {
  const { products } = useSelector((state) => state.productReducer);
  const tBarProducts = products.filter((product) =>
    product.title.toLowerCase().includes("t-bar"),
  );

  return (
    <CollectionLayout
      heroImage={tbarDesktop}
      heroTitle={"T-bar collection"}
      collectionTitle={"T-Bar"}
      description={`Inspired by the iconic jewellery clasp, the T-Bar collection
            elevates a functional detail into a bold design statement. Across
            the collection, the signature silhouette is reinterpreted through
            gemstones, symbols, and sculptural forms, creating pieces that feel
            both familiar and unexpected. Designed to anchor a jewellery
            wardrobe, these are modern essentials that layer with ease and bring
            character, confidence, and versatility to everyday dressing.`}
      products={tBarProducts}
    />
  );
};

export default Tbars;
