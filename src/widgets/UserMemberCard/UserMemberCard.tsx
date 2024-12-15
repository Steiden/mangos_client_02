"use client";

import { ProjectMember } from "@/entities/Project";
import styles from "./UserMemberCard.module.scss";
import clsx from "clsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { EllipsisVerticalIcon, Trash2Icon, UserPenIcon } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { remove } from "@/entities/Project/ProjectMember";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { useProjectContext, useUserContext } from "@/shared/context";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { OrganizationEmployee } from "@/entities/Organization/OrganizationEmployee";
import { TaskMember } from "@/entities/Task";

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
	const { project, updateProject } = useProjectContext();
	const { user } = useUserContext();
	const [token] = useLocalStorage("token", "");

	const handleDelete = async () => {
		const response = await remove(member.id, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Удаление сотрудника из проекта",
				description: "Не удалось удалить сотрудника из проекта. Попробуйте позже",
			});
			return;
		}

		updateProject();
		toast({
			title: "Удаление сотрудника из проекта",
			description: "Сотрудник удален из проекта",
		});
	};

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
							{(member as OrganizationEmployee).post.name}
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
								{user?.id === project?.user.id && (
									<Button
										variant="ghost"
										className="justify-start h-[30px]"
										onClick={() => {}}
									>
										<UserPenIcon />
										Редактировать
									</Button>
								)}
								<Button
									variant="ghost"
									className="justify-start h-[30px]"
									onClick={handleDelete}
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
