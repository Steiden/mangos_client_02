import { Project } from "@/views/Projects/Project/Project";

export function generateStaticParams() {
	return [{ id: "test" }];
}

export default function ProjectPage(props: any) {
	return <Project />;
}
