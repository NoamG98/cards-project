import axios from 'axios';

const apiUrl = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards'; 

export const getAllCardsService = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};
