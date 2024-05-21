import axios from "axios";
const url = "http://localhost:3000";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data); // send a post request to the server
  } catch (error) {
    console.log(error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
