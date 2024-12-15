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

export const Header = () => {
	const router = useRouter();
	const [,setToken] = useLocalStorage("token", "");
	const { user, setUser } = useUserContext();
	const { project, setProject } = useProjectContext();
	const { organization, setOrganization } = useOrganizationContext();

	const logout = () => {
		setUser(null);
        setProject(null);
        setOrganization(null);
		setToken("");
	}

	return (
		<header className={styles["header"]}>
			<div className={styles["header__left"]}>
				<SidebarTrigger />
				<Link href="/">
					<Image src="/logo_alt.svg" width={30} height={30} alt="logo" />
				</Link>
				{project && (
					<div className="ml-3 text-lg">
						<Button
							variant="link"
							className="std-link"
							onClick={() => router.push("/projects")}
						>
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
				)}
			</div>

			{user ? (
				<Popover>
					<PopoverTrigger className="">
						<UserBadge user={user} direction="right" size="small" />
					</PopoverTrigger>
					<PopoverContent className="flex flex-col gap-1 bg-white p-1 border-2 rounded-xl w-[auto]">
						<Button variant="ghost" className="justify-start p-3 h-7" onClick={() => router.push("/profile")}>
							<UserRoundIcon />Профиль
						</Button>
						<Button variant="ghost" className="justify-start p-3 h-7" onClick={() => router.push("/settings")}>
							<SettingsIcon />Настройки
						</Button>
						<Button variant="ghost" className="justify-start p-3 h-7" onClick={logout}>
							<LogOutIcon />Выйти
						</Button>
					</PopoverContent>
				</Popover>
			) : (
				<div className="flex gap-2">
					<Button
						variant="link"
						className="p-0"
						onClick={() => router.push("/auth/login")}
					>
						Войти
					</Button>
					<Button
						variant="link"
						className="p-0"
						onClick={() => router.push("/auth/register")}
					>
						Регистрация
					</Button>
				</div>
			)}
		</header>
	);
};
