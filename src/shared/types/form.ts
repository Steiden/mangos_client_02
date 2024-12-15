// enum InputTypes {
// 	TEXT = "text",
// 	COMBOBOX = "combobox",
// 	CHECKBOX = "checkbox",
//     NUMBER = "number",
//     DATE = "date",
//     FILE = "file",
//     TEXTAREA = "textarea",
// }

export type FormField =
	| {
			type: "combobox";
			id: string;
			name: string;
			placeholder: string;
			data_name: string;
	  }
	| {
			type: "text" | "date" | "tel" | "password" | "email";
			id: string;
			name: string;
			placeholder: string;
	  };
