import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

type SelectItemType = {
	label: string;
	value: string;
};

type Props = {
	placeholder?: string;
	items: SelectItemType[];
	selectedItem?: SelectItemType;
	onChange?: (value: string) => any;
}

export const MangosSelect = ({ placeholder, items, selectedItem, onChange }: Props) => {
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className="w-[100%]">
				<SelectValue placeholder={selectedItem?.label || placeholder} />
			</SelectTrigger>
			<SelectContent>
				{items.map((item) => (
					<SelectItem key={item.value} value={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
