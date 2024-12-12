export type MangosSuccessResponse<T> = {
    success: true;
    data: T;
    message: string;
}

export type MangosErrorResponse = {
    success: false;
    message: string;
    error: string;
}

export type MangosResponse<T> = MangosSuccessResponse<T> | MangosErrorResponse;