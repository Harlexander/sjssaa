import axios from "axios";

export const api = axios.create({ baseURL : "http://localhost:8000/api"});
// export const api = axios.create({ baseURL : "https://api-school.christembassy-ism.com/api"});