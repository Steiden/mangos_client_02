"use client";

import styles from "./OrganizationsMy.module.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import clsx from "clsx";
import { BadgeInfoIcon, SettingsIcon, UserIcon } from "lucide-react";
import { OrganizationInfo } from "./OrganizationInfo";
import { OrganizationMembers } from "./OrganizationMembers";
import { OrganizationSettings } from "./OrganizationSettings";


export const OrganizationsMy = () => {
    return (
		<Tabs orientation="vertical" defaultValue="about" className={clsx(styles["organization"])}>
			<TabsList className={clsx(styles["organization__tabs"])}>
				<TabsTrigger value="about" className={clsx(styles["organization__tab"])}>
					<BadgeInfoIcon width={20} height={20} />Об организации
				</TabsTrigger>
				<TabsTrigger value="members" className={clsx(styles["organization__tab"])}>
					<UserIcon width={20} height={20} /> Участники
				</TabsTrigger>
				<TabsTrigger value="settings" className={clsx(styles["organization__tab"])}>
					<SettingsIcon width={20} height={20} /> Настройки
				</TabsTrigger>
			</TabsList>
			<TabsContent value="about" className={clsx(styles["organization__content"])}>
				<OrganizationInfo />
			</TabsContent>
			<TabsContent value="members" className={clsx(styles["organization__content"])}>
				<OrganizationMembers />
			</TabsContent>
			<TabsContent value="settings" className={clsx(styles["organization__content"])}>
				<OrganizationSettings />
			</TabsContent>
		</Tabs>    )
}