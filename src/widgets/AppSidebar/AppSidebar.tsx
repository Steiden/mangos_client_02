"use client";

import { Building, ClipboardList, PanelsTopLeft } from "lucide-react";
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
import { useOrganizationContext, useProjectContext, useUserContext } from "@/shared/context";
import { SidebarItem } from "./types";

export function AppSidebar() {
	const { project, setProject } = useProjectContext();
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

	const commonItems: SidebarItem[] = [
		{
			title: "Проекты",
			url: "/projects",
			icon: PanelsTopLeft,
			isVisible: !!organization,
		},
		{
			title: "Задачи",
			url: "/tasks",
			icon: ClipboardList,
			isVisible: !!project,
		},
	];

	const myItems: SidebarItem[] = [
		{
			title: "Моя организация",
			url: "/organizations/my",
			icon: Building,
			isVisible: !!organization,
		},
	];

	return (
		<>
			{user && (
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
										if (
											!value ||
											!user ||
											value.toString() == organization?.id.toString()
										)
											return;
										const organizationSearched = user.organizations.find(
											(o) => o.id == +value
										);
										if (!organizationSearched) return;
										setProject(null);
										setOrganization(organizationSearched);
									}}
								/>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					<SidebarContent>
						{!!myItems.find((item) => item.isVisible) && (
							<SidebarGroup>
								<SidebarGroupLabel>Обычное</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										{commonItems.map(
											(item) =>
												item.isVisible && (
													<SidebarMenuItem key={item.title}>
														<SidebarMenuButton asChild>
															<Link href={item.url}>
																<item.icon />
																<span>{item.title}</span>
															</Link>
														</SidebarMenuButton>
													</SidebarMenuItem>
												)
										)}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						)}

						{!!myItems.find((item) => item.isVisible) && (
							<SidebarGroup>
								<SidebarGroupLabel>Мое</SidebarGroupLabel>
								<SidebarGroupContent>
									<SidebarMenu>
										{myItems.map(
											(item) =>
												item.isVisible && (
													<SidebarMenuItem key={item.title}>
														<SidebarMenuButton asChild>
															<Link href={item.url}>
																<item.icon />
																<span>{item.title}</span>
															</Link>
														</SidebarMenuButton>
													</SidebarMenuItem>
												)
										)}
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						)}
					</SidebarContent>
				</Sidebar>
			)}
		</>
	);
}
