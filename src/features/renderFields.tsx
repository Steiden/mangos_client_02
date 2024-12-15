"use client";

import { DatePicker } from "@/shared/components/ui/DatePicker";
import { Input } from "@/shared/components/ui/input";
import { MangosSelect } from "@/shared/components/ui/MangosSelect";
import { FormField } from "@/shared/types/form";

export const renderField = (
	field: FormField,
	onChange: (value: any) => void,
	additionalData: Record<string, any>
) => {
	return (
		<>
			{field.type === "date" ? (
				<DatePicker {...field} onChange={(e) => onChange(e)} />
			) : field.type === "combobox" ? (
				<MangosSelect
					items={additionalData[field.data_name]?.map((item: any) => ({
						label: item.name,
						value: item.id.toString(),
					})) || []}
					onChange={(value) => onChange(+value)}
				/>
			) : (
				<Input {...field} placeholder="" onChange={(e) => onChange(e.target.value)} />
			)}
		</>
	);
};
