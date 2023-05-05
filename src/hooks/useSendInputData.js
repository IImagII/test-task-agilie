import { useMutation } from "react-query"
import { TaskService } from "../services/task.service"

export const useSendInputData = (url) => {
	return useMutation((newData) => TaskService.sendInputData(`${url}`, newData), {
		onError: (error) => {
			console.warn(`Error in sending input data for ${url}:`, error)
		}
	})
}