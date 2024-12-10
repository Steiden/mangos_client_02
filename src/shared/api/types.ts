type MangosSuccessResponse<T> = {
    success: true;
    data: T;
    message: string;
}

type MangosErrorResponse<T> = {
    success: false;
    message: string;
    error: string;
}

export type MangosResponse<T> = MangosSuccessResponse<T> | MangosErrorResponse<T>;