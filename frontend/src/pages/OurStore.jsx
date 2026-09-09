import ourStore1Img from '../assets/images/ourstore1.jpg'
import ourStore2Img from '../assets/images/ourstore2.jpg'

const OurStore = () => {
  return (
    <div className='w-full font-["ArboriaBook"]'>
      <div className='pt-[15vh]'>
        <h1 className='text-center py-[2.6rem] pt-[3.3rem] text-[1.05rem] font-semibold uppercase'>Our Flagship Store: The Mumbai Apartment</h1>
        <img src={ourStore1Img} className='w-full h-screen object-center object-cover' alt="" />
      </div>
      <div className='w-full h-screen flex'>
        <div className='w-1/2 px-[3.7rem] py-[2.7rem] flex flex-col items-start justify-between text-[16.6px]'>
            <h1 className='font-semibold uppercase text-[1rem]'>Mumbai Flagship - Juhu Tara Road</h1>
            <div className='text-justify'>
                <p className='pb-[1.6rem]'>Envisioned by Tamannaah, the Mumbai flagship boutique, coined 'The Apartment', was created to feel more like stepping into a friend's home than visiting a traditional jewellery store. Warm, tactile, and filled with light, it invites discovery rather than formality. The setting is intimate and personal, showing how fine jewellery can feel alive, lived-in, and emotionally meaningful — something to experience every day, not saved for occasions. It is welcoming and designed to truly feel like home for visitors.</p>
                <p>Visit The Apartment to experience her world up close. The boutique is conceived as a place for conversation, not ceremony, where guests are encouraged to slow down, try pieces, and find their own rhythm. Often you’ll find Tamannaah on the floor, listening, sharing styling ideas, and helping guests build thoughtful jewellery wardrobes that grow with them. It is an invitation to explore slowly, ask questions, and feel at ease.</p>
            </div>
            <div className='flex w-full text-[0.9rem]'>
                <div className='w-1/2'>
                    <h1 className='font-semibold uppercase text-[0.9rem] pb-[1.2rem]'>Opening Hours</h1>
                    <span>Monday - 12:00 pm to 8:30 pm <br />Tuesday - 12:00 pm to 8:30 pm <br />Wednesday - 12:00 pm to 8:30 pm <br />Thursday - 12:00 pm to 8:30 pm <br />Friday - 12:00 pm to 8:30 pm <br />Saturday - 12:00 pm to 8:30 pm <br />Sunday - 12:00 pm to 8:30 pm</span>
                </div>
                <div className='w-1/2'>
                    <h1 className='font-semibold uppercase text-[0.9rem] pb-[1.2rem]'>Contact us</h1>
                    <h2 className='pb-[0.8rem]'>Telephone <br />+91 89769 66012, +91 89769 66013</h2>
                    <h2 className='pb-[0.8rem]'>Email <br />info@tamannaah.com</h2>
                    <h2>Address <br />Tamannaah, Western Wind Building, Juhu Tara Rd, Opposite Maneckji Cooper School, Chandrabai Nagar, Juhu, Mumbai, Maharashtra 400049</h2>
                </div>
            </div>
        </div>
            <img className='w-1/2 h-full object-cover object-center' src={ourStore2Img} alt="" />
      </div>
    </div>
  )
}

export default OurStore
