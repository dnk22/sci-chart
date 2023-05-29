import axios from "axios";

export const getChartDataFromAPI = async () => {
  try {
    const response = await axios.get(`https://fccommunity.tech/chart/M5`);

    return response?.data?.data;
  } catch (error) {
    console.error(error); // Handle any errors that occur during the API call
  }
};
