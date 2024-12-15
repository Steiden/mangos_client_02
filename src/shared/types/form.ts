export type FormField =
	| {
			type: "combobox";
			id: string;
			name: string;
			placeholder: string;
			data_name: string;
			value?: any;
	  }
	| {
			type: "text" | "date" | "tel" | "password" | "email";
			id: string;
			name: string;
			placeholder: string;
			value?: any;
	  };
