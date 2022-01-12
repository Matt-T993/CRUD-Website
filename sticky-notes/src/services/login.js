import axios from "axios";
//login post request
const baseURL = "http://localhost:3001/";

const login = ({ email, password }) => {
  return axios
    .post(baseURL + "users", { email, password })
    .then((response) => response.data);
};

export default { login };
