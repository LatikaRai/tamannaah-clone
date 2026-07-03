import loginImg from "../assets/images/loginImg.png";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  return (
    <div className="h-[92vh] mt-[8vh] flex items-center">
      <div className="w-1/2 h-full">
        <img
          className="object-cover object-center w-full h-full"
          src={loginImg}
          alt=""
        />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center py-[3.3rem] justify-between ">
        <h1 className="uppercase text-[1.02rem] font-semibold">Sign in</h1>
        <form className="text-[0.85rem] w-[65%] flex flex-col gap-[2.9rem]">
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
          <span className="uppercase font-medium underline text-gray-800 text-[0.8rem]">
            Forgot password?
          </span>
          <button className="w-full bg-black text-white py-[0.5rem] text-[0.85rem] uppercase font-semibold">
            Log in
          </button>
        </form>
        <div className="w-[65%] text-[0.8rem] border-t border-gray-300 py-[2.3rem] flex flex-col gap-[1.7rem]">
          <p>Don't have an account?</p>
          <p>
            Let's get personal. Create an account to discover new collections,
            curated edits, and get insider access
          </p>
          <button className="uppercase font-semibold border border-gray-800 text-gray-800 text-[0.8rem] py-[0.5rem] hover:bg-black hover:text-white transition-all">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
