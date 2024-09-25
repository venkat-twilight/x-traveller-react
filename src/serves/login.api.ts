import {
  fetchLoginStart,
  fetchLoginFailure,
  fetchLoginSuccess,
} from "../features/authSlice";
import {
  fetchLogoutStart,
  fetchLogoutFailure,
  fetchLogoutSuccess,
} from "../features/authSlice";
import { LoginCredentials } from "../models/login.model";
import env from "../utils/env";

export const login = (payload: LoginCredentials) => async (dispatch: any) => {
  dispatch(fetchLoginStart()); // Use parsed response
  try {
    const data = await env.post(`/auth/login`, payload); // Use ENV.get to fetch data
    localStorage.setItem("accessToken", data.token);
    dispatch(fetchLoginSuccess(data));
    return data;
  } catch (error: any) {
    console.error(error);
    dispatch(fetchLoginFailure(error)); // Use parsed response
    return error;
  }
};


export const handleLogout = async (dispatch: any, payload: any) => {
  dispatch(fetchLogoutStart()); // Dispatch start action
  try {
    const data = await env.post("/auth/logout", payload);
    localStorage.removeItem("accessToken");
    dispatch(fetchLogoutSuccess(data)); // Dispatch success action
    return data;
  } catch (error: any) {
    console.error(error);
    dispatch(fetchLogoutFailure(error)); // Dispatch failure action
    return error;
  }
};
