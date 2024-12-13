"use client";

import { Building, ClipboardList, PanelsTopLeft, Settings } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import { Combobox, ComboBoxItem } from "@/shared/components/ui/combobox";
import Link from "next/link";
import { useOrganizationContext, useUserContext } from "@/shared/context";
import { requestFormReset } from "react-dom";

const commonItems = [
	{
		title: "Проекты",
		url: "/projects",
		icon: PanelsTopLeft,
	},
	{
		title: "Задачи",
		url: "/tasks",
		icon: ClipboardList,
	},
	{
		title: "Настройки",
		url: "/settings",
		icon: Settings,
	},
];

const myItems = [
	{
		title: "Моя организация",
		url: "/organizations/my",
		icon: Building,
	},
];

export function AppSidebar() {
	const { organization, setOrganization } = useOrganizationContext();
	const { user } = useUserContext();

	const comboboxItems: ComboBoxItem[] = user
		? user?.organizations?.map((organization) => {
				return {
					value: organization.id.toString(),
					label: organization.name,
				};
		  })
		: [];

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<Combobox
							items={comboboxItems}
							placeholder="Выберите организацию..."
							defaultValue={organization?.name}
							className="w-[100%]"
							onChange={(value) => {
								if(!value || !user) return;
								const organization = user.organizations.find(o => o.id == +value);
								if(!organization) return;
								console.log(organization);
								setOrganization(organization);
							}}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Обычное</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{commonItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Мое</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{myItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
