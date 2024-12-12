import { AxiosResponse } from "axios";
import { AuthorizationData, AuthorizationResponse, RegistrationData } from "../types";
import { api, endpoints, getAxiosConfig, MangosResponse } from "@/shared/api";
import { User } from "@/entities/User/types";

export async function login(data: AuthorizationData) {
	const response: AxiosResponse<MangosResponse<AuthorizationResponse>> = await api.post(
		endpoints.login,
		data,
        getAxiosConfig()
	);
	return response;
}

export async function register(data: RegistrationData) {
    const response: AxiosResponse<MangosResponse<User>> = await api.post(
        endpoints.register,
        data,
        getAxiosConfig()
    );
    return response;
}

export async function me(token: string) {
    const response: AxiosResponse<MangosResponse<User>> = await api.get(
        endpoints.me,
        getAxiosConfig(token)
    );
    return response;
}