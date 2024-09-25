import env from "../utils/env";
import { setCityList } from "../features/citySlice";
import { AppDispatch } from "../utils/redux/store";

export const fetchCityListData = (stateId: number) => async (dispatch: AppDispatch) => {
  try {
    const data = await env.get(`/v1/config/cities?state_id=${stateId}`); // Use ENV.get to fetch data
    dispatch(setCityList(data));
    return data;
  } catch (error: any) {
    console.error("Error fetching assets: ", error);
  }
};
