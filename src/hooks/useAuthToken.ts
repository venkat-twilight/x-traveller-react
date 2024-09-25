// useAuthToken.ts
import { useSelector } from "react-redux";

const useAuthToken = () => {
  const token = useSelector((state: any) => state.auth.token);
  return token;
};

export default useAuthToken;
