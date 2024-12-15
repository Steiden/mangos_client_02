"use client";

import { useProjectContext } from "@/shared/context";
import clsx from "clsx";

export const ProjectSettings = () => {
    const { project } = useProjectContext();

    
	return (
		<section className={clsx("std-container")}>
			<h1 className={clsx("std-h1")}>Настройки</h1>

			<p className={clsx()}>{project?.description}</p>
		</section>
	);
};
