import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Division, DivisionFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<Division[]>> {
	try {
		const response: AxiosResponse<MangosResponse<Division[]>> = await api.get(
			endpoints.divisions,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<Division>> {
	try {
		const response: AxiosResponse<MangosResponse<Division>> = await api.get(
			`${endpoints.divisions}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: DivisionFillable, token: string): Promise<MangosResponse<Division>> {
	try {
		const response: AxiosResponse<MangosResponse<Division>> = await api.post(
			endpoints.divisions,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<Division>> {
	try {
		const response: AxiosResponse<MangosResponse<Division>> = await api.put(
			`${endpoints.divisions}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<Division>> {
	try {
		const response: AxiosResponse<MangosResponse<Division>> = await api.delete(
			`${endpoints.divisions}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
