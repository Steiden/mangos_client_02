"use client";

import clsx from "clsx";
import styles from "./OrganizationsCreate.module.scss";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { useEffect, useState } from "react";
import { create as createOrganization, OrganizationFillable } from "@/entities/Organization";
import { useLocalStorage } from "usehooks-ts";
import { useToast } from "@/shared/hooks/use-toast";
import { MangosSelect } from "@/shared/components/ui/MangosSelect";
import { ActivityType, getList } from "@/entities/Organization/ActivityType";
import { useOrganizationContext, useUserContext } from "@/shared/context";
import { create } from "@/entities/Organization/OrganizationEmployee/api";
import { OrganizationEmployeeFillable } from "@/entities/Organization/OrganizationEmployee";
import { useRouter } from "next/navigation";

const fields: React.InputHTMLAttributes<HTMLInputElement>[] = [
	{
		type: "text",
		id: "full_name",
		name: "full_name",
		placeholder: "Полное название организации",
	},
	{
		type: "text",
		id: "name",
		name: "name",
		placeholder: "Название организации",
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
];

export const OrganizationsCreate = () => {
	const router = useRouter();
	const { setOrganization } = useOrganizationContext();
	const { user, updateUser } = useUserContext();
	const { toast } = useToast();
	const [token] = useLocalStorage("token", "");

	const [data, setData] = useState<OrganizationFillable>({
		full_name: "",
		name: "",
		address: "",
		phone: "",
		activity_type_id: 0,
		user_id: 0,
	});
	const [activityTypes, setActivtyTypes] = useState<ActivityType[]>([]);

	useEffect(() => {
		if(user) data.user_id = user.id;
	}, [user]);

	useEffect(() => {
		async function getActivityTypes() {
			const activityTypesResponse = await getList(token);
			if (!activityTypesResponse.success) {
				toast({
					variant: "destructive",
					title: "Загрузка страницы",
					description: "Ошибка загрузки списка видов активности. Попробуйте позже",
				});
				return;
			}
			setActivtyTypes(activityTypesResponse.data);
		}
		getActivityTypes();
	}, []);

	const tryCreateOrganization = async () => {
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
		}

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
						<Input
							{...field}
							placeholder=""
							onChange={(e) =>
								setData({ ...data, [field.name || ""]: e.target.value })
							}
						/>
					</div>
				))}

				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Label htmlFor="activity_type_id">Тип активности</Label>
					<MangosSelect
						placeholder="Выберите тип активности"
						items={activityTypes.map((item) => ({
							label: item.name,
							value: item.id.toString(),
						}))}
						onChange={(value) => setData({ ...data, activity_type_id: +value })}
					/>
				</div>

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
