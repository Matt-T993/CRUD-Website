import axios from "axios";

const baseURL = "http://localhost:3001/api/";

// get a list of all the notes
const getAll = () => {
  return axios.get(baseURL + "notes").then((response) => response.data);
};
// create a new note
const create = (newNotes) => {
  return axios
    .post(baseURL + "notes", newNotes)
    .then((response) => response.data);
};
// delete a note
const del = (id) => {
  return axios
    .delete(baseURL + "notes/" + id)
    .then((response) => response.data);
};
const noteObject = {
  getAll,
  create,
  del,
};

export default noteObject;
