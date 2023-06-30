import { AuthContext } from "@/contexts/AuthContext";
import { User } from "@/interfaces/User.interface";
import { API_URL } from "@/utils/constants";
import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { useContext } from "react";

const baseURL = API_URL;

const useAxios = () => {
  const { authTokens, setAuthTokens, setUser } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (request) => {
    const user = jwt_decode(authTokens!.access) as User;
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      return request;
    }

    const response = await axios.post(`${baseURL}/api/token/refresh`, {
      refresh: authTokens?.refresh,
    });

    localStorage.setItem("authTokens", JSON.stringify(response.data));
    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));
    request.headers.Authorization = `Bearer ${response.data.access}`;

    return request;
  });

  return axiosInstance;
};

export default useAxios;
