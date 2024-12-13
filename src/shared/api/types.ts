type Pagination = {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string;
    prev_page_url: string;
}

export type MangosSuccessResponse<T> = {
    success: true;
    data: T;
    pagination?: Pagination;
    message: string;
}

export type MangosErrorResponse = {
    success: false;
    message: string;
    error: string;
}

export type MangosResponse<T> = MangosSuccessResponse<T> | MangosErrorResponse;