"use client";

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { MangosContextType } from "./types";
import { User } from "@/entities/User/types";
import { Organization } from "@/entities/Organization/types";
import { Project } from "@/entities/Project/types";
import { me } from "@/entities/Auth/api";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/navigation";

export const MangosContext = createContext<{
	data: MangosContextType;
	setData: Dispatch<SetStateAction<MangosContextType>>;
} | null>(null);

export function MangosContextProvider({ children }: { children: ReactNode }) {
	const [localUser, setLocalUser] = useLocalStorage<User | null>("user", null);
	const [localOrganization, setLocalOrganization] = useLocalStorage<Organization | null>(
		"organization",
		null
	);
	const [localProject, setLocalProject] = useLocalStorage<Project | null>("project", null);

	const router = useRouter();
	const [token] = useLocalStorage("token", "");

	const [data, setData] = useState<MangosContextType>({
		user: null,
		organization: null,
		project: null,
	});

	useEffect(() => {
		setData((prev) => ({
			...prev,
			organization: localOrganization,
			project: localProject,
		}));
	}, []);

	useEffect(() => {
		async function getMe() {
			const meResponse = await me(token);
			if (!meResponse.success) {
				setData((prev) => ({
					...prev,
					user: null,
				}));
				router.push("/auth/login");
				return;
			}
			setData((prev) => ({
				...prev,
				user: meResponse.data,
			}));
		}
		getMe();
	}, [token]);

	useEffect(() => {
		if (data.user) setLocalUser(data.user);
		if (data.organization) setLocalOrganization(data.organization);
		if (data.project) setLocalProject(data.project);
	}, [data]);

	return (
		<MangosContext.Provider value={useMemo(() => ({ data, setData }), [data])}>
			{children}
		</MangosContext.Provider>
	);
}

export function useUserContext() {
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}

	const { data, setData } = context;
	return {
		user: data.user,
		setUser: (user: User | null) =>
			setData((prev) => ({
				...prev,
				user,
			})),
	};
}

export function useOrganizationContext() {
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useOrganizationContext must be used within a OrganizationProvider");
	}

	const { data, setData } = context;
	return {
		organization: data.organization,
		setOrganization: (organization: Organization | null) =>
			setData((prev) => ({
				...prev,
				organization,
			})),
	};
}

export function useProjectContext() {
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useProjectContext must be used within a ProjectProvider");
	}

	const { data, setData } = context;
	return {
		project: data.project,
		setProject: (project: Project | null) =>
			setData((prev) => ({
				...prev,
				project,
			})),
	};
}
