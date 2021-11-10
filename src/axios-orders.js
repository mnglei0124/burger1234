import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger1234-c5ec6-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
