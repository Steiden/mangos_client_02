"use client";

import { Button } from "@/shared/components/ui/button";
import styles from "./Tasks.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { TaskCard } from "@/widgets/TaskCard/TaskCard";
import { useProjectContext } from "@/shared/context";

export const Tasks = () => {
	const router = useRouter();
    const { project } = useProjectContext();
	const { toast } = useToast();


	return (
		<section className={clsx("std-page", styles["tasks"])}>
			<h1 className={clsx("std-h1", styles["tasks__title"])}>Задачи</h1>

			<div className={clsx("std-container", "std-page__content")}>
				<Button
					variant="outline"
					className="self-end"
					onClick={() => router.push("/tasks/create")}
				>
					Создать задачу
				</Button>
				<div className={clsx("std-container", styles["tasks__card-grid"])}>
					{project?.tasks?.map((task) => {
						return <TaskCard task={task} key={task.id} />;
					})}
				</div>
			</div>
		</section>
	);
};
