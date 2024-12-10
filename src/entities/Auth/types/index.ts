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
    avatar: string | null;
    first_name: string | null;
    second_name: string | null;
    patronymic: string | null;
    phone: string | null;
    email: string;
    organization_id: number | null;
}