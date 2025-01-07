"use client";

import clsx from "clsx";
import styles from "./OrganizationAsk.module.scss";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export const OrganizationsAsk = () => {
    const router = useRouter();

	return (
		<section className={clsx("std-container", styles["organizations-ask"])}>
			<h1 className={clsx("std-h1", styles["organizations-ask__title"])}>
				Вы еще не состоите ни в одной организации
			</h1>
			<p className={clsx("std-p", styles["organizations-ask__text"])}>
				Создайте свою первую организацию и начните работу над проектами
			</p>
			<Button
                size="lg"
				variant="outline"
				className={clsx("std-button", styles["organizations-ask__button"])}
                onClick={() => router.push("/organizations/create")}
			>
				Создать организацию
			</Button>
		</section>
	);
};
