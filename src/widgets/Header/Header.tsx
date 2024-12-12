import { SidebarTrigger } from "@/shared/components/ui/sidebar";
import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={styles.header}>
			<SidebarTrigger />
		</header>
	);
};
