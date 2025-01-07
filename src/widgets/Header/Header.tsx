"use client";

import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useOrganizationContext, useProjectContext, useUserContext } from "@/shared/context";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { UserBadge } from "@/shared/components/UserBadge/UserBadge";
import { LogOutIcon, SettingsIcon, UserRoundIcon } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { Project } from "@/entities/Project";
import { User } from "@/entities/User";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Header = () => {
	const router = useRouter();
	const [, setToken] = useLocalStorage("token", "");
	const { user, setUser } = useUserContext();
	const { project, setProject } = useProjectContext();
	const { setOrganization } = useOrganizationContext();

	const logout = () => {
		setUser(null);
		setProject(null);
		setOrganization(null);
		setToken("");
	};

	return (
		<header className={styles.header}>
			<div className={styles.header__left}>
				{user && <SidebarTrigger />}
				<Link href="/">
					<Image src="/logo_alt.svg" width={30} height={30} alt="logo" />
				</Link>
				{project && <ProjectNavigation project={project} router={router} />}
			</div>
			<UserSection user={user} router={router} logout={logout} />
		</header>
	);
};

interface ProjectNavigationProps {
	project: Project;
	router: AppRouterInstance;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ project, router }) => (
	<div className="ml-3 text-lg">
		<Button variant="link" className="std-link" onClick={() => router.push("/projects")}>
			Проект
		</Button>
		<span>&nbsp;-&nbsp;</span>
		<Button
			variant="link"
			className="std-link"
			onClick={() => router.push(`/projects/${project.id}`)}
		>
			{project.name}
		</Button>
	</div>
);

interface UserSectionProps {
	user: User | null;
	router: AppRouterInstance;
	logout: () => void;
}

const UserSection: React.FC<UserSectionProps> = ({ user, router, logout }) =>
	user ? (
		<Popover>
			<PopoverTrigger>
				<UserBadge user={user} direction="right" size="small" isHover />
			</PopoverTrigger>
			<PopoverContent className="flex flex-col gap-1 bg-white p-1 border-2 rounded-xl w-[auto]">
				<Button
					variant="ghost"
					className="justify-start p-3 h-7"
					onClick={() => router.push("/profile")}
				>
					<UserRoundIcon />
					Профиль
				</Button>
				<Button
					variant="ghost"
					className="justify-start p-3 h-7"
					onClick={() => router.push("/settings")}
				>
					<SettingsIcon />
					Настройки
				</Button>
				<Button variant="ghost" className="justify-start p-3 h-7" onClick={logout}>
					<LogOutIcon />
					Выйти
				</Button>
			</PopoverContent>
		</Popover>
	) : (
		<div className="flex gap-2">
			<Button variant="link" className="p-0" onClick={() => router.push("/auth/login")}>
				Войти
			</Button>
			<Button variant="link" className="p-0" onClick={() => router.push("/auth/register")}>
				Регистрация
			</Button>
		</div>
	);
