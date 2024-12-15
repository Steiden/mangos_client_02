import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Task, TaskFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<Task[]>> {
	try {
		const response: AxiosResponse<MangosResponse<Task[]>> = await api.get(
			endpoints.tasks,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<Task>> {
	try {
		const response: AxiosResponse<MangosResponse<Task>> = await api.get(
			`${endpoints.tasks}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: TaskFillable, token: string): Promise<MangosResponse<Task>> {
	try {
		const response: AxiosResponse<MangosResponse<Task>> = await api.post(
			endpoints.tasks,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, data: TaskFillable, token: string): Promise<MangosResponse<Task>> {
	try {
		const response: AxiosResponse<MangosResponse<Task>> = await api.put(
			`${endpoints.tasks}/${id}`,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<Task>> {
	try {
		const response: AxiosResponse<MangosResponse<Task>> = await api.delete(
			`${endpoints.tasks}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
