import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactTab = ({activeTab,setActiveTab}) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit
  } = useForm({ mode: "onBlur" });
  // when the textarea is emty then we pass an empty string
  const msg = watch("msg") ?? "";

  const [btnClicked, setBtnClicked] = useState(false);

  // when submitting form
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {btnClicked ? (
        <div className="w-full h-screen pr-[1.3rem] text-[0.9rem] overflow-y-auto">
          <div className="w-full flex items-center justify-between pb-[1.2rem] px-[1.4rem] border-b border-gray-300">
            <i onClick={()=> setBtnClicked(false)} className="ri-arrow-left-s-line text-[1rem]"></i>
            <h1>Make an Inquiry</h1>
            <i onClick={()=> setActiveTab('')} className="ri-close-large-line"></i>
          </div>
          <>
          {isSubmitted ? <p className="px-[1.4rem] py-[2rem] ">
              Thanks for contacting us. We'll get back to you as soon as possible.
            </p> : <>
            <p className="px-[1.4rem] py-[2rem] ">
              Please send an enquiry and one of our experts will get back to you
              with appropriate reply as soon as possible.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="p-[1.4rem] mb-[1.6rem] flex flex-col gap-[2.9rem]">
              <div className="relative py-[0.4rem]">
                <input
                  {...register("fullName", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Za-z ]+$/,
                      message: "Please enter a valid name",
                    },
                  })}
                  type="text"
                  placeholder=" "
                  className={`peer border-b w-full pb-[0.5rem] outline-none ${errors.fullName ? "border-red-500" : "border-black"}`}
                />
                <label className="absolute transition-all top-1/2 -z-1 left-0 -translate-y-1/2 pb-[1.6rem] text-gray-500 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:pb-0 peer-focus:text-[0.8rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:pb-0 peer-[:not(:placeholder-shown)]:text-[0.8rem]">
                  Full Name
                </label>
                {errors.fullName && (
                  <p className="text-red-600 text-[0.8rem] font-medium">
                    {errors.fullName?.message}
                  </p>
                )}
              </div>
              <div className="relative py-[0.4rem]">
                <input
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  placeholder=" "
                  type="email"
                  className={`peer border-b w-full pb-[0.5rem] outline-none ${errors.email ? "border-red-500" : "border-black"}`}
                />
                <label className="absolute transition-all top-1/2 -z-1 left-0 -translate-y-1/2 pb-[1.6rem] text-gray-500 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:pb-0 peer-focus:text-[0.8rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:pb-0 peer-[:not(:placeholder-shown)]:text-[0.8rem]">
                  Email Address
                </label>
                {errors.email && (
                  <p className="text-red-600 text-[0.8rem] font-medium">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="relative py-[0.4rem]">
                <input
                  {...register("phone", {
                    required: "This field is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  placeholder=" "
                  type="tel"
                  className={`peer border-b w-full pb-[0.5rem] outline-none ${errors.phone ? "border-red-500" : "border-black"}`}
                />
                <label className="absolute transition-all top-1/2 -z-1 left-0 -translate-y-1/2 pb-[1.6rem] text-gray-500 peer-focus:top-0 peer-focus:-translate-y-full peer-focus:pb-0 peer-focus:text-[0.8rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-full peer-[:not(:placeholder-shown)]:pb-0 peer-[:not(:placeholder-shown)]:text-[0.8rem]">
                  Phone Number
                </label>
                {errors.phone && (
                  <p className="text-red-600 text-[0.8rem] font-medium">
                    {errors.phone?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="msg" className="pb-[0.5rem] text-gray-500">
                  Your Message
                </label>
                <textarea
                  {...register("msg", {
                    required: "This field is required",
                  })}
                  maxLength={300}
                  className={`${errors.msg ? "border-red-500" : "border-black"} border outline-none py-[0.3rem] px-[0.5rem] h-[15vh]`}
                ></textarea>
                <div className="flex items-center justify-between">
                  <div>
                    {errors.msg && (
                      <p className="text-red-600 text-[0.8rem] font-medium">
                        {errors.msg?.message}
                      </p>
                    )}
                  </div>
                  <h3 className="text-right text-gray-600 text-[0.8rem] right-0">
                    {msg.length}/300
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="pb-[1.4rem]">
                  How would you like us to contact you? *
                </h3>
                <div className="flex items-center gap-[0.5rem]">
                  <input
                    type="radio"
                    id="email"
                    name="contact"
                    checked
                    className="accent-gray-700"
                  />
                  <label htmlFor="email" className="pr-[1.8rem]">
                    Email
                  </label>

                  <input
                    type="radio"
                    id="phone"
                    name="contact"
                    className="accent-gray-700"
                  />
                  <label htmlFor="phone" className="pr-[1.8rem]">
                    Phone
                  </label>

                  <input
                    type="radio"
                    id="wa"
                    name="contact"
                    className="accent-gray-700"
                  />
                  <label htmlFor="wa" className="pr-[1.8rem]">
                    WhatsApp
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white uppercase cursor-pointer py-[0.6rem]"
              >
                Send
              </button>
            </form>
          </>}
          </>
        </div>
      ) : (
        <div className="w-full pr-[1.3rem] text-[0.9rem]">
          <div className="w-full flex items-center justify-between pb-[1.2rem] px-[1.4rem] border-b border-gray-300">
            <h1>Contact Us</h1>
            <i onClick={()=> setActiveTab('')} className="ri-close-large-line"></i>
          </div>
          <div className="px-[1.4rem]">
            <div className=" py-[3rem] border-b border-gray-300">
              <p>
                Our team of experts is available to answer all your questions
                from assistance with your orders to style advice and gift ideas.
              </p>
              <h3 className="pt-[2.3rem] pb-[1.3rem] ">Make An Inquiry</h3>
              <button
                onClick={() => {
                  setBtnClicked(true);
                }}
                className="w-full border py-[0.6rem] text-[0.8rem] uppercase font-semibold text-gray-800 hover:bg-black hover:text-white transition-all"
              >
                Send us a message
              </button>
            </div>
            <div className=" py-[1.4rem] border-b border-gray-300">
              <p>Call Us: +91 89769 66012, +91 89769 66013</p>
              <h3 className="text-[0.8rem] text-gray-500">
                Monday to Saturday 11 am to 7 pm
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTab;
