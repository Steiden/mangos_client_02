"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";


type Props = {
	value?: Date | null;
	onChange: (value: string) => void;
}

export function DatePicker({ value, onChange }: Props) {
	const [date, setDate] = React.useState<Date | null | undefined>(value);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[240px] justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon />
					{date ? format(date, "PPP") : <span>Выберите дату</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar mode="single" selected={date || undefined} onSelect={(value) => {
					setDate(value || null);
					onChange(value ? format(value, "yyyy-MM-dd") : "");
				}} initialFocus />
			</PopoverContent>
		</Popover>
	);
}
