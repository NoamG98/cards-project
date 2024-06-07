import axios from "axios";
import { getTokenFromLocalStorage } from "./localStorageService";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

const loginService = async (userLogin) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, userLogin);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const signUpService = async (user) => {
  try {
    const response = await axios.post(apiUrl, user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const getUserData = async (id) => {
  try {
    const { data } = await axios.get(`${apiUrl}/${id}`, {
      headers: {
        "x-auth-token": getTokenFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { loginService, signUpService, getUserData };
