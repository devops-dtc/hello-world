import axios from "axios";

const API_URL = "http://localhost:8081";

const register = (name,username, email,mobile, password) => {
  return axios.post(API_URL + "/user/register", {
    name,
    username,
    email,
    mobile,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/user/login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const fetchAllSubject = () => {
  return axios
    .get(API_URL + "/getSubjects")
    .then((response) => {
     console.log(response)  
      return response.data;
    }); 
  
};

export default {
  register,
  login,
  logout,
  fetchAllSubject
};