import { Role } from "../Role/types";

export type User = {
    id: number;
    login: string;
    password: string;
    avatar: string | null;
    first_name: string | null;
    second_name: string | null;
    patronymic: string | null;
    phone: string | null;
    email: string;
    verified_at: Date | null;
    role: Role;
    created_at: Date;
    updated_at: Date;
}

export type UserShort = {
    id: number;
    login: string;
    password: string;
    avatar: string | null;
    first_name: string | null;
    second_name: string | null;
    patronymic: string | null;
    phone: string | null;
    email: string;
    verified_at: Date | null;
    role_id: number;
    created_at: Date;
    updated_at: Date;
}

export type UserFillable = {
    login?: string;
    password?: string;
    avatar?: string | null;
    first_name?: string | null;
    second_name?: string | null;
    patronymic?: string | null;
    phone?: string | null;
    email?: string;
    verified_at?: Date | null;
}