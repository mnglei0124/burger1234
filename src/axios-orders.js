import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger1234-8aabb-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
