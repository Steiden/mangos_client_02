"use client";

import { ProjectMember } from "@/entities/project";
import styles from "./UserMemberCard.module.scss";
import clsx from "clsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { EllipsisVerticalIcon, Trash2Icon, UserPenIcon } from "lucide-react";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { useOrganizationContext, useProjectContext, useUserContext } from "@/shared/context";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { OrganizationEmployee, OrganizationEmployeeFillable } from "@/entities/organization/organization_employee";
import { TaskMember } from "@/entities/task";
import { useTaskContext } from "@/shared/context/context";
import { remove as removeTaskMember } from "@/entities/task/task_member/api";
import { remove as removeProjectMember } from "@/entities/project/project_member/api";
import { remove as removeOrganizationMember, update } from "@/entities/organization/organization_employee/api";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { MangosSelect } from "@/shared/components/ui/MangosSelect";
import { useState } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	member: ProjectMember | OrganizationEmployee | TaskMember;
	isActions?: boolean;
	size?: "small" | "medium" | "large";
};

export const UserMemberCard = ({
	member,
	isActions = true,
	size = "medium",
	className,
	...rest
}: Props) => {
	const { toast } = useToast();
	const { updateTask } = useTaskContext();
	const { project, updateProject } = useProjectContext();
	const { organization, updateOrganization } = useOrganizationContext();
	const { user } = useUserContext();
	const [token] = useLocalStorage("token", "");

	const [newPostId, setNewPostId] = useState(0);

	const handleDeleteFromProject = async () => {
		const response = await removeProjectMember(member.id, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Удаление сотрудника из проекта",
				description: "Не удалось удалить сотрудника из проекта. Попробуйте позже",
			});
			return;
		}

		updateProject();
		updateOrganization();
		toast({
			title: "Удаление сотрудника из проекта",
			description: "Сотрудник удален из проекта",
		});
	};

	const handleDeleteFromTask = async () => {
		const response = await removeTaskMember(member.id, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Удаление сотрудника из задачи",
				description: "Не удалось удалить сотрудника из задачи. Попробуйте позже",
			});
			return;
		}

		updateTask();
		updateProject();
		updateOrganization();
		toast({
			title: "Удаление сотрудника из задачи",
			description: "Сотрудник удален из задачи",
		});
	};

	const handleDeleteFromOrganization = async () => {
		const response = await removeOrganizationMember(member.id, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Удаление сотрудника из организации",
				description: "Не удалось удалить сотрудника из организации. Попробуйте позже",
			});
			return;
		}

		updateProject();
		updateOrganization();
		toast({
			title: "Удаление сотрудника из организации",
			description: "Сотрудник удален из организации",
		});
	};

	const handleEditMember = async (e: React.FormEvent, member: OrganizationEmployee) => {
		e.preventDefault();

		const data: OrganizationEmployeeFillable = {
			...member,
			post_id: newPostId,
		}

		const response = await update(member.id, data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Редактирование сотрудника",
				description: "Не удалось редактировать сотрудника. Попробуйте позже",
			});
			return;
		}
		updateOrganization();
		toast({
            title: "Редактирование сотрудника",
            description: "Информация о сотруднике успешно изменена",
        });
	}

	return (
		<div className={clsx(styles["card"], styles[`card--${size}`], className)} {...rest}>
			<div className={clsx(styles["card__content"])}>
				<Avatar>
					<AvatarImage src={member.user?.avatar || ""} alt="avatar" />
					<AvatarFallback>
						{member.user?.login?.split("")[0].toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className={clsx(styles["card__info"])}>
					<span>
						{member.user?.first_name} {member.user?.second_name}
					</span>
					{"organization" in member && (
						<span className="text-xs">
							{(member as OrganizationEmployee).post?.name}
						</span>
					)}
				</div>
			</div>
			<div className={clsx(styles["card__actions"])}>
				{isActions && (
					<>
						<Popover>
							<PopoverTrigger>
								<EllipsisVerticalIcon />
							</PopoverTrigger>
							<PopoverContent className="flex flex-col gap-1 bg-white p-1 border-2 rounded-xl w-[auto]">
								{user?.id === project?.user.id && "organization" in member && (
									<Dialog>
										<DialogTrigger
											className={clsx(
												buttonVariants({ variant: "ghost" }),
												"justify-start h-[30px]"
											)}
										>
											<UserPenIcon />
											Редактировать
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Редактарование сотрудника</DialogTitle>
											</DialogHeader>
											<form className="flex flex-col gap-2" onSubmit={(e) => handleEditMember(e, member)}>
												<MangosSelect
													placeholder="Выберите должность"
													items={
														organization?.posts.map((post) => ({
															label: post.name,
															value: post.id.toString(),
														})) || []
													}
													selectedItem={{
														label: (member as OrganizationEmployee).post
															?.name,
														value: (
															member as OrganizationEmployee
														).post?.id?.toString(),
													}}
													onChange={(value) => setNewPostId(+value)}
												/>
												<Button variant="outline" type="submit" className="std-button w-fit self-center">Редактировать</Button>
											</form>
										</DialogContent>
									</Dialog>
								)}
								<Button
									variant="ghost"
									className="justify-start h-[30px]"
									onClick={
										"organization" in member
											? handleDeleteFromOrganization
											: "task" in member
											? handleDeleteFromTask
											: handleDeleteFromProject
									}
								>
									<Trash2Icon />
									Удалить
								</Button>
							</PopoverContent>
						</Popover>
					</>
				)}
			</div>
		</div>
	);
};
