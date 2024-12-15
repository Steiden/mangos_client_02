"use client";

import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useProjectContext } from "@/shared/context";
import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export const Header = () => {
	const router = useRouter();
	const { project } = useProjectContext();

	return (
		<header className={styles["header"]}>
			<div className={styles["header__left"]}>
				<SidebarTrigger />
				<Link href="/">
					<Image src="/logo_alt.svg" width={30} height={30} alt="logo" />
				</Link>
				{project && (
					<div className="ml-3 text-lg">
						<Button
							variant="link"
							className="std-link"
							onClick={() => router.push("/projects")}
						>
							Проект
						</Button>
						<span>&nbsp;-&nbsp;</span>
						<Button
							variant="link"
							className="std-link"
							onClick={() => router.push(`/projects/${project.id}`)}
						>
							{project.name}
						</Button>
					</div>
				)}
			</div>
		</header>
	);
};
