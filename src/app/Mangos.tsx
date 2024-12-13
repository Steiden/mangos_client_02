"use client";

import { useOrganizationContext, useUserContext } from "@/shared/context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Mangos = () => {
	const pathname = usePathname();
	const router = useRouter();

	const { user } = useUserContext();
	const { organization, updateOrganization } = useOrganizationContext();

	useEffect(() => {
		if (user) {
			if (!user?.organizations?.length) {
				if (pathname === "/organizations/ask" || pathname === "/organizations/create")
					return;
				router.push("/organizations/ask");
				return;
			}
		}

		updateOrganization();
	}, [user]);

	return <div></div>;
};
