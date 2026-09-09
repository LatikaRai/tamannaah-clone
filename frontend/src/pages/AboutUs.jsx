import aboutUsImg from "../assets/images/aboutus.jpg";
import aboutUs2Img from "../assets/images/aboutus2.jpg";
import aboutUs3Img from "../assets/images/aboutus3.jpg";
import aboutUs4Img from "../assets/images/aboutus4.jpg";
import aboutUs5Img from "../assets/images/aboutus5.jpg";
import aboutUs6Img from "../assets/images/aboutus6.png";
import aboutUs7Img from "../assets/images/aboutus7.jpg";
import aboutUs8Img from "../assets/images/aboutus8.jpg";
import aboutUs9Img from "../assets/images/aboutus9.jpg";
import aboutUs10Img from "../assets/images/aboutus10.jpg";
import aboutUsVideo from "../assets/videos/aboutus.mp4"
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full font-['ArboriaBook']">
      <div
        style={{ backgroundImage: `url(${aboutUsImg})` }}
        className="w-full h-screen bg-cover bg-center flex items-end justify-center "
      >
        <h2 className="uppercase text-white py-[1.3rem] text-shadow-sm text-center font-semibold text-[1.05rem] tracking-wide">
          About us
        </h2>
      </div>
      <div className="w-full h-screen flex">
        <img src={aboutUs2Img} className="w-1/2 h-full object-center object-cover" alt="" />
        <div className="w-1/2 h-full text-justify flex items-center justify-center px-[7.6rem] ">
        <div className="flex flex-col gap-[2.1rem]">
          <h1 className="font-semibold pb-3">TAMANNAAH FINE JEWELLERY</h1>
        <h2 className="text-[16.6px]">Beyond the Occasion</h2>
        <p className="text-[16.6px]">Tamannaah is fine jewellery designed for the duality of real life — where casual meets glamorous, form meets fluidity, and beauty never comes at the expense of ease. Our pieces are modern better basics: elevated essentials that let you navigate styling effortlessly, whether you're dressing up, dressing down, or simply dressing as yourself.</p>
        <p className="text-[16.6px]">We make jewellery for movement — pieces that feel as good as they look, created for the rhythm of everyday living. From early meetings to late dinners, from quiet rituals to celebratory moments, our jewellery is built to slip seamlessly into whatever the day brings.</p>
        </div>
        </div>
      </div>
        <video className="pt-[4vh]" autoPlay muted loop src={aboutUsVideo}></video>
        <div className="px-[2.6rem] py-[4.4rem] text-justify flex items-start justify-between">
          <h1 className="font-semibold">REDEFINING BOUNDARIES</h1>
          <p className="w-[36%] text-[16.6px]">At the heart of our philosophy is a belief that fine jewellery should be functional, expressive, and instinctively wearable. We believe that true luxury should feel comfortable — that glamour is at its best when it moves with you, not when it asks you to adjust to it. Our designs are not tied to a place, season, or cultural code; they are shaped instead by the universal dualities that define us — softness and structure, grounding and expansion, the intimate and the iconic. This neutrality makes our pieces endlessly versatile and timeless.</p>
        </div>
        <div className="w-full h-screen flex">
          <img className="w-1/2 h-full object-center object-cover" src={aboutUs3Img} alt="" />
          <img className="w-1/2 h-full object-center object-cover" src={aboutUs4Img} alt="" />
        </div>
        <div className="w-full h-screen flex">
          <div className="w-1/2 h-full px-[7.6rem] flex items-center justify-center">
            <div className="text-[16.6px] text-justify flex flex-col gap-[1.6rem]">
              <p>From solid gold hoops to modern mangalsutras, piercing pieces to statement chains, Tamannaah redefines what fine jewellery looks like — and how it's worn.</p>
              <p>Because we don't just believe in big milestones, we believe in your moments.</p>
              <p>The ones that feel like you.</p>
              <p>Tamannaah is fine jewellery, beyond the occasion.</p>
            </div>
          </div>
          <img className="w-1/2 h-full object-center object-cover" src={aboutUs5Img} alt="" />
        </div>
        <div className="w-full h-screen flex">
          <img className="w-1/2 h-full" src={aboutUs6Img} alt="" />
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="px-[2.7rem] flex flex-col items-center text-[16.6px]">
              <img className="w-[45%] pb-[1.4rem] object-cover object-center" src={aboutUs7Img} alt="" />
              <h1 className="font-semibold uppercase text-[1rem]">Plumptious - Bold, bulbous, and joyfully voluminous.</h1>
              <p className="text-center leading-5"><span className="italic">Plumptious</span> is our most sculptural collection — featuring inflated forms, generous curves, and rounded silhouettes that exude softness with strength. These are pieces designed to be seen, felt, and remembered.</p>
            </div>
          </div>
        </div>
        <img className="w-full h-screen object-cover object-center" src={aboutUs8Img} alt="" />
        <div className="w-full">
          <h1 className="uppercase font-semibold text-center py-[2.6rem]">Discover More</h1>
          <div className="w-full h-screen flex">
            <div onClick={()=>{
              navigate('/collections/new')
              window.scrollTo(0,0)
              }} style={{backgroundImage: `url(${aboutUs9Img})`}} className="bg-cover bg-center w-1/2 h-full uppercase text-white flex flex-col items-center justify-end py-[1.3rem]">
            <h1 className="font-semibold tracking-wider pb-[0.3rem]">NEW COLLECTION</h1>
            <span className="text-[1.1rem] underline cursor-pointer">Explore NEW COLLECTION</span>
            </div>
            <div onClick={()=>{
              navigate('/collections/all-jewellery')
              window.scrollTo(0,0)
              }} style={{backgroundImage: `url(${aboutUs10Img})`}} className="bg-cover bg-center w-1/2 h-full uppercase text-white flex flex-col items-center justify-end py-[1.3rem]">
            <h1 className="font-semibold tracking-wider pb-[0.3rem]">All Jewellery</h1>
            <span className="text-[1.1rem] underline cursor-pointer">Explore All Jewellery</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutUs;
