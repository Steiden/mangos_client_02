"use client";

import { create, OrganizationEmployeeFillable } from "@/entities/Organization/OrganizationEmployee";
import { buttonVariants } from "@/shared/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/shared/components/ui/command";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { useOrganizationContext } from "@/shared/context";
import { useToast } from "@/shared/hooks/use-toast";
import { UserMemberCard } from "@/widgets/UserMemberCard/UserMemberCard";
import clsx from "clsx";
import { useLocalStorage } from "usehooks-ts";

export const OrganizationMembers = () => {
	const [token] = useLocalStorage("token", "");
	const { toast } = useToast();
    const { organization, updateOrganization } = useOrganizationContext();

	const handleLinkToProject = async (userId: number) => {
		const data: OrganizationEmployeeFillable = {
			organization_id: organization?.id,
			user_id: userId,
		};

		const response = await create(data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Привязка сотрудника к организации",
				description: "Ошибка привязки сотрудника к организации. Попробуйте позже",
			});
			return;
		}

        updateOrganization();
		toast({
			title: "Привязка сотрудника к организации",
			description: "Сотрудник успешно привязан к организации",
		});
	};

	return (
		<section className={clsx("std-container")}>
			<div>
				<h1 className={clsx("std-h1")}>Участники</h1>
				<p>Список сотрудников организации {organization?.name}</p>
			</div>

			<div className={clsx("std-container__content")}>
				<div className={clsx("std-container")}>
					{organization?.members?.map((member) => {
						return <UserMemberCard member={member} key={member.id} />;
					})}
				</div>
			</div>
		</section>
	);
};
