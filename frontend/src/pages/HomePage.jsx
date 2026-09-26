import HomeVideo from "../components/ui/HomeVideo"

const HomePage = () => {
  return (
    <div className="w-full">
      <HomeVideo/>
      <div className="w-full h-[50vh] flex items-center justify-center font-['ArboriaBook']">
        <div className="">
          <h1 className="text-[0.83rem] text-center font-semibold pb-[0.9rem]">SIGN UP FOR THE NEWSLETTER</h1>
          <p className="text-[0.84rem] text-center">Sign up to discover new collections, <br />curated edits, events, and more</p>
          <div className="w-[30vw] pb-[0.6rem] mt-[1.6rem] border-b border-gray-400">
            <input className="text-[0.8rem] w-full outline-none" type="email" placeholder="Enter Mail Address" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
