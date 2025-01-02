"use client";

import styles from "./Project.module.scss";
import clsx from "clsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { ProjectInfo } from "./tabs/ProjectInfo";
import { ProjectMembers } from "./tabs/ProjectMembers";
import { ProjectSettings } from "./tabs/ProjectSettings";
import { BadgeInfoIcon, SettingsIcon, UserIcon } from "lucide-react";

export const Project = () => {
	return (
		<Tabs orientation="vertical" defaultValue="about" className={clsx(styles["project"])}>
			<TabsList className={clsx(styles["project__tabs"])}>
				<TabsTrigger value="about" className={clsx(styles["project__tab"])}>
					<BadgeInfoIcon width={20} height={20} />О проекте
				</TabsTrigger>
				<TabsTrigger value="members" className={clsx(styles["project__tab"])}>
					<UserIcon width={20} height={20} /> Участники
				</TabsTrigger>
				<TabsTrigger value="settings" className={clsx(styles["project__tab"])}>
					<SettingsIcon width={20} height={20} /> Настройки
				</TabsTrigger>
			</TabsList>
			<TabsContent value="about" className={clsx(styles["project__content"])}>
				<ProjectInfo />
			</TabsContent>
			<TabsContent value="members" className={clsx(styles["project__content"])}>
				<ProjectMembers />
			</TabsContent>
			<TabsContent value="settings" className={clsx(styles["project__content"])}>
				<ProjectSettings />
			</TabsContent>
		</Tabs>
	);
};
