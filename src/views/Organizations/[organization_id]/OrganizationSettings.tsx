"use client";

import { OrganizationFillable, update } from "@/entities/Organization";
import { getList as getActivityTypes } from "@/entities/Organization/ActivityType";
import { CategoryFillable, CategoryShort, TagShort } from "@/entities/Task";
import { create as createCategory } from "@/entities/Task/Category";
import { create as createTag, TagFillable } from "@/entities/Task/Tag";
import { renderField } from "@/features/renderField";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { useOrganizationContext } from "@/shared/context";
import { useToast } from "@/shared/hooks/use-toast";
import { FormField } from "@/shared/types/form";
import clsx from "clsx";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const OrganizationSettings = () => {
	const [token] = useLocalStorage("token", "");
	const { toast } = useToast();
	const { organization, updateOrganization } = useOrganizationContext();

	const [data, setData] = useState<OrganizationFillable>({
		description: organization?.description,
		name: organization?.name,
		full_name: organization?.full_name,
		address: organization?.address,
		phone: organization?.phone,
		activity_type_id: organization?.activity_type.id || 0,
	});
	const [additionalData, setAdditionalData] = useState<{
		tags: TagShort[];
		categories: CategoryShort[];
	}>({
		tags: organization?.tags || [],
		categories: organization?.categories || [],
	});
	const [showData, setShowData] = useState<{
		activityTypes: { id: number; name: string }[];
	}>({
		activityTypes: [],
	});

	const [newTagName, setNewTagName] = useState<string>("");
	const [newCategoryName, setNewCategoryName] = useState<string>("");

	const fields: FormField[] = [
		{
			type: "text",
			id: "name",
			name: "name",
			placeholder: "Название задачи",
			value: data.name || "",
		},
		{
			type: "text",
			id: "full_name",
			name: "full_name",
			placeholder: "Полное название организации",
			value: data.full_name || "",
		},
		{
			type: "textarea",
			id: "description",
			name: "description",
			placeholder: "Описание организации",
			value: data.description || "",
		},
		{
			type: "text",
			id: "address",
			name: "address",
			placeholder: "Адрес организации",
			value: data.address || "",
		},
		{
			type: "tel",
			id: "phone",
			name: "phone",
			placeholder: "Телефон организации",
			value: data.phone || "",
		},
		{
			type: "combobox",
			id: "activity_type_id",
			name: "activity_type_id",
			placeholder: "Тип активности",
			data_name: "activityTypes",
			value: {
				id:
					showData.activityTypes.find((item) => item.id === data.activity_type_id)?.id ||
					0,
				name:
					showData.activityTypes.find((item) => item.id === data.activity_type_id)
						?.name || "",
			},
		},
	];

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!organization) {
			toast({
				variant: "destructive",
				title: "Сохранение организации",
				description: "Выберите организацию для сохранения её настроек",
			});
			return;
		}

		const response = await update(organization?.id, data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Сохранение организации",
				description: "При сохранении организации произошла ошибка. Попробуйте позже",
			});
			return;
		}

		updateOrganization();
		toast({
			title: "Сохранение организации",
			description: "Настройки организации успешно сохранены",
		});
	};

	const addTag = async () => {
		const data: TagFillable = {
			name: newTagName,
			organization_id: organization?.id,
		};

		const response = await createTag(data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Добавление тега",
				description: "При добавлении тега произошла ошибка. Попробуйте позже",
			});
			return;
		}
		setNewTagName("");
		const tagConverted: TagShort = {
			id: response.data.id,
			name: response.data.name,
			organization_id: organization?.id || organization?.id || 0,
			created_at: response.data.created_at,
			updated_at: response.data.updated_at,
		};
		setAdditionalData({
			...additionalData,
			tags: [...additionalData.tags, tagConverted],
		});
	};

	const addCategory = async () => {
		const data: CategoryFillable = {
			name: newCategoryName,
			organization_id: organization?.id,
		};

		const response = await createCategory(data, token);
		if (!response.success) {
			toast({
				variant: "destructive",
				title: "Добавление категории",
				description: "При добавлении категории произошла ошибка. Попробуйте позже",
			});
			return;
		}
		setNewCategoryName("");
		const categoryConverted: CategoryShort = {
			id: response.data.id,
			name: response.data.name,
			organization_id: organization?.id || organization?.id || 0,
			created_at: response.data.created_at,
			updated_at: response.data.updated_at,
		};
		setAdditionalData({
			...additionalData,
			categories: [...additionalData.categories, categoryConverted],
		});
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const activityiTypesResponse = await getActivityTypes(token);

				setShowData({
					...showData,
					activityTypes: activityiTypesResponse.success
						? activityiTypesResponse.data
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
	}, []);

	return (
		<section className={clsx("std-container")}>
			<div>
				<h1 className={clsx("std-h1")}>Настройки</h1>
				<p>Настройте параметры вашей организации</p>
			</div>

			<form className={clsx("std-container__content")} onSubmit={handleSubmit}>
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

				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="tags">Теги</Label>
					<div className="flex gap-2">
						{additionalData?.tags.map((tag) => (
							<Badge variant="outline" key={tag.id}>
								{tag.name}
							</Badge>
						))}
						<Popover>
							<PopoverTrigger className="flex items-center gap-1 text-sm">
								<Badge>
									<PlusIcon width={15} height={15} />
									Добавить
								</Badge>
							</PopoverTrigger>
							<PopoverContent className="flex flex-col gap-2">
								<Input
									value={newTagName}
									onChange={(e) => setNewTagName(e.target.value)}
								/>
								<Button variant="outline" onClick={addTag}>
									Добавить
								</Button>
							</PopoverContent>
						</Popover>
					</div>
				</div>

				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="tags">Категории</Label>
					<div className="flex gap-2">
						{additionalData?.categories.map((category) => (
							<Badge variant="outline" key={category.id}>
								{category.name}
							</Badge>
						))}
						<Popover>
							<PopoverTrigger className="flex items-center gap-1 text-sm">
								<Badge>
									<PlusIcon width={15} height={15} />
									Добавить
								</Badge>
							</PopoverTrigger>
							<PopoverContent className="flex flex-col gap-2">
								<Input
									value={newCategoryName}
									onChange={(e) => setNewCategoryName(e.target.value)}
								/>
								<Button variant="outline" onClick={addCategory}>
									Добавить
								</Button>
							</PopoverContent>
						</Popover>
					</div>
				</div>

				<Button variant="outline" type="submit" className={clsx("std-button")}>
					Сохранить
				</Button>
			</form>
		</section>
	);
};
