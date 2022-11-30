import axios from "axios";

export const authRequest = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

authRequest.interceptors.request.use((cfg) => {
  cfg.headers["Authorization"] =
    "Bearer " + localStorage.getItem("access_token");
  return cfg;
});

// axios 인스턴스의 응답을 캐치
authRequest.interceptors.response.use(
  (res) => {
    // 생성된 인스턴스의 요청 성공 콜백
    return res;
  },
  async (err) => {
    // 생성된 인스턴스의 요청 실패 콜백
    if (err.response.status === 401) {
      // 401 Unauthorized Error 가 발생하면 Token 을 refresh 한다.
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/token/refresh",
        {
          withCredentials: true,
        },
      );

      // authRequest header에 authorization의 default 값을 refresh 된 accessToken 으로 교체
      authRequest.defaults.headers["Authorization"] = res.data.access_token;
      // 전역 accessToken에 저장
      localStorage.setItem("access_token", res.data.access_token);
      // 실패한 요청 재전송
      return axios(err.request, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
    }
    return Promise.reject(err);
  },
);
