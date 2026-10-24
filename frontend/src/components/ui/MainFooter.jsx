import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainFooter = ({setActiveTab}) => {
    const navigate = useNavigate()

      const [openCustCare, setOpenCustCare] = useState(false);
    
      const [openOurBrand, setOpenOurBrand] = useState(false);
    
      const [openComm, setOpenComm] = useState(false);
  return (
    <>
        {/* for mobile */}
      <div className="font-['ArboriaBook']">
        <div
        className='lg:hidden w-full bg-white text-gray-800 p-[0.9rem] flex flex-col justify-between'
      >
        <div>
          <div className="">
            {/* customer care */}
            <div className="py-[1.2rem] border-b border-gray-200">
              <div
                onClick={() => setOpenCustCare(!openCustCare)}
                className="flex items-center justify-between text-[0.9rem]"
              >
                <h2 className="uppercase font-semibold">Customer care</h2>
                {openCustCare ? (
                  <i className="ri-subtract-line"></i>
                ) : (
                  <i className="ri-add-line"></i>
                )}
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: openCustCare ? "auto" : 0,
                  opacity: openCustCare ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className=""
              >
                <div className="py-[1.4rem] flex flex-col gap-[0.7rem] text-[0.85rem]">
                   <h2
                        onClick={() => {
                          setActiveTab("contact");
                        }}
                      >
                        Contact Us
                      </h2>
                      <h2
                        onClick={() => {
                          navigate("/policies/shipping-policy");
                          window.scrollTo(0,0)
                        }}
                      >
                        Shipping Policy
                      </h2>
                      <h2 onClick={() => {
                          navigate("/policies/terms-of-service");
                          window.scrollTo(0,0)
                        }}>Terms of Service</h2>
                      <h2 onClick={() => {
                          navigate("/policies/refund-policy");
                          window.scrollTo(0,0)
                        }}>
                        Return and Cancellation Policy
                      </h2>
                </div>
              </motion.div>
            </div>

            {/* our brand */}
            <div className="py-[1.2rem] border-b border-gray-200">
              <div
                onClick={() => setOpenOurBrand(!openOurBrand)}
                className="flex items-center justify-between text-[0.9rem]"
              >
                <h2 className="uppercase font-semibold">Our brand</h2>
                {openOurBrand ? (
                  <i className="ri-subtract-line"></i>
                ) : (
                  <i className="ri-add-line"></i>
                )}
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: openOurBrand ? "auto" : 0,
                  opacity: openOurBrand ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="py-[1.4rem] flex flex-col gap-[0.7rem] text-[0.85rem]">
                  <h2 onClick={()=>{
                navigate('/about-us')
                window.scrollTo(0,0)
                }}>About Us</h2>
                <h2 onClick={()=>{
                navigate('/about-us/our-store')
                window.scrollTo(0,0)
            }}>Our Stores</h2>
                <h2  onClick={()=>{
                navigate('/blogs/news/akshaya-tritiya')
                window.scrollTo(0,0)
            }}>Resources</h2>
                </div>
              </motion.div>
            </div>

            {/* community */}
            <div className="py-[1.2rem] border-b border-gray-200">
              <div
                onClick={() => setOpenComm(!openComm)}
                className="flex items-center justify-between text-[0.9rem]"
              >
                <h2 className="uppercase font-semibold">community</h2>
                {openComm ? (
                  <i className="ri-subtract-line"></i>
                ) : (
                  <i className="ri-add-line"></i>
                )}
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: openComm ? "auto" : 0,
                  opacity: openComm ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="py-[1.4rem] flex flex-col gap-[0.7rem] text-[0.85rem]">
                  <a href="https://www.instagram.com/tamannaahfinejewellery/">Instagram</a>
            <a href="https://www.facebook.com/people/Tamannaah-Fine-Jewelry/61583946472529/">Facebook</a>
            <a href="https://www.linkedin.com/company/tamannaah/?viewAsMember=true">Linkedin</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[3.4rem] flex items-center justify-center">
        <div className="flex flex-col items-center gap-[1.1rem]">
            <h1 className="uppercase text-[0.8rem] font-semibold">Shipping to India</h1>
            <p className="text-[0.8rem]">For any queries <span onClick={()=>setActiveTab('contact')} className="font-semibold underline underline-offset-2">Contact Us</span></p>
        </div>
      </div>
      <div className="w-full p-[0.9rem] text-[0.75rem] border-t border-gray-200 flex flex-col items-start gap-[1.7rem]">
          <h2>
            <i className="ri-copyright-line"></i> Tamannaah 2026
          </h2>
          <div className="w-full flex items-center gap-[2.6rem]">
            <h2 onClick={()=>{
                    navigate('/policies/terms-of-service')
                    window.scrollTo(0,0)
                }}>Terms of Service</h2>
            <h2 onClick={()=>{
                    navigate('/policies/privacy-policy')
                    window.scrollTo(0,0)
                }} >Privacy Policy</h2>
          </div>
        </div>
      </div>

    {/* for desktop */}
    <div className="h-[40vh] w-full hidden lg:flex flex-col border-t border-gray-200 py-[0.8rem] justify-between font-['ArboriaBook']">
        <div className="w-full px-[3.4rem] py-[1.8rem] flex items-start justify-between">
            <div className="text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">CUSTOMER CARE</h1>
            <h2 onClick={()=> {
                setActiveTab('contact')
            }} className="cursor-pointer">Contact Us</h2>
            <h2 onClick={()=>{
                navigate('/policies/shipping-policy')
                window.scrollTo(0,0)
            }} className="cursor-pointer">Shipping Policy</h2>
            <h2 onClick={()=>{
                navigate('/policies/terms-of-service')
                window.scrollTo(0,0)
            }
                } className="cursor-pointer">Terms of Service</h2>
            <h2 onClick={()=>{
                navigate('/policies/refund-policy')
                window.scrollTo(0,0)
                }} className="cursor-pointer">Return and Cancellation Policy</h2>
        </div>
        <div className="text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">OUR BRAND</h1>
            <h2 onClick={()=>{
                navigate('/about-us')
                window.scrollTo(0,0)
                }} className="cursor-pointer">About Us</h2>
            <h2 onClick={()=>{
                navigate('/about-us/our-store')
                window.scrollTo(0,0)
            }} className="cursor-pointer">Our Stores</h2>
            <h2 onClick={()=>{
                navigate('/blogs/news/akshaya-tritiya')
                window.scrollTo(0,0)
            }} className="cursor-pointer">Resources</h2>
        </div>
        <div className="text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">COMMUNITY</h1>
            <a className="cursor-pointer" href="https://www.instagram.com/tamannaahfinejewellery/">Instagram</a>
            <a className="cursor-pointer" href="https://www.facebook.com/people/Tamannaah-Fine-Jewelry/61583946472529/">Facebook</a>
            <a className="cursor-pointer" href="https://www.linkedin.com/company/tamannaah/?viewAsMember=true">Linkedin</a>
        </div> 
        <div className="w-[30%] text-[0.83rem] flex flex-col gap-[1.7rem]">
            <div className="flex flex-col gap-[0.6rem]">
                <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">SIGN UP FOR THE NEWSLETTER</h1>
                <div className="w-full flex items-center justify-between border-b border-gray-400">
                    <input type="email" placeholder="Enter Mail Address" className="outline-none py-[0.4rem]" />
                    <span className="text-gray-400">Sign Up</span>
                </div>
            </div>
            <div className="flex flex-col gap-[0.7rem]">
                <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">SHIPPING TO INDIA</h1>
            <h2>For any queries <span onClick={()=>{setActiveTab('contact')}} className="font-semibold underline cursor-pointer">Contact Us</span></h2>
            </div>
        </div> 
        </div>
        <div className="w-full px-[3.4rem] py-[1.8rem] text-[0.8rem] border-t border-gray-200 flex items-center justify-between">
            <h2><i className="ri-copyright-line"></i> Tamannaah 2026</h2>
            <div className="w-[30%] flex items-center gap-[2.6rem]">
                <h2 onClick={()=>{
                    navigate('/policies/terms-of-service')
                    window.scrollTo(0,0)
                }} className="cursor-pointer">Terms of Service</h2>
                <h2 onClick={()=>{
                    navigate('/policies/privacy-policy')
                    window.scrollTo(0,0)
                }} className="cursor-pointer">Privacy Policy</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainFooter
