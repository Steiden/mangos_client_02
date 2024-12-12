export type AuthorizationData = {
    login: string;
    password: string;
}

export type AuthorizationResponse = {
    token: string;
}

export type RegistrationData = {
    login: string;
    password: string;
    avatar?: string;
    first_name?: string;
    second_name?: string;
    patronymic?: string;
    phone?: string;
    email: string;
    organization_id?: number;
}