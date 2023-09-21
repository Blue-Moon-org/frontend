import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const baseURL = "http://212.71.235.37:8000";

// const jsonValue = await AsyncStorage.getItem("userTokens");
// let result = JSON.parse(jsonValue);

// console.warn(result.refresh);
export const request = axios.create({
  baseURL: baseURL,
});

// Add a response interceptor
// request.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If the error status is 401 and there is no originalRequest._retry flag,
//     // it means the token has expired and we need to refresh it
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const refreshToken = localStorage.getItem('refreshToken'); // localStorage data
//         const response = await axios.post('/api/refresh-token', { refreshToken }); //refreshtoken
//         const { token } = response.data;

//         localStorage.setItem('token', token);

//         // Retry the original request with the new token
//         originalRequest.headers.Authorization = `Bearer ${token}`;
//         return axios(originalRequest);
//       } catch (error) {
//         // Handle refresh token error or redirect to login
//       }
//     }

//     return Promise.reject(error);
//   }
// );
