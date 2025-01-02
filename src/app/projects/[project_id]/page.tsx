import { Project } from "@/views/Projects/[project_id]/Project";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function ProjectPage(props: any) {
	return <Project />;
}
