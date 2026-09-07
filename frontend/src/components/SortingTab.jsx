import { motion } from "motion/react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const SortingTab = ({
  selectedStatus,
  setSelectedStatus,
  selectedCtg,
  setSelectedCtg,
  selectedSort,
  setSelectedSort,
  setSortingTab
}) => {
  console.log(selectedCtg)
  // for sorting the products
  const sortBy = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
  ];

  // closing and opening the sort by tab
  const [openSort, setOpenSort] = useState(true);

  // closing and opening the availability tab
  const [openStockStatus, setOpenStockStatus] = useState(false);

  // closing and opening the ctg tab
  const [openCtg, setOpenCtg] = useState(false);

  // for availabiblity
  const stockStatus = ["in stock", "out of stock"];

  // for ctg
  const categories = ["Necklace", "Ring", "Earring", "Bracelet"];

  return (
    <div className="">
      {
        <motion.div
          initial={{ opacity: 0, x: "10vw" }}
          animate={{ opacity: 1, x: "0vw" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          exit={{ opacity: 1, x: "100%" }}
          className='fixed z-100 h-screen w-[35%] top-0 right-0 bg-white text-gray-800 p-[1.4rem] font-["ArboriaBook"] flex flex-col justify-between'
        >
          <div>
            <div className="flex items-center justify-between border-b pb-[0.8rem] border-gray-200">
              <h1 className="text-[0.9rem]">Filter & Sort</h1>
              <i className="ri-close-large-line"></i>
            </div>
            <div className="overflow-auto h-[80vh]">
              {/* sort by tab */}
              <div className="py-[1.2rem] border-b border-gray-200">
                <div
                  onClick={() => setOpenSort(!openSort)}
                  className="flex items-center justify-between text-[0.9rem]"
                >
                  <h2>Sort By: {selectedSort}</h2>
                  {openSort ? (
                    <i className="ri-subtract-line"></i>
                  ) : (
                    <i className="ri-add-line"></i>
                  )}
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openSort ? "auto" : 0,
                    opacity: openSort ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="py-[1.4rem] flex flex-col gap-[0.7rem]">
                    {sortBy.map((sort) => (
                      <div
                        key={sort}
                        className="flex items-center gap-[0.6rem]"
                      >
                        <span className="relative w-[0.79rem] h-[0.76rem] shrink-0">
                          <input
                            type="checkbox"
                            checked={selectedSort === sort}
                            onChange={() => setSelectedSort(sort)}
                            className="peer block h-full w-full appearance-none border border-black cursor-pointer"
                          />
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.42rem] h-[0.38rem] bg-[#939997] scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100 transition-all duration-150 ease-out pointer-events-none"></span>
                        </span>
                        <h2 className="text-[0.8rem]">{sort}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* availability tab */}
              <div className="py-[1.2rem] border-b border-gray-200">
                <div
                  onClick={() => setOpenStockStatus(!openStockStatus)}
                  className="flex items-center justify-between text-[0.9rem]"
                >
                  <h2>Availability</h2>
                  {openStockStatus ? (
                    <i className="ri-subtract-line"></i>
                  ) : (
                    <i className="ri-add-line"></i>
                  )}
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openStockStatus ? "auto" : 0,
                    opacity: openStockStatus ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="py-[1.4rem] flex flex-col gap-[0.7rem]">
                    {stockStatus.map((status) => (
                      <div
                        key={status}
                        className="flex items-center gap-[0.6rem]"
                      >
                        <span className="relative w-[0.74rem] h-[0.76rem] shrink-0">
                          <input
                            type="checkbox"
                            checked={selectedStatus === status}
                            onChange={() => setSelectedStatus(status)}
                            className="peer block h-full w-full appearance-none border border-black cursor-pointer"
                          />
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.42rem] h-[0.38rem] bg-[#939997] scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100 transition-all duration-150 ease-out pointer-events-none"></span>
                        </span>
                        <h2 className="text-[0.8rem] capitalize">{status}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* category tab */}
              <div className="py-[1.2rem] border-b border-gray-200">
                <div
                  onClick={() => setOpenCtg(!openCtg)}
                  className="flex items-center justify-between text-[0.9rem]"
                >
                  <h2>Category</h2>
                  {openCtg ? (
                    <i className="ri-subtract-line"></i>
                  ) : (
                    <i className="ri-add-line"></i>
                  )}
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openCtg ? "auto" : 0,
                    opacity: openCtg ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="py-[1.4rem] flex flex-col gap-[0.7rem]">
                    {categories.map((ctg) => (
                      <div key={ctg} className="flex items-center gap-[0.6rem]">
                        <span className="relative w-[0.74rem] h-[0.76rem] shrink-0">
                          <input
                            type="checkbox"
                            checked={selectedCtg.includes(ctg)}
                            onChange={() =>
                              setSelectedCtg((prev) => [...prev, ctg])
                            }
                            className="peer block h-full w-full appearance-none border border-black cursor-pointer"
                          />
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.42rem] h-[0.38rem] bg-[#939997] scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100 transition-all duration-150 ease-out pointer-events-none"></span>
                        </span>
                        <h2 className="text-[0.8rem] capitalize">{ctg}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-[0.6rem]">
            <button
              onClick={() => {
                setSelectedSort("Featured");
                setSelectedStatus("stock");
                setSelectedCtg([]);
                console.log("cleared");
              }}
              className="w-full border uppercase py-[0.49rem] text-[0.85rem] font-semibold hover:bg-black hover:text-white transition-all delay-100"
            >
              Clear all
            </button>
            <button onClick={()=>setSortingTab(false)} className="w-full border uppercase py-[0.49rem] text-[0.85rem] font-semibold bg-black text-white">
              View Results
            </button>
          </div>
        </motion.div>
      }
    </div>
  );
};

export default SortingTab;
