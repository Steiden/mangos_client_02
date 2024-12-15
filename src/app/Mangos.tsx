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
		if (user) {
			if (!user?.organizations?.length) {
				if (pathname === "/organizations/ask" || pathname === "/organizations/create")
					return;
				router.push("/organizations/ask");
				return;
			}
		}

		updateTask()
		updateProject();
		updateOrganization();
	}, [user]);

	return <div></div>;
};
