import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { TaskTag, TaskTagFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<TaskTag[]>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskTag[]>> = await api.get(
			endpoints.task_tags,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<TaskTag>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskTag>> = await api.get(
			`${endpoints.task_tags}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: TaskTagFillable, token: string): Promise<MangosResponse<TaskTag>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskTag>> = await api.post(
			endpoints.task_tags,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<TaskTag>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskTag>> = await api.put(
			`${endpoints.task_tags}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<TaskTag>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskTag>> = await api.delete(
			`${endpoints.task_tags}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
