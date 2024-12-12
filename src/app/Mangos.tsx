"use client";

import { useUserContext } from "@/shared/context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Mangos = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { user } = useUserContext();

	useEffect(() => {
		if (user) {
			if (!user?.organizations.length) {
				if (pathname === "/organizations/ask" || pathname === "/organizations/create")
					return;
				router.push("/organizations/ask");
				return;
			}
		}
	}, [user]);

	return <div></div>;
};
