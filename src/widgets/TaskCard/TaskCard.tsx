"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import styles from "./TaskCard.module.scss";
import { get, remove } from "@/entities/Task";
import clsx from "clsx";
import { UserBadge } from "@/shared/components/UserBadge/UserBadge";
import { Popover, PopoverTrigger } from "@/shared/components/ui/popover";
import { EditIcon, EllipsisVerticalIcon, EyeIcon, Trash2Icon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { useProjectContext } from "@/shared/context";
import { TaskMiddle } from "@/entities/Task/types";
import { useTaskContext } from "@/shared/context/context";

type Props = {
	task: TaskMiddle;
};

export const TaskCard = ({ task }: Props) => {
	const router = useRouter();
	const { toast } = useToast();
	const { setTask } = useTaskContext();
	const { updateProject } = useProjectContext();
	const [token] = useLocalStorage("token", "");
	
	const handleShow = async () => {
		const response = await get(task.id, token);
		if(!response.success) return;
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
					<Button
						variant="ghost"
						className="justify-start h-[30px]"
						onClick={handleShow}
					>
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
				<CardTitle>{task.name}</CardTitle>
				<CardDescription>{new Date(task.created_at).toLocaleDateString()}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<p className={clsx(styles["task-card__text"])}>
					Срок:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{new Date(task.finished_at).toLocaleDateString()}
					</span>
				</p>
				<p className={clsx(styles["task-card__text"])}>
					Статус:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{task.execution_status.caption}
					</span>
				</p>
				<p className={clsx(styles["task-card__text"])}>
					Приоритет:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{task.task_priority.name}
					</span>
				</p>
			</CardContent>
			<CardFooter className="flex flex-col gap-2 items-start">
				<p className={clsx(styles["task-card__text"])}>
					Обновлено:{" "}
					<span className={clsx(styles["task-card__span"])}>
						{new Date(task.updated_at).toLocaleDateString()}
					</span>
				</p>
				<UserBadge type="name" user={task.user} />
			</CardFooter>
		</Card>
	);
};
