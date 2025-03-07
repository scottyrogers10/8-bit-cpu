import { hexToInt, intToHex } from "#library/utils/converters";

export default {
	"8D": {
		bytes: 3,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));

			memory.set(hexToInt(address), state.a);
			state.pc += 3;
		},
		mode: "absolute",
		name: "STA",
	},
};
