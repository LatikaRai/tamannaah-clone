import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SortingTab from "../SortingTab";
import { useOutletContext } from "react-router-dom";

const ProductsListingLayout = ({
  products,
  selectedStatus,
  setSelectedStatus,
  selectedCtg,
  setSelectedCtg,
  selectedSort,
  setSelectedSort,
}) => {
  const [viewImages, setViewImages] = useState("four");

  const { sortingTab, setSortingTab } = useOutletContext();

  // filtering the products
  const filteredProducts = products.filter((product) => {
    // category
    const ctgMatch =
      selectedCtg.length === 0 || selectedCtg.includes(product.category);

    //  availability
    const stockStatusMatch =
     selectedStatus === null || (selectedStatus === "in stock" ? product.stock > 0 : product.stock === 0);

    // featured
    const featuredMatch =
      selectedSort !== "Featured" || product.featured === true;

    return ctgMatch && stockStatusMatch && featuredMatch;
  });

  // sorting the products
  if (selectedSort === "Alphabetically, A-Z") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (selectedSort === "Alphabetically, Z-A") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }
  if (selectedSort === "Best selling") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  if (selectedSort === "Price, low to high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (selectedSort === "Price, high to low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(()=>{
    
  })

  return (
    <div className="w-full relative px-[2.5em]">
      <div className="w-full h-[30vh]"></div>
      <div className="w-full flex items-center justify-between pb-[2.5em] text-[0.9rem]">
        <div className="flex items-center gap-2">
          <h3>View:</h3>
          <h3
            onClick={() => {
              setViewImages("four");
            }}
            className={`${viewImages === "four" ? "text-black underline underline-offset-2" : "text-gray-400"} cursor-pointer`}
          >
            Four
          </h3>
          <h3
            onClick={() => {
              setViewImages("two");
            }}
            className={`${viewImages === "two" ? "text-black underline underline-offset-2" : "text-gray-400"} cursor-pointer`}
          >
            Two
          </h3>
        </div>
        <div
          onClick={() => setSortingTab(true)}
          className={`${sortingTab ? "hidden" : "block"} cursor-pointer`}
        >
          Filter & Sort
        </div>
        <>
          {sortingTab && (
            <SortingTab
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedCtg={selectedCtg}
              setSelectedCtg={setSelectedCtg}
              setSortingTab={setSortingTab}
            />
          )}
        </>
      </div>
      <div className="w-full h-auto flex flex-wrap items-center gap-[2.2em]">
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              key={product.slug}
              product={product}
              viewImages={viewImages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsListingLayout;
