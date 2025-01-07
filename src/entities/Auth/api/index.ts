import { AxiosResponse } from "axios";
import { AuthorizationData, AuthorizationResponse, RegistrationData } from "../types";
import { api, endpoints, getAxiosConfig, MangosResponse } from "@/shared/api";
import { User } from "@/entities/user/types";
import { handleResponseException } from "@/shared/api/handlers";

export async function login(data: AuthorizationData): Promise<MangosResponse<AuthorizationResponse>> {
	try {
		const response: AxiosResponse<MangosResponse<AuthorizationResponse>> = await api.post(
			endpoints.login,
			data,
			getAxiosConfig()
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function register(data: RegistrationData): Promise<MangosResponse<User>> {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await api.post(
			endpoints.register,
			data,
			getAxiosConfig()
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}

export async function me(token: string): Promise<MangosResponse<User>> {
	try {
		const response: AxiosResponse<MangosResponse<User>> = await api.get(
			endpoints.me,
			getAxiosConfig(token)
		);
		return response.data;
	} catch (error) {
		return handleResponseException(error);
	}
}
