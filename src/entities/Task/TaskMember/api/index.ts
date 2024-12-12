import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { TaskMember, TaskMemberFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<TaskMember[]>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskMember[]>> = await api.get(
			endpoints.task_members,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<TaskMember>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskMember>> = await api.get(
			`${endpoints.task_members}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: TaskMemberFillable, token: string): Promise<MangosResponse<TaskMember>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskMember>> = await api.post(
			endpoints.task_members,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<TaskMember>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskMember>> = await api.put(
			`${endpoints.task_members}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<TaskMember>> {
	try {
		const response: AxiosResponse<MangosResponse<TaskMember>> = await api.delete(
			`${endpoints.task_members}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
