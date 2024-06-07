import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import {
  getUserData,
  loginService,
  signUpService,
} from "../services/usersApiService";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";

export default function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setUser, setToken } = useUser();
  const { snackbarActivation } = useSnackbar();

  const handleLogin = useCallback(
    async (userLogin, isSigned = false) => {
      try {
        setIsLoading(true);
        const token = await loginService(userLogin);
        setTokenInLocalStorage(token);
        setToken(token);
        setUser(getUser());
        navigate(ROUTES.CARDS);
        isSigned
          ? snackbarActivation(
              "success",
              "filled",
              "SIGNED UP and LOGGED IN Successfully"
            )
          : snackbarActivation("success", "LOGGED IN Successfuly", "filled");
        return;
      } catch (error) {
        setError(error.message);
        console.log(error);
        snackbarActivation("error", error.message, "filled");
        setIsLoading(false);
      }
      setIsLoading(false);
    },
    [setToken, setUser, navigate, snackbarActivation]
  );

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    setUser(null);
    snackbarActivation("success", "LOGGEDOUT Succesfuly", "filled");
    window.location.reload();
  }, [setUser, snackbarActivation]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      setIsLoading(true);
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signUpService(normalizedUser);
        await handleLogin(
          {
            email: userFromClient.email,
            password: userFromClient.password,
          },
          true
        );
      } catch (error) {
        setError(error.message);
        snackbarActivation("error", error.message, "filled");
      }
      setIsLoading(false);
    },
    [handleLogin, snackbarActivation]
  );

  const handleGetUser = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const userData = await getUserData(id);
      setIsLoading(false);
      return userData;
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {
    error,
    isLoading,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
  };
}