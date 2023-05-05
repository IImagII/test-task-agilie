import { axiosClassic } from "../api/axios";



export const TaskService = {
	async sendInputData() {
		try {
			const { data } = await axiosClassic.get('tasks')
			console.log("🚀 ~ data:", data)
			return data
		}
		catch (err) { console.warn(err); }
	}
}