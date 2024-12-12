"use client";

import styles from "../Auth.module.scss";
import clsx from "clsx";
import { AuthContainer } from "../ui/AuthContainer";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { login } from "@/entities/Auth";
import { AuthorizationData } from "@/entities/Auth/types";
import { useUserContext } from "@/shared/context";
import { me } from "@/entities/Auth/api";
import { useLocalStorage } from 'usehooks-ts'
import { LucideAlignHorizontalDistributeStart } from "lucide-react";
import { useToast } from "@/shared/hooks/use-toast";
import { useRouter } from "next/navigation";

const formInfo: React.InputHTMLAttributes<HTMLInputElement>[] = [
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

export const Login = () => {
    const { toast } = useToast();
    const router = useRouter();

    const { setUser } = useUserContext();
    const [token, setToken] = useLocalStorage("token", "");
    const [data, setData] = useState<AuthorizationData>({
        login: "",
        password: "",
    });

    const tryLogin = async () => {
        const loginResponse = await login(data);
        if(!loginResponse.data.success) return false;
        setToken(loginResponse.data.data.token);
        return true;
    }

    const tryMe = async () => {
        const meResponse = await me(token);
        if(!meResponse.data.success) return false;
        setUser(meResponse.data.data);
        return true;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const loginResult = await tryLogin();
        if(!loginResult) {
            toast({ title: "Вход", description: "Вы ввели неправильный логин или пароль" });
            return;
        }

        const meResult = await tryMe();
        if(!meResult) {
            toast({ title: "Вход", description: "Ошибка при авторизации. Попробуйте позже" });
            return;
        }

        toast({ title: "Вход", description: "Вы успешно авторизованы" });
        router.push("/");
    }

	return (
		<AuthContainer>
			<form className={clsx("std-container", styles["auth__form"])} onSubmit={handleSubmit}>
                <h1 className="std-h1">Вход</h1>
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
                <Button type="submit" variant="outline" className="std-button">Войти</Button>
                <Button type="button" variant="link">Забыли пароль?</Button>
			</form>
		</AuthContainer>
	);
};
