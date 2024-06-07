import { jwtDecode } from "jwt-decode";

const TOKEN = "my_token";
const TEMP_EMAIL = "temp_email";
const USERS_KEY = "users";

const base64Encode = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)));
};

const base64Decode = (str) => {
  return decodeURIComponent(escape(window.atob(str)));
};

const setTokenInLocalStorage = (token) => {
  localStorage.setItem(TOKEN, token);
};

const removeTokenFromLocalStorage = () => localStorage.removeItem(TOKEN);

const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN);

const getUserFromLocalStorageByEmail = (email) => {
  const usersStr = localStorage.getItem(USERS_KEY);
  const users = usersStr ? JSON.parse(base64Decode(usersStr)) : [];
  return users.find(user => user.email === email) || null;
};

const saveUserToLocalStorage = (user) => {
  const usersStr = localStorage.getItem(USERS_KEY);
  const users = usersStr ? JSON.parse(base64Decode(usersStr)) : [];
  users.push(user);
  localStorage.setItem(USERS_KEY, base64Encode(JSON.stringify(users)));
};

const setTempEmailInLocalStorage = (email) => {
  localStorage.setItem(TEMP_EMAIL, email);
};

const getTempEmailFromLocalStorage = () => localStorage.getItem(TEMP_EMAIL);

const removeTempEmailFromLocalStorage = () => localStorage.removeItem(TEMP_EMAIL);

const updatePasswordInLocalStorage = (email, newPassword) => {
  const usersStr = localStorage.getItem(USERS_KEY);
  const users = usersStr ? JSON.parse(base64Decode(usersStr)) : [];
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    localStorage.setItem(USERS_KEY, base64Encode(JSON.stringify(users)));
  }
};

const getUserFromToken = () => {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) return null;
    const decodedToken = jwtDecode(token);
    return getUserFromLocalStorageByEmail(decodedToken.email);
  } catch (error) {
    return null;
  }
};

export {
  setTokenInLocalStorage,
  removeTokenFromLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorageByEmail,
  saveUserToLocalStorage,
  setTempEmailInLocalStorage,
  getTempEmailFromLocalStorage,
  removeTempEmailFromLocalStorage,
  updatePasswordInLocalStorage,
  getUserFromToken, 
};
