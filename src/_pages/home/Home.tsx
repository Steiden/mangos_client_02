"use client";

import clsx from "clsx";
import Link from "next/link";

export const Home = () => {

	return (
		<section className={clsx("std-center")}>
			<h1 className="std-h1">Добро пожаловать в Mangos!</h1>
            <p>Начните работу над проектами или создайте свою первую организацию</p>
		</section>
	);
};
