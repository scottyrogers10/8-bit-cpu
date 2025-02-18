import { hexToInt, intToHex } from "#library/utils/converters";

export default {
	"00": {
		bytes: 1,
		cycles: 7,
		execute: ({ state }) => {
			state.pc -= 1; // BRK loop
		},
		mode: "implied",
		name: "BRK",
	},
	"8C": {
		bytes: 3,
		cycles: 4,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));
			memory.set(hexToInt(address), state.y);
		},
		mode: "absolute",
		name: "STY",
	},
	"8D": {
		bytes: 3,
		cycles: 4,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));
			memory.set(hexToInt(address), state.a);
		},
		mode: "absolute",
		name: "STA",
	},
	"8E": {
		bytes: 3,
		cycles: 4,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));
			memory.set(hexToInt(address), state.x);
		},
		mode: "absolute",
		name: "STX",
	},
	"A0": {
		bytes: 2,
		cycles: 2,
		execute: ({ memory, state }) => {
			state.y = memory.get(state.pc + 1);
		},
		mode: "immediate",
		name: "LDY",
	},
	"A2": {
		bytes: 2,
		cycles: 2,
		execute: ({ memory, state }) => {
			state.x = memory.get(state.pc + 1);
		},
		mode: "immediate",
		name: "LDX",
	},
	"A9": {
		bytes: 2,
		cycles: 2,
		execute: ({ memory, state }) => {
			state.a = memory.get(state.pc + 1);
		},
		mode: "immediate",
		name: "LDA",
	},
};
