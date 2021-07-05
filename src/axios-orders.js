import axios from "axios";

const instance = axios.create({
  baseURL: "https://ariburger-88aef-default-rtdb.firebaseio.com/"
});

export default instance;
