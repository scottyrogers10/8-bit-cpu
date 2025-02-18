import { useState } from "react";
import store from "#store";

export default () => {
	const [value, setValue] = useState("");

	const change = (event) => {
		const regex = /^[A-Fa-f0-9\s\n]*$/;
		const value = event.target.value;

		if (regex.test(value)) {
			setValue(value);
			store.dispatch("text-editor.merge", { prg: value });
		}
	};

	return { handlers: { change }, state: { value } };
};
