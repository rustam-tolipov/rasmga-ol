const BASE_LOCAL_URL = "http://localhost:3000/api/v1";
const BASE_MAIN_URL = "https://rasmga-ol-api.onrender.com/api/v1";
const BASE_URLL = "http://192.168.1.4:3000/api/v1";

const isLocal = true;

export const BASE_URL = isLocal ? BASE_LOCAL_URL : BASE_MAIN_URL;
