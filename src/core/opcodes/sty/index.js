import { hexToInt, intToHex } from "#library/utils/converters";

export default {
	"8C": {
		bytes: 3,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));

			memory.set(hexToInt(address), state.y);
			state.pc += 3;
		},
		mode: "absolute",
		name: "STY",
	},
};
