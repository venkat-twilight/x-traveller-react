import {
  fetchRegisterStart,
  fetchRegisterSuccess,
  fetchRegisterFailure,
} from "../features/registerSlice"; // Correct slice import
import { RegisterPayload, RegisterResponse } from "../models/register.model";
import { AppDispatch } from "../utils/redux/store";

export const register =
  (payload: RegisterPayload) => async (dispatch: AppDispatch) => {
    dispatch(fetchRegisterStart());
    try {
      const response = await fetch("http://143.110.251.96/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: RegisterResponse = await response.json();

      dispatch(fetchRegisterSuccess(data.data));
      return data.data;
    } catch (error: any) {
      const errorData = await error.json();
      dispatch(fetchRegisterFailure(errorData)); 
      console.error(error);
      return error;
    }
  };
