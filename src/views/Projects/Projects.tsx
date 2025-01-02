"use client";

import clsx from "clsx";
import styles from "./Projects.module.scss";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/shared/components/ui/table";
import { useOrganizationContext, useProjectContext } from "@/shared/context";
import { useEffect, useState } from "react";
import { ExecutionStatus, getList } from "@/entities/ExecutionStatus";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";
import { get } from "@/entities/Project";
import { useToast } from "@/shared/hooks/use-toast";

export const Projects = () => {
	const { toast } = useToast();
	const router = useRouter();
	const [token] = useLocalStorage("token", "");

	const { setProject } = useProjectContext();
	const { organization } = useOrganizationContext();

	const [executionStatuses, setExecutionStatuses] = useState<ExecutionStatus[]>([]);

	const getProject = async (id: number) => {
		const response = await get(id, token);
		if (!response.success) {
			toast({
				title: "Выбор проекта",
				description: "Произошла ошибка выбора проекта. Попробуйте позже",
			});
			return null;
		}
		return response.data;
	};

	useEffect(() => {
		async function getExecutionStatuses() {
			const response = await getList(token);
			if (!response.success) {
				console.error("Error fetching execution statuses:", response.error);
				return;
			}
			setExecutionStatuses(response.data);
		}
		getExecutionStatuses();
	}, []);

	return (
		<section className={clsx("std-page", styles["projects"])}>
			<h1 className={clsx("std-h1", styles["projects__title"])}>Проекты</h1>

			<div className={clsx("std-container", "std-page__content")}>
				<Button
					variant="outline"
					className="self-end"
					onClick={() => router.push("/projects/create")}
				>
					Создать проект
				</Button>
				<Table>
					<TableCaption>Список проектов организации {organization?.name}</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[50px]">#</TableHead>
							<TableHead>Название</TableHead>
							<TableHead>Статус выполнения</TableHead>
							<TableHead className="text-right">Создано</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{organization?.projects?.map((project, index) => (
							<TableRow
								key={project.id}
								className="cursor-pointer"
								onClick={async () => {
									setProject(await getProject(project.id));
									router.push(`/projects/${project.id}`);
								}}
							>
								<TableCell className="font-medium">{index + 1}</TableCell>
								<TableCell>{project.name}</TableCell>
								<TableCell>
									{
										executionStatuses.find(
											(status) => status.id === project.execution_status_id
										)?.caption
									}
								</TableCell>
								<TableCell className="text-right">
									{new Date(project.created_at).toLocaleDateString()}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</section>
	);
};
