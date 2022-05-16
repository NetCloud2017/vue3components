import axios from "axios";

const paths =  {
    
}
export function api(options) {
    if (Object.defineProperties.toString.call(options) !== '[object Object]') {
        options = {}
    } 
    return axios({
    method: "post",
    url: "http://127.0.0.1:8080/api/public/",
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
    ...options
  });
}
