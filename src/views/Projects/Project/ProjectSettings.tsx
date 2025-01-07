"use client";

import { getList as getExecutionStatuses } from "@/entities/execution_status";
import { ProjectFillable, update } from "@/entities/project";
import { renderField } from "@/features/renderField";
import { Button } from "@/shared/components/ui/button";
import { useOrganizationContext, useProjectContext } from "@/shared/context";
import { useToast } from "@/shared/hooks/use-toast";
import { FormField } from "@/shared/types/form";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const ProjectSettings = () => {
	const [token] = useLocalStorage("token", "");
	const { toast } = useToast();
	const { project, updateProject } = useProjectContext();
	const { updateOrganization } = useOrganizationContext();

	const [data, setData] = useState<ProjectFillable>({
		name: project?.name || "",
		description: project?.description || "",
		execution_status_id: project?.execution_status.id || 0,
	});
	const [showData, setShowData] = useState<{
		executionStatuses: { id: number; name: string }[];
	}>({
		executionStatuses: [],
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
	];

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!project) {
			toast({
				variant: "destructive",
				title: "Сохранение проекта",
				description: "Выберите проект для сохранения его настроек",
			});
			return;
		}

		const response = await update(project?.id, data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Сохранение проекта",
				description: "При сохранении проекта произошла ошибка. Попробуйте позже",
			});
			return;
		}

		updateProject();
		updateOrganization();
		toast({
			title: "Сохранение проекта",
			description: "Настройки проекта успешно сохранены",
		});
	};

	useEffect(() => {
		async function fetchData() {
			const response = await getExecutionStatuses(token);
			if (!response.success) {
				toast({
					variant: "destructive",
					title: "Загрузка страница",
					description: "При загрузке страницы произошла ошибка. Попробуйте позж",
				});
				return;
			}

			setShowData({
				...showData,
				executionStatuses: response.data.map((status) => {
					return {
						id: status.id,
						name: status.caption,
					};
				}),
			});
		}
		fetchData();
	}, []);

	return (
		<section className={clsx("std-container")}>
			<div>
				<h1 className={clsx("std-h1")}>Настройки</h1>
				<p>Настройте параметры вашего проекта</p>
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
