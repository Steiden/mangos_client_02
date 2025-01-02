"use client";

import { useTaskContext } from "@/shared/context/context";
import clsx from "clsx";

export const TaskInfo = () => {
    const { task } = useTaskContext();

	return (
		<section className={clsx("std-container")}>
			<h1 className={clsx("std-h1")}>{task?.name}</h1>

			<p className={clsx()}>{task?.description}</p>
		</section>
	);
};
