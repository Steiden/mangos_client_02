"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import styles from "./Task.module.scss";
import clsx from "clsx";
import { BadgeInfoIcon, SettingsIcon, UserIcon } from "lucide-react";
import { TaskInfo } from "./TaskInfo";
import { TaskMembers } from "./TaskMembers";
import { TaskSettings } from "./TaskSettings";


export const Task = () => {
	return (
		<Tabs orientation="vertical" defaultValue="about" className={clsx(styles["task"])}>
			<TabsList className={clsx(styles["task__tabs"])}>
				<TabsTrigger value="about" className={clsx(styles["task__tab"])}>
					<BadgeInfoIcon width={20} height={20} />О задаче
				</TabsTrigger>
				<TabsTrigger value="members" className={clsx(styles["task__tab"])}>
					<UserIcon width={20} height={20} /> Участники
				</TabsTrigger>
				<TabsTrigger value="settings" className={clsx(styles["task__tab"])}>
					<SettingsIcon width={20} height={20} /> Настройки
				</TabsTrigger>
			</TabsList>
			<TabsContent value="about" className={clsx(styles["task__content"])}>
				<TaskInfo />
			</TabsContent>
			<TabsContent value="members" className={clsx(styles["task__content"])}>
				<TaskMembers />
			</TabsContent>
			<TabsContent value="settings" className={clsx(styles["task__content"])}>
				<TaskSettings />
			</TabsContent>
		</Tabs>
	);
};
