import axios from "axios";
import { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";
import { useSnackbar } from "../providers/SnackbarProvider";

export default function useAxios() {
  const { token } = useUser();
  const snackbarActivation = useSnackbar();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;

    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        console.log("request out");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.message) snackbarActivation("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token, snackbarActivation]);
}
