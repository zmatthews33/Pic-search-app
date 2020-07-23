import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID L5mb-nnX24lqEdig9JCAWNbKHavPfjpqE78_JXP7x1g"
  }
});
