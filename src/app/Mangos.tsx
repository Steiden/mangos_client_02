"use client";

import { useOrganizationContext, useUserContext } from "@/shared/context";
import { useProjectContext, useTaskContext } from "@/shared/context/context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Mangos = () => {
	const pathname = usePathname();
	const router = useRouter();

	const { user } = useUserContext();
	const { updateTask } = useTaskContext();
	const { updateProject } = useProjectContext();
	const { updateOrganization } = useOrganizationContext();

	useEffect(() => {
		updateTask();
		updateProject();
		updateOrganization();
	}, [user]);

	useEffect(() => {
		if (
			new RegExp("^/organizations|/tasks|/projects").test(pathname) &&
			!new RegExp("/organizations/ask|/organizations/create").test(pathname)
		) {
			if (!user?.organizations.length) {
				router.push("/organizations/ask");
				return;
			}
		}
	}, [pathname]);

	return <div id="mangos"></div>;
};
