import { Organization } from "@/views/Organizations/Organization/Organization";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function OrganizationsMyPage(props: any) {
	return <Organization />;
}
