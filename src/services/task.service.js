import { axiosClassic } from "../api/axios";

export const TaskService = {
	async getInputData(url) {
		return (await axiosClassic.get(url)).data
	},

	async sendInputData(url, inputData) {
		return (await axiosClassic.post(url, inputData)).data
	}
}