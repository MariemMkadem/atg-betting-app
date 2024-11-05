import axios from "axios";
import { BASE_URL } from "../constants";

export const getBetTypeResults = async (betType: string) => {
  const response = await axios.get(`${BASE_URL}/products/${betType}`);
  return response;
};

export const getGameDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/games/${id}`);
  return response;
};
