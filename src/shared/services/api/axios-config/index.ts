import Axios from "axios";

import { ResponseInterceptor, ErrorInterceptor } from "./interceptors";

const Api = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

Api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => ErrorInterceptor(error)
);

export { Api };
