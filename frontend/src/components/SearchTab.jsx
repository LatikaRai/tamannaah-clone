import { NavLink } from "react-router-dom"

const SearchTab = ({setActiveTab}) => {
  return (
    <div>
      {/* for desktop */}
      <div className="hidden lg:flex flex-col mt-[5.2rem] text-[0.9rem] gap-[0.9rem] ">
      <div className=" flex items-center gap-[0.6em] border-b-2 border-b-gray-300 py-[0.5em] ">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Type Your Search"/>
      </div>
      <h2 className="text-gray-400 font-thin py-[0.8em]">Trending Now</h2>
      <NavLink to={'/collections/canvas'} className={'font-thin'}>Canvas</NavLink>
      <NavLink to={'/collections/the-flick'} className={'font-thin'}>The Flick</NavLink>
      <NavLink to={'/collections/plumptious'} className={'font-thin'}>Plumptious</NavLink>
    </div>

    {/* for mobile */}
    <div className="block lg:hidden w-full bg-white">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[0.8rem]">Search</h2>
        <i onClick={()=>{
          setActiveTab(null)
        }} className="ri-close-line"></i>
      </div>
      <div className="text-gray-800 text-[0.8rem] border-b border-gray-400 py-[0.6rem] mt-[3.4rem] flex items-center gap-[0.4rem]">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Type your search" className="outline-none"/>
      </div>
      <div className="text-[0.8rem] flex flex-col gap-[0.9rem]">
        <h2 className="text-gray-400 font-thin py-[0.8em]">Trending Now</h2>
      <NavLink to={'/collections/canvas'} className={'font-thin'}>Canvas</NavLink>
      <NavLink to={'/collections/the-flick'} className={'font-thin'}>The Flick</NavLink>
      <NavLink to={'/collections/plumptious'} className={'font-thin'}>Plumptious</NavLink>
      </div>
    </div>
    </div>
  )
}

export default SearchTab
