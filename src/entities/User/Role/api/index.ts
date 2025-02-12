import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Role, RoleFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";


export async function getList(token: string): Promise<MangosResponse<Role[]>> {
	try {
		const response: AxiosResponse<MangosResponse<Role[]>> = await api.get(
			endpoints.roles,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<Role>> {
	try {
		const response: AxiosResponse<MangosResponse<Role>> = await api.get(
			`${endpoints.roles}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: RoleFillable, token: string): Promise<MangosResponse<Role>> {
	try {
		const response: AxiosResponse<MangosResponse<Role>> = await api.post(
			endpoints.roles,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<Role>> {
	try {
		const response: AxiosResponse<MangosResponse<Role>> = await api.put(
			`${endpoints.roles}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<Role>> {
	try {
		const response: AxiosResponse<MangosResponse<Role>> = await api.delete(
			`${endpoints.roles}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
