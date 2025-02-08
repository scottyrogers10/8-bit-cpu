import { useState } from "react";

export default () => {
	const [value, setValue] = useState("");

	const change = (event) => {
		setValue(event.target.value);
	};

	return { handlers: { change }, state: { value } };
};
