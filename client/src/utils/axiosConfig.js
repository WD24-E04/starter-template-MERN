import axios from "axios";

export const setAxiosDefaults = () => {
  axios.defaults.baseURL =
    import.meta.env.VITE_API_URL || "http://localhost:8000";

  axios.defaults.withCredentials = true;
};
