import axios from "../services/axios";
import { setUser } from "../features/user/userSlice";

export const asyncRegisterUser = (userData) => async (dispatch) => {

  try {
    const { data } = await axios.post("/register", userData, {
      withCredentials: true,
    });

    dispatch(setUser(data.user));
    return data;
  } catch (error) {
    throw error
  } 
};

export const asyncLoginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post("/login", credentials, {
      withCredentials: true,
    });

    dispatch(setUser(data.user));
    return data;
  } catch (error) {
        throw error
  } 
};