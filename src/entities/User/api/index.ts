import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { User, UserFillable } from "../types";
import { handleResponseException } from "@/shared/api/handlers";
import { ExecException } from "child_process";

export async function getList(token: string): Promise<MangosResponse<User[]>> {
	try {
		const response: AxiosResponse<MangosResponse<User[]>> = await api.get(
			endpoints.users,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function get(id: number, token: string): Promise<MangosResponse<User>> {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await api.get(
			`${endpoints.users}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function create(data: UserFillable, token: string): Promise<MangosResponse<User>> {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await api.post(
			endpoints.users,
			data,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function update(id: number, name: string, token: string): Promise<MangosResponse<User>> {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await api.put(
			`${endpoints.users}/${id}`,
			{ name },
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function remove(id: number, token: string): Promise<MangosResponse<User>> {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await api.delete(
			`${endpoints.users}/${id}`,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
