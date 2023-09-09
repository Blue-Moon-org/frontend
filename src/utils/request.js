import axios from "axios";

export const baseURL = "http://212.71.235.37:8000";

export const request = axios.create({
  baseURL: baseURL,
});
