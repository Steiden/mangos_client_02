"use client";

import clsx from "clsx";
import styles from "./TaskCreate.module.scss";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
	CategoryShort,
	create as createTask,
	TaskFillable,
	TaskMemberFillable,
	TaskPriority,
} from "@/entities/task";
import { useOrganizationContext, useProjectContext, useUserContext } from "@/shared/context";
import { create as createTaskMember } from "@/entities/task/task_member";
import { FormField } from "@/shared/types/form";
import { renderField } from "@/features/renderField";
import { ExecutionStatuses } from "@/shared/api/constants";
import { getList as getTaskPriorities } from "@/entities/task/task_priority";

const fields: FormField[] = [
	{
		type: "text",
		id: "name",
		name: "name",
		placeholder: "Название задачи",
	},
	{
		type: "text",
		id: "description",
		name: "description",
		placeholder: "Описание задачи",
	},
	{
		type: "date",
		id: "started_at",
		name: "started_at",
		placeholder: "Дата начала",
	},
	{
		type: "date",
		id: "finished_at",
		name: "finished_at",
		placeholder: "Дата завершения",
	},
	{
		type: "combobox",
		id: "task_priority_id",
		name: "task_priority_id",
		placeholder: "Приоритет",
		data_name: "taskPriorities",
	},
	{
		type: "combobox",
		id: "category_id",
		name: "category_id",
		placeholder: "Категория",
		data_name: "categories",
	},
];

export const TasksCreate = () => {
	const router = useRouter();
	const { user } = useUserContext();
	const { organization } = useOrganizationContext();
	const { project } = useProjectContext();
	const { toast } = useToast();
	const [token] = useLocalStorage("token", "");

	const [data, setData] = useState<TaskFillable>({
		name: "",
		description: "",
		started_at: new Date(),
		finished_at: new Date(),
		execution_status_id: ExecutionStatuses.in_progress,
		task_priority_id: 0,
		category_id: 0,
		user_id: 0,
		project_id: 0,
	});
	const [showData, setShowData] = useState<{
		taskPriorities: TaskPriority[];
		categories: CategoryShort[];
	}>({
		taskPriorities: [],
		categories: [],
	});

	
	useEffect(() => {
		if(organization) setShowData({...showData, categories: organization.categories});
	}, [organization]);

	useEffect(() => {
		async function fetchData() {
			try {
				const taskPrioritiesResponse = await getTaskPriorities(token);

				setShowData({
					...showData,
					taskPriorities: taskPrioritiesResponse.success
						? taskPrioritiesResponse.data
						: [],
				});
			} catch {
				toast({
					variant: "destructive",
					title: "Ошибка",
					description: "Ошибка загрузки данных. Попробуйте позже",
				});
			}
		}
		fetchData();
	}, [token]);

	const tryCreateTask = async () => {
		data.user_id = user?.id;
		data.project_id = project?.id;

		const taskCreateResponse = await createTask(data, token);
		if (!taskCreateResponse.success) {
			toast({
				variant: "destructive",
				title: "Создание задачи",
				description: "Ошибка создания задачи. Попробуйте позже",
			});
			return null;
		}
		return taskCreateResponse.data;
	};

	const tryLinkTask = async (task_id: number) => {
		const linkData: TaskMemberFillable = {
			task_id,
			user_id: user?.id,
		};

		const taskLinkResponse = await createTaskMember(linkData, token);
		if (!taskLinkResponse.success) {
			toast({
				variant: "destructive",
				title: "Привязка к задаче",
				description: "Ошибка привязки к задаче. Попробуйте позже",
			});
			return null;
		}
		return taskLinkResponse.data;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const taskCreateResult = await tryCreateTask();
		if (!taskCreateResult) return;

		const taskLinkResult = await tryLinkTask(taskCreateResult.id);
		if (!taskLinkResult) return;

		toast({
			title: "Создание задачи",
			description: "Задача успешно создана",
		});

		router.push("/tasks");
	};

	return (
		<section className={clsx("std-center", styles["tasks-create"])}>
			<h1 className={clsx("std-h1", styles["tasks-create__title"])}>Создание задачи</h1>
			<form className={clsx(styles["tasks-create__form"])} onSubmit={handleSubmit}>
				{fields.map((field) => (
					<div className="grid w-full max-w-sm items-center gap-1.5" key={field.id}>
						<Label htmlFor={field.name}>{field.placeholder}</Label>
						{renderField(
							field,
							(value) => setData({ ...data, [field.name]: value }),
							showData
						)}
					</div>
				))}

				<Button
					variant="outline"
					type="submit"
					className={clsx("std-button", styles["tasks-create__button"])}
				>
					Создать
				</Button>
			</form>
		</section>
	);
};
