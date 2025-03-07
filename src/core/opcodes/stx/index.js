import { hexToInt, intToHex } from "#library/utils/converters";

export default {
	"8E": {
		bytes: 3,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));

			memory.set(hexToInt(address), state.x);
			state.pc += 3;
		},
		mode: "absolute",
		name: "STX",
	},
};
