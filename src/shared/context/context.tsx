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
import { me } from "@/entities/Auth/api";
import { useLocalStorage } from "usehooks-ts";
import { get as getOrganization, Organization } from "@/entities/Organization";
import { get as getProject, Project } from "@/entities/Project";
import { get as getTask, Task } from "@/entities/Task";

export const MangosContext = createContext<{
	data: MangosContextType;
	setData: Dispatch<SetStateAction<MangosContextType>>;
} | null>(null);

export function MangosContextProvider({ children }: { children: ReactNode }) {
	const [,setLocalUser] = useLocalStorage<User | null>("user", null);
	const [localOrganization, setLocalOrganization] = useLocalStorage<Organization | null>(
		"organization",
		null
	);
	const [localProject, setLocalProject] = useLocalStorage<Project | null>("project", null);
	const [localTask, setLocalTask] = useLocalStorage<Task | null>("task", null);

	const [data, setData] = useState<MangosContextType>({
		user: null,
		organization: null,
		project: null,
		task: null,
	});

	useEffect(() => {
		setData((prev) => ({
			...prev,
			organization: localOrganization,
			project: localProject,
			task: localTask,
		}));
	}, []);

	useEffect(() => {
		if (data.user) setLocalUser(data.user);
		if (data.organization) setLocalOrganization(data.organization);
		if (data.project) setLocalProject(data.project);
		if (data.task) setLocalTask(data.task);
	}, [data]);

	return (
		<MangosContext.Provider value={useMemo(() => ({ data, setData }), [data])}>
			{children}
		</MangosContext.Provider>
	);
}

export function useUserContext() {
	const [token] = useLocalStorage("token", "");
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}

	const { data, setData } = context;

	async function updateUser() {
		const response = await me(token);
		if (!response.success) return;
		setData((prev) => ({
			...prev,
			user: response.data,
		}));
	}

	return {
		user: data.user,
		setUser: (user: User | null) =>
			setData((prev) => ({
				...prev,
				user,
			})),
		updateUser,
	};
}

export function useOrganizationContext() {
	const [token] = useLocalStorage("token", "");
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useOrganizationContext must be used within a OrganizationProvider");
	}

	const { data, setData } = context;

	async function updateOrganization() {
		if (!data.organization?.id) return;
		const response = await getOrganization(data.organization?.id, token);
		if (!response.success) return;
		setData((prev) => ({
			...prev,
			organization: response.data,
		}));
	}

	return {
		organization: data.organization,
		setOrganization: (organization: Organization | null) =>
			setData((prev) => ({
				...prev,
				organization,
			})),
		updateOrganization,
	};
}

export function useProjectContext() {
	const [token] = useLocalStorage("token", "");
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useProjectContext must be used within a ProjectProvider");
	}

	const { data, setData } = context;

	async function updateProject() {
		if (!data.project?.id) return;
		const response = await getProject(data.project?.id, token);
		if (!response.success) return;
		setData((prev) => ({
			...prev,
			project: response.data,
		}));
	}

	return {
		project: data.project,
		setProject: (project: Project | null) =>
			setData((prev) => ({
				...prev,
				project,
			})),
		updateProject,
	};
}

export function useTaskContext() {
	const [token] = useLocalStorage("token", "");
	const context = useContext(MangosContext);

	if (!context) {
		throw new Error("useTaskContext must be used within a TaskProvider");
	}

	const { data, setData } = context;

	async function updateTask() {
		if (!data.task?.id) return;
		const response = await getTask(data.task?.id, token);
		if (!response.success) return;
		setData((prev) => ({
			...prev,
			task: response.data,
		}));
	}

	return {
		task: data.task,
		setTask: (task: Task | null) =>
			setData((prev) => ({
				...prev,
				task,
			})),
		updateTask,
	};
}
