import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { ProjectMember, ProjectMemberFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<ProjectMember[]>> {
	try {
		const response: AxiosResponse<MangosResponse<ProjectMember[]>> = await api.get(
			endpoints.project_members,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<ProjectMember>> {
	try {
		const response: AxiosResponse<MangosResponse<ProjectMember>> = await api.get(
			`${endpoints.project_members}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: ProjectMemberFillable, token: string): Promise<MangosResponse<ProjectMember>> {
	try {
		const response: AxiosResponse<MangosResponse<ProjectMember>> = await api.post(
			endpoints.project_members,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<ProjectMember>> {
	try {
		const response: AxiosResponse<MangosResponse<ProjectMember>> = await api.put(
			`${endpoints.project_members}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<ProjectMember>> {
	try {
		const response: AxiosResponse<MangosResponse<ProjectMember>> = await api.delete(
			`${endpoints.project_members}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
