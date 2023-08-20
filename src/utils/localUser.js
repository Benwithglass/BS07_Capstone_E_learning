import { USER_INFO } from "./constant";

export const localUser = {
    get: () => {
      let dataJson = localStorage.getItem(USER_INFO);
      return JSON.parse(dataJson);
    },
    set: (userInfo) => {
      let dataJson = JSON.stringify(userInfo);
      localStorage.setItem(USER_INFO, dataJson)
    },
    remove: () => {
      localStorage.removeItem(USER_INFO);
    },
  };
  