import { MangosErrorResponse } from "./types";

export function handleResponseException(error: unknown, message: string = ""): MangosErrorResponse {
	return {
		success: false,
		error: typeof error === "string" ? error : error instanceof Error ? error.message : "",
        message: message
	};
}
