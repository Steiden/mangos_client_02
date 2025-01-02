"use client";

import { Separator } from "@/shared/components/ui/separator";
import styles from "./AuthContainer.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { useIsTablet } from "@/shared/hooks/use-mobile";

export const AuthContainer = ({ children }: { children?: React.ReactNode }) => {
	const isTablet = useIsTablet();

	return (
		<section className={clsx("std-container", styles["auth-container"])}>
			{!isTablet && (
				<>
					<div className={clsx(styles["auth-container__logo-container"])}>
						<Image
							src="/logo_alt.svg"
							alt="logo"
							width={200}
							height={200}
							className={clsx(styles["auth-container__logo"])}
						/>
					</div>
					<Separator
						orientation={isTablet ? "horizontal" : "vertical"}
						decorative={true}
						color="text.primary"
						className={clsx(styles["auth-container__separator"])}
					/>
				</>
			)}
			<div className={clsx(styles["auth-container__content"])}>{children}</div>
		</section>
	);
};
