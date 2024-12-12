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
import { useToast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";

export const MangosContext = createContext<{
	data: MangosContextType;
	setData: Dispatch<SetStateAction<MangosContextType>>;
} | null>(null);

export function MangosContextProvider({ children }: { children: ReactNode }) {
	const router = useRouter();
	const { toast } = useToast();
	const [token] = useLocalStorage("token", "");

	const [data, setData] = useState<MangosContextType>({
		user: null,
		organization: null,
		project: null,
	});

	useEffect(() => {
		async function getMe() {
			const meResponse = await me(token);
			if (!meResponse.success) {
				setData({
					...data,
					user: null,
				});
				router.push("/auth/login");
				return;
			}
			setData({
				...data,
				user: meResponse.data,
			});
		}
		getMe();
	}, []);

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
		setUser: (user: User | null) => setData({ ...data, user }),
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
		setOrganization: (organization: Organization) => setData({ ...data, organization }),
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
		setProject: (project: Project) => setData({ ...data, project }),
	};
}
