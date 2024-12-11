import { OrganizationShort } from "@/entities/Organization/types";

export type Category = {
    id: number;
    name: string;
    organization: OrganizationShort;
    created_at: Date;
    updated_at: Date;
}

export type CategoryShort = {
    id: number;
    name: string;
    organization_id: number;
    created_at: Date;
    updated_at: Date;
}

export type CategoryFillable = {
    name?: string;
    organization_id?: number;
}