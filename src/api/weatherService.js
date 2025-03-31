import axios from 'axios';

const API_KEY = '4b000fcff60b2cd2a738fbe1b30ec51d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
  return response;
};
