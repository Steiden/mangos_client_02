"use client";

import clsx from "clsx";
import styles from "./ProjectCreate.module.scss";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { useOrganizationContext, useUserContext } from "@/shared/context";
import { useRouter } from "next/navigation";
import { create as createProject, ProjectFillable } from "@/entities/Project";
import { Textarea } from "@/shared/components/ui/textarea";
import { create, ProjectMemberFillable } from "@/entities/Project/ProjectMember";
import { ExecutionStatuses } from "@/shared/api/constants";

export const ProjectsCreate = () => {
	const router = useRouter();
	const { organization, updateOrganization } = useOrganizationContext();
	const { user } = useUserContext();
	const { toast } = useToast();
	const [token] = useLocalStorage("token", "");

	const [data, setData] = useState<ProjectFillable>({
		name: "",
		description: "",
	});

	const tryCreateProject = async () => {
		data.organization_id = organization?.id;
		data.execution_status_id = ExecutionStatuses.in_progress;
		data.user_id = user?.id;

		const projectCreateResponse = await createProject(data, token);
		if (!projectCreateResponse.success) {
			toast({
				variant: "destructive",
				title: "Создание проекта",
				description: "Ошибка создания проекта. Попробуйте позже",
			});
			return null;
		}
		return projectCreateResponse.data;
	};

	const tryLinkProject = async (project_id: number) => {
		const linkData: ProjectMemberFillable = {
			project_id,
			user_id: user?.id,
		};

		const projectLinkResponse = await create(linkData, token);
		if (!projectLinkResponse.success) {
			toast({
				variant: "destructive",
				title: "Привязка к проекту",
				description: "Ошибка привязки к проекту. Попробуйте позже",
			});
			return null;
		}
		return projectLinkResponse.data;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const projectCreateResult = await tryCreateProject();
		if (!projectCreateResult) return;

		const projectLinkResult = await tryLinkProject(projectCreateResult.id);
		if (!projectLinkResult) return;

		toast({
			title: "Создание проекта",
			description: "Проект успешно создан",
		});

		updateOrganization();
		router.push("/projects");
	};

	return (
		<section className={clsx("std-center", styles["projects-create"])}>
			<h1 className={clsx("std-h1", styles["projects-create__title"])}>Создание проекта</h1>
			<form className={clsx(styles["projects-create__form"])} onSubmit={handleSubmit}>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="name">Название</Label>
					<Input onChange={(e) => setData({ ...data, name: e.target.value })} />
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="activity_type_id">Описание</Label>
					<Textarea
						className="max-h-60"
						onChange={(e) => setData({ ...data, description: e.target.value })}
					/>
				</div>

				<Button
					variant="outline"
					type="submit"
					className={clsx("std-button", styles["projects-create__button"])}
				>
					Создать
				</Button>
			</form>
		</section>
	);
};
