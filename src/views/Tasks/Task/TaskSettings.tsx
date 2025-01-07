"use client";

import { getList as getExecutionStatuses } from "@/entities/execution_status";
import { getList as getTaskPriorities } from "@/entities/task/task_priority";
import { getList as getCategories } from "@/entities/task/category";
import { TaskFillable, update } from "@/entities/task";
import { renderField } from "@/features/renderField";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { useOrganizationContext, useProjectContext } from "@/shared/context";
import { useTaskContext } from "@/shared/context/context";
import { useToast } from "@/shared/hooks/use-toast";
import { FormField } from "@/shared/types/form";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const TaskSettings = () => {
	const [token] = useLocalStorage("token", "");
	const { toast } = useToast();
	const { task, updateTask } = useTaskContext();
	const { updateProject } = useProjectContext();
	const { updateOrganization } = useOrganizationContext();

	const [data, setData] = useState<TaskFillable>({
		name: task?.name || "",
		description: task?.description || "",
		started_at: task?.started_at || new Date(),
		finished_at: task?.finished_at || new Date(),
		execution_status_id: task?.execution_status.id || 0,
		task_priority_id: task?.task_priority.id || 0,
		category_id: task?.category.id || 0,
	});
	const [showData, setShowData] = useState<{
		executionStatuses: { id: number; name: string }[];
		taskPriorities: { id: number; name: string }[];
		categories: { id: number; name: string }[];
	}>({
		executionStatuses: [],
		taskPriorities: [],
		categories: [],
	});

	const fields: FormField[] = [
		{
			type: "text",
			id: "name",
			name: "name",
			placeholder: "Название задачи",
			value: data.name,
		},
		{
			type: "text",
			id: "description",
			name: "description",
			placeholder: "Описание задачи",
			value: data.description,
		},
		{
			type: "date",
			id: "started_at",
			name: "started_at",
			placeholder: "Дата начала выполнения",
			value: data.started_at,
		},
		{
			type: "date",
			id: "finished_at",
			name: "finished_at",
			placeholder: "Дата завершения выполнения",
			value: data.finished_at,
		},
		{
			type: "combobox",
			id: "execution_status_id",
			name: "execution_status_id",
			placeholder: "Статус выполнения",
			data_name: "executionStatuses",
			value: {
				id:
					showData.executionStatuses.find((item) => item.id === data.execution_status_id)
						?.id || 0,
				name:
					showData.executionStatuses.find((item) => item.id === data.execution_status_id)
						?.name || "",
			},
		},
		{
			type: "combobox",
			id: "task_priority_id",
			name: "task_priority_id",
			placeholder: "Приоритет",
			data_name: "taskPriorities",
			value: {
				id:
					showData.taskPriorities.find((item) => item.id === data.task_priority_id)?.id ||
					0,
				name:
					showData.taskPriorities.find((item) => item.id === data.task_priority_id)
						?.name || "",
			},
		},
		{
			type: "combobox",
			id: "category_id",
			name: "category_id",
			placeholder: "Категория",
			data_name: "categories",
			value: {
				id: showData.categories.find((item) => item.id === data.category_id)?.id || 0,
				name: showData.categories.find((item) => item.id === data.category_id)?.name || "",
			},
		},
	];

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!task) {
			toast({
				variant: "destructive",
				title: "Сохранение задачи",
				description: "Выберите задачу для сохранения её настроек",
			});
			return;
		}

		const response = await update(task?.id, data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Сохранение задачи",
				description: "При сохранении задачи произошла ошибка. Попробуйте позже",
			});
			return;
		}

		updateTask();
		updateProject();
		updateOrganization();
		toast({
			title: "Сохранение задачи",
			description: "Настройки задачи успешно сохранены",
		});
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const executionStatusesResponse = await getExecutionStatuses(token);
				const taskPrioritiesResponse = await getTaskPriorities(token);
				const categoriesResponse = await getCategories(token);

				setShowData({
					...showData,
					taskPriorities: taskPrioritiesResponse.success
						? taskPrioritiesResponse.data
						: [],
					executionStatuses: executionStatusesResponse.success
						? executionStatusesResponse.data.map((taskStatus) => {
								return {
									id: taskStatus.id,
									name: taskStatus.caption,
								};
						  })
						: [],
					categories: categoriesResponse.success ? categoriesResponse.data : [],
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
	}, []);

	return (
		<section className={clsx("std-container")}>
			<div>
				<h1 className={clsx("std-h1")}>Настройки</h1>
				<p>Настройте параметры вашей задачи</p>
			</div>

			<form className={clsx("std-container__content")} onSubmit={handleSubmit}>
				{fields.map((field) =>
					renderField(
						field,
						(value) => setData({ ...data, [field.name]: value }),
						showData,
						true
					)
				)}
				<Button variant="outline" type="submit" className={clsx("std-button")}>
					Сохранить
				</Button>
			</form>
		</section>
	);
};
