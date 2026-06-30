import earring from '../assets/images/earring1.webp'
import bracelet from '../assets/images/bracelet.webp'
import necklace from '../assets/images/necklace1.webp'
import ring from '../assets/images/ring.webp'
import { Link } from 'react-router-dom'

const Collections = () => {
  return (
    <div className="w-full h-auto flex flex-col ">
      <div className="w-full h-[48vh] flex items-center justify-between px-[2.2rem] ">
        <h1 className="text-[1.1em] uppercase font-['SaaSeries']">Curated Collections</h1>
        <p className="w-[33%] text-[1em] leading-7 text-justify">Each collection is a reflection of meticulous craftsmanship and refined design, thoughtfully created to celebrate individuality, elegance, and timeless beauty. From delicate everyday pieces to striking statement creations, every design embodies exceptional artistry and contemporary sophistication.</p>
      </div>
      <div className='relative w-full h-[80vh] px-[2.2rem] flex items-center justify-center gap-3'>
        <div className='h-full w-[25%]'>
          <img className='h-full w-full object-cover' src={earring} alt="Image Not Found" />
          <Link to={'/collections/earrings'} className='absolute bottom-0 py-[0.6rem] px-[1.2rem] text-[1.1em] text-white text-shadow-md/30'>Statement Earrings <span><i className="ri-arrow-right-up-long-line"></i></span></Link>
        </div>
        <div className='h-full w-[25%] object-cover'>
          <img className='h-full w-full object-cover' src={ring} alt="Image Not Found" />
          <Link to={'/collections/rings'} className='absolute bottom-0 py-[0.6rem] px-[1.2rem] text-[1.1em] text-white text-shadow-md/30'>Timeless Rings <span><i className="ri-arrow-right-up-long-line"></i></span></Link>
        </div>
        <div className='h-full w-[25%] object-cover'>
          <img className='h-full w-full object-cover' src={bracelet} alt="Image Not Found" />
          <Link to={'/collections/bracelets'} className='absolute bottom-0 py-[0.6rem] px-[1.2rem] text-[1.1em] text-white text-shadow-md/30'>Signature Bracelets <span><i className="ri-arrow-right-up-long-line"></i></span></Link>
        </div>
        <div className='h-full w-[25%] object-cover'>
          <img className='h-full w-full object-cover' src={necklace} alt="Image Not Found" />
          <Link to={'/collections/necklaces'} className='absolute bottom-0 py-[0.6rem] px-[1.2rem] text-[1.1em] text-white text-shadow-md/30'>Iconic Necklaces <span><i className="ri-arrow-right-up-long-line"></i></span></Link>
        </div>
      </div>
    </div>
  )
}

export default Collections
