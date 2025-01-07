"use client";

import { me } from "@/entities/auth/api";
import { useOrganizationContext, useUserContext } from "@/shared/context";
import { useProjectContext, useTaskContext } from "@/shared/context/context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export const Mangos = () => {
	const pathname = usePathname();
	const router = useRouter();

	const [token] = useLocalStorage("token", "");

	const { setUser, user } = useUserContext();
	const { setOrganization, updateOrganization } = useOrganizationContext();
	const { setProject, updateProject } = useProjectContext();
	const { setTask, updateTask } = useTaskContext();

	useEffect(() => {
		async function getMe() {
			const meResponse = await me(token);

			if (!meResponse.success) {
				setUser(null);
				setOrganization(null);
				setProject(null);
				setTask(null);

				if (pathname !== "/auth/login" && pathname !== "/auth/register" && pathname !== "/")
					router.push("/auth/login");

				return;
			}

			setUser(meResponse.data);
		}
		getMe();
	}, [token]);

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
