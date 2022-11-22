import { atom, selector } from "recoil";
import { authRequest } from "src/utils/request/AuthRequest";
import { mainRequest } from "src/utils/request/MainRequest";
import { QNA_LIST } from "../api/QNA_LIST";
import { v1 } from "uuid";

export const userNameAtom = atom({
  key: `userNameAtom/${v1()}`,
  // default: null,
  default: "wooowo",
});

export const qnaListAtom = atom({
  key: `qnaListAtom/${v1()}`,
  default: selector({
    key: `getQnaList/${v1()}`,
    get: () =>
      // (async () => {
      //   const res = await mainRequest.get("/qna");
      //   if (res.error) {
      //     throw res.error;
      //   }
      //   return res.data;
      // })(),
      QNA_LIST,
  }),
});
