import { AxiosRequestConfig } from "axios";

export const getAxiosConfig = (token: string = ""): AxiosRequestConfig => {
	return {
		headers: {
			Authorization: "Bearer " + token,
			"Content-Type": "application/json",
            Accept: "application/json",
			Connection: "Keep-Alive",
		},
	};
};
