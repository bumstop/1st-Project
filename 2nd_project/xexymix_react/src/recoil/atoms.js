import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: "",
});
// export const REST_API_KEY = atom({
//   key: "REST_API_KEY",
//   default: "bc6575d60a8bd35763d387b0e9398187",
// });
// export const CLIENT_ID_PARAMS = atom({
//   key: "CLIENT_ID_PARAMS",
//   default: "client_id=bc6575d60a8bd35763d387b0e9398187",
// });
// export const REDIRECT_URI_PARAMS = atom({
//   key: "REDIRECT_URI_PARAMS",
//   default: "redirect_uri=http://localhost:3000",
// });
