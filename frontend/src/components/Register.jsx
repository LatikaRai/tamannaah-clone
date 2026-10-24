import { useDispatch } from "react-redux";
import registerImg from "../assets/images/registerImg.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../actions/userActions";

const Register = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (formData) => {
    try {
      await dispatch(asyncRegisterUser(formData));
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  };

  const loginHandler = () => {
    navigate("/account/login");
  };

  return (
    <div className="lg:h-[92vh] mt-[8vh] flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 w-full h-full">
            <img
              className="object-cover object-center w-full h-full"
              src={registerImg}
              alt=""
            />
          </div>
          <div className="lg:w-1/2 w-full h-full flex flex-col items-center px-[0.9rem] lg:px-0 py-[2.3rem] justify-between ">
            <h1 className="uppercase lg:text-[1.02rem] font-semibold pb-[3.6rem] lg:pb-0 ">Sign up</h1>
            <form onSubmit={handleSubmit(registerHandler)} className="text-[0.8rem] lg:w-[65%] flex flex-col gap-[2.9rem]">
              <div>
                <input
                  {...register("name", {
                    required: 'Name is required',
                    pattern: {
                      value: /^[A-Za-z][A-Za-z\s.'-]{1,50}$/,
                      message: "Please enter a valid name",
                    },
                  })}
                  type="text"
                  placeholder="FIRST NAME *"
                  className={`border-b border-black w-full pb-[0.3rem] outline-none ${errors.name ? "border-red-500" : "border-black"}`}
                />
                {console.log(errors.name)}
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
                    required: 'Email is required',
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
                    required: 'Password is required',
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
              <button type="submit" onClick={loginHandler} className="uppercase font-semibold text-[0.8rem] py-[0.5rem] bg-black text-white">
                Create an account
              </button>
              </div>
            </form>
            <div className="lg:w-[65%] w-full text-[0.8rem] border-t border-gray-300 py-[2.3rem] flex flex-col gap-[1.7rem]">
              <p>Don't have an account?</p>
              <button type="button" className="w-full border border-gray-800 text-gray-800 hover:bg-black hover:text-white transition-all py-[0.5rem] text-[0.85rem] uppercase font-semibold">
                Log in
              </button>
            </div>
          </div>
        </div>
  )
}

export default Register
