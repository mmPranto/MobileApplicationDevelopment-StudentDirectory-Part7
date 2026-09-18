import axios from "axios";
import Constants from "expo-constants";

// Read base URL dynamically from app.config.js extra config
const BASE_URL =
  Constants.expoConfig?.extra?.apiUrl ?? "http://localhost:3000";

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});