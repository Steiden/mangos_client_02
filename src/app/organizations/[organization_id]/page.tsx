import { Organization } from "@/views/Organizations/[organization_id]/Organization.module";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function OrganizationsMyPage(props: any) {
	return <Organization />;
}
