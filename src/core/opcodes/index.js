import { hexToInt, intToHex } from "#library/utils/converters";

export default {
	"00": {
		bytes: 1,
		execute: () => {},
		mode: "implied",
		name: "BRK",
	},
	"4C": {
		bytes: 3,
		execute: ({ memory, state }) => {
			const address = intToHex(memory.get(state.pc + 2)) + intToHex(memory.get(state.pc + 1));

			state.pc = hexToInt(address);
		},
		mode: "absolute",
		name: "JMP",
	},
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
	"18": {
		bytes: 1,
		execute: ({ state, statusFlags }) => {
			statusFlags.carry = 0;
			state.pc += 1;
		},
		mode: "implied",
		name: "CLC",
	},
	"38": {
		bytes: 1,
		execute: ({ state, statusFlags }) => {
			statusFlags.carry = 1;
			state.pc += 1;
		},
		mode: "implied",
		name: "SEC",
	},
	"69": {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const val = state.a + memory.get(state.pc + 1) + statusFlags.carry;

			if (val > 255) {
				state.a = val - 256;
				statusFlags.carry = 1;
			} else {
				state.a = val;
				statusFlags.carry = 0;
			}

			statusFlags.zero = state.a === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "ADC",
	},
	"A0": {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			state.y = memory.get(state.pc + 1);
			statusFlags.zero = state.y === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "LDY",
	},
	"A2": {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			state.x = memory.get(state.pc + 1);
			statusFlags.zero = state.x === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "LDX",
	},
	"A9": {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			state.a = memory.get(state.pc + 1);
			statusFlags.zero = state.a === 0 ? 1 : 0;
			state.pc += 2;
		},
		mode: "immediate",
		name: "LDA",
	},
	"D0": {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const offset = memory.get(state.pc + 1);

			if (statusFlags.zero === 0) {
				state.pc += offset > 127 ? offset - 256 : offset;
			}

			state.pc += 2;
		},
		mode: "relative",
		name: "BNE",
	},
	"EA": {
		bytes: 1,
		execute: ({ state }) => {
			state.pc += 1;
		},
		mode: "implied",
		name: "NOP",
	},
	"F0": {
		bytes: 2,
		execute: ({ memory, state, statusFlags }) => {
			const offset = memory.get(state.pc + 1);

			if (statusFlags.zero === 1) {
				state.pc += offset > 127 ? offset - 256 : offset;
			}

			state.pc += 2;
		},
		mode: "relative",
		name: "BEQ",
	},
};
