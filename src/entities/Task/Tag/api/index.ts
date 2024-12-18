import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Tag, TagFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";

export async function getList(token: string): Promise<MangosResponse<Tag[]>> {
	try {
		const response: AxiosResponse<MangosResponse<Tag[]>> = await api.get(
			endpoints.tags,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<Tag>> {
	try {
		const response: AxiosResponse<MangosResponse<Tag>> = await api.get(
			`${endpoints.tags}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: TagFillable, token: string): Promise<MangosResponse<Tag>> {
	try {
		const response: AxiosResponse<MangosResponse<Tag>> = await api.post(
			endpoints.tags,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<Tag>> {
	try {
		const response: AxiosResponse<MangosResponse<Tag>> = await api.put(
			`${endpoints.tags}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<Tag>> {
	try {
		const response: AxiosResponse<MangosResponse<Tag>> = await api.delete(
			`${endpoints.tags}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
