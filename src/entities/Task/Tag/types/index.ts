import { OrganizationShort } from "@/entities/Organization/types";

export type Tag = {
	id: number;
	name: string;
	organization: OrganizationShort;
	created_at: Date;
	updated_at: Date;
};

export type TagShort = {
	id: number;
	name: string;
	organization_id: number;
	created_at: Date;
	updated_at: Date;
};

export type TagFillable = {
	name?: string;
	organization_id?: number;
}