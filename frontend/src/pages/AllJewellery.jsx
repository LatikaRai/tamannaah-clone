import { useState } from 'react'
import data from '../../../backend/db.json'
import ProductCard from '../components/ui/ProductCard'

const AllJewellery = () => {
    const allProducts = [...data.products]

    const [viewImages, setViewImages] = useState('four')
  return (
    <div className='w-full px-[2.5em]'>
        <div className='w-full h-[30vh]'></div>
        <div className='w-full flex items-center justify-between py-[0.5em] text-[0.9rem]'>
            <div className='flex items-center gap-2'>
                <h3>View:</h3>
                <h3 
                onClick={()=>{
                    setViewImages('four')
                }}
                className={`${viewImages === 'four' ? 'text-black underline underline-offset-2' : 'text-gray-400'} cursor-pointer`}
                >Four</h3>
                <h3
                onClick={()=>{
                    setViewImages('two')
                }}
                className={`${viewImages === 'two' ? 'text-black underline underline-offset-2' : 'text-gray-400'} cursor-pointer`}
                >Two</h3>
            </div>
            <div>Filter & Sort</div>
        </div>
        <div className='w-full h-auto flex flex-wrap items-center gap-[2.2em]'>
      {allProducts.map(product => {
        return <ProductCard key={product.slug} product={product} viewImages={viewImages}/>
      })}
    </div>
    </div>
  )
}

export default AllJewellery
