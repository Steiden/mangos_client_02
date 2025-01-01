"use client";

import React from "react";
import clsx from "clsx";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardDescription,
} from "@/shared/components/ui/card";
import styles from "./TaskCard.module.css";
import { get, remove } from "@/entities/Task";
import { Popover, PopoverTrigger } from "@/shared/components/ui/popover";
import { EllipsisVerticalIcon, EyeIcon, Trash2Icon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { useProjectContext } from "@/shared/context";
import { TaskMiddle } from "@/entities/Task/types";
import { useTaskContext } from "@/shared/context/context";
import { UserBadge } from "@/shared/components/UserBadge/UserBadge";

type Props = {
	task: TaskMiddle;
};

const formatDate = (dateString: Date | string) => new Date(dateString).toLocaleDateString();

const TaskCard = ({ task }: Props) => {
	const router = useRouter();
	const { toast } = useToast();
	const { setTask } = useTaskContext();
	const { updateProject } = useProjectContext();
	const [token] = useLocalStorage("token", "");
	const { created_at, finished_at, execution_status, task_priority, updated_at, user } = task;

	const handleShow = async () => {
		const response = await get(task.id, token);
		if (!response.success) return;
		setTask(response.data);

		router.push(`/tasks/${task.id}`);
	};

	const handleDelete = async () => {
		const response = await remove(task.id, token);
		if (!response.success) {
			toast({
				title: "Удаление задачи",
				description: "Произошла ошибка при удалении задачи. Попробуйте позже",
			});
			return;
		}

		updateProject();
		toast({
			title: "Удаление задачи",
			description: "Задача успешно удалена",
		});
	};

	return (
		<Card className={clsx("min-w-[300px]", styles["task-card"])}>
			<Popover>
				<PopoverTrigger className={clsx(styles["task-card__popover"])}>
					<EllipsisVerticalIcon />
				</PopoverTrigger>
				<PopoverContent className="flex flex-col gap-1 bg-white p-1 border-2 rounded-xl">
					<Button variant="ghost" className="justify-start h-[30px]" onClick={handleShow}>
						<EyeIcon />
						Посмотреть
					</Button>
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

			<CardHeader className="task-card__header">
				<CardDescription>{formatDate(created_at)}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<p className={clsx(styles["task-card__text"])}>
					Срок:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{formatDate(finished_at)}
					</span>
				</p>
				<p className={clsx(styles["task-card__text"])}>
					Статус:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{execution_status.caption}
					</span>
				</p>
				<p className={clsx(styles["task-card__text"])}>
					Приоритет:{" "}
					<span className={clsx(styles["task-card__span"])}>{task_priority.name}</span>
				</p>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 items-start">
				<p className={clsx(styles["task-card__text"])}>
					Обновлено:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{formatDate(updated_at)}
					</span>
				</p>
				<UserBadge type="name" user={user} />
			</CardFooter>
		</Card>
	);
};

export default TaskCard;
