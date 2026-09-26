import { useNavigate } from 'react-router-dom'
import blog1Img from '../assets/images/blog1.jpg'
import blog2Img from '../assets/images/blog2.jpg'
import blog3Img from '../assets/images/blog3.jpg'
import blog4Img from '../assets/images/blog4.jpg'
import blog5Img from '../assets/images/blog5.jpg'
import blog6Img from '../assets/images/blog6.jpg'
import blog7Img from '../assets/images/blog7.jpg'
import blog8Img from '../assets/images/blog8.jpg'
import blog9Img from '../assets/images/blog9.jpg'

const Resources = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full font-['ArboriaBook']">
      <img className='w-full h-screen object-cover object-center' src={blog1Img} alt="" />
      <div className='w-full p-[2.3rem] flex items-start justify-between'>
        <h1 className='uppercase font-semibold text-[0.9rem]'>Akshaya Tritiya</h1>
        <div className='w-[40%] flex flex-col gap-[1.1rem] text-justify text-[1.03rem] leading-6.5'>
            <p>This Akshaya Tritiya, Buy What You'll Actually Wear Invest in everyday fine jewellery that earns its place — every single day</p>
            <p>Akshaya Tritiya is the one day a year when buying gold feels like an act of wisdom. But the real wisdom isn't just in the buying — it's in choosing pieces that earn their place long after the occasion has passed.</p>
            <p>This year, skip the statement piece that lives in a box. We're making a case for everyday fine jewellery — the kind you put on in the morning and forget to take off because it just becomes part of you. Pieces you can stack, layer, and add to over time. Pieces that speak to your personal style on a Tuesday, not just a wedding weekend.</p>
        </div>
      </div>
      <div className='w-full p-[2.3rem] flex items-start justify-between'>
        <h1 className='uppercase font-semibold text-[0.9rem]'>Start with your neck</h1>
        <div className='w-[40%] flex flex-col gap-[1.1rem] text-justify text-[1.03rem] leading-6.5'>
            <p>A fine chain is the piece you'll reach for before you've had your coffee. Our everyday gold necklaces for women are designed to work whether you're in a kurta or a blazer. They're delicate enough to layer, substantial enough to stand alone. The Split Bezel diamond pendant wears alone on a slow day but can easily be layered on.</p>
        </div>
      </div>
      <div className='w-full h-screen flex'>
        <img src={blog2Img} className='w-1/2 h-full object-center object-cover' alt="" />
        <img src={blog3Img} className='w-1/2 h-full object-center object-cover' alt="" />
      </div>
      <div className='w-full py-[3.3rem] flex items-center justify-center'>
        <div className='w-1/3'>
            <h1 className='text-[0.9rem] pb-[1.8rem] uppercase font-semibold'>Build your stack</h1>
            <p className='text-[1.03rem] text-justify leading-6.5'>Daily wear diamond jewellery should be exactly that — daily. Not reserved, not precious in the wrong way. Our stacking rings are set low, designed to survive a working day and the chaos of actually living. Start with our staple Shadow Plush pinky ring. Add another as the mood shifts. Modern gold jewellery for women shouldn't require a stylist — just you, and a little intention.

</p>
        </div>
      </div>
      <div className='w-full h-screen flex'>
        <img src={blog4Img} className='w-1/2 h-full object-center object-cover' alt="" />
        <img src={blog5Img} className='w-1/2 h-full object-center object-cover' alt="" />
      </div>
      <div className='w-full py-[3.3rem] flex items-center justify-center'>
        <div className='w-1/3'>
            <h1 className='text-[0.9rem] pb-[1.8rem] uppercase font-semibold'>The ear stack</h1>
            <p className='text-[1.03rem] text-justify leading-6.5'>An ear stack is the most personal thing you can build, and it takes time — that's the point. A single stud today, a huggie hoop added later, an ear cuff on a whim. Suddenly you have something entirely yours. Our Curve Huggies are the anchor; everything else builds around it.

</p>
        </div>
      </div>
      <div className='w-full h-screen flex'>
        <img src={blog6Img} className='w-1/2 h-full object-center object-cover' alt="" />
        <img src={blog7Img} className='w-1/2 h-full object-center object-cover' alt="" />
      </div>
      <div className='w-full py-[3.3rem] flex items-center justify-center'>
        <div className='w-1/3'>
            <h1 className='text-[0.9rem] pb-[1.8rem] uppercase font-semibold'>The wrist</h1>
            <p className='text-[1.03rem] text-justify leading-6.5'>This is where luxury everyday jewellery earns its name. The Orb bracelet sits close to the skin, are the perfect stackable pieces that come in different widths. Stack it with your watch or wear it alone. It moves with you — that's the standard every piece here is held to.</p>
        </div>
      </div>
      <div className='w-full h-screen flex'>
        <img src={blog8Img} className='w-1/2 h-full object-center object-cover' alt="" />
        <img src={blog9Img} className='w-1/2 h-full object-center object-cover' alt="" />
      </div>
      <div className='w-full py-[3.3rem] flex items-center justify-center'>
        <div className='w-1/3'>
            <h1 className='text-[0.9rem] pb-[1.8rem] uppercase font-semibold'>Invest in the repeat wear</h1>
            <p className='text-[1.03rem] text-justify leading-6.5'>Everyday fine jewellery India has long meant something heavy and occasion-bound. It means something else now: wearable, layerable, personal. Gold bought on Akshaya Tritiya is said to never diminish — and neither should the joy of wearing it. Choose pieces you'll reach for again and again, build on over years, and make entirely your own.</p>
            <h2 onClick={()=>{
                navigate('/collections/new')
                window.scrollTo(0,0)
            }} className='pt-[1.2rem] underline cursor-pointer'>Shop New In</h2>
        </div>
      </div>
    </div>
  )
}

export default Resources
