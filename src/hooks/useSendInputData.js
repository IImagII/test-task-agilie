import { useMutation } from "react-query"
import { TaskService } from "../services/task.service"

export const useSendInputData = (url) => {
	return useMutation((newData) => TaskService.sendInputData(`${url}`, newData), {
		onError: (error) => {
			console.warn(`Error in sending input data for ${url}:`, error)
		}
	})
}

export const useChangeInputData = (url) => {
	return useMutation((newData) => TaskService.changeInputData(`${url}/1`, newData), {
		onError: (error) => {
			console.warn(`Error in sending input data for ${url}:`, error)
		}
	})
}