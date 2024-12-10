import { api, getAxiosConfig, MangosResponse } from "@/shared/api";
import { endpoints } from "@/shared/api/endpoints";
import { AxiosResponse } from "axios";
import { Category } from "../types";

export async function getList(token: string) {
	const response: AxiosResponse<MangosResponse<Category[]>> = await api.get(
		endpoints.execution_statuses,
        getAxiosConfig(token),
	);
	return response;
}

export async function get(id: number, token: string) {
    const response: AxiosResponse<MangosResponse<Category>> = await api.get(
        `${endpoints.execution_statuses}/${id}`,
        getAxiosConfig(token),
    );
    return response;
}

export async function create(name: string, token: string) {
    const response: AxiosResponse<MangosResponse<Category>> = await api.post(
        endpoints.execution_statuses,
        { name },
        getAxiosConfig(token),
    );
    return response;
}

export async function update(id: number, name: string, token: string) {
    const response: AxiosResponse<MangosResponse<Category>> = await api.put(
        `${endpoints.execution_statuses}/${id}`,
        { name },
        getAxiosConfig(token),
    );
    return response;
}

export async function remove(id: number, token: string) {
    const response: AxiosResponse<MangosResponse<Category>> = await api.delete(
        `${endpoints.execution_statuses}/${id}`,
        getAxiosConfig(token),
    );
    return response;
}
