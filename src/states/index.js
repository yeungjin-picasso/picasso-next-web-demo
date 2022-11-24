import { atom, selector } from "recoil";
import { authRequest } from "src/utils/request/AuthRequest";
import { mainRequest } from "src/utils/request/MainRequest";
import { QNA_LIST } from "../api/QNA_LIST";
import { v1 } from "uuid";

const userNameAtom = atom({
  key: `userNameAtom/${v1()}`,
  // default: null,
  default: "wooowo",
});

const triggerState = atom({
  key: "triggerState",
  default: Date.now(),
});

const getQnaList = selector({
  key: `getQnaList/${v1()}`,
  // get: async ({get}) => {
  //   const res = await mainRequest.get("/qna");
  //   if (res.error) {
  //     throw res.error;
  //   }
  //   return res.data;
  // },
  get: ({ get }) => {
    return QNA_LIST;
  },
  set: ({ set }) => {
    set(triggerState, Date.now());
  },
});

export { userNameAtom, getQnaList };
