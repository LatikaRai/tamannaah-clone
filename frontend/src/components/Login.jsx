import loginImg from "../assets/images/loginImg.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { user } = useSelector(
    (state) => state.userReducer
  );

   const loginHandler = async (formData) => {
    try {
      await dispatch(asyncLoginUser(formData));
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const createAccountHandler = () => {
    navigate("/account/register");
  };

  return (
    <div className="lg:h-[92vh] mt-[8vh] flex flex-col-reverse lg:flex-row items-center">
      <div className="lg:w-1/2 w-full h-full">
        <img
          className="object-cover object-center w-full h-full"
          src={loginImg}
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-between px-[0.9rem] py-[3.3rem] lg:px-0">
        <h1 className="uppercase lg:text-[1.02rem] font-semibold pb-[3.6rem] lg:pb-0">Sign in</h1>
        <form onSubmit={handleSubmit(loginHandler)} className="text-[0.85rem] w-full lg:w-[65%] flex flex-col gap-[2.9rem]">
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
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
                required: "Password is required"
              })}
              type="password"
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
          <span className="uppercase font-medium underline text-gray-800 text-[0.8rem]">
            Forgot password?
          </span>
          <button type="submit" className="w-full bg-black text-white py-[0.52rem] text-[0.85rem] uppercase font-semibold">
            Log in
          </button>
        </form>
        <div className="lg:w-[65%] w-full text-[0.8rem] border-t border-gray-300 py-[3.6rem] lg:py-[2.3rem] flex flex-col gap-[1.7rem]">
          <p>Don't have an account?</p>
          <p>
            Let's get personal. Create an account to discover new collections, curated edits, and get insider access
          </p>
          <button type="button" onClick={createAccountHandler} className="uppercase font-semibold border border-gray-800 text-gray-800 text-[0.8rem] py-[0.52rem] hover:bg-black hover:text-white transition-all">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
