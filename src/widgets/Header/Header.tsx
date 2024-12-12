import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
	return (
		<header className={styles["header"]}>
			<div className={styles["header__left"]}>
				<SidebarTrigger />
				<Link href="/">
					<Image src="/logo_alt.svg" width={30} height={30} alt="logo" />
				</Link>
			</div>
		</header>
	);
};
