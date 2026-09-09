import meetTamannaahImg from "../assets/images/meetTamannaah.png";
import meetTamannaah2Img from "../assets/images/meetTam2.jpg";
import meetTamannaah3Img from "../assets/images/meetTam3.jpg";
import meetTamannaah4Img from "../assets/images/meetTam4.jpg";
import meetTamannaah5Img from "../assets/images/meetTam5.jpg";
import meetTamannaah6Img from "../assets/images/meetTam6.jpg";
import meetTamannaah7Img from "../assets/images/meetTam7.jpg";
import meetTamannaahEarringImg from "../assets/images/meetTamEarring.jpg";
import meetTamannaahFavsImg from "../assets/images/meetTamFavs.jpg";

const MeetTamannah = () => {
  return (
    <div className="w-full font-['ArboriaBook']">
      <div
        style={{ backgroundImage: `url(${meetTamannaahImg})` }}
        className="w-full h-screen bg-cover bg-center flex items-end justify-center "
      >
        <h2 className="uppercase text-white py-[1.3rem] text-shadow-sm text-center font-semibold text-[1.05rem] tracking-wide">
          MEET TAMANNAAH
        </h2>
      </div>
      <div className="w-full">
         <div className='w-full h-[48vh] flex items-center justify-between px-[2.6rem]'>
          <h1 className="text-[1.05em] tracking-tighter uppercase font-['SaaSeries']">MEET TAMANNAAH</h1>
          <p className="w-[36%] text-[16.6px]  leading-6 text-justify">
            Tamannaah Bhatia has spent nearly two decades in the spotlight, building one of the most dynamic and influential careers in Indian cinema. With over seventy films across multiple languages, she has become known not only for her versatile performances but also for her distinctive personal style — a blend of glamour, ease, and effortless confidence. Her red-carpet appearances, global fashion moments, and instinctive approach to dressing have made her a cultural reference point for modern Indian style.
          </p>
        </div>
        <div className="w-full h-screen flex items-center">
            <div className="w-1/2 h-full flex items-center justify-center">
                <img src={meetTamannaah2Img} className="w-[40%] h-fit object-center object-cover" />
            </div>
            <div style={{ backgroundImage: `url(${meetTamannaah3Img})` }}
        className="w-1/2 h-screen bg-cover bg-center"></div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-[6.7rem] ">
        <p className="w-[30%] text-[16.6px]  leading-6 text-justify">But long before she became a household name, Tamannaah grew up around jewellery. Her father's jewellery business meant the language of gold, craft, and design was always present — something she absorbed quietly, almost subconsciously, as part of her world. What stayed with her was not just the beauty of jewellery, but the meaning behind it: the rituals, the sentiment, the stories it carried.</p>
      </div>
      <div className="w-full h-screen bg-[#F7F7F7] flex">
        <img src={meetTamannaah4Img} className="w-1/2 h-full object-cover object-center" />
        <div className="w-1/2 flex items-center justify-center">
            <div className="w-[65%] text-justify text-[16.6px] ">
                <p className="leading-6 pb-[2.4rem]">As her acting career took her across continents — from film sets to international promotions, festivals, award shows, and performances — she found herself searching for jewellery that could keep up with her life. Pieces that could move with her through 14-hour days, cross-cultural wardrobes, quick changes, airport runs, and major moments on and off screen. Jewellery that was refined enough for couture, relaxed enough for denim, bold enough for the spotlight, and comfortable enough for everything in between.</p>
                <p className="leading-6 pb-[2.4rem]">She realised there was a gap: fine jewellery that was designed not just to be admired, but to be lived in.</p>
                <p className="leading-6">This seed of an idea — that luxury, style, and glamour should never come at the cost of comfort — became the foundation of Tamannaah Fine Jewellery. For her, ease is not the opposite of elegance; it is the evolution of it. Her own styling look, which audiences often describe as casual glamour, became the creative compass for the brand: sculptural silhouettes that feel soft against the skin, bold details that remain effortless to wear, and elevated essentials that transition seamlessly across moods, outfits, and time zones.</p>
            </div>
        </div>
      </div>
      <div className="w-full h-[80vh] flex">
        <img src={meetTamannaah5Img} className="w-1/3 h-full object-center object-cover" />
        <img src={meetTamannaah6Img} className="w-1/3 h-full object-center object-cover" />
        <img src={meetTamannaah7Img} className="w-1/3 h-full object-center object-cover" />
      </div>
      <div className="w-full flex items-center justify-center py-[6.7rem] ">
        <div className="w-[30%] text-[16.6px]  text-justify">
            <p className="leading-6 pb-[2.4rem]">Tamannaah envisioned a jewellery brand that did not dictate how it should be worn, but instead adapted to the rhythm of the wearer. A brand rooted in universal dualities — form and fluidity, strength and softness, statement and subtlety — reflecting her own experiences moving between cinema sets, global stages, and everyday life.</p>
            <p className="leading-6">Tamannaah Fine Jewellery is the culmination of her journey so far: a modern expression of her heritage, her lifestyle, and her belief that the most powerful kind of glamour is the kind you can live in.</p>
        </div>
      </div>
      <div className="w-full h-screen flex">
        <div style={{backgroundImage: `url(${meetTamannaahEarringImg})`}} className="w-1/2 h-full bg-center bg-cover uppercase text-white flex flex-col items-center justify-end py-[1.3rem]">
            <h1 className="font-semibold text-[0.97rem] tracking-wider pb-[0.3rem]">Earring</h1>
            <span className="text-[1.1rem] underline cursor-pointer">Explore earrings</span>
        </div>
        <div style={{backgroundImage: `url(${meetTamannaahFavsImg})`}} className="w-1/2 h-full bg-center bg-cover uppercase text-white flex flex-col items-center justify-end py-[1.3rem]">
        <h1 className="font-semibold text-[0.97rem] tracking-wider pb-[0.3rem]">Tamannaah's Favourites</h1>
            <span className="text-[1.1rem] underline cursor-pointer">Explore favourites</span></div>
      </div>
    </div>
  );
};

export default MeetTamannah;
