import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const getAllPrayers = (user) => {
  return axios.get(`${API_BASE_URL}/prayers`);
};

export const postPrayer = (prayer, date, user) => {
  axios.post(
    `${API_BASE_URL}/prayers/`,
    {
      user: user,
      prayer: prayer,
      date: date + "T00:00:00.000Z",
    },
    { headers: { ContentType: "application/json" } }
  );
};

export const deletePrayer = (prayerId) => {
  axios.delete(`${API_BASE_URL}/prayers/${prayerId}`);
};
