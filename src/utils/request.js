import axios from "axios";

export const request =  axios.create({
  baseURL: "http://212.71.235.37:8000",
});
