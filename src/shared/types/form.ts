type Field = {
	type: "combobox" | "text" | "date" | "tel" | "password" | "email" | "textarea";
	id: string;
	name: string;
	placeholder: string;
	value?: any;
};

export type FormField = Field &
	(
		| {
				type: "combobox";
				data_name: string;
		  }
		| {
				type: "text" | "date" | "tel" | "password" | "email" | "textarea";
		  }
	);
