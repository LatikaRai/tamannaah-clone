import registerImg from "../assets/images/registerImg.png";
import { useForm } from "react-hook-form";

const Register = () => {
    const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="h-[92vh] mt-[8vh] flex items-center">
          <div className="w-1/2 h-full">
            <img
              className="object-cover object-center w-full h-full"
              src={registerImg}
              alt=""
            />
          </div>
          <div className="w-1/2 h-full flex flex-col items-center py-[2.3rem] justify-between ">
            <h1 className="uppercase text-[1.02rem] font-semibold">Sign up</h1>
            <form className="text-[0.8rem] w-[65%] flex flex-col gap-[2.9rem]">
              <div>
                <input
                  {...register("name", {
                    pattern: {
                      value: /^[\p{L}][\p{L}\s.'-]{1,50}$/u,
                      message: "Please enter a valid name",
                    },
                  })}
                  type="text"
                  placeholder="FIRST NAME *"
                  className={`border-b border-black w-full pb-[0.3rem] outline-none ${errors.name ? "border-red-500" : "border-black"}`}
                />
                {errors.name ? (
                  <p className="text-red-600 text-[0.8rem] font-medium">
                    {errors.name?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="text"
                  placeholder="ENTER EMAIL ID *"
                  className={`border-b border-black w-full pb-[0.3rem] outline-none ${errors.email ? "border-red-500" : "border-black"}`}
                />
                {errors.email ? (
                  <p className="text-red-600 text-[0.8rem] font-medium">
                    {errors.email?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  {...register("password", {
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="text"
                  placeholder="ENTER PASSWORD *"
                  className={`border-b border-black w-full pb-[0.3rem] outline-none ${errors.password ? "border-red-500" : "border-black"}`}
                />
                {errors.password ? (
                  <p className="text-red-600 text-[0.8rem] font-medium">
                    {errors.password?.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <label className="flex items-center gap-[0.4rem]">
                <input type="checkbox" className="hidden peer"/>
                <span className="h-[0.7rem] w-[0.7rem] after:content-[''] peer-checked:after:w-[0.5rem] peer-checked:after:h-[0.5rem]  peer-checked:after:bg-black flex items-center justify-center border"></span>
                CLICK HERE TO SIGN UP TO OUR NEWSLETTERS
              </label>
              <div className=" text-[0.8rem] border-t border-gray-300 py-[2.3rem] flex flex-col gap-[1.7rem]">
                <p>
                By signing up, you agree to our Terms & Conditions and Privacy & Cookies Policy
              </p>
              <button className="uppercase font-semibold text-[0.8rem] py-[0.5rem] bg-black text-white">
                Create an account
              </button>
              </div>
            </form>
            <div className="w-[65%] text-[0.8rem] border-t border-gray-300 py-[2.3rem] flex flex-col gap-[1.7rem]">
              <p>Don't have an account?</p>
              <button className="w-full border border-gray-800 text-gray-800 hover:bg-black hover:text-white transition-all py-[0.5rem] text-[0.85rem] uppercase font-semibold">
                Log in
              </button>
            </div>
          </div>
        </div>
  )
}

export default Register
