"use client";

import styles from "./UserBadge.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import clsx from "clsx";
import { User, UserFillable, UserShort } from "@/entities/User";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	type?: "avatar" | "name";
	user: User | UserShort | UserFillable;
	direction?: "left" | "right";
	size?: "small" | "medium" | "large";
	isHover?: boolean;
};

export const UserBadge = ({
	type = "name",
	user,
	direction = "left",
	size = "small",
	isHover = false,
	className,
	...rest
}: Props) => {
	return (
		<div
			className={clsx(
				isHover &&
					"px-3 py-0.5 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
				styles["user-badge"],
				styles[`user-badge--${direction}`],
				styles[`user-badge--${size}`],
				className
			)}
			{...rest}
		>
			<Avatar className={clsx(styles["user-badge__avatar"])}>
				<AvatarImage
					src={user?.avatar || ""}
					alt="avatar"
					className={clsx(styles["user-badge__image"])}
				/>
				<AvatarFallback className={clsx(styles["user-badge__fallback"])}>
					{user?.login?.[0].toUpperCase()}
				</AvatarFallback>
			</Avatar>
			{type === "name" && user?.second_name && user?.first_name && (
				<span className={clsx(styles["user-badge__name"])}>
					{user?.second_name} {user?.first_name}
				</span>
			)}
		</div>
	);
};
