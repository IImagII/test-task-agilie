import { axiosClassic } from "../api/axios";

export const TaskService = {
	async getInputData(url) {
		const { data } = await axiosClassic.get(url)

		return data
	},
	async sendInputData(url, inputData) {
		const { data } = await axiosClassic.post(url, inputData)

		return data
	}

}