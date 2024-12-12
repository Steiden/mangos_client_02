import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Project, ProjectFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<Project[]>> {
	try {
		const response: AxiosResponse<MangosResponse<Project[]>> = await api.get(
			endpoints.projects,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<Project>> {
	try {
		const response: AxiosResponse<MangosResponse<Project>> = await api.get(
			`${endpoints.projects}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: ProjectFillable, token: string): Promise<MangosResponse<Project>> {
	try {
		const response: AxiosResponse<MangosResponse<Project>> = await api.post(
			endpoints.projects,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<Project>> {
	try {
		const response: AxiosResponse<MangosResponse<Project>> = await api.put(
			`${endpoints.projects}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<Project>> {
	try {
		const response: AxiosResponse<MangosResponse<Project>> = await api.delete(
			`${endpoints.projects}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
