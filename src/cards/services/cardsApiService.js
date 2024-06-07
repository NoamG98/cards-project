import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";
const googleMapKey = "AIzaSyAzJC2Wa-XenlNK-TL28BBNjDLaZbYBn-M";
const googleMapUrl = "https://maps.googleapis.com/maps/api/geocode/json";

export const getAllCardsService = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCardDetailsService = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMyCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/my-cards`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const response = await axios.delete(`${apiUrl}/${cardId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const likeCard = async (cardId) => {
  try {
    const response = await axios.patch(`${apiUrl}/${cardId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const response = await axios.post(apiUrl, card);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const editCard = async (cardId, normalizedCard) => {
  try {
    const response = await axios.put(`${apiUrl}/${cardId}`, normalizedCard);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const response = await axios.patch(`${apiUrl}/${cardId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getLocationCoordinate = async (address) => {
  const params = {
    key: googleMapKey,
    address,
  };

  axios.defaults.headers.common["x-auth-token"] = null;

  try {
    const response = await axios.get(googleMapUrl, { params });
    return response.data.results[0].geometry.location;
  } catch (error) {
    throw new Error(error.message);
  }
};

const handleError = (error) => {
  console.error("Error making request:", error.message);
  if (error.response) {
    console.error("Error response data:", error.response.data);
    console.error("Error response status:", error.response.status);
    console.error("Error response headers:", error.response.headers);
  } else if (error.request) {
    console.error("No response received for the request:", error.request);
  } else {
    console.error("Error setting up the request:", error.message);
  }
  throw new Error(error.message);
};
