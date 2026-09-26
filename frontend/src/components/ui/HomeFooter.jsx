import { useNavigate } from "react-router-dom"

const HomeFooter = ({setActiveTab}) => {
    const navigate = useNavigate()
  return (
    <div className="h-[40vh] w-full flex flex-col justify-between font-['ArboriaBook']">
        <div className="w-full px-[3.4rem] py-[1.8rem] flex items-start justify-between">
            <div className="text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">CUSTOMER CARE</h1>
            <h2 onClick={()=> {
                setActiveTab('contact')
            }} className="cursor-pointer">Contact Us</h2>
            <h2 onClick={()=>{
                navigate('/policies/shipping-policy')
            }} className="cursor-pointer">Shipping Policy</h2>
            <h2 className="cursor-pointer">Terms of Service</h2>
            <h2 className="cursor-pointer">Return and Cancellation Policy</h2>
        </div>
        <div className="text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">OUR BRAND</h1>
            <h2 className="cursor-pointer">About Us</h2>
            <h2 className="cursor-pointer">Our Stores</h2>
            <h2 className="cursor-pointer">Resources</h2>
        </div>
        <div className="text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">COMMUNITY</h1>
            <a className="cursor-pointer" href="https://www.instagram.com/tamannaahfinejewellery/">Instagram</a>
            <a className="cursor-pointer" href="https://www.facebook.com/people/Tamannaah-Fine-Jewelry/61583946472529/">Facebook</a>
            <a className="cursor-pointer" href="https://www.linkedin.com/company/tamannaah/?viewAsMember=true">Linkedin</a>
        </div> 
        <div className="w-[30%] text-[0.83rem] flex flex-col gap-[0.7rem]">
            <h1 className="font-semibold text-[0.8rem] pb-[0.6rem] ">SHIPPING TO INDIA</h1>
            <h2>For any queries <span className="font-semibold underline cursor-pointer">Contact Us</span></h2>
        </div> 
        </div>
        <div className="w-full px-[3.4rem] py-[1.8rem] text-[0.8rem] border-t border-gray-200 flex items-center justify-between">
            <h2><i className="ri-copyright-line"></i> Tamannaah 2026</h2>
            <div className="w-[30%] flex items-center gap-[2.6rem]">
                <h2 className="cursor-pointer">Terms of Service</h2>
                <h2 className="cursor-pointer">Privacy Policy</h2>
            </div>
        </div>
    </div>
  )
}

export default HomeFooter
