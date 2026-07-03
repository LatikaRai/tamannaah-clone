import { useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import Login from "../components/Login";

const Account = () => {
  const { pathname } = useLocation();
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  return <>{["/account/login"].includes(pathname) ? <Login /> : ""}</>;
};

export default Account;
