import axios from "axios";

const API_URL = `http://localhost:3004/`


export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: { 'Content-Type': 'application/json' }
})