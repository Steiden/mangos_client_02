"use client";

import styles from "../Auth.module.scss";
import clsx from "clsx";
import { AuthContainer } from "../ui/AuthContainer";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { useUserContext } from "@/shared/context";
import { register } from "@/entities/Auth/api";
import { useLocalStorage } from 'usehooks-ts'
import { useRouter } from "next/navigation";
import { RegistrationData } from "@/entities/Auth/types";
import { useToast } from "@/shared/hooks/use-toast";

const formInfo: React.InputHTMLAttributes<HTMLInputElement>[] = [
    {
        type: "email",
        id: "email",
        placeholder: "E-mail",
        autoComplete: "email",
        name: "email",
    },
    {
        type: "text",
        id: "login",
        placeholder: "Логин",
        autoComplete: "login",
        name: "login",
    },
    {
        type: "password",
        id: "password",
        placeholder: "Пароль",
        autoComplete: "current-password",
        name: "password",
    },
];

export const Register = () => {
    const { toast } = useToast();
    const router = useRouter();

    const [data, setData] = useState<RegistrationData>({
        email: "",
        login: "",
        password: "",
    });

    const tryRegister = async () => {
        const registerResponse = await register(data);
        if(!registerResponse.data.success) return false;
        return true;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const registerResult = await tryRegister();
        if(!registerResult) {
            toast({ title: "Регистрация", description: "Ошибка при регистрации. Попробуйте позже" });
            return;
        }

        toast({ title: "Регистрация", description: "Вы успешно зарегистрировались" });
        router.push("/auth/login");
    }

	return (
		<AuthContainer>
			<form className={clsx("std-container", styles["auth__form"])} onSubmit={handleSubmit}>
                <h1 className="std-h1">Регистрация</h1>
				<div className={styles["auth__form-fields"]}>
                    {formInfo.map((field) => {
                        return (
                            <div className="grid w-full max-w-sm items-center gap-1.5" key={field.id}>
                                <Label htmlFor={field.name}>{field.placeholder}</Label>
                                <Input {...field} onChange={(e) => setData({ ...data, [field.name || ""]: e.target.value })} />
                            </div>
                        );
                    })}
                </div>
                <Button type="submit" variant="outline" className="std-button">Зарегистрироваться</Button>
                <span>Уже есть аккаунт? <Button type="button" variant="link" className="p-0" onClick={() => router.push("/auth/login")}>Войти</Button></span>
			</form>
		</AuthContainer>
	);
};
