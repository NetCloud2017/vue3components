import axios from "axios";

import futures from "./futures";
const paths = [...futures];
export function fetchData(options) {
  if (Object.prototype.toString.call(options) !== "[object Object]") {
    options = {};
  }
  return axios({
    // method: "post",
    // data: {
    //   firstName: "Fred",
    //   lastName: "Flintstone",
    // },
    ...options,
    method: 'get',

    url: `http://127.0.0.1:8080/api/public/${
      paths[options["url"]] || options["url"]
    }`,

  });
}
