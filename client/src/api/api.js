import axios from "axios";

const api = axios.create({
  baseURL: "https://drab-jade-ray-hat.cyclic.app/api",
});

export default api;
