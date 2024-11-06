import axios from "axios";

const baseUrl =
  process.env.REACT_APP_BASE_URL ||
  "https://www.atg.se/services/racinginfo/v1/api"; //

export const getBetTypeResults = async (betType: string) => {
  const response = await axios.get(`${baseUrl}/products/${betType}`);
  return response;
};

export const getGameDetails = async (id: string) => {
  const response = await axios.get(`${baseUrl}/games/${id}`);
  return response;
};
