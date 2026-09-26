import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import SortingTab from "../components/SortingTab";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  // create states of active tabs for the navbar to know on which the user has clicked
  const [activeTab, setActiveTab] = useState(null);
  const [pendingRoute, setPendingRoute] = useState(null);

  // sorting & filter section
  // when user click on sorting filter
  const [sortingTab, setSortingTab] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("in stock");
  const [selectedCtg, setSelectedCtg] = useState([]);
  const [selectedSort, setSelectedSort] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // when the states are active it makes sure the user cant scroll
    if (activeTab || sortingTab) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeTab, sortingTab]);

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* for exit animation of the sidebar */}
      <AnimatePresence
        onExitComplete={() => {
          if (pendingRoute) {
            navigate(pendingRoute);
            setPendingRoute(null);
          }
        }}
      >
        {activeTab && (
          <motion.div>
            <div
              className="fixed inset-0 bg-black/40 z-70"
              // when clicking on other than the side bars, the sidebar should disappear
              onClick={() => setActiveTab(null)}
            ></div>

            <SideBar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setPendingRoute={setPendingRoute}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* for exist animation of sorting tab */}
      <AnimatePresence>
        {sortingTab && (
          <motion.div>
            <div
              className="fixed inset-0 bg-black/40 z-90"
              // when clicking on other than the side bars, the sorting tab should disappear
              onClick={() => setSortingTab(false)}
            ></div>

            <SortingTab
              sortingTab={sortingTab}
              setSortingTab={setSortingTab}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              selectedCtg={selectedCtg}
              setSelectedCtg={setSelectedCtg}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet
        context={{
          activeTab,
          setActiveTab,
          sortingTab,
          setSortingTab,
          selectedStatus,
          setSelectedStatus,
          selectedCtg,
          setSelectedCtg,
          selectedSort,
          setSelectedSort,
        }}
      />

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainLayout;
