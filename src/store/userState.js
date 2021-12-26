// グローバルなstate 簡単な新しい方法 recoil
// コンポーネントは使わないので、jsでよい
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
