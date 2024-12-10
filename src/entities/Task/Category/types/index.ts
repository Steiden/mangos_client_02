import { Organization } from "@/entities/Organization/types";

export type Category = {
    id: number;
    name: string;
    organization: Organization;
    created_at: Date;
    updated_at: Date;
}