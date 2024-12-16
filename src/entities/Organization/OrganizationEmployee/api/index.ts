import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { OrganizationEmployee, OrganizationEmployeeFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<OrganizationEmployee[]>> {
	try {
		const response: AxiosResponse<MangosResponse<OrganizationEmployee[]>> = await api.get(
			endpoints.organization_employees,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<OrganizationEmployee>> {
	try {
		const response: AxiosResponse<MangosResponse<OrganizationEmployee>> = await api.get(
			`${endpoints.organization_employees}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: OrganizationEmployeeFillable, token: string): Promise<MangosResponse<OrganizationEmployee>> {
	try {
		const response: AxiosResponse<MangosResponse<OrganizationEmployee>> = await api.post(
			endpoints.organization_employees,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, data: OrganizationEmployeeFillable, token: string): Promise<MangosResponse<OrganizationEmployee>> {
	try {
		const response: AxiosResponse<MangosResponse<OrganizationEmployee>> = await api.put(
			`${endpoints.organization_employees}/${id}`,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<OrganizationEmployee>> {
	try {
		const response: AxiosResponse<MangosResponse<OrganizationEmployee>> = await api.delete(
			`${endpoints.organization_employees}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
