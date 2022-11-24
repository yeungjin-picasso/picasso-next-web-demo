import axios from "axios";

export const authRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

authRequest.interceptors.request.use((cfg) => {
  cfg.headers["Authorization"] = localStorage.getItem("acessToken");
  return cfg;
});
