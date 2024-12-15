"use client";

import styles from "./UserBadge.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import clsx from "clsx";
import { User, UserFillable, UserShort } from "@/entities/User";

type Props = {
	type: "avatar" | "name";
	user: User | UserShort | UserFillable;
	direction?: "left" | "right";
};

export const UserBadge = ({ type, user }: Props) => {

	return (
		<div className={clsx(styles["user-badge"], styles[`user-badge--${type}`])}>
			<Avatar>
				<AvatarImage src={user?.avatar || ""} alt="avatar" />
				<AvatarFallback>{user?.login?.split("")[0].toUpperCase()}</AvatarFallback>
			</Avatar>
			{type === "name" && (
				<span>
					{user?.second_name} {user?.first_name}
				</span>
			)}
		</div>
	);
};
