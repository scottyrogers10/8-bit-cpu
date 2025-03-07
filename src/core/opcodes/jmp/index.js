import { hexToInt, intToHex } from "#library/utils/converters";

export default {
	"4C": {
		bytes: 3,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));

			state.pc = hexToInt(address);
		},
		mode: "absolute",
		name: "JMP",
	},
};
