import { ADDRESS, PORT, PATH } from "./constant";

const getURL = () => {
  return `${ADDRESS}:${PORT}${PATH}`;
};

export default getURL;
