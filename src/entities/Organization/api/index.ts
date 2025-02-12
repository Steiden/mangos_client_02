import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Organization, OrganizationFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";

export async function getList(token: string): Promise<MangosResponse<Organization[]>> {
	try {
		const response: AxiosResponse<MangosResponse<Organization[]>> = await api.get(
			endpoints.organizations,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<Organization>> {
	try {
		const response: AxiosResponse<MangosResponse<Organization>> = await api.get(
			`${endpoints.organizations}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: OrganizationFillable, token: string): Promise<MangosResponse<Organization>> {
	try {
		const response: AxiosResponse<MangosResponse<Organization>> = await api.post(
			endpoints.organizations,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, data: OrganizationFillable, token: string): Promise<MangosResponse<Organization>> {
	try {
		const response: AxiosResponse<MangosResponse<Organization>> = await api.put(
			`${endpoints.organizations}/${id}`,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<Organization>> {
	try {
		const response: AxiosResponse<MangosResponse<Organization>> = await api.delete(
			`${endpoints.organizations}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
