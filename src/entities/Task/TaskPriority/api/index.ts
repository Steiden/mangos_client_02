import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { TaskPriority, TaskPriorityFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<TaskPriority[]>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskPriority[]>> = await api.get(
			endpoints.task_priorities,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<TaskPriority>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskPriority>> = await api.get(
			`${endpoints.task_priorities}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: TaskPriorityFillable, token: string): Promise<MangosResponse<TaskPriority>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskPriority>> = await api.post(
			endpoints.task_priorities,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<TaskPriority>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskPriority>> = await api.put(
			`${endpoints.task_priorities}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<TaskPriority>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskPriority>> = await api.delete(
			`${endpoints.task_priorities}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
