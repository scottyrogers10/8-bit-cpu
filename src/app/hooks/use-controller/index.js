import { cpu } from "#core";
import store from "#store";

export default () => {
	const execute = () => {
		const prg = store.getState("text-editor").prg;
		cpu.init(prg.replace(/\n/g, " ").replace(/\s+/g, " ").trim());
	};

	return { handlers: { execute } };
};
