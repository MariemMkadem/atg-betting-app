import axios from "axios";

const BASE_URL = "https://www.atg.se/services/racinginfo/v1/api";

export const getBetTypeResults = async (betType: string) => {
  const response = await axios.get(`${BASE_URL}/products/${betType}`);
  return response;
};

export const getGameDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/games/${id}`);
  return response;
};
