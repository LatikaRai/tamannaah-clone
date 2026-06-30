import { NavLink } from "react-router-dom"

const SearchTab = () => {
  return (
    <div className="flex flex-col mt-[5.2rem] text-[0.9rem] gap-[0.9rem] ">
      <div className=" flex items-center gap-[0.6em] border-b-2 border-b-gray-300 py-[0.5em] ">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Type Your Search"/>
      </div>
      <h2 className="text-gray-400 font-thin py-[0.8em]">Trending Now</h2>
      <NavLink to={'/collections/canvas'} className={'font-thin'}>Canvas</NavLink>
      <NavLink to={'/collections/the-flick'} className={'font-thin'}>The Flick</NavLink>
      <NavLink to={'/collections/plumptious'} className={'font-thin'}>Plumptious</NavLink>
    </div>
  )
}

export default SearchTab
