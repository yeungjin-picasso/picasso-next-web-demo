import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userAtom } from "src/states";
import { authRequest } from "src/utils/request/AuthRequest";

const getUser = () => {
  return authRequest.get("user/info");
};

// const needAuth = ["/community", "/qna"];
const needAuth = [];

export default function AuthWrapper({ children }) {
  const { data, isLoading, isError } = useQuery(["getUser"], getUser);
  const setUser = useSetRecoilState(userAtom);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && data) {
      setUser(() => data.data);
    }
  }, [setUser, data, isLoading]);

  if (!needAuth.includes(router.pathname)) {
    return <>{children}</>;
  } else if (isLoading) {
    return <div>...Loading</div>;
  } else if (isError) {
    alert("Invalid user");
    router.back();
    return <></>;
  }

  return <>{children}</>;
}
