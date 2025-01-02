import { Organization } from "@pages/Organizations/[organization_id]/Organization";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function OrganizationsMyPage(props: any) {
	return <Organization />;
}
