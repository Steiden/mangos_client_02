"use client";

import clsx from "clsx";
import styles from "./OrganizationCreate.module.scss";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { useEffect, useState } from "react";
import { create as createOrganization, OrganizationFillable } from "@/entities/organization";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { ActivityType, getList } from "@/entities/organization/activity_type";
import { useOrganizationContext, useUserContext } from "@/shared/context";
import { create } from "@/entities/organization/organization_employee/api";
import { OrganizationEmployeeFillable } from "@/entities/organization/organization_employee";
import { useRouter } from "next/navigation";
import { FormField } from "@/shared/types/form";
import { renderField } from "@/features/renderField";

const fields: FormField[] = [
	// {
	// 	type: "text",
	// 	id: "full_name",
	// 	name: "full_name",
	// 	placeholder: "Полное название организации",
	// },
	{
		type: "text",
		id: "name",
		name: "name",
		placeholder: "Название организации",
	},
	{
		type: "textarea",
        id: "description",
        name: "description",
        placeholder: "Описание организации",
	},
	{
		type: "text",
		id: "address",
		name: "address",
		placeholder: "Адрес организации",
	},
	{
		type: "tel",
		id: "phone",
		name: "phone",
		placeholder: "Телефон организации",
	},
	{
		type: "combobox",
		id: "activity_type_id",
		name: "activity_type_id",
		placeholder: "Тип активности",
		data_name: "activityTypes",
	},
];

export const OrganizationsCreate = () => {
	const router = useRouter();
	const { setOrganization } = useOrganizationContext();
	const { user, updateUser } = useUserContext();
	const { toast } = useToast();
	const [token] = useLocalStorage("token", "");

	const [data, setData] = useState<OrganizationFillable>({
		description: "",
		// full_name: "",
		name: "",
		address: "",
		phone: "",
		activity_type_id: 0,
		user_id: 0,
	});
	const [showData, setShowData] = useState<{
		activityTypes: ActivityType[];
	}>({
		activityTypes: [],
	});


	useEffect(() => {
		async function fetchData() {
			const activityTypesResponse = await getList(token);
			if (!activityTypesResponse.success) {
				toast({
					variant: "destructive",
					title: "Загрузка страницы",
					description: "Ошибка загрузки списка видов активности. Попробуйте позже",
				});
				return;
			}
			setShowData({ ...showData, activityTypes: activityTypesResponse.data });
		}
		fetchData();
	}, []);

	const tryCreateOrganization = async () => {
		data.user_id = user?.id;

		const orgCreateResponse = await createOrganization(data, token);
		if (!orgCreateResponse.success) {
			toast({
				variant: "destructive",
				title: "Создание организации",
				description: "Ошибка создания организации. Попробуйте позже",
			});
			return null;
		}
		return orgCreateResponse.data;
	};

	const tryLinkOrganization = async (organization_id: number) => {
		const linkData: OrganizationEmployeeFillable = {
			organization_id,
			user_id: user?.id,
		};

		const orgLinkResponse = await create(linkData, token);
		if (!orgLinkResponse.success) {
			toast({
				variant: "destructive",
				title: "Привязка к организации",
				description: "Ошибка привязки к организации. Попробуйте позже",
			});
			return null;
		}
		return orgLinkResponse.data;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const orgCreateResult = await tryCreateOrganization();
		if (!orgCreateResult) return;

		const orgLinkResult = await tryLinkOrganization(orgCreateResult.id);
		if (!orgLinkResult) return;

		toast({
			title: "Создание организации",
			description: "Организация успешно создана",
		});

		setOrganization(orgCreateResult);
		updateUser();
		router.push("/");
	};

	return (
		<section className={clsx("std-center", styles["organizations-create"])}>
			<h1 className={clsx("std-h1", styles["organizations-create__title"])}>
				Создание организации
			</h1>
			<form className={clsx(styles["organizations-create__form"])} onSubmit={handleSubmit}>
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
					className={clsx("std-button", styles["organizations-create__button"])}
				>
					Создать
				</Button>
			</form>
		</section>
	);
};
