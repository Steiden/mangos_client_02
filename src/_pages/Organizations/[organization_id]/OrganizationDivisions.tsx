"use client";

import { create as createDivision, DivisionFillable } from "@/entities/Organization/Division";
import { create as createPost, PostFillable } from "@/entities/Organization/Post";
import { Badge } from "@/shared/components/ui/badge";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { useOrganizationContext, useUserContext } from "@/shared/context";
import { useToast } from "@/shared/hooks/use-toast";
import clsx from "clsx";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const OrganizationDivisions = () => {
	const [token] = useLocalStorage("token", "");
	const { toast } = useToast();
	const { user } = useUserContext();
	const { organization, updateOrganization } = useOrganizationContext();

	const [newDivisionName, setNewDivisionName] = useState<string>("");
	const [newPostName, setNewPostName] = useState<string>("");

	const handleCreateDivision = async (e: React.FormEvent) => {
		e.preventDefault();

		const data: DivisionFillable = {
			user_id: user?.id,
			organization_id: organization?.id,
			name: newDivisionName,
		};

		const response = await createDivision(data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Создание подразделения",
				description: "Ошибка создания подразделения. Попробуйте позже",
			});
			return;
		}
		setNewDivisionName("");

		updateOrganization();
		toast({
			title: "Создание подразделения",
			description: "Подразделение успешно создано",
		});
	};

	const handleCreatePost = async (division_id: number) => {
		const data: PostFillable = {
			division_id: division_id,
			name: newPostName,
		};

		const response = await createPost(data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Создание должности",
				description: "Ошибка создания должности. Попробуйте позже",
			});
			return;
		}
		setNewPostName("");

		updateOrganization();
		toast({
			title: "Создание должности",
			description: "Должность успешно создана",
		});
	};

	return (
		<section className={clsx("std-container")}>
			<div>
				<h1 className={clsx("std-h1")}>Подразделения</h1>
				<p>Настройте иерархию в вашей организации</p>
			</div>

			<div className={clsx("std-container__content")}>
				<Dialog>
					<DialogTrigger
						className={clsx(buttonVariants({ variant: "outline" }), "self-end")}
					>
						Создать подразделение
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Создание подразделения</DialogTitle>
							<form className="flex flex-col gap-2" onSubmit={handleCreateDivision}>
								<Input
									value={newDivisionName}
									onChange={(e) => setNewDivisionName(e.target.value)}
								/>
								<Button variant="outline" className="std-button w-fit self-center">
									Создать
								</Button>
							</form>
						</DialogHeader>
					</DialogContent>
				</Dialog>

				<div className="flex flex-col gap-3 w-full">
					{organization?.divisions.map((division) => (
						<div
							key={division.id}
							className="border border-input rounded-md shadow-sm w-full px-5 py-3"
						>
							<h2 className="std-h2">{division.name}</h2>

							<div className="grid w-full items-center gap-1.5 mt-5">
								<div className="flex gap-2 flex-wrap">
									{division?.posts.map((post) => (
										<Badge
											variant="outline"
											className="text-md font-normal w-max"
											key={post.id}
										>
											{post.name}
										</Badge>
									))}
									<Popover>
										<PopoverTrigger className="flex items-center gap-1">
											<Badge className="flex gap-1 text-md">
												<PlusIcon width={20} height={20} />
												Добавить должность
											</Badge>
										</PopoverTrigger>
										<PopoverContent className="flex flex-col gap-2">
											<Input
												value={newPostName}
												onChange={(e) => setNewPostName(e.target.value)}
											/>
											<Button
												variant="outline"
												onClick={() => handleCreatePost(division.id)}
											>
												Добавить
											</Button>
										</PopoverContent>
									</Popover>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
