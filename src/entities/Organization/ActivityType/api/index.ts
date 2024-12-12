import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { ActivityType, ActivityTypeFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<ActivityType[]>> {
	try {
		const response: AxiosResponse<MangosResponse<ActivityType[]>> = await api.get(
			endpoints.activity_types,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<ActivityType>> {
	try {
		const response: AxiosResponse<MangosResponse<ActivityType>> = await api.get(
			`${endpoints.activity_types}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: ActivityTypeFillable, token: string): Promise<MangosResponse<ActivityType>> {
	try {
		const response: AxiosResponse<MangosResponse<ActivityType>> = await api.post(
			endpoints.activity_types,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<ActivityType>> {
	try {
		const response: AxiosResponse<MangosResponse<ActivityType>> = await api.put(
			`${endpoints.activity_types}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<ActivityType>> {
	try {
		const response: AxiosResponse<MangosResponse<ActivityType>> = await api.delete(
			`${endpoints.activity_types}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
