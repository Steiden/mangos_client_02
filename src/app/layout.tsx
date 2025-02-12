import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./main.scss";
import "./favicon.ico";
import { MangosContextProvider } from "@/shared/context";
import { Toaster } from "@/shared/components/ui/toaster";
import { Header } from "@/widgets/Header/Header";
import { SidebarProvider } from "@/shared/components/ui/sidebar";
import { AppSidebar } from "@/widgets/AppSidebar/AppSidebar";
import { Mangos } from "@/app/Mangos";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Mangos",
	description: "Веб-приложение для управления задачами и проектами организации",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<MangosContextProvider>
					<SidebarProvider>
						<AppSidebar />
						<div className="flex flex-col flex-grow">
							<Header />
							<main>{children}</main>
							<Mangos />
						</div>
					</SidebarProvider>
				</MangosContextProvider>
				<Toaster />
			</body>
		</html>
	);
}
