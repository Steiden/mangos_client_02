import { Organization } from "@/entities/Organization/types";

export type Tag = {
    id: number;
    name: string;
    organization: Organization;
    created_at: Date;
    updated_at: Date;
}