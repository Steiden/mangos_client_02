"use client";

import { useOrganizationContext } from "@/shared/context";
import { UserMemberCard } from "@/widgets/UserMemberCard/UserMemberCard";
import clsx from "clsx";

export const OrganizationMembers = () => {
    const { organization } = useOrganizationContext();

	return (
		<section className={clsx("std-container")}>
			<div>
				<h1 className={clsx("std-h1")}>Участники</h1>
				<p>Список сотрудников организации {organization?.name}</p>
			</div>

			<div className={clsx("std-container__content")}>
				<div className={clsx("std-container")}>
					{organization?.members?.map((member) => {
						return <UserMemberCard member={member} key={member.id} />;
					})}
				</div>
			</div>
		</section>
	);
};
