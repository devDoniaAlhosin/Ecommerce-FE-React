import axios from "axios";

// const BASE_URL = " http://localhost:3500";
const BASE_URL = "https://db-json-server-gilt.vercel.app";

export const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.headers.common["Content-Type"] = "application/json";
axiosConfig.defaults.headers.common.Accept = "application/json";
