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
				<p>Список участников задачи {organization?.name}</p>
			</div>

			<div className={clsx("std-container__content")}>
				<Dialog>
					<DialogTrigger
						className={clsx(buttonVariants({ variant: "outline" }), "self-end")}
					>
						Добавить участника
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Добавление участника в организацию</DialogTitle>
							<DialogDescription>
								Выбор ведется только из сотрудников вашей организации
							</DialogDescription>
						</DialogHeader>
						<Command
							filter={(value, search) => {
								return value.includes(search) ? 1 : 0;
							}}
						>
							<CommandInput placeholder="Поиск сотрудника..." />
							<CommandList>
								<CommandGroup className="py-2">
									<CommandEmpty>Свободных сотрудников нет.</CommandEmpty>
									{organization?.members
										?.filter(
											(member) =>
												!organization?.members.find(
													(m) => m.user.id === member.user.id
												)
										)
										.map((member) => {
											return (
												<CommandItem
													style={{ background: "none", padding: "0" }}
													key={member.id}
												>
													<UserMemberCard
														member={member}
														isActions={false}
														size="small"
														className="cursor-pointer"
														onClick={() =>
															handleLinkToProject(member.user.id)
														}
													/>
												</CommandItem>
											);
										})}
								</CommandGroup>
							</CommandList>
						</Command>
					</DialogContent>
				</Dialog>

				<div className={clsx("std-container")}>
					{organization?.members?.map((member) => {
						return <UserMemberCard member={member} key={member.id} />;
					})}
				</div>
			</div>
		</section>
	);
};
