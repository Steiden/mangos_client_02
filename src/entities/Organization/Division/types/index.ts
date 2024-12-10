import { Organization } from "../../types";

export type Division = {
    id: number;
    name: string;
    organization: Organization;
    created_at: Date;
    updated_at: Date;
}