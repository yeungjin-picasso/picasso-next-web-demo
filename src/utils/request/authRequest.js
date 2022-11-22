import axios from "axios";

export const authRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

authRequest.interceptors.request.use((cfg) => {
  cfg.headers["Authorization"] = localStorage.getItem("acessToken");
  return cfg;
});
