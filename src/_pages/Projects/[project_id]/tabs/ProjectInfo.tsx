"use client";

import { useProjectContext } from "@/shared/context";
import clsx from "clsx";

export const ProjectInfo = () => {
    const { project } = useProjectContext(); 


    return (
        <section className={clsx("std-container")}>
            <h1 className={clsx("std-h1")}>{project?.name}</h1>

            <p className={clsx()}>{project?.description}</p>
        </section>
    );
};
