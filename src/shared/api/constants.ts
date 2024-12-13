import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api';

export enum Roles {
    admin = 1,
    user = 2,
}

export enum ExecutionStatuses {
    in_progress = 1,
    done = 2,
    failed = 3,
}

export const api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
    // withXSRFToken: true,
    headers: {
        Accept: 'application/json',
    },
})