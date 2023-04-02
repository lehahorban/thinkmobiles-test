// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://drab-jade-ray-hat.cyclic.app/api",
// });

// // instance.interceptors.request.use((config) => {
// //   config.headers.Authorization = window.localStorage.getItem("token");

// //   return config;
// // });
// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   config.headers["Content-Type"] = "application/json"; // добавьте эту строку
//   return config;
// });

// export default instance;
import axios from "axios";

const instance = axios.create({
  baseURL: "https://drab-jade-ray-hat.cyclic.app/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  config.headers["Content-Type"] = "application/json"; // добавьте эту строку
  return config;
});

export default instance;
