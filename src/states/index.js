import { atom, selector } from "recoil";
import { authRequest } from "src/utils/request/AuthRequest";
import { mainRequest } from "src/utils/request/MainRequest";
import { v1 } from "uuid";

const userAtom = atom({
  key: `userNameAtom/${v1()}`,
  default: { user_nickname: "", permission: 9 },
});

export { userAtom };
