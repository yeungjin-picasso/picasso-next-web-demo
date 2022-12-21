import { atom } from "recoil";
import { v1 } from "uuid";

const userAtom = atom({
  key: `userNameAtom/${v1()}`,
  default: { user_nickname: "", permission: 0 },
});

export { userAtom };
