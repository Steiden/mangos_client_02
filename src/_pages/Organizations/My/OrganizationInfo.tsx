"use client";

import { useOrganizationContext } from "@/shared/context/context";
import clsx from "clsx";

export const OrganizationInfo = () => {
    const { organization } = useOrganizationContext();

    return (
        <section className={clsx("std-container")}>
            <h1 className={clsx("std-h1")}>{organization?.name}</h1>
            <p className={clsx()}>{organization?.description}</p>
        </section>
    );
};
